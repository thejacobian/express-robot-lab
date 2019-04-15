const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const robotsController = require('./controllers/robots');

app.use(bodyParser.urlencoded({extended: false }));
app.use(methodOverride('_method'));

app.use('/robots', robotsController);





app.listen(3000, () => {
    console.log('app listening on port', 3000)
});