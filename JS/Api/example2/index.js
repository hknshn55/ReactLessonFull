// API'dan çektiğim kullanıcı isimlerini butona tıkladığımda ekranda görmek istiyorum. Bunun için kodu tekrar gözden geçirmeniz gerekecek

const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', (e) => {
  e.preventDefault();

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => {
      const names = data.map(user => user.name);
      names.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        ul.appendChild(li);
      });
    })
});