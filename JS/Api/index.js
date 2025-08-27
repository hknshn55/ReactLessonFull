const callPromise = fetch('https://swapi.info/api/planets')
callPromise.then((response) => {
   return response.json();
}).then((data) => { console.log(data);
 });
