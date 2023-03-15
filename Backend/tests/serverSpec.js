const supertest = require('supertest');

const app = require('../server');

const request = supertest(app);

describe('this is the suite for the routes testing', () => {
  /*
  this suite tests the get requests off the server or app
  which are in the meanwhile "/users/" and "/users/login"
 */
  describe('this is the get requests', () => {
    /*
     this is the get request "users" test and it doesn't require 
    any parameters to be passed to the request body 
    */
    it('this is the /users/ test', async () => {
      const response = await request.get('/users/');
      expect(response.status).toBe(200);
    });
    /*   
    this is the get request "users" test and it requires 
     the email and password to be passed the request body
     */
    it('this is the /users/login test', async () => {
      const response = await request.get('/users/login').send({
        email: 'zzz@xXXXXXXXXX.com',
        password: 'zzzz',
      });
      expect(response.status).toBe(200);
    });
    fit("this is for the edit users test", async() => {
      const response = await request.get('/users/edit').send({
        userId: 1 
      });
      expect(response.status).toBe(200);
    
    })
  });
  // the is the post requests test which is the "/users/" at the moment
  describe('this is the post requests', () => {
    /*
     the post '/users/' request requires a unique email and  to be passed
     the other parameters{firstName,lastName,password} doesn't need to be unique
     the {dob,gender,mobileNumber} are optional and doesn't need to be passed
    in order for this test to pass you need to change the email every time you run it 
    */
    it('this is the /users/ test', async () => {
      const response = await request.post('/users/edit').send({
        firstName: 'zzzz',
        lastName: 'zzz',
        password: 'zzzz',
        email: 'zzz@xXXXXXXXXX.com',
        dob: '2222-2-2',
        gender: 'male',
        mobilenumber: '000000000000000000',
      });
      expect(response.status).toBe(201);
    });
  });
});
