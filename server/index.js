import express from "express";
import mongoose from "mongoose";
import Pusher from "pusher";
import cors from "cors";
import mongoData from "./mongoData.js";
import { db_name, db_admin_key } from "./serverKeys.js";

// app config
const app = express();
const port = 3001;
// middlewares
app.use(cors());
app.use(express.json());
// db config
const mongoURI = `mongodb+srv://admin:${db_admin_key}@cluster0.rbdkv.mongodb.net/${db_name}?retryWrites=true&w=majority`;

mongoose.connect(mongoURI);

mongoose.connection.once("open", () => {
  console.log("DB connected");
});

// api routes

// ----------- GET end points
app.get("/", (req, res) => {
  return res.status(200).send("Hello motherfucker");
});

app.get("/get/conversationList", (req, res) => {
  mongoData.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      data.sort((b, a) => a.timestamp - b.timestamp);

      let conversations = [];

      data.map((conversationData) => {
        const conversationInfo = {
          id: conversationData._id,
          name: conversationData.chatName,
          timestamp: conversationData.conversation[0].timestamp,
        };
        conversations.push(conversationInfo);
      });

      res.status(200).send(conversations);
    }
  });
});
app.get("/get/lastMessage", (req, res) => {
  const id = req.query.id;

  mongoData.find({ _id: id }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      let lastMessages = data[0].conversation;

      lastMessages.sort((b, a) => a.timestamp - b.timestamp);
      res.status(200).send(lastMessages[0]);
    }
  });
});

//---------post end points
app.post("/new/conversation", (req, res) => {
  const dbData = req.body;

  mongoData.create(dbData, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.post("/new/message", (req, res) => {
  mongoData.update(
    { _id: req.query.id },
    { $push: { conversation: req.body } },
    (err, data) => {
      if (err) {
        console.log("Error occurred while saving messages...");
        console.log(err);

        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    }
  );
});
// listening port

app.listen(port, () => console.log(`listening on port ${port}`));
