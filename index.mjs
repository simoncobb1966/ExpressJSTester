import express from 'express';
import { post } from './post.mjs';
import { get } from './get.mjs';
import { getId } from './getId.mjs';
import bodyParser from 'body-parser';

const app = express()
app.use(bodyParser.json());

app.get('/', get)
app.get('/test/:id', getId)
app.post('/', post);
app.listen(3001, () => console.log('server ready'))