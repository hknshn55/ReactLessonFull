const callPromise = fetch('https://swapi.info/api/planets')
callPromise.then((response) => {
   console.log(response);
});