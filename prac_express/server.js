// express 기반 서버 동작하기 연습
const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
const connectionString = 'MONGODB_URL'

MongoClient.connect(connectionString, {useUnifiedTopology: true})
    .then(client => {
        console.log('Connected to MongoDB')
        const db = client.db('test-db')
        const testsCollection = db.collection('tests')

        app.set('view engine', 'ejs')
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(bodyParser.json())
        app.use(express.static('public'))
        
        app.get('/', (req, res) => {
            db.collection('tests').find().toArray()
                .then(results => {
                    // console.log(results)
                    res.render('index.ejs', { quotes: results })
                })
                .catch(error => console.error(error))
        })

        app.post('/quotes', (req, res) => {
            testsCollection.insertOne(req.body)
                .then(result => {
                    res.redirect('/')
                })
                .catch(error => console.error(error))
            })
        
        app.put('/quotes', (req, res) => {
            // console.log(req.body)
            testsCollection.findOneAndUpdate(
                { name: 'haechan' },
                {
                    $set: {
                        name: req.body.name,
                        quote: req.body.quote
                    }
                },
                {
                    upsert: true // upsert: 매칭되는 값이 없을 경우, 어떻게 처리할지 여부(true => 강제 업데이트)
                }
            )
                .then(result => {
                    // console.log(result)
                    res.json('Success')
                })
                .catch(error => alert(error))
        })

        app.delete('/quotes', (req, res) => {
            testsCollection.deleteOne(
                { name: req.body.name }, // JSON {'name': 'Darth Vadar'} from main.js
            )
                .then(result => {
                    if(result.deletedCount === 0) { // delete된 개수가 0개이면
                        return res.json('No quote to delete')
                    }
                    res.json('Deleted Darth Vadar`s quote')
                })
                .catch(error => console.error(error))
        })

        app.listen(3000, function() {
            console.log('listening on port 3000')
        })
    })
    .catch(error => console.error(error))

