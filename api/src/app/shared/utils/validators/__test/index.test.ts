import { validate } from '../index';

test('test validade method required is valid', () => {
	const example = 'Example';
	expect(validate.required(example, 'Example')).toBeTruthy();
});

// test('test validade method required', async () => {
// 	expect( await validate.userIsRegistered('Test2')).toBeTruthy();
// });