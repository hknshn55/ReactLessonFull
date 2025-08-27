/*
Verilen url'den data alabilmek için fetch yöntemini kullanın.Aldığımız veriyi konsola yazdıralım.
https://jsonplaceholder.typicode.com/todos/1
*/

const callPromise = fetch("https://jsonplaceholder.typicode.com/todos/1")

callPromise
.then((response) => response.json())
.then((data) => { console.log(data); })

