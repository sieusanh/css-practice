import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename) + '/topics/bem/';
console.log('dirname ', __dirname)
app.use(express.static(__dirname + '/'));

app.listen(3000, () => console.log('app...'));
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname + 'index.html'))
);
