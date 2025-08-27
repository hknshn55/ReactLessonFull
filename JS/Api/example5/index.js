/**
Challenge: 

Butona tıklandığında, Bored API'yi çağırın
(URL: https://bored.api.lewagon.com/api/activity/) ve h4'ü "Yapacak bir şeyler bulun", API'den gelen etkinlikle değiştirin

*/

document.getElementById("get-activity").addEventListener("click",() => {
 
    fetch("https://bored.api.lewagon.com/api/activity/")
    .then(res => res.json())
    .then(data => {
        console.log(data.activity);
        document.getElementById("activity").textContent = data.activity
    })
})