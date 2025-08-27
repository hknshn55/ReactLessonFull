/**
Challenge: 

1. Bored API'den rastgele bir etkinlik getirin
url: https://bored.api.lewagon.com/api/activity/

2. Etkinlik/activity metnini tarayıcı üzerinde görüntüleyin
*/

fetch('https://bored.api.lewagon.com/api/activity/')
  .then(response => response.json())
  .then(data => {
    const header = document.querySelector("#activity-name")
    header.textContent = data.activity
  })
