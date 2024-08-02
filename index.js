//Task 1

console.log("Task-1");

const user = {
  hobby: "chess",
  premium: true,
};

user.mood = "happy";

user.hobby = "skydiving";

user.premium = false;

for (const key in user) {
  const content = `${key}: ${user[key]}`;
  console.log(content);
}

//Task 2

console.log("Task-2");

const obj = {
  key1: 1,
  key2: 2,
  key3: 3,
  key4: 4,
  key5: 5,
  countProps(obj) {
    const objKeysArray = Object.keys(obj).length - 1;
    console.log(objKeysArray);
  },
};

obj.countProps(obj);

//Task 3

console.log("Task-3");

const workers = {
  novel: 12,
  anastasia: 7,
  kirill: 15,
  vadim: 6,
  christina: 13,
};

const findBestEmployee = (employees) => {
  let maxTasks = 0;
  let bestEmployee;
  const employeesEntriesArray = Object.entries(employees);

  for (const [name, tasks] of employeesEntriesArray) {
    if (maxTasks < tasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }

  console.log(bestEmployee);
};

findBestEmployee(workers);

//Task 4

console.log("Task-4");

const salaryOfWorkers = {
  george: "12000грн",
  catherine: "30000грн",
  paul: "24500грн",
  mykola: "14600грн",
};

const countTotalSalary = (salaryOfEmployees) => {
  let totalNumberOfSalary = 0;

  for (let salaryOfWorker in salaryOfEmployees) {
    let numberOfSalary = parseInt(salaryOfEmployees[salaryOfWorker]);
    totalNumberOfSalary += numberOfSalary;
  }

  const totalNumberOfSalaryString = `${totalNumberOfSalary} грн`;

  console.log(totalNumberOfSalaryString);
};

countTotalSalary(salaryOfWorkers);

//Task 5

console.log("Task-5");

const objects = [
  {
    userName: "Catty",
    age: 21,
    work: "freelancer",
    home: "France",
  },
  {
    userName: "John",
    age: 18,
    work: "cashier",
    home: "USA",
  },
  {
    userName: "Amanda",
    age: 24,
    work: "doctor",
    home: "Germany",
  },
];

const getAllPropValues = (arr, prop) => {
    let arrValues = [];

    for (let object of arr) {
        arrValues.push(object[prop]);
    }

    console.log(arrValues);
}

getAllPropValues(objects, ["work"]);

//Task 6

console.log("Task-6");

const products = [
  {
    productsName: "Pear",
    productsPrice: "34грн",
    productsQuantity: 4,
  },
  {
    productsName: "Kiwi",
    productsPrice: "40",
    productsQuantity: 5,
  },
  {
    productsName: "Watermelon",
    productsPrice: "120грн",
    productsQuantity: 2,
  },
];

const calculateTotalPrice = (allProducts, productName) => {
  let productTotalPrice = 0;

  for (let product of allProducts) {
    if (productName === product.productsName) {
      let productTotalPriceNumber = parseInt(product.productsPrice);
      productTotalPrice = productTotalPriceNumber * product.productsQuantity;
    }
  }

  productTotalPrice = `${productTotalPrice} грн`;

  console.log(productTotalPrice);
};

calculateTotalPrice(products, "Kiwi");

//Task 7

console.log("Task-7");

const account = {
  balance: 0,
  transactions: [],

  showBalance() {
    console.log(`Ваш баланс: ${this.balance}$`);
  },

  increaseBalance(amount) {
    this.balance += amount;
    amount = `+${amount}$`;
    this.addTransaction(amount);
  },

  withdrawBalance(amount) {
    this.balance -= amount;
    amount = `-${amount}$`;
    this.addTransaction(amount);
  },

  addTransaction(amount) {
    const transaction = {
      amount: amount,
    };
    
    this.transactions.push(transaction);
  },

  getLastTransaction() {
    const lastTransaction = this.transactions[this.transactions.length - 1];
    return lastTransaction;
  },

  getTransactions() {
    return this.transactions;
  },
}

account.increaseBalance(150);

account.withdrawBalance(25);

account.increaseBalance(125);

account.withdrawBalance(50);

console.log(account.getTransactions());

console.log(account.getLastTransaction());

account.showBalance();



