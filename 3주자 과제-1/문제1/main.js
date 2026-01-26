const button = document.getElementById("addBtn");

let num = 0;

const addListItem = () => {
  const list = document.getElementById("itemList");
  num++;
  list.insertAdjacentHTML("beforeend", `<li>아이템 ${num}</li>`);
};

button.addEventListener("click", addListItem);
