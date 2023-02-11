function getItems() {
    orders = JSON.parse(window.localStorage.getItem("orders"));
    let ordersString = [];
    if (orders === null) {
      ordersString.push(`<tr>
      <td>A beautiful picture will be here.</td>
      <td>Your yummy yummy food name.</td>
      <td>A price of that yummy yummy food.</td>
      </tr>`)
  } else {
      orders.forEach((order) => {
          ordersString.push(`<tr>
          <td><img style="width: 100px; height: 100px;" src=${order.imagePath}></td>
          <td>${order.name}</td>
          <td>${order.price}</td>
          </tr>`);
        });
  }
      document.getElementById('startTable').innerHTML = ordersString;
  }
  getItems();
  
  function checkOut() {
      if (orders === null) {
          alert("You don't have anything in here -,-")
      } else {
          alert("Your order has been sent to the kitchen.\n Enjoy your time while it get to you.");
      }
  }