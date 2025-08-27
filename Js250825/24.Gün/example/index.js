function product(...items) {
//   const numbers = [a, b, c, d, e]

  return items.reduce(function (acc, number) {
    return acc * number
  }, 1)
}
console.log(product(1,2,3,4,5))
// Rest operatörünü kullanmak için fonksiyonu yeniden düzenleyin. 
// Unutmayın, rest operatörünü kullanan bir argümanın 'rest' olarak adlandırılması *gerekmez*.

function join(array1, array2) {
//   return array1.concat(array2)
  return [...array1,...array2]
}

// Spread operatörünü kullanarak yeniden düzenleyin.
function unshift(array,...rest) {
//   return array.concat(params)
     return [...rest,...array]
}
console.log(unshift([1,2,3,4],5,6,7));


// Yalnızca rest operatörünü kullanarak yeniden düzenleyin