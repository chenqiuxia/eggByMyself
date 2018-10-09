const Service = require('egg').Service

class UserService extends Service {
    async findList () {
        const list = await this.app.mysql.select('user');
        return list
    }
    async findId (id) {
        const userItem = await this.app.mysql.get('user', {id: id})
        return userItem
    }
    async addItem () {
        // const username = this.ctx.query.username
        // console.log(username + 'username')
        // const pw = this.ctx.query.password
        // console.log(pw  + 'username')
        // const classId = this.ctx.query.classId
        // console.log(classId + 'classId')
        const result = await this.app.mysql.insert('user', {'username': '李宇春', 'password': '121212', 'class_id': 20})
        return result
    }
}
module.exports = UserService