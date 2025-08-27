const list = document.querySelector("#list")
const searcInput = document.querySelector("input")

searcInput.addEventListener("input", () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            list.innerHTML = ""
            data.forEach(element => {
                if (element.name.toLowerCase().includes(searcInput.value)) {
                    const li = document.createElement("li");
                    li.textContent = element.name 
                    list.appendChild(li)
                }
            });
        })
})