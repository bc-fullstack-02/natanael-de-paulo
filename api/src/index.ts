import { app } from './app';

const port = 3001;

app.listen(process.env.PORT || port, () => console.log(`🚀 Server is running on http://localhost:${process.env.PORT || port}`));

console.log('ENV VARIABLES:');
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`PORT: ${process.env.PORT}`);
console.log(`MONGODB: ${process.env.MONGODB}`);
  