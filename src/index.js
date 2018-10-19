const path = require('path');
const express = require('express');
const app = express();

const data_reader = require("./tools/data_reader")
const readRouter = require("./tools/router_path_handle")



let dataSouce;   // 内存数据
data_reader.read(dataSouce);

readRouter(path.join(__dirname, 'router')).map((item) => {
    app.use(item.routerPath, require(item.path));
})


app.listen(3000, () => console.log('app listening on port 3000!'))