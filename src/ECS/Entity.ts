import Component from './Component'

let counter = 0

export default class Entity {
  readonly id: number
  components: { [key: string]: Component }

  constructor () {
    this.id = ++counter
    this.components = {}
  }

  addComponent (component: Component): void {
    const Ctor = component.constructor as typeof Component
    this.components[Ctor.key] = component
    const len = Ctor.systems.length
    for (let i = 0; i < len; ++i) {
      (Ctor as typeof Component).systems[i].addEntity(this)
    }
  }
}
