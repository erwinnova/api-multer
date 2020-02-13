/* 4 Point penting API
1. Endpoint
2. Method
3. Header
4. Data
 */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const bearerToken = require('express-bearer-token');

app.use(bodyParser());
app.use(cors());
app.use(bearerToken());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static('public'));

app.get('/', (req,res) =>{
    res.status(200).send('<h2> Halo <h2>');
})

// app.get('/users', (req,res) =>{
//     res.status(200).send({
//         nama: "erwin",
//         sekolah: "Purwadhika"
//     })
// })

const { userRouter, imageRouter, emailRouter } = require('./router')

app.use('/users', userRouter)
app.use('/image', imageRouter)
app.use('/email', emailRouter)

app.listen(2001, () => console.log(2001))