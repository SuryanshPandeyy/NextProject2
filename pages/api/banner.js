import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

const handler = async (req, res) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  if (req.method === "POST") {
    const { file, title, background } = req.body;
    // Attaching to a channel

    await db.collection("banner").insertOne({
      file,
      title,
      background,
    });

    res.status(200).json({ status: "OK" });
  } else if (req.method === "GET") {
    const banner = await db.collection("banner").find().toArray();

    res.status(200).json({ status: 200, banner });
  } else if (req.method === "PUT") {
    const { _id, file, background,  title } = req.body;
    console.log(_id)
    console.log(title)
    await db.collection("banner").updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: {
          file,
          title,
          background,
        },
      }
    );

    res.status(200).json({ status: 200 });
  }
};

export default handler;
