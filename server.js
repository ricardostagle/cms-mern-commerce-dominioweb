const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const authRoutes = require('./routes/auth');
const itemRoutes = require('./routes/item');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');
const userRoutes = require('./routes/user');
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeo_FGKWbeowNN-ScI3TDtbyGn3HR8OaY",
  authDomain: "dominiowebcommx-b6ee1.firebaseapp.com",
  projectId: "dominiowebcommx-b6ee1",
  storageBucket: "dominiowebcommx-b6ee1.appspot.com",
  messagingSenderId: "60683105886",
  appId: "1:60683105886:web:9e70405ca3660d06bfe6cf",
  measurementId: "G-24X7JES76G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const app = express();
app.use(express.json());

app.use('/api',authRoutes);
app.use('/api',itemRoutes);
app.use('/api',cartRoutes);
app.use('/api',orderRoutes);
app.use('/api',userRoutes);

//if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname,'client','build','index.html'));
      //res.send(req.query);
    });
    app.listen(port, () => {
        console.log("hey app is listening");
    });
//}

const dbURI = config.get('dbURI');
const port = process.env.PORT || 4000;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then(() => app.listen(port, () => console.log(`Server running on http://localhost:${port}`)))
  .catch((err) => console.log(err));
