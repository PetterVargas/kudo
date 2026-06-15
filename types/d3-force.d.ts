declare module 'd3-force' {
  export function forceCollide<NodeDatum>(radius?: number | ((node: NodeDatum) => number)): any;
  export function forceLink<NodeDatum, LinkDatum>(): any;
  export function forceManyBody<NodeDatum>(): any;
}
