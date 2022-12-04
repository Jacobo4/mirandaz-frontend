import {mongoDBClient} from "../../aws.config";
import {GetItemCommand, QueryCommand} from "@aws-sdk/client-dynamodb";
import {GetCommand} from "@aws-sdk/lib-dynamodb";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const {Item} = await mongoDBClient.send(
            new GetCommand({
                    TableName: "mirandaz",
                    Key: {
                        user: "echelecabeza",
                    }
                }
            ));

        return res.status(200).json(Item);
    }
}
