import express from 'express';
import { postFunc } from './post.mjs';
import { getFunc } from './get.mjs';
import { getIdFunc } from './getId.mjs';
import bodyParser from 'body-parser';

const app = express()
app.use(bodyParser.json());

app.get('/', getFunc)
app.get('/test/:id', getIdFunc)
app.post('/', postFunc);
app.listen(3001, () => console.log('server ready'))