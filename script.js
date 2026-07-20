const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");
const totalAmount = document.querySelector("aside header p span");
const totalValueAmount = document.querySelector("aside header h2");

// Selecionar os elementos da lista
const expenseList = document.querySelector("ul");

// utils
const formatToBRL = (value) => {
  if (typeof value === "string") {
    const cleanValue = String(value.replace(/[^0-9]/g, ""));
    const centValue = Number(cleanValue) / 100;
    return centValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

// Validando inputs
amount.oninput = () => {
  let value = formatToBRL(amount.value);
  amount.value = value;
};

//Formulario
form.onsubmit = (event) => {
  event.preventDefault();

  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
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

    updateTotals();
    onClearField();
  } catch (error) {
    alert("Não foi possível adicionar a lista de despesas");
    console.log(error);
  }
};

// Remover despesa
expenseList.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-icon")) {
    const item = event.target.closest(".expense");
    item.remove();
  }
  updateTotals();
});

// Atualizar o valor das despesas
const updateTotals = () => {
  try {
    const items = expenseList.children;
    totalAmount.textContent = `${items.length} ${items.length > 1 ? "despesas" : "despesa"}`;

    let total = 0;
    for (let item = 0; item < items.length; item++) {
      const itemAmount = items[item].querySelector(".expense-amount");

      let value = itemAmount.textContent
        .replace(/[^\d,]/g, "")
        .replace(",", ".");

      //falback
      if (isNaN(value)) {
        return "O valor da despesa não é um número válido";
      }

      value = parseFloat(value);
      total += value;
    }
    totalValueAmount.textContent = `${formatToBRL(total)}`;
  } catch (error) {
    console.log(error);
    alert("Não foi possivel atualizar os totais");
  }
};

// Limpar campos após criar uma despesa
const onClearField = () => {
  amount.value = "";
  expense.value = "";
  category.value = "";

  expense.focus()
};
