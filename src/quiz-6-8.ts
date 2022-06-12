type Option<T> =
  | {
      tag: "same";
      value: T;
    }
  | {
      tag: "none";
    };

const showNumberIfExists = (obj: Option<number>): void => {
  if (isSome(obj)) {
    console.log(obj.value);
  }
};

const isSome = <T>(obj: Option<T>): obj is { tag: "same"; value: T } => {
  return obj.tag === "same";
};

const four: Option<number> = {
  tag: "same",
  value: 4,
};

const nothing: Option<number> = {
  tag: "none",
};

showNumberIfExists(four);
showNumberIfExists(nothing);

const mapOption = <T, U>(
  obj: Option<T>,
  callback: (value: T) => U
): Option<U> => {
  return isSome(obj)
    ? { tag: "same", value: callback(obj.value) }
    : { tag: "none" };
};
const doubleOption = (obj: Option<number>) => {
  return mapOption(obj, (x) => x * 2);
};

console.log(doubleOption(four));
console.log(doubleOption(nothing));
