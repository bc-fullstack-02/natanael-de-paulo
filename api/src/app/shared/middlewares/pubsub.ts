import { NextFunction, Request, Response } from 'express';
import Rascal from 'rascal';
import  defaultConfig   from '../../config/config.json';


const config = Rascal.withDefaultConfig(defaultConfig);
const publisher = Object.keys(defaultConfig.vhosts['/'].publications);
const consumer = Object.keys(defaultConfig.vhosts['/'].subscriptions);

// interface PayLoad {
//   sub: string;
// }

const pub = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	Rascal.Broker.create(Rascal.withDefaultConfig(config), (err, broker) => {
		if(err) next(err);

		req.publish = (type: any, keys: any, value: any) => new Promise((resolve, reject) => {
			const msg = {
				type,
				payload: value,
				keys
			};
			
			broker.publish(publisher as any, msg, (err, publication) => {
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
	.then((broker : unknown) => new Promise((resolve, reject) => broker.subscribe(consumer, (err, subscription) => {
		if(err) reject(err);
		resolve(subscription);
	})))
	.then(subscription => {
		subscription.on('error', (err) => {throw err;});
		subscription.on('cancel', (err) => {throw err;});
	});


export {pub, sub};