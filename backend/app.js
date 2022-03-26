const express = require("express");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.post("/api/users", (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: "Objet créé !",
  });
});

app.get("/api/users", (req, res, next) => {
  const stuff = [
    {
      _id: "61e6aae1ac17b030f580a37e",
      mail: "test1.m@gmail.com",
      password: "102456",
      displayName: "test1",
      profil: "reader",
    },
    {
      _id: "61e6ab68ac17b030f580a37f",
      mail: "test2.j@gmail.com",
      password: "205486",
      displayName: "test2",
      profil: "author",
    },
    {
      _id: "61eaad6b6c840790ef4dc5b8",
      mail: "test3.l@gmail.com",
      password: "456896",
      displayName: "test3",
      profil: "admin",
    },
  ];
  res.status(200).json(users);
});

module.exports = app;
