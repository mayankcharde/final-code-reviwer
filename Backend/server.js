// const express = require('express')
// const app = express()
// const port = process.env.PORT
// const aiRoutes = require('./routes/ai.routes');
// const cors = require('cors');



// app.use(cors());
// app.use(express.json());

// app.use('/ai', aiRoutes);


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// require('dotenv').config()
// const app = require('./src/app')



// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000')
// })


const app = require('./src/app');

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});