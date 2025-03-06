let jsonData = '{"name": "Alice", "age": 25, "city": "Bangkok"}';

let obj = JSON.parse(jsonData);
console.log(obj);

let jsonString = JSON.stringify(obj);
console.log(jsonString);