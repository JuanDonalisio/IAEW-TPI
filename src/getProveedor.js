'use strict';
const { getProveedorById } = require('../helpers/dynamodbHelper');

module.exports.handler = async (event) => {
  try {
    const id = event.pathParameters.proveedor_id;
    if (!id) {
      let allProveedores = await getProveedorById();
      return { statusCode: 200, body: JSON.stringify(allProveedores)};
    }

    let proveedor = await getProveedorById(id);
    return { statusCode: 200, body: JSON.stringify({message: 'Go Serverless v1.0! Your function executed successfully!'})};
  } catch (error) {
    console.log(error)
    return { statusCode: 409, body: JSON.stringify({message: error.message})};
  }
};
