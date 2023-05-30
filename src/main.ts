import * as express from 'express';
import { Parameters, CTSearch } from './types';
const { connectToDB, getDB } = require('./config/config');
const { validateParameters,getAllTrainStations} = require('./services/journeyDestinationTree');
const app = express();
//const initDB = require('./config/config');
const port = 3000;

app.use(express.json());

// Middleware para analizar el cuerpo de las solicitudes POST en formato x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  const body: Parameters = req.body;
  const areValid = validateParameters(body);
  if (!areValid) {
    res.status(400).send('Parámetro faltante'); // Envía el código de estado 400 (Bad Request) junto con el mensaje 'Parámetro faltante'
    return;
  }
  res.status(200).send(getAllTrainStations(body));
});

app.get('/', (req, res) => {
  const body: Parameters = req.body;
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
