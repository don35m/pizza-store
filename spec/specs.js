describe('Order', function() {
  it("creates a new order with given specs", function() {
    var testOrder = new Order(1,"small",["pepperoni"]);
    expect(testOrder.quantity).to.equal(1);
    expect(testOrder.pizzaSize).to.equal("small");
    expect(testOrder.topping).to.eql(["pepperoni"]);
  });

});

describe('Order.cost', function() {
  it("charges $6 for a basic small one topping pizza", function() {
    var testOrder = new Order(1,"small",["pepperoni"]);
    expect(testOrder.cost()).to.equal(6);
  });

  it("charges $8 for a basic medium one topping pizza", function() {
    var testOrder = new Order(1,"medium",["pepperoni"]);
    expect(testOrder.cost()).to.equal(8);
  });

  it("charges $10 for a basic largre one topping pizza", function() {
    var testOrder = new Order(1,"large",["pepperoni"]);
    expect(testOrder.cost()).to.equal(10);
  });

});
