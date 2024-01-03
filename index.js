import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';





const app = express();
const port = 3000;


app.use(express.static("public"));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));





app.get("/", (req, res) => {
  
    
    res.render("index.ejs");
  });

app.get("/submit", (req, res) => {
 
  res.render("index.ejs");
  
  });

  app.get("/post", (req, res) => {
    
    res.render("posts.ejs");

  });



  
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
