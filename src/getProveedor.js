'use strict';
const { getProveedorById } = require('../helpers/dynamodbHelper');

module.exports.handler = async (event) => {
  await getProveedorById();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

};
