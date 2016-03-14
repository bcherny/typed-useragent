declare module "useragent" {
  export function useragent(liveRegexp: boolean): void
  export function fromJSON(a: Agent): Agent
  export function is(ua: string): AgentIs
  export function lookup(ua: string, jsUa?: string): Agent
  export function parse(ua: string, jsUa?: string): Agent
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
}