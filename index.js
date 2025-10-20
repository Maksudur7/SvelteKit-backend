import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
    origin: [
        "http://localhost:5173",

    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
}));

app.use(express.json());
const userName = process.env.DB_NAME
const password = process.env.DB_PASSWORD


const uri = `mongodb+srv://${userName}:${password}@cluster0.b3nlp4l.mongodb.net/`;


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        const db = client.db("sveltekit");
        const sveltekitUserConnection = db.collection("user");
        await client.db("admin").command({ ping: 1 });
        console.log("MongoDB connected and collections initialized!");

        app.post("/user", async (req, res) => {
            try {
                const result = await sveltekitUserConnection.insertOne(req.body);
                res.status(201).json(result);
            } catch (err) {
                res.status(500).json({ error: "Insert failed" });
            }
        });

        app.get("/user", async (req, res) => {
            const result = await sveltekitUserConnection.find().toArray();
            res.json(result);
        });

        app.delete('/user/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id);
            const filter = { _id: new ObjectId(id) };
            const result = await sveltekitUserConnection.deleteOne(filter);
            res.json(result)
        })

        app.patch('/user/:id', async (req, res) => {
            try {
                const filter = { _id: new ObjectId(req.params.id) };
                const updateDoc = { $set: req.body };
                const result = await sveltekitUserConnection.updateOne(filter, updateDoc);
                res.json(result);
            } catch (err) {
                res.status(500).json({ error: "Update failed", details: err.message });
            }
        });


    } catch (err) {
        console.log('backend data error is ', err);
    }
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    })
}
run().catch(console.dir);



