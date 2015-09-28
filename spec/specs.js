describe('Order', function() {
  it("creates a new order with given specs", function() {
    var testOrder = new Order(1,"small",[]);
    expect(testOrder.quantity).to.equal(1);
    expect(testOrder.pizzaSize).to.equal("small");
    expect(testOrder.topping).to.eql([]);
  });

});

describe('Order.cost', function() {
  it("charges $6 for a basic small one topping pizza", function() {
    var testOrder = new Order(1,"small",[]);
    expect(testOrder.cost()).to.equal(6);
  });

  it("charges $8 for a basic medium one topping pizza", function() {
    var testOrder = new Order(1,"medium",[]);
    expect(testOrder.cost()).to.equal(8);
  });

  it("charges $10 for a basic largre one topping pizza", function() {
    var testOrder = new Order(1,"large",[]);
    expect(testOrder.cost()).to.equal(10);
  });

  it("charges corretly based on how many pizza's ordered", function() {
    var testOrder = new Order(2,"large",[]);
    expect(testOrder.cost()).to.equal(20);
  });

  it("charges 1$ extra for additional topping", function() {
    var testOrder = new Order(1,"large",["cheese"]);
    expect(testOrder.cost()).to.equal(11);
  });

  it("charges 3$ extra for additional topping", function() {
    var testOrder = new Order(1,"large",["cheese","pepperoni","sausage"]);
    expect(testOrder.cost()).to.equal(13);
  });

  it("alerts user if no size is picked", function() {
    var testOrder = new Order(1,[]);
    expect(testOrder.cost()).to.equal(0);
  });

});
