const Controller = require('egg').Controller

class UserController extends Controller {
    async show () {
        const list = await this.ctx.service.user.findList()
        this.ctx.body = list
    }
    async getItem () {
        const id = this.ctx.params.id
        const item = await this.ctx.service.user.findId(id)
        this.ctx.body = item
    }
    async addItem () {
        const result = await this.ctx.service.user.addItem()
        this.ctx.body = result
    }

}
module.exports = UserController