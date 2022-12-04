// Create the DynamoDB service client module using ES6 syntax.
import {DynamoDBClient} from "@aws-sdk/client-dynamodb";
import {DynamoDBDocumentClient} from "@aws-sdk/lib-dynamodb";
// Create an Amazon DynamoDB service client object.
const ddbClient = new DynamoDBClient({
    credentials: {
        accessKeyId: process.env.MY_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.MY_APP_AWS_SECRET_ACCESS_KEY
    },
    region: process.env.MY_APP_AWS_REGION
});

const marshallOptions = {
    // Whether to automatically convert empty strings, blobs, and sets to `null`.
    convertEmptyValues: false, // false, by default.
    // Whether to remove undefined values while marshalling.
    removeUndefinedValues: true, // false, by default.
    // Whether to convert typeof object to map attribute.
    convertClassInstanceToMap: false, // false, by default.
};

const unmarshallOptions = {
    // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
    wrapNumbers: false, // false, by default.
};

// Create the DynamoDB document client.
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient, {
    marshallOptions,
    unmarshallOptions,
});

export {ddbDocClient as mongoDBClient};

