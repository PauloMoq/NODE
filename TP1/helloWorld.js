const express = require("express");
const app = express();
const port = 3000;

app.use('/', (req, res, next) => {
    let date = new Date().toISOString();
    console.log("["+date+"]: "+req.url);
    next();

})

app.get("/welcome", (req,  res, next)=>{
    res.send("Bienvenue sur le TP1");
})

app.get("/secret", (req,  res, next)=>{
    res.status(401).send("Pas les droits").end();
})

app.get("/error", (req,  res, next)=>{
    res.sendStatus(500);
})

app.get("/img", (req,  res, next)=>{
    res.download("./logo.png");
})

app.get("/redirectMe", (req,  res, next)=>{
    res.redirect("http://extra.univ-littoral.fr/");
})

app.get("/users/:name", (req,  res, next)=>{
    res.send("Bienvenue mon pote "+req.params.name);
})

app.get("/somme", (req,  res, next)=>{
    res.send("Seum: "+
    (parseInt(req.query.a)+
    parseInt(req.query.b)));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})