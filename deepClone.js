const toString = function(obj) {
  return Object.prototype.toString.call(obj);
};

const getRegExp = re => {
  var flags = "";
  if (re.global) flags += "g";
  if (re.ignoreCase) flags += "i";
  if (re.multiline) flags += "m";
  return flags;
};

const deepClone = function(sourceObj) {
  if (sourceObj === null) return sourceObj;
  if (typeof sourceObj !== "object") return sourceObj;
  if (toString(sourceObj) === "[object Array]") {
    return Array.from(sourceObj);
  }
  if (toString(sourceObj) === "[object Date]") {
    return new Date(sourceObj.getTime());
  }
  if (toString(sourceObj) === "[object RegExp]") {
    return new RegExp(sourceObj.source, getRegExp(sourceObj));
  }
  const pro = Object.getPrototypeOf(sourceObj);
  const obj = Object.create(pro);
  console.log(1, obj);
  for (let i in sourceObj) {
    obj[i] = deepClone(sourceObj[i]);
    console.log(2, obj[i]);
  }
  console.log(1, obj);
  return obj;
};

const a = {
  b: {
    c: {
      e: 1,
      f: [1, 3, 4]
    },
    g: function() {},
    t: new RegExp("s", "g")
  }
};

d = deepClone(a);
console.log(d);
console.log(d.b.c === a.b.c);
console.log(d.b.c.f === a.b.c.f);
console.log(d.b.g === a.b.g);
