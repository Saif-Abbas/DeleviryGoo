let obj = {};
let orders = []

function pushItemToArray(name, price, imagePath) {
  obj.name = name;
  obj.price = price;
  obj.imagePath = imagePath;
  orders.push(obj);
  window.localStorage.setItem("orders", JSON.stringify(orders));
  obj = {};
}