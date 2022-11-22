/**
 * 实现flattenDeep
 * flattenDeep([1, [2, [3, [4]], 5]]);
 * => [1, 2, 3, 4, 5]
 */
function flattenDeep(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      const res = flattenDeep(cur);
      return [...pre, ...res];
    } else {
      return [...pre, cur];
    }
  }, []);
}
const result = flattenDeep([1, [2, [3, [4]], 5]]);
// console.log(result)

// 实现 promise.all
function PromiseAll(promises) {
  // 所有 promise 成功则 resolve 所以 promise 的结果, 有一个失败则 reject 返回第一个失败的结果
  if (!Array.isArray(promises)) {
    throw new Error("PromiseAll error: promises must be array ");
  }
  const result = [];
  let num = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];
      promise
        .then((res) => {
          result[i] = res;
          num++;
          if (num === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

const getName = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Name: coding");
  }, 3000);
});
const getAge = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("age: 18");
  }, 100);
});
// const getError = Promise.reject("getError");

// PromiseAll([getName, getAge]).then(data => {
//     console.log(data);
// }, err => {
// });

// PromiseAll([getError, getAge]).then(data => {
//     console.log(data);
// }, err => {
//     console.log(err)
// });

// ?.
// ??

const hex2Num = (str) => {
  let result = 0;
  result += parseInt(str[0], 16) * 16;
  result += parseInt(str[1], 16);
  return result;
};
// 实现 hex to rgb object
function hex2Rgb(hexStr) {
  let hex = hexStr.slice(1);
  if (hex.length === 3) {
    // f02 处理成六位的
    hex = hex.split("").reduce((pre, cur) => {
      return pre + cur + cur;
    }, "");
  }
  if (hex.length === 6) {
    // fa0022
    const r = hex2Num(hex.slice(0, 2));
    const g = hex2Num(hex.slice(2, 4));
    const b = hex2Num(hex.slice(4, 6));
    return {
      r,
      g,
      b,
    };
  }
}
// 10 11 12 13 14 15
// a  b  c  d  e  f

// fa 15 * 16 + 10 = 250
// 00 0
// 22 2 * 16 + 2 = 34

console.log(hex2Rgb("#fa0022")); // 250 0 34
console.log(hex2Rgb("#f02")); // 255 0 34
