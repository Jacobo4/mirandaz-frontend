import {mongoDBClient} from "../../../../aws.config";
import {ScanCommand} from "@aws-sdk/lib-dynamodb";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const params = {
            TableName: "event_center",
            Limit: 10,
        };
        const {Items} = await mongoDBClient.send(new ScanCommand(params));
        return res.status(200).json(Items);
    }
}
