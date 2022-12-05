import {mongoDBClient} from "../../../../aws.config";
import {GetCommand} from "@aws-sdk/lib-dynamodb";

export default async function handler(req, res) {
    const {eventCenterId} = req.query;

    if (req.method === 'GET') {
        const params = {
            TableName: "event_center",
            Key: {
                event_center_id: parseInt(eventCenterId),
            }
        }

        const {Item} = await mongoDBClient.send(new GetCommand(params));

        return res.status(200).json(Item);
    }
}
