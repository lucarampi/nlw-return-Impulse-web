import express from 'express'
import { routes } from './routes';
import cors from 'cors'

const app = express();

app.use(cors());

//Configure JSON body
app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('Server is running!')
});
