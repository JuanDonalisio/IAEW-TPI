const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb");
const { dynamoDBConfig } = require(process.env.FILE_CONFIG);
const docClient = new DynamoDBClient(dynamoDBConfig);

const getProveedorById = async function () {
  try {
    const params = {
        TableName: process.env.DYNAMODB_PROVEEDORES_TABLE,
        Key: {
          proveedor_id: { S : '1'},
        },
      };
    
      await docClient.send(new GetItemCommand(params))
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
    getProveedorById,
}