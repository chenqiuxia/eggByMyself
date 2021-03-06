'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1538145927083_1187';

  // add your config here
    config.middleware = [];
    config.log = {
      level: 'DEBUG'
    };

    // config/config.${env}.js
    config.mysql = {
        // 单数据库信息配置
        client: {
            // host
            host: 'localhost',
            // 端口号
            port: '3306',
            // 用户名
            user: 'root',
            // 密码
            password: 'root',
            // 数据库名
            database: 'test',
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    };

    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true
        },
        // 白名单
        domainWhiteList: [ 'http://localhost:7001' ]
    };

    return config;
};
