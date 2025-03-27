function removeStringValuesLongerThan(num, obj) {
  for(let key in obj)
    if(typeof obj[key]==="number"&&obj[key]>num)
      delete obj[key]
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};

removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
