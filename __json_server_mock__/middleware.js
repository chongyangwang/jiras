/*
 * @Description: 
 * @Author: cy2020
 * @Date: 2021-08-05 17:28:25
 * @LastEditTime: 2021-08-05 17:54:41
 */
module.exports = (req, res, next) => {
    console.log(req)
    if(req.method === 'POST' && req.path === '/login'){
        if(req.body.username === 'admin' && req.body.password === '123456'){
          return res.status(200).json({
            msg:'请求成功',
            user: {
              token: 'qwert'
            }
          })
        } else {
            return res.status(400).json({
                msg: '请求失败 用户名密码错误'
            })
        }
    }
    next()
}