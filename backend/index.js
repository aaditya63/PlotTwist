const express = require('express')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv');
const cors = require('cors');
const connectMongoDB = require('./config/db');
const userRouter = require('./routes/user');

const app = express();
dotenv.config()

app.use(express.json());
app.use(cookieParser());

connectMongoDB();




const PORT = process.env.PORT || 5000;

app.use(cors({
	origin: 'http://localhost:5173',
	methods: ['GET', 'POST'],
	credentials: true,
}));

app.use('/api/user',userRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});