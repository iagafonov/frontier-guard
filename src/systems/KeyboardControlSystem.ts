import System from '../ECS/System'
import Entity from '../ECS/Entity'
import keyboard from '../keyboard'
import DisplayComponent from '../components/DisplayComponent'

export default class KeyboardControlSystem extends System {
  updateEntity (entity: Entity, dt: number) {
    const display = entity.components.display as DisplayComponent
    const obj = display.obj

    if (keyboard.up.isPressed()) obj.y -= dt
    if (keyboard.down.isPressed()) obj.y += dt
    if (keyboard.left.isPressed()) obj.x -= dt
    if (keyboard.right.isPressed()) obj.x += dt
  }
}
