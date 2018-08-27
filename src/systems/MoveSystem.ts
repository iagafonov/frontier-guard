import System from '../ECS/System'
import Entity from '../ECS/Entity'
import DisplayComponent from '../components/DisplayComponent'

export default class MoveSystem extends System {
  updateEntity (entity: Entity, dt: number) {
    const display = entity.components.display as DisplayComponent
    const obj = display.obj
    obj.x += 0.1 * dt
    obj.y += 0.5 * dt
  }
}
