// const inquirer = require("inquirer");
// inquirer
//   .prompt([{ type: "input", name: "raqam", message: "raqam kiriting" }])
//   .then((answer) => {
//     console.log("man kiritgan raqam qiymati:", answer.raqam);
//   })
//   .catch((err) => console.log(err));

// const Account = require("./account");

// const validator = require("validator");

// const test = validator.isEmail("hoorwen@gmail.com");
// const test = validator.isIn("");
// console.log("test:", test);

// const { v4: uuidv4 } = require("uuid");
// const random = uuidv4();
// console.log("random:", random);

//                 Modulle package File

// const calculate = require("./hisob.js");

// const natija = calculate.kopayptirish(80, 20);
// console.log("Natija1", natija);
// console.log("******");

// const natija2 = calculate.qoshish(70, 20);
// console.log("Natij2a", natija2);
// console.log("******");

// const natija3 = calculate.ayirish(60, 20);
// console.log("Natij3a", natija3);
// console.log("******");

// const natija4 = calculate.bolish(50, 20);
// console.log("Natija4", natija4);
// console.log("******");

//           Reja

// const Account = require("./account");
// const myAccount = new Account("Rahim", 100000, 123456789);
// Account.tanishtir();
// Account.tellMeTime();
// myAccount.malumotlarniChiqar();
// myAccount.pulQoshish(9000);

// const Account = require("./account");
// const myAccount = new Account(200, 300, 500);

// myAccount.nonSotish(10, "non");
// myAccount.lagmonSotish(40, "lagmon");
// myAccount.colaSotish(20, "cola");
// myAccount.nonQabul(40, "non");
// myAccount.lagmonQabul(40, "lagmon");
// myAccount.colaQabul(40, "cola");
// myAccount.qoldiq();
