

const section = document.querySelector(".COUNTER-WRAPPER");
const counters = document.querySelectorAll(".counter-text");
var condication = false;
window.addEventListener("scroll", () =>{
    if(window.scrollY >= section.offsetTop){
       
        if(!condication){
            counters.forEach(counter =>{
                var start_value = 0;
                var number = counter.getAttribute("data-count");
                var x = setInterval(() => {
                    counter.textContent = '';
                    start_value = start_value + 1
                    counter.textContent = start_value;
                   if(start_value == number){
                    clearInterval(x)
                   }
                }, 10);

            })
        }

        condication = true
    }
})