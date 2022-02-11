// 1. select all element
const form = document.querySelector("#new-item-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");

// 2. add a new element
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // 0. creat item
  let item = document.createElement("div");
  item.innerText = input.value;

  // 1. add item
  item.classList.add("list-item");
  list.appendChild(item);

  // 2. clear input
  input.value = "";

  console.log(item);
  // 3. remove list item
  item.addEventListener("click", () => {
    item.remove();
  });
});
