const userSchema = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $id: '#get-user',
  type: 'object',
  required: ['data'],
  additionalProperties: false,
  properties: {
    data: {
      type: 'object',
      required: ['user'],
      additionalProperties: false,
      properties: {
        user: {
          type: 'object',
          required: ['id', 'username', 'email', 'address'],
          additionalProperties: false,
          properties: {
            id: {
              type: 'string',
            },
            username: {
              type: 'string',
            },
            email: {
              type: 'string',
            },
            address: {
              type: 'object',
              required: ['geo'],
              additionalProperties: false,
              properties: {
                geo: {
                  type: 'object',
                  required: ['lat', 'lng'],
                  additionalProperties: false,
                  properties: {
                    lat: {
                      type: 'number',
                    },
                    lng: {
                      type: 'number',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
export default userSchema;
