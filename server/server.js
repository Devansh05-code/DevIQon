import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware, requireAuth } from '@clerk/express'
import aiRouter from './routes/aiRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import userRouter from './routes/userRoutes.js';


const app = express()

await connectCloudinary()

app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

app.get('/', (req, res)=>res.send('Server is Live!'))

app.use(requireAuth())

app.use('/api/ai' , aiRouter)
app.use('/api/user', userRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('Server is running on port', PORT);
}) 



// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import clerk from '@clerk/express';

// const { clerkMiddleware, requireAuth } = clerk;

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(clerkMiddleware());

// app.get('/', (req, res) => res.send('Server is Live!'));

// app.use(requireAuth()); // ✅ This line now works

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log('Server is running on port', PORT);
// });


// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import { clerkMiddleware, requireAuth } from '@clerk/express'; // ✅ FIXED

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(clerkMiddleware());

// app.get('/', (req, res) => res.send('Server is Live!'));

// // Optional: protect only certain routes
// app.use(requireAuth()); // If you want to protect everything from this point on

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log('Server is running on port', PORT);
// });
