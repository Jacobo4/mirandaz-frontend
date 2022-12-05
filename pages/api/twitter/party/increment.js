import {mongoDBClient} from "../../../../aws.config";
import {UpdateCommand} from "@aws-sdk/lib-dynamodb";

export default async function handler(req, res) {

    if (req.method === 'POST') {
        const {partyId, attendants} = req.body;

        console.log("partyId: ", partyId);

        const params = {
            TableName: "fiesta",
            Key: {
                party_id: parseInt(partyId),
            },
            UpdateExpression: 'set asistentes = :c',
            ExpressionAttributeValues: {
                ':c': parseInt(attendants)
            },
            ReturnValues: 'ALL_NEW'
        }

        const {Item} = await mongoDBClient.send(new UpdateCommand(params));

        return res.status(200).json(Item);
    }
}