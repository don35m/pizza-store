function Order(quantity,pizzaSize,topping) {
  this.quantity = quantity;
  this.pizzaSize = pizzaSize;
  this.topping = topping;
}

Order.prototype.cost = function() {
  var total = 0;

  if (this.pizzaSize === "small") {
    total = 6 * this.quantity;
  } else if (this.pizzaSize === "medium") {
    total = 8 * this.quantity;
  } else {
    total = 10 * this.quantity;
  }

  if (this.topping !== undefined) {
    this.topping.forEach(function(toppings) {
      total += 1;
    });
  }
  return total;
}

$(document).ready(function() {
  $("#add-topping").click(function(event) {
    event.preventDefault();
    $("#new-toppings").append(
      '<div class="form-group new-topping">' +
        '<select id="topping">' +
          '<option value="cheese">Cheese</option>' +
          '<option value="pepperoni">Pepperoni</option>' +
          '<option value="sausage">Sausage</option>' +
          '<option value="canadion bacon">Canadion Bacon</option>' +
          '<option value="hamburger">Hamburger</option>' +
          '<option value="chicken">Chicken</option>' +
          '<option value="onion">Onion</option>' +
          '<option value="green peppers">Green Peppers</option>' +
          '<option value="pineapple">Pineapple</option>' +
        '</select>' +
      '</div>')
  });

  $("form#new-order").submit(function(event) {
    event.preventDefault();

    var quantity = parseInt($("input#quantity").val());
    var pizzaSize = $("select#size").val();
    var topping = [];

    $(".new-topping").each(function() {
      topping.push($("select#toppings").val());
    });

    var newOrder = new Order(quantity,pizzaSize,topping);

    $("#order-price").text(newOrder.cost());
  });
});
