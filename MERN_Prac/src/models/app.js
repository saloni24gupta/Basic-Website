import express from "express";
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("hello from saloni gupta")
});

app.listen(port, () => {
    console.log(`server is runnint at port no. 3000 ${port}`);
})