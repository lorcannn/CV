/**
 * 阿里一面
 */
// 1. 实现函数_curry(fn)使之具有以下功能：fn是一个二元函数，fn(a, b)，
// const _fn = _curry(fn); _fn(a)(b) 的结果和 fn(a, b)的结果一致

function _curry(fn) {
  const len = fn.length;
  let args = [];
  return function func() {
    args = [...args, ...arguments];
    if (args.length < len) {
      return func;
    } else {
      return fn.apply(this, args);
    }
  };
}

// testing
const fn1 = (a, b) => {
  return a + b;
};
const curriedFn1 = _curry(fn1);
curriedFn1(1);
const result1 = curriedFn1(2);
console.log("%c Line:24 🥐 result1", "color:#93c0a4", result1);

// 2.
/**
 * 简单实现一个queryString，具有parse和stringify的能力，
 * parse，用于把一个URL查询字符串解析成一个键值对的集合。
 * 输入：查询字符串 'foo=bar&abc=xyz&abc=123'
 * 输出：一个键值对的对象
 * {
 *   foo: 'bar',
 *   abc: ['xyz', '123'],
 * }
 * stringify，相反的，用于序列化给定对象的自身属性，生成URL查询字符串。
 * 输入：一个键值对的对象
 * {
 *   foo: 'bar',
 *   abc: ['xyz', '123'],
 * }
 * 输出：查询字符串 'foo=bar&abc=xyz&abc=123'
 */

const parse = (query) => {
  if (typeof query !== "string") {
    throw new Error("query must be string!");
  }
  const arr = query.split("&");
  const result = {};
  arr.forEach((item) => {
    const [key, value] = item.split("=");
    if (!!result[key]) {
      if (Array.isArray(result[key])) {
        result[key].push(value);
      } else {
        result[key] = [result[key], value];
      }
    } else {
      result[key] = value;
    }
  });
  return result;
};

// stringifyValue === "foo=bar&abc=xyz&abc=123";
const stringify = (query) => {
  let result = "";
  Object.keys(query).forEach((key) => {
    const value = query[key];
    if (Array.isArray(value)) {
      value.forEach((item) => {
        result += `${!!result ? "&" : ""}${key}=${item}`;
      });
    } else {
      result += `${!!result ? "&" : ""}${key}=${value}`;
    }
  });
  return result;
};

// testing
const parsedValue = parse("foo=bar&abc=xyz&abc=123");
console.log(
  "%c Line:56 🍊 parsedValue.foo === 'bar'",
  "color:#fca650",
  parsedValue.foo === "bar"
);
console.log(
  "%c Line:57 🍣 parsedValue.abc[0] === 'xyz'",
  "color:#93c0a4",
  parsedValue.abc[0] === "xyz"
);
console.log(
  "%c Line:59 🍑 parsedValue.abc[1] === '123'",
  "color:#ffdd4d",
  parsedValue.abc[1] === "123"
);
const stringifyValue = stringify({
  foo: "bar",
  abc: ["xyz", "123"],
});

console.log(
  "%c Line:92 🍭 stringifyValue === 'foo=bar&abc=xyz&abc=123';",
  "color:#ea7e5c",
  stringifyValue === "foo=bar&abc=xyz&abc=123"
);

// 3.
/**
 * 对象扁平化
 * 说明：请实现 flatten(input) 函数，input 为一个 javascript 对象（Object 或者 Array），返回值为扁平化后的结果。
 * 示例：
 *   var input = {
 *     a: 1,
 *     b: [ 1, 2, { c: true }, [ 3 ] ],
 *     d: { e: 2, f: 3 },
 *     g: null,
 *   }
 *   var output = flatten(input);
 *   output如下
 *   {
 *     "a": 1,
 *     "b[0]": 1,
 *     "b[1]": 2,
 *     "b[2].c": true,
 *     "b[3][0]": 3,
 *     "d.e": 2,
 *     "d.f": 3,
 *     // "g": null,  值为null或者undefined，丢弃
 *  }
 */

function flatten(input) {
  /* 代码实现 */
  let result = {};
  function flattenFn(obj, parentKey) {
    if (Array.isArray(obj)) {
      // 是数组
      obj.forEach((item, index) => {
        let newKey = parentKey + "[" + index + "]";
        if (typeof item === "object") {
          flattenFn(item, newKey);
        } else {
          result[newKey] = item;
        }
      });
    } else if (obj instanceof Object) {
      // 是对象
      for (let key in obj) {
        let value = obj[key];
        let newKey = parentKey ? parentKey + "." + key : key;
        if (typeof value === "object") {
          flattenFn(value, newKey);
        } else if (value === undefined || value === null) {
          continue;
        } else {
          result[newKey] = value;
        }
      }
    }
  }
  flattenFn(input);
  return result;
}

// testing
var input = {
  a: 1,
  b: [1, 2, { c: true }, [3]],
  d: { e: 2, f: 3 },
  g: null,
};
const result = flatten(input);
console.log("%c Line:187 🍇 result", "color:#ffdd4d", result);
