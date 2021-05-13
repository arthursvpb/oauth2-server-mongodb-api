import request from 'supertest';
import app from '../server';

describe('Appointment', () => {
  it('should be able to  display public homepage.', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
  });
});
