require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fileUpload = require('express-fileupload')
const path = require('path')

const app = express();

 
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload({
    createParentPath: true
}))
app.use(express.static('public'));
 
app.get('/', async (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!',
    });
});
const vehicules = require("./server/vehicules/vehicules.allInOne")
const upload = require("./server/filesUpload/files")
const actions = require("./server/actions/actions.allInOne")
app.use("/vehicules", vehicules)
app.use("/upload", upload)
app.use("/actions", actions)
 
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});