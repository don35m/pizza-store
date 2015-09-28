function Order(quantity,pizzaSize,topping){
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
  } else if (this.pizzaSize === "large") {
    total = 10 * this.quantity;
  }
  return total;
}
