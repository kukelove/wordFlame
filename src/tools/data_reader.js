const fs = require('fs')

const data_reader = {
    
    /**
     *
     *读取数据源，注入赋值
     *@param {object} dateSouce json对象
     */
    read: function(dateSouce){
        fs.readFile(__dirname+'/data.txt', (err, data) => {
            if (err) throw err;
            dateSouce = data.toString('utf8')
        });
    },

    /**
     *
     *更新数据源
     * @param {String} data json字符串
     */
    update:function(data){
        fs.open(__dirname+'/data.txt','w',(err, fd)=>{
            
            if(err) throw err;
            fs.write(fd ,new Buffer(data, 'utf8'), 0, data.length, 0, (err, written, buffer)=>{
                if(err) throw err;
            })
        })
    }
}

module.exports = data_reader