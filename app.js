//  Reused Function
function funElementId(id) {
  return document.getElementById(id);
}

// Calculate button
let serial = 0;
const calculateBtn = document.getElementById("calculate");
calculateBtn.addEventListener("click", function () {
  const income = parseFloat(funElementId("income").value);
  const softwareCost = parseFloat(funElementId("software").value);
  const courseCost = parseFloat(funElementId("courses").value);
  const internetCost = parseFloat(funElementId("internet").value);

  if (isNaN(income) || income <= 0) {
    return funElementId("income-error").classList.remove("hidden");
  }
  if (isNaN(softwareCost) || softwareCost <= 0) {
    return funElementId("software-error").classList.remove("hidden");
  }
  if (isNaN(courseCost) || courseCost <= 0) {
    return funElementId("courses-error").classList.remove("hidden");
  }
  if (isNaN(internetCost) || internetCost <= 0) {
    return funElementId("internet-error").classList.remove("hidden");
  }

  const expenses = softwareCost + courseCost + internetCost;
  const totalBalance = income - expenses;

  if (income < expenses) {
    return funElementId("logic-error").classList.remove("hidden");
  } else {
    funElementId("logic-error").classList.add("hidden");
    funElementId("total-expenses").innerText = expenses.toFixed(2);
    funElementId("balance").innerText = totalBalance.toFixed(2);

    const result = funElementId("results").classList.remove("hidden");
  }

  serial++;
  const historyList = funElementId("history-list");
  const div = document.createElement("div");
  div.innerHTML = `
   <div class="border-l-2 p-2 rounded-md border-l-indigo-500 bg-white">
   <p class="text-xs font-bold">
   <span class="text-indigo-500">Serial:</span> ${serial}</p>
   <p class="text-xs font-semibold text-slate-500">
   <span class="text-stone-600">Date:</span> ${new Date().toLocaleDateString()}</p>
   <p class="text-xs font-semibold text-slate-500">Income: 
   <span class="text-gray-700">$ ${income.toFixed(2)}</span></p>
   <p class="text-xs font-semibold text-slate-500">Expenses: 
   <span class="text-gray-700">$ ${expenses.toFixed(2)}</span></p>
   <p class="text-xs font-semibold text-slate-500">Balance: 
   <span class="text-gray-700">$ ${totalBalance.toFixed(2)}</span></p>
   </div>
   `;
  historyList.insertBefore(div, historyList.firstChild);
});

// Savings Button
const calculateSavings = funElementId("calculate-savings");
calculateSavings.addEventListener("click", function () {
  const income = parseFloat(funElementId("income").value);
  const softwareCost = parseFloat(funElementId("software").value);
  const courseCost = parseFloat(funElementId("courses").value);
  const internetCost = parseFloat(funElementId("internet").value);
  const savings = parseFloat(funElementId("savings").value);

  if (isNaN(savings) || savings <= 0) {
    return funElementId("savings-error").classList.remove("hidden");
  }

  const expenses = softwareCost + courseCost + internetCost;
  const totalBalance = income - expenses;
  const totalSavings = (totalBalance * savings) / 100;
  funElementId("savings-amount").innerText = totalSavings.toFixed(2);

  const remaining = totalBalance - totalSavings;
  funElementId("remaining-balance").innerText = remaining.toFixed(2);
});

// Assistant tab toggle
funElementId("assistant-tab").addEventListener("click", function () {
  this.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  this.classList.remove("text-gray-600");
  funElementId("history-tab").classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  funElementId("history-tab").classList.add("text-gray-600");
  funElementId("expense-form").classList.remove("hidden");
  funElementId("results").classList.add("hidden");
  funElementId("history-section").classList.add("hidden");
});

// History tab toggle

funElementId("history-tab").addEventListener("click", function () {
  this.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  this.classList.remove("text-gray-600");
  funElementId("assistant-tab").classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  funElementId("assistant-tab").classList.add("text-gray-600");

  funElementId("expense-form").classList.add("hidden");
  funElementId("results").classList.remove("hidden");
  funElementId("history-section").classList.remove("hidden");
});

// Imediate Input_box Error checking...

const income = funElementId("income");
income.addEventListener("input", function (e) {
  if (e.target.value <= 0) {
    return funElementId("income-error").classList.remove("hidden");
  } else {
    return funElementId("income-error").classList.add("hidden");
  }
});

const softwareCost = funElementId("software");
softwareCost.addEventListener("input", function (e) {
  if (e.target.value <= 0) {
    return funElementId("software-error").classList.remove("hidden");
  } else {
    return funElementId("software-error").classList.add("hidden");
  }
});

const courseCost = funElementId("courses");
courseCost.addEventListener("input", function (e) {
  if (e.target.value <= 0) {
    return funElementId("courses-error").classList.remove("hidden");
  } else {
    return funElementId("courses-error").classList.add("hidden");
  }
});

const internetCost = funElementId("internet");
internetCost.addEventListener("input", function (e) {
  if (e.target.value <= 0) {
    return funElementId("internet-error").classList.remove("hidden");
  } else {
    return funElementId("internet-error").classList.add("hidden");
  }
});

const savings = funElementId("savings");
savings.addEventListener("keyup", function (e) {
  if (e.target.value <= 0 || e.target.value > 100) {
    return funElementId("savings-error").classList.remove("hidden");
  } else {
    return funElementId("savings-error").classList.add("hidden");
  }
});
