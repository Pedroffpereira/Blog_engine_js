const express = require('express')
const app = express()
const port = 3000
const route_pb = require('./routes/public/routes_pb.js');
const routes_adm = require('./routes/admin/routes_adm.js');
console.log(__dirname)
app.use('/',express.static(__dirname + '/src/'));

app.set('view engine','ejs')
app.set('Views','./views/')
app.listen(port, () => console.log(`Example app listening at http://localhos:${port}`))





app.use('/', route_pb)
