const sum = function() {
  let acc = 0;
  for (let i = 0; i < arguments.length; i++) {
    acc += arguments[i];
  }
  return acc;
};

const sum2 = function(...args) {
  let acc = 0;
  for (let i = 0; i < args.length; i++) {
    acc += args[i];
  }
  return acc;
};
// console.log(sum2(1,2,3));

// Function.prototype.myBind = function(context) {
//   const outerThis = this;
//   const bindArgs = Array.from(arguments).slice(1);
//   return () => {
//     const callArgs = Array.from(arguments);
//     return outerThis.apply(context, bindArgs.concat(callArgs));
//   };
// };

Function.prototype.myBind = function(context, ...bindArgs) {
  const outerThis = this;
  return (...callArgs) => {
    return outerThis.apply(context, bindArgs.concat(callArgs));
  };
};

function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      console.log(sum(...numbers));
      return sum(...numbers);
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

Function.prototype.my_curry = function(numArgs) {
  let func = this;
  let numbers = [];

  function _curriedFunc(arg){
    numbers.push(arg);
    if (numbers.length === numArgs) {
      return func(...numbers);
    } else {
      return _curriedFunc;
    }
  }
  return _curriedFunc;
};

const whatever = curriedSum(4);
whatever(5)(30)(20)(1); // => 56
