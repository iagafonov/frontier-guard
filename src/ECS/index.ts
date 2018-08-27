import System from './System'
import { remove } from '../utils'

export default class Index {
  private systems: System[]
  private updateCount: number

  constructor () {
    this.systems = []
    this.updateCount = 0
  }

  addSystem (system: System): void {
    this.systems.push(system)
  }

  removeSystem (system: System): void {
    remove(this.systems, system)
  }

  update (dt: number): void {
    const len = this.systems.length
    for (let i = 0; i < len; ++i) {
      const system = this.systems[i]
      if (this.updateCount % system.period === 0) {
        system.update(dt)
      }
    }
    this.updateCount += 1
  }
}
