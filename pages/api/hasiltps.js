import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
	const client = await clientPromise;
	const db = client.db("react-native-data");
	switch (req.method) {
		case "POST":
			let bodyObject = JSON.parse(req.body);
			let myPost = await db.collection("hasiltps").insertOne(bodyObject);
			res.json(myPost.ops[0]);
			break;
		case "GET":
			const hasilTps = await db.collection("hasiltps").findOne();
			res.json({ status: 200, data: hasilTps });
			break;
	}
}
