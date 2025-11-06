import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import router from './routes/auth.js';
import cors from 'cors'

dotenv.config({quiet: true});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use('/', router);

connectDB(process.env.MONGODB_URL)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
