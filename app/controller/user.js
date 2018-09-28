const Controller = require('egg').Controller

class UserController extends Controller {
    async show () {
        const list = await this.ctx.service.user.findList()
        console.log(list);
        this.ctx.body = list
    }
}
module.exports = UserController