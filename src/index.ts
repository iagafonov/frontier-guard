import { Application, utils } from 'pixi.js'

import System from './ECS/System'
import Index from './ECS'
import Entity from './ECS/Entity'

import MoveSystem from './systems/MoveSystem'
import KeyboardControlSystem from './systems/KeyboardControlSystem'

import DisplayComponent from './components/DisplayComponent'

utils.skipHello()

const app = new Application(800, 600, { antialias: true })
document.body.appendChild(app.view)

if (process.env.NODE_ENV !== 'production') {
  (window as any).System = System
  ;(window as any).Index = Index
}

const ecs = new Index()

const keyboardControlSystem = new KeyboardControlSystem()
const moveSystem = new MoveSystem()

moveSystem.useComponent(DisplayComponent)

ecs.addSystem(moveSystem)
ecs.addSystem(keyboardControlSystem)

const violator = new Entity()
violator.addComponent(new DisplayComponent())

keyboardControlSystem.addEntity(violator)

app.stage.addChild((violator.components.display as DisplayComponent).obj)

app.ticker.add(dt => {
  ecs.update(dt)
})
