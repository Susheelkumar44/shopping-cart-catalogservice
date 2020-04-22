const express = require("express");
const bodyParser = require("body-parser");
const logger = require("./utilities/logger");
const productRouter = require("./catalogs/router/router");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 1237;

//const config = require("./config/mongoose");
/*var func = require("./config/mongoose")
func(app) OR*/ 
require("./config/mongoose")(app);

app.use(bodyParser.json());
app.use(cors());
app.use("/catalog", productRouter);

app.listen(port, () => {
    logger.info(`Listening on port ${port}`);
});
