import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import userRouter from './routers/userRouter.js';
import courseRouter from './routers/courseRouter.js';
import institutionRouter from './routers/institutionRouter.js';
import enrollmentRouter from './routers/enrollmentRouter.js';

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cookieParser());
app.use(cors({origin: 'http://localhost:3000'}));

app.use('/alm', userRouter);
app.use('/alm/institutions', institutionRouter);
app.use('/alm/courses', courseRouter);
app.use('/alm/enrollments', enrollmentRouter);

const CONNECTION_URL = 'mongodb+srv://shreyasen:Shreya123@cluster0.r6s3i07.mongodb.net/alm?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
.catch((error) => console.log(error))