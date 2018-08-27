import Entity from './Entity'
import Component from './Component'
import { remove } from '../utils'

export default class System {
  private entities: Entity[]
  period: number

  constructor (period = 1) {
    this.entities = []
    this.period = period
  }

  addEntity (entity: Entity): void {
    this.entities.push(entity)
    if (this.enterEntity) {
      this.enterEntity(entity)
    }
  }

  removeEntity (entity: Entity): void {
    remove(this.entities, entity)
    if (this.exitEntity) {
      this.exitEntity(entity)
    }
  }

  useComponent (Ctor: typeof Component) {
    Ctor.systems.push(this)
  }

  unuseComponent (Ctor: typeof Component) {
    remove(Ctor.systems, this)
  }

  update (dt: number): void {
    if (!this.updateEntity) return
    const len = this.entities.length
    for (let i = 0; i < len; ++i) {
      this.updateEntity(this.entities[i], dt)
    }
  }

  enterEntity? (entity: Entity): void

  exitEntity? (entity: Entity): void

  updateEntity? (entity: Entity, dt: number): void
}
