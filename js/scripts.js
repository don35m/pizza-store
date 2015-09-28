function Order(quantity,pizzaSize,topping){
  this.quantity = quantity;
  this.pizzaSize = pizzaSize;
  this.topping = topping;
}

Order.prototype.cost = function() {
  var total = 0;

  if (this.pizzaSize === "small") {
    total = 6 * this.quantity;
  }
  return total;
}
