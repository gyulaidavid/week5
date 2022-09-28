const monthComponent = function (nth, name, days){
   let daysHtml = "";

    for (let i = 1; i <=days; i++ ){
        daysHtml += dayComponent(i);
    }

    return`
        <section id="${nth}" class="${name}">
            <h2>${name}</h2>
            ${daysHtml}
        </section>
    `

};

const dayComponent = function(dayCount) {
    return `
        <div class="day">${dayCount}</div>    
    `
};

console.log("hello");
const rootElement = document.querySelector("#root");

rootElement.insertAdjacentHTML("beforeend", "<button>show calendar</button>")

// const buttonElement = rootElement.querySelector("button");
// buttonElement.addEventListener("click" , function(){
// })

rootElement.insertAdjacentHTML("beforeend", monthComponent(1, "January" , 31));
rootElement.insertAdjacentHTML("beforeend", monthComponent(2, "February" , 28));
rootElement.insertAdjacentHTML("beforeend", monthComponent(20, "Pityuhónap" , 9));
// rootElement.style.color="blue"; NEM SZABAD CSINÁLNI