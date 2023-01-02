import { NextFunction, Request, Response } from 'express';
import Rascal, { SubscriptionSession } from 'rascal';
import  defaultConfig   from '../../config/config.json';

defaultConfig.vhosts['/'].connection.url = process.env.AMQP_URL || defaultConfig.vhosts['/'].connection.url;
const config = Rascal.withDefaultConfig(defaultConfig);
const publisher = Object.keys(defaultConfig.vhosts['/'].publications);
const consumer = Object.keys(defaultConfig.vhosts['/'].subscriptions);

// interface PayLoad {
//   sub: string;
// }

//type: post
//keys: pra que vamos publicar
//value: payload da nagensagem, o post

const pub = (req: Request, res: Response, next: NextFunction) => {
	Rascal.Broker.create(Rascal.withDefaultConfig(config), (err, broker) => {
		if(err) next(err);

		req.publish = (type: string, keys: string, value: any) => new Promise((resolve, reject) => {

			const msg = {
				type,
				payload: value,
				keys
			};
			
			broker.publish(String(publisher), msg, (err, publication) => {
				if(err) reject(err);
				publication.on('error', reject);
				console.log('publish ok');
				resolve(value);
			});
		});
		next();
	});
};

const sub = () => Promise.resolve(Rascal.withDefaultConfig(config))
	.then((conf) => new Promise((resolve, reject) => Rascal.Broker.create(conf, (err, broker) => {
		if(err) {
			if(err.message === 'ECONNREFUSED') {
				console.error(err);
				process.exit();
			} else {
				reject(err);
			}
		}
		resolve(broker);
	})))
	.then((broker) => new Promise((resolve, reject) => (broker as Rascal.Broker).subscribe(String(consumer), (err, subscription) => {
		if(err) reject(err);
		resolve(subscription);
	})))
	.then((subscription: any ) => {
		subscription.on('error', (err: Error) => {throw err;});
		subscription.on('cancel', (err: Error) => {throw err;});

		return subscription;
	}) as Promise<SubscriptionSession>;


export {pub, sub};