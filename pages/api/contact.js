import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

const handler = async (req, res) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  if (req.method === "POST") {
    const { name, phone, email, message } = req.body;

    await db.collection("contact").insertOne({
      name,
      phone,
      email,
      message,
    });

    res.status(200).json({ status: "OK" });
  } else if (req.method === "GET") {
    const user = await db.collection("contact").find().toArray();

    res.status(200).json({ status: 200, contact: user });
  } else if (req.method === "PUT") {
    const { _id, name, phone, email, message } = req.body;

    await db.collection("contact").updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: {
          name,
          phone,
          email,
          message,
        },
      }
    );

    res.status(200).json({ status: 200 });
  } else if (req.method === "DELETE") {
    const { _id } = req.body;

    await db.collection("contact").deleteOne({ _id: new ObjectId(_id) });

    res.status(200).json({ status: 200 });
  }
};

export default handler;
