import { DynamoDBCLient } from "@aws-sdk/client-dynamodb";
const REGION = "use-east-2";
const ddbClient = new DynamoDBCLient({ region: REGION });
export { ddbClient };
