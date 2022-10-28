const quote = document.querySelector(".quote"); 
authors = document.querySelector(".author .name")
let quotebutton = document.querySelector("button")


function randomQuote(){
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result=>{
        quote.innerText = result.content; 
        authors.innerText = result.author; 
    });
}

quotebutton.addEventListener('click', randomQuote);