import authAxios from '../api/request';

test('should return axios request headers', () => {
  expect(authAxios().defaults.headers['Content-Type']).toEqual('application/x-www-form-urlencoded');
});
