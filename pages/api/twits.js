import {mongoDBClient} from "../../aws.config";
import {GetItemCommand, QueryCommand} from "@aws-sdk/client-dynamodb";
import {GetCommand} from "@aws-sdk/lib-dynamodb";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const {Item} = await mongoDBClient.send(
            new QueryCommand({
                    KeyConditionExpression: "Season = :s and Episode > :e",
                    FilterExpression: "contains (Subtitle, :topic)",
                    ExpressionAttributeValues: {
                        ":s": {N: "1"},
                        ":e": {N: "2"},
                        ":topic": {S: "SubTitle"},
                    },
                    ProjectionExpression: "Episode, Title, Subtitle",
                    TableName: "mirandaz",
                }
            ));

        return res.status(200).json(Item);
    }
}
