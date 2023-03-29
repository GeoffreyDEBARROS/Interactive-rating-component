let ratePage = document.querySelector(".rating");
let thxPage = document.querySelector(".thx");
let buttons = document.querySelectorAll(".rateButton");
let selectedRate = document.getElementById("selectedRate");
let rate = "";

let rateFunction = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      rate = e.target.textContent;
    });
  });

  selectedRate.innerHTML = `You selected ${rate} of 5`;

  submit.addEventListener("click", () => {
    ratePage.style.display = "none";
    thxPage.style.display = "flex";

    rateFunction();
  });
};

rateFunction();
