//ExampleView Object constructor
var ExampleView = function(container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.test = container.find("#test");

	model.setNumberOfGuests(12);
	
	this.numberOfGuests.html(model.getNumberOfGuests());
	
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(200);
	// this.test.html(model.getSelectedDish("starter").name + "<br/>" + 
	// 	model.getSelectedDish("main dish").name + "<br/>" + 
	// 	model.getSelectedDish("dessert").name);
	console.log(model.getFullMenu());
	console.log(model.getTotalMenuPrice());
	model.removeDishFromMenu(1);
	console.log(model.getFullMenu());
}