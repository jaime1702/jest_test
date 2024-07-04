import request from 'config/request';
import validate from 'helpers/validate';
import userSchema from 'schemas/user';

describe('GraphQL API', () => {
  test('Get a User', async () => {
    const query = `
      query {
        user(id: 1) {
          id
          username
          email
          address {
            geo {
              lat
              lng
            }
          }
        }
      }
    `;

    const { status, body, headers } = await request
      .post('')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send({ query });

    expect(headers['content-type']).toContain('application/json');
    expect(status).toBe(200);
    expect(body).toMatchObject({
      data: {
        user: {
          id: '1',
          username: 'Bret',
          email: 'Sincere@april.biz',
          address: {
            geo: {
              lat: expect.any(Number),
              lng: expect.any(Number),
            },
          },
        },
      },
    });
    expect(validate.jsonSchema(body, userSchema)).toBeTrue();
  });
});
