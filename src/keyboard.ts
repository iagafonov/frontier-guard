const keyCodeMap: { [key: string]: Key } = {}

class Key {
  code: number
  name: string
  pressed: boolean

  constructor (code: number, name: string) {
    this.code = code
    this.name = name
    this.pressed = false
    keyCodeMap[this.code] = this
  }

  press () {
    this.pressed = true
  }

  release () {
    this.pressed = false
  }

  isPressed (): boolean {
    return this.pressed
  }
}

function onKeyDown (e: KeyboardEvent) {
  const key = keyCodeMap[e.keyCode]
  if (key) key.press()
}

function onKeyUp (e: KeyboardEvent) {
  const key = keyCodeMap[e.keyCode]
  if (key) key.release()
}

document.addEventListener('keydown', onKeyDown, false)
document.addEventListener('keyup', onKeyUp, false)

export default {
  left: new Key(37, 'left'),
  up: new Key(38, 'up'),
  right: new Key(39, 'right'),
  down: new Key(40, 'down')
}
