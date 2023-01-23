import { Command } from '../../../structures/util'
import axios from 'axios'

export default class LaranjoCommand extends Command {
  constructor() {
    super({
      name: 'laranjo',
      permissions: [{
        entity: 'bot',
        permissions: ['attachFiles']
      }]
    })
  }

  async run(ctx) {
    const buffer = await axios({
      url: 'http://127.0.0.1:1234/render/laranjo',
      method: 'post',
      data: {
        text: ctx.args.join(' ')
      },
      responseType: 'arraybuffer'
    })

    ctx.send('', { file: { file: buffer.data, name: 'laranjo.png' } })
  }
}
