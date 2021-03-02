const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const auth = require('./middleware/auth');

const graphQLSchema = require('./graphql/schema/index');
const graphQLResolver = require('./graphql/resolver/index');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    if (req.method === 'OPTIONS') return res.sendStatus(200);
    next();
});

app.use(auth.isAuth);

app.use('/api', graphqlHttp({
    schema: graphQLSchema,
    rootValue: graphQLResolver,
    graphiql: false
}));

//app.use(express.static(path.join(__dirname, 'public')));

//app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
    '.eot',
    '.map'
];

app.get('*', (req, res) => {
    if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
        res.sendFile(path.resolve(`public/${req.url}`));
    } else {
        res.sendFile(path.resolve(`public/index.html`));
    }
})

mongoose.connect(`${process.env.MONGODB_URI}`, {
    //mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0-vgjqn.mongodb.net/${process.env.DATABASE}?retryWrites=true`, {
    useNewUrlParser: true
}).then(() => {
    console.log('DB connected!');
    return app.listen(process.env.PORT);
}).then(_ => {
    console.log('Server listening on https://mrp-uni.herokuapp.com/');
    console.log('Server listening on https://mrp-uni.herokuapp.com/api/');
}).catch(err => {
    console.error(err);
});
