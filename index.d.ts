export function useragent(liveRegexp: boolean): void
export namespace useragent {
  interface Agent {
    device: Device
    family: string
    major: string
    minor: string
    os: OperatingSystem
    patch: string
    satisfies(range: string): boolean
    toAgent(): string
    toJSON(): Object
    toString(): string
    toVersion(): string
  }
  interface AgentIs {
    version: string
    android: boolean
    chrome: boolean
    firefox: boolean
    ie: boolean
    mobile_safari: boolean
    mozilla: boolean
    opera: boolean
    safari: boolean
    webkit: boolean
  }
  interface Device {
    toJSON(): Object
    toString(): string
    toVersion(): string
  }
  interface OperatingSystem {
    toJSON(): Object
    toString(): string
    toVersion(): string
  }
  function fromJSON(a: Agent): Agent
  function is(ua: string): AgentIs
  function lookup(ua: string, jsUa?: string): Agent
  function parse(ua: string, jsUa?: string): Agent
}
