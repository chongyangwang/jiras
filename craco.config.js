/*
 * @Description: 
 * @Author: cy2020
 * @Date: 2021-08-09 09:43:30
 * @LastEditTime: 2021-08-09 09:47:52
 */
const CracoLessPlugin = require('craco-less')

module.exports = {
    plugins:[
        {
            plugin: CracoLessPlugin,
            options:{
                lessLoaderOptions:{
                    lessOptions:{
                        modifyVars: {
                            '@primary-color': 'rgb(0, 82, 204)',
                            '@font-size-base': '16px'
                        },
                        javascriptEnabled: true
                    }
                }
            }
        }
    ]
}