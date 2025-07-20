import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'frontend')));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'frontend'));

app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/',  (req, res) => {
  console.log(req.body)
  res.send("You have login successfuly");
})

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
