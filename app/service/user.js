const Service = require('egg').Service

class UserService extends Service {
    async findList () {
        const list = await this.app.mysql.select('user');
        return list
    }
}
module.exports = UserService