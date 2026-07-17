const form = document.querySelector("form");
const amount_input = document.getElementById("amount");
const expense_input = document.getElementById("expense");
const category_input = document.getElementById("category");

// Selecionar os elementos da lista
const expenseList = document.querySelector("ul");

// utils
const formatToBRL = (value) => {
  const cleanValue = String(value.replace(/[^0-9]/g, ""));
  const centValue = Number(cleanValue) / 100;
  return centValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

// Validando inputs
amount_input.oninput = () => {
  let value = formatToBRL(amount_input.value);
  amount_input.value = value;
};

//Formulario
form.onsubmit = (event) => {
  event.preventDefault();

  const newExpense = {
    id: new Date().getTime(),
    expense: expense_input.value,
    category_id: category_input.value,
    category_name: category_input.options[category_input.selectedIndex].text,
    amount: amount_input.value,
    created_at: new Date(),
  };
  console.log("🚀 ~ newExpense:", newExpense);
  expenseAdd(newExpense);
};

// Adicionar despesa
const expenseAdd = (newExpense) => {
  try {
    //Criar o elemento li
    const expenseItem = document.createElement("li");
    expenseItem.classList.add("expense");

    // Criar o icone e categoria
    const expenseIcon = document.createElement("img");
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`);
    expenseIcon.setAttribute("alt", newExpense.category_name);

    //Criando as informações
    const expenseInfo = document.createElement("div");
    expenseInfo.classList.add("expense-info");
    const expenseName = document.createElement("strong");
    expenseName.textContent = newExpense.expense;

    const expenseCategory = document.createElement("span");
    expenseCategory.textContent = newExpense.category_name;

    //Adicionando o valor
    const expenseAmmount = document.createElement("span");
    expenseAmmount.classList.add("expense-amount");
    expenseAmmount.innerHTML = `<small>R$</small>${newExpense.amount
      .toUpperCase()
      .replace("R$", "")}`;

    // Icone de remover
    const removeItem = document.createElement("img");
    removeItem.classList.add("remove-icon");
    removeItem.setAttribute("src", "img/remove.svg");
    removeItem.setAttribute("alt", "remover");

    //Unindo os items
    expenseItem.append(expenseIcon, expenseInfo, expenseAmmount, removeItem);

    expenseList.append(expenseItem);
    expenseInfo.append(expenseName, expenseCategory);
  } catch (error) {
    alert("Não foi possível adicionar a lista de despesas");
    console.log(error);
  }
};

const onRemoveItem = (id) => {

}
