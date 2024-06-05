import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './config/dbConfig.js';
import shortUrl from './routes/shortUrl.js';
const app = express();
dotenv.config();
connectDb();
const port = 5000;
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', shortUrl);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=server.js.map