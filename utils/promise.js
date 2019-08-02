const PENDING = "pending";
const FULLFILLED = "fullfilled";
const REJECTED = "rejected";

function Promise(excutor) {
  this.onFullfilledCallback = [];
  this.onRejectedCallback = [];

  this.state = PENDING;
  this.value = null;
  this.reason = null;

  const resolve = res => {
    if (this.state === PENDING) {
      this.state = FULLFILLED;
      this.value = res;
      this.onFullfilledCallback.forEach(callback => callback());
    }
  };

  const reject = res => {
    if (this.state === PENDING) {
      this.state = REJECTED;
      this.reason = res;
      this.onRejectedCallback.forEach(callback => callback());
    }
  };

  try {
    excutor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
function resolvePromise(result, resolve, reject) {
  try {
    if (result.constructor === Promise) {
      result.then(res => {
        resolvePromise(res, resolve, reject);
      });
    } else {
      resolve(result);
    }
  } catch (e) {
    reject(e);
  }
}

Promise.prototype.then = function(onFullfilled, onRejected) {
  let newPromise = null;

  newPromise = new Promise((resolve, reject) => {
    if (this.state === PENDING) {
      this.onFullfilledCallback.push(() => {
        setTimeout(() => {
          try {
            let result = onFullfilled(this.value);
            resolvePromise(result, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      });

      this.onRejectedCallback.push(() => {
        setTimeout(() => {
          try {
            let result = onRejected(this.value);
            resolvePromise(result, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      });
    }

    if (this.state === FULLFILLED) {
      setTimeout(() => {
        let result = onFullfilled(this.value);
        resolvePromise(result, resolve, reject);
      });
    }

    if (this.state === REJECTED) {
      setTimeout(() => {
        let result = onRejected(this.value);
        resolvePromise(result, resolve, reject);
      });
    }
  });

  return newPromise;
};

Promise.prototype.catch = function(callback) {
  // 也是调用then方法，给成功的回调传一个null,给失败的回调传入callback
  return this.then(null, callback);
};

Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};

Promise.all = function(items) {
  return new Promise(function(resolve, reject) {
    let res = []; // 用来存储成功函数返回的值
    let num = 0; // 记录都返回成功的数字
    let len = items.length; // 数组的长度
    // 对数组进行遍历
    for (let i = 0; i < len; i++) {
      items[i].then(function(data) {
        res[i] = data;
        if (++num === len) {
          resolve(res);
        }
      }, reject);
    }
  });
};

Promise.race = function(items) {
  return new Promise(function(resolve, reject) {
    for (let i = 0; i < items.length; i++) {
      items[i].then(resolve, reject);
    }
  });
};

Promise.resolve = function(value) {
  return new Promise(function(resolve, reject) {
    resolve(value);
  });
};
Promise.reject = function(reason) {
  return new Promise(function(resolve, reject) {
    reject(reason);
  });
};

export default Promise;