const addBtn = document.querySelector("#addBtn");
const expenseType = document.querySelector("#expenseType");
const amount = document.querySelector("#amount");
const paidCheck = document.querySelector("#paidCheck");
const total = document.querySelector(".total");
const myList = document.querySelector(".list");

let totalExpense = 0;

addBtn.addEventListener("click", addExpenses);
myList.addEventListener("click", handleClick);

function addExpenses(event) {
  event.preventDefault();
  if (!amount.value || !expenseType.value) {
    alert("Fill inputs");
    return;
  }

  const listItem = document.createElement("div");
  listItem.classList.add("list-item");
if(paidCheck.checked){listItem.classList.add("paid")}


  listItem.innerHTML = `
            <h2>${expenseType.value}</h2>
            <h3>€<span>${amount.value}</span> </h3>
            <div class="buttons">
                <img id="paid" src="images/payment.png">
                <img id="dlt" src="images/delete.png">
            </div>
`;
  myList.appendChild(listItem);

  totalExpense += parseInt(amount.value);
  total.innerText = totalExpense;

  expenseType.value = "";
  amount.value = "";
  paidCheck.checked=false;
}

function handleClick(event) {
  const myItem = event.target;
  if (myItem.id === "dlt") {
    let deletedItem = myItem.parentElement.parentElement;
    totalExpense -= parseInt(deletedItem.querySelector("span").innerText);
    total.innerText = totalExpense;
    deletedItem.classList.add("fall");
    deletedItem.addEventListener("transitioned", () => {
      deletedItem.remove();
    });
  }
}
