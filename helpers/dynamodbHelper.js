const AWS = require('aws-sdk');
AWS.config.update(process.env.FILE_CONFIG);
const docClient = new AWS.DynamoDB.DocumentClient();

const createNewProveedor = function () {
  const params = {
    TableName: process.env.DYNAMODB_PROVEEDORES_TABLE,
    Item: {
      id: '1',
      nombre: 'Ejemplo',
      descripcion: 'Este es un ejemplo de DynamoDB',
    },
  };

  docClient.put(params, (err, data) => {
    if (err) {
      console.error('Error al crear un elemento:', err);
    } else {
      console.log('Elemento creado con éxito:', data);
    }
  });
};

const getProveedorById = function () {
  const params = {
    TableName: process.env.DYNAMODB_PROVEEDORES_TABLE,
    Key: {
      id: '1', // La clave primaria del elemento que deseas leer
    },
  };

  docClient.get(params, (err, data) => {
    if (err) {
      console.error('Error al leer el elemento:', err);
    } else {
      console.log('Elemento leído con éxito:', data.Item);
    }
  });
};

const updateProveedor = function () {
  const params = {
    TableName: process.env.DYNAMODB_PROVEEDORES_TABLE,
    Key: {
      id: '1', // La clave primaria del elemento que deseas actualizar
    },
    UpdateExpression: 'set descripcion = :d',
    ExpressionAttributeValues: {
      ':d': 'Este es un ejemplo de actualización de DynamoDB',
    },
    ReturnValues: 'UPDATED_NEW',
  };

  docClient.update(params, (err, data) => {
    if (err) {
      console.error('Error al actualizar el elemento:', err);
    } else {
      console.log('Elemento actualizado con éxito:', data.Attributes);
    }
  });
};

const deleteProveedorById = function () {
  const params = {
    TableName: process.env.DYNAMODB_PROVEEDORES_TABLE,
    Key: {
      id: '1',
    },
  };

  docClient.delete(params, (err, data) => {
    if (err) {
      console.error('Error al eliminar el elemento:', err);
    } else {
      console.log('Elemento eliminado con éxito:', data);
    }
  });
};

	
module.exports = {
    getProveedorById,
    createNewProveedor,
    updateProveedor,
    deleteProveedorById
}