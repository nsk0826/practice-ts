type RestArgs<M> = M extends "string"
  ? ["string", "string"]
  : [number, number, number];

const func = <M extends "string" | "number">(mode: M, ...args: RestArgs<M>) => {
  console.log(mode, ...args);
};
