import Rascal from 'rascal';
import { NextFunction, Request, Response } from 'express';
import  defaultConfig   from '../../../config/config.json';

defaultConfig.vhosts['/'].connection.url = process.env.AMQP_URL || defaultConfig.vhosts['/'].connection.url;
const config = Rascal.withDefaultConfig(defaultConfig);
const publisher = Object.keys(defaultConfig.vhosts['/'].publications);
// const consumer = Object.keys(defaultConfig.vhosts['/'].subscriptions);

class MessageBroker{  
	pub(req: Request, res: Response, next: NextFunction){
		Rascal.Broker.create(config, (err, broker) => {
			if(err) next(err);
			req.publish = async (type: string, keys: string, value: unknown) =>  {
				const msg = {
					type,
					payload: value,
					keys
				};

				const key = publisher.find(name => name === type);

				broker.publish(String(key), msg, (err, publication) => {
					if(err) throw err;
					publication
						.on('error', (err) => console.log(err))
						.on('success', (messageId) => {
							console.log('Message id was: ', messageId);
							console.log('publish ok');
						});
				});
			};
			next();
		});
	}

	sub() {
		return new Promise((resolve, reject) => {
			Rascal.Broker.create(config, (err, broker) => {
				if (err) reject(err);
				broker.subscribeAll((err, subscriptions) => {
					if (err) reject(err);
					subscriptions.forEach((subscription) => {
						subscription
							.on('error', (err) => {
								console.error('Subscriber error', err);
							})
							.on('cancelled', (err) => {
								reject(err);
							});
					});
					resolve(subscriptions);
				});
			});
		});
	}
}

export const messageBroker = new MessageBroker();