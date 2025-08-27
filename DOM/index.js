const btn = document.getElementById("change")
btn.addEventListener("click",() => {
    const colors = ["pink","orange","aqua","purple","yellow","black","green","white"]
    document.body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]
})
console.log(document);
console.log(document.location.hostname);
console.log(document.location.href);
console.log(document.location.pathname);
console.log(document.location.port);
console.log(document.location.protocol);
// document.location.href = "https://www.google.com"

const btn2 = document.querySelector("#change2");
btn2.addEventListener("dblclick",() => {
      btn2.style.backgroundColor = "red"
})

const btn3 = document.querySelector("#change3");
btn3.addEventListener("mouseover",() => {
       btn3.style.backgroundColor = "red"
})

const btn4 = document.querySelector("#change4");
btn4.addEventListener("mouseleave",() => {
    btn4.style.backgroundColor = "red"
})

// setInterval(()=>{
//     // document.location.href = document.location.href
//     location.reload()
// },1000)

const link = document.querySelector("#navigation")
console.log(link);
link.setAttribute("href","https://www.google.com")
console.log( link.getAttribute("href"));

link.innerText = "www.google.com"
link.textContent = "Google"



function name() {
    console.log(abc);
    
}

name() // undefined
var abc = "asds"
name() // asds


