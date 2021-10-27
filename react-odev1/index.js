import getData from "./app.js";

let user = getData(2);
user.then((users) => console.log(users));
