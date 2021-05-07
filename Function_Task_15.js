function moveKeyValue(object) {
  for (let key in object) {
    if (object[object[key]] !== undefined) {
      object[object[key]] = [...object[object[key]], key];
    } else {
      object[object[key]] = key;
    }
    delete object[key];
  }
  return object;
}
console.log(moveKeyValue({ a: "1", b: "2", c: "2", d: "2" }));
