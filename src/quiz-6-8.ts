type Option<T> =
  | {
      tag: "same";
      value: T;
    }
  | {
      tag: "none";
    };

const showNumberIfExists = (obj: Option<number>): void => {
  if (obj.tag === "same") {
    console.log(obj.value);
  }
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
