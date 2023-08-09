const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const day = new Date();
dayNames[day.getDay()];

const addTodo = document.querySelector(".add-todo");
const addBtn = document.querySelector(".add-btn");
const ul = document.querySelector(".content");
const li = document.querySelector(".lis");
const delAll = document.querySelector(".del-all");
const markAll = document.querySelector(".lt-all");
const header = document.querySelector(".header");

header.innerText = `Happy ${dayNames[day.getDay()]}`;

addBtn.addEventListener("click", () => {
  if (addTodo.value === "") {
    return;
  }

  const div = document.createElement("div");
  div.classList.add("div-li");
  div.innerHTML = ` <li class="lis">${addTodo.value} <i class="fa-solid fa-x"></i></li>`;
  ul.appendChild(div);
  addTodo.value = "";
});

ul.addEventListener("click", (e) => {
  if (e.target.className === "fa-solid fa-x") {
    e.target.parentElement.parentElement.remove();
  }
});

addTodo.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

delAll.addEventListener("click", (e) => {
  const ulLi = document.querySelectorAll(".content div");
  ulLi.forEach((e) => {
    e.remove();
  });
});

markAll.addEventListener("click", (e) => {
  const ulLi = document.querySelectorAll(".content div");
  ulLi.forEach((e) => {
    e.classList.toggle("line-th");
  });
});

ul.addEventListener("click", (e) => {
  if (e.target.className === "lis") {
    e.target.parentElement.classList.toggle("line-th");
  }
});
