const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const authRoutes = require('./routes/auth');
const itemRoutes = require('./routes/item');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');
const userRoutes = require('./routes/user');

const app = express();
app.use(express.json());

app.use('/api',authRoutes);
app.use('/api',itemRoutes);
app.use('/api',cartRoutes);
app.use('/api',orderRoutes);
app.use('/api',userRoutes);

const dbURI = config.get('dbURI');
const port = process.env.PORT || 3000;

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    res.send(req.query);
  });
  app.listen(port, () => {
      console.log("hey app is listening");
  });
}

module.exports = async () => {
try {
  await mongoose.connect(dbURL, {});
  console.log("CONNECTED TO DATABASE SUCCESSFULLY");
} catch (error) {
  console.error('COULD NOT CONNECT TO DATABASE:', error.message);
}
};