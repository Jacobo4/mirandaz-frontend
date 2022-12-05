import {mongoDBClient} from "../../../../aws.config";
import {ScanCommand} from "@aws-sdk/lib-dynamodb";
import {QueryCommand} from "@aws-sdk/client-dynamodb";

export default async function handler(req, res) {

    const {listPartiesId} = req.query;

    if (req.method === 'GET') {
        const params = {
            TableName: "fiesta",
            FilterExpression: "fiesta_list = :f",
            ExpressionAttributeValues: {
                ":f": parseInt(listPartiesId),
            },
        };
        const {Items} = await mongoDBClient.send(new ScanCommand(params));
        return res.status(200).json(Items);
    }

}
