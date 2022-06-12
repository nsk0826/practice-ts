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
