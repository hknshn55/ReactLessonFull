// === Evcil Hayvanlar ve Değişkenler Üzerine Alıştırmalar ===

// 1. "petDog" adında bir değişken oluşturun ve içerisine "Rex" değerini atayın.
let petDog = "Rex";

// 2. "petCat" adında bir değişken tanımlayın ve içerisine "Pepper" değerini atayın.
let petCat = "Pepper";

// 3. "petDog" değişkenini console.log ile yazdırın.
console.log(petDog);

// 4. "petCat" değişkenini de console.log ile yazdırın.
console.log(petCat);

// 5. Konsola "Evcil köpeğimin adı: " ifadesini ve hemen ardından petDog değişkenini yazdırın.
petDog = "Evcil köpeğimin adi: " + petDog;
console.log(petDog);

// 6. Konsola "Evcil kedimin adı: " ifadesini ve hemen ardından petCat değişkenini yazdırın.
console.log("Evcil kedimin adi : "+petCat);

// 7. "catSound" adında yeni bir değişken oluşturun ve içine "mırrrr" string'ini yazın.
let catSound = "mirrr";

// 8. "dogSound" adında başka bir değişken tanımlayın ve içerisine "havv" string'ini atayın.
let dogSound = "havv";

// 9. Konsola önce petDog değişkenini, sonra dogSound değişkenini ve en sona "diyor" ifadesini yazdırın.
console.log(petDog + " " + dogSound+" diyor")


// 10. Benzer şekilde önce petCat, sonra catSound ve sonra "diyor" ifadesini console.log ile yazdırın.
console.log(petCat+" "+catSound+" diyor");


// 11. catSound değişkenini güncelleyin ve içerisine bu kez "miyav" string'ini yazın.
catSound = "miyav";


// 12. Konsola şu şekilde yazdırın:
//     - Önce petCat
//     - Sonra catSound
//     - Sonra "demeye başladı"
//     - Son olarak tekrar catSound
// console.log(... + " " + ... + " demeye başladı. " + ...)
console.log(petCat+" "+catSound+" demeye basladi "+ catSound);
