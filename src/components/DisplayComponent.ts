import { DisplayObject, Graphics } from 'pixi.js'
import Component from '../ECS/Component'

export default class DisplayComponent extends Component {
  static key: string = 'display'
  obj: DisplayObject

  constructor () {
    super()
    const graphics = new Graphics()
    graphics.beginFill(0xff3333)
    graphics.lineStyle(2, 0xffd900, 1)
    graphics.drawCircle(0, 0, 10)
    graphics.endFill()
    this.obj = graphics
  }
}

DisplayComponent.systems = []
