import app from "./server.js";
import mongodb from "mongodb"
import ReviewsDAO from "./dao/reviewsDAO.js"

const env = {
    MONGO_USERNAME: 'taaseenmkhan',
    MONGO_PASSWORD: 'freecodecamp'
}

const MongoClient = mongodb.MongoClient

const MongoUsername = process.env['MONGO_USERNAME']
const MongoPassword = process.env['MONGO_PASSWORD']

const uri = `mongodb+srv://${MongoUsername}:${MongoPassword}@cluster0.yl7xyts.mongodb.net/?retryWrites=true&w=majority`
const port = 8000

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }) .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })

    .then(async client => {
        await ReviewsDAO.injectDB(client)
        app.listen(port, () => {
            console.log(`listening on ${port}`)
        })
    })