import { httpServer, liveData } from './app';
import './app/shared/lib/webSocket';
import {messageBroker} from './app/shared/lib/messageBroker';
import { AckOrNack, SubscriptionSession } from 'rascal';

messageBroker.sub().then((subscriptions) => {
	(subscriptions as SubscriptionSession[]).forEach((subscription) => {		
		subscription.on('message', (message: any, content: any, ackOrNack: AckOrNack) => {
			ackOrNack();
			Object.entries(Object.fromEntries(liveData.sockets))
				.filter(([, v]) => content.keys.includes(v.data.profile._id.toString()))
				.map(([k, v]) => {
					return v.emit(content.type, content.payload);
				});
		});
	});
});

const port = 3001;

httpServer.listen(process.env.PORT || port, () => {
	console.log(
		`🚀 Server is running on http://localhost:${process.env.PORT || port}`
	);
	console.log('ENV VARIABLES:');
	console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
	console.log(`PORT: ${process.env.PORT}`);
	console.log(`MONGO_URL: ${process.env.MONGO_URL}`);
});


