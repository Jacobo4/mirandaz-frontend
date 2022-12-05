import {mongoDBClient} from "../../../../aws.config";
import {GetCommand} from "@aws-sdk/lib-dynamodb";

export default async function handler(req, res) {
    const {partyId} = req.query;



    if (req.method === 'GET') {
        const params = {
            TableName: "fiesta",
            Key: {
                party_id: parseInt(partyId),
            }
        }

        const {Item} = await mongoDBClient.send(new GetCommand(params));

        return res.status(200).json(Item);
    }

}
