import { fahrenheit } from "./js/fahrenheit.js";
import { kelvin } from "./js/kelvin.js";
import { reamur } from "./js/reamur.js";

const form = document.querySelector("form");
const input = document.querySelector("#input");
const table = document.querySelector("#suhuTable");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //   const c = Number(input.value);
  //   if (Number.isNaN(c)) return;
  const c = Number(event.target.input.value);
  console.log(c);

  const row = table.insertRow(-1);

  const cell1 = row.insertCell();
  cell1.textContent = c;
  cell1.style.border = "1px solid black";

  const cell2 = row.insertCell();
  cell2.textContent = fahrenheit.hitung(c).toFixed(2);
  cell2.style.border = "1px solid black";

  const cell3 = row.insertCell();
  cell3.textContent = reamur.hitung(c).toFixed(2);
  cell3.style.border = "1px solid black";

  const cell4 = row.insertCell();
  cell4.textContent = kelvin.hitung(c).toFixed(2);
  cell4.style.border = "1px solid black";

  input.value = "";
});
