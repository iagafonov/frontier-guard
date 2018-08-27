import System from './System'

export default abstract class Component {
  static key: string
  static systems: System[]
}
