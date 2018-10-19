const fs = require('fs')
const path = require('path')
const log4js = require('log4js');
const log = log4js.getLogger();

const readRouter = (pathName, routers = []) => {
    log.info('启动路由读取,当前的操作系统是' + process.platform);
    let data = []
    deepread(pathName, routers)
    routers.map((item) => {

        let routerPath = item.replace(pathName, '').replace('.js', '')

        if (process.platform.includes('win')) {
            routerPath = routerPath.replace(/\\/g, "/")
        }
        log.info(`添加路由： ${routerPath}`)
        data.push({
            path: item,
            routerPath: routerPath
        })
    })
    log.info('路由读取完毕！')
    return data
}

const deepread = (pathName, routers = []) => {
    try {
        const files = fs.readdirSync(pathName)
        files.map((item) => {
            const itemPath = path.join(pathName, item)
            const stata = fs.statSync(itemPath)
            if (stata.isFile()) {
                routers.push(itemPath)
            } else {
                routers = deepread(itemPath, routers)
            }
        })
        return routers;
    } catch (err) {
        log.error(err.message)
        throw err
    }
}

module.exports = readRouter






