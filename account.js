// const moment = require("moment");
// class Account {
//   #amount;
//   #account_id;

//   constructor(name, amount, account_id) {
//     this.name = name;
//     this.#amount = amount;
//     this.#account_id = account_id;
//   }

//   BallansTekshir() {
//     console.log(`Sizning hisobingizdagi qoldiq:${this.#amount}`);
//     return this.#amount;
//   }
//   pulYechish(amount) {
//     if (this.#amount > amount) {
//       this.#amount -= amount;
//       console.log(`Hisob ${amount} yechildi va qoldiq ${this.#amount}$`);
//     } else {
//       console.log(`Sizning balansingizdagi pul yetarli emas: ${this.#amount}$`);
//     }
//   }

//   pulQoshish(amount) {
//     this.#amount += amount;
//     console.log(`Hisobingiz toldirildi, hisobingiz ${this.#amount} ga teng`);
//   }
//   malumotlarniChiqar() {
//     console.log(
//       `Salom hurmatli ${this.name} sizning hisobingiz ${this.#amount} ga teng`
//     );
//     console.log(`Hisob raqamingiz: ${this.#account_id}`);
//   }
//   static tanishtir() {
//     console.log("Bu class accountlarni yasash  uchun xizmat qiladi  ");
//   }
//   static tellMeTime() {
//     console.log(`Hozirgi vaqt ${moment().format("YYYY MM DD HH : mm : ss")}`);
//   }
// }
// module.exports = Account;

// TASK-D
// const moment = require("moment");
// class Account {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   nonSotish(amount, product1) {
//     if (this.non > amount) {
//       this.non -= amount;
//       console.log(
//         ` bugun ${product1} ${amount}sotildi va magazinda ${this.non}ta qoldi`
//       );
//     }
//   }

//   lagmonSotish(amount, product) {
//     if (this.lagmon > amount) {
//       this.lagmon -= amount;
//       console.log(
//         ` bugun ${product} ${amount}sotildi va magazinda ${this.lagmon}ta qoldi`
//       );
//     }
//   }
//   colaSotish(amount, product) {
//     if (this.cola > amount) {
//       this.cola -= amount;
//       console.log(
//         ` bugun ${product} ${amount}sotildi va magazinda ${this.cola}ta qoldi`
//       );
//     }
//   }
//   nonQabul(amount, product) {
//     this.non += amount;
//     {
//       console.log(
//         ` bugun ${product} ${amount}ta kirib keldi  ${this.non}ta boldi`
//       );
//     }
//   }
//   lagmonQabul(amount, product) {
//     this.lagmon += amount;
//     {
//       console.log(
//         ` bugun ${product} ${amount}ta kirib keldi  ${this.lagmon}ta boldi`
//       );
//     }
//   }
//   colaQabul(amount, product) {
//     this.cola += amount;
//     {
//       console.log(
//         ` bugun ${product} ${amount}ta kirib keldi  ${this.cola}ta boldi`
//       );
//     }
//   }

//   qoldiq() {
//     console.log(
//       ` hozirda ${moment().format(" HH:mm")}da  ${this.non}ta non, ${
//         this.lagmon
//       } ta lagmon va ${this.cola}ta cola mavjud`
//     );
//     return;
//   }
// }
// module.exports = Account;
