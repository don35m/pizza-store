describe('Order', function() {
  it("creates a new order with given specs", function() {
    var testOrder = new Order(1,"small",["pepperoni"]);
    expect(testOrder.quantity).to.equal(1);
    expect(testOrder.pizzaSize).to.equal("small");
    expect(testOrder.topping).to.eql(["pepperoni"]);
  });
});

describe('Order.cost', function() {
  it("charges $6 for a basic one topping pizza", function() {
    var testOrder = new Order(1,"small",["pepperoni"]);
    expect(testOrder.cost()).to.equal(6);
  });
});
