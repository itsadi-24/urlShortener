import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './config/dbConfig.js';
import shortUrl from './routes/shortUrl.js';
const app = express();
dotenv.config();
connectDb();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', shortUrl);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=server.js.map