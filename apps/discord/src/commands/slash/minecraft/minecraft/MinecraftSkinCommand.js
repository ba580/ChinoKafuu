import { Command, EmbedBuilder, Emoji } from '../../../../structures/util'

export default class MinecraftSkinCommand extends Command {
  constructor() {
    super({
      name: 'minecraft skin',
      aliases: [],
      permissions: [{
        entity: 'bot',
        permissions: ['embedLinks']
      }]
    })
  }

  async run(ctx) {
    const body = `https://minotar.net/skin/${ctx.args.get('minecraft-nickname').value}`
    const embed = new EmbedBuilder()
    embed.setColor('MINECRAFT')
    embed.setImage(body)
    embed.setDescription(`${Emoji.getEmoji('minecraft').mention} [[Download]](${body})`)
    embed.setFooter(`©️ ${ctx.client.user.username}`)
    embed.setTimestamp()

    ctx.send(embed.build())
  }
}
