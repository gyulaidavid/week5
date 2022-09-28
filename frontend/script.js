const monthComponent = function (nth, name, days) {
  let daysHtml = "";

  for (let i = 1; i <= days; i++) {
    daysHtml += dayComponent(i);
  }

  return `
        <section id="${name}" class="${nth}">
        
        <time datetime>${name}</time>
        
            ${daysHtml}
        </section>
    `;
};
//    setFullYear(2022);
const yearComponent = function (year) {
  let thisYear = 2022;

  return `
    <time datetime>${year}</time>
    `;
};

const dayComponent = function (dayCount) {
  return `
        <time datetime class="day">${dayCount}</time>    
    `;
};

// console.log("hello");
const rootElement = document.querySelector("#root");
const divCard = document.getElementsByClassName("card");

// rootElement.insertAdjacentHTML("beforeend", "<button>show calendar</button>")

// const buttonElement = rootElement.querySelector("button");
// buttonElement.addEventListener("click" , function(){
// })

rootElement.insertAdjacentHTML("beforeend", monthComponent(1, "January", 31));
card.insertAdjacentHTML("beforeend", yearComponent());
rootElement.insertAdjacentHTML("beforeend", monthComponent(2, "February", 28));
rootElement.insertAdjacentHTML("beforeend", monthComponent(3, "March", 31));

// rootElement.style.color="blue"; NEM SZABAD CSINÁLNI
