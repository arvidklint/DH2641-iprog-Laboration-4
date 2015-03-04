$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	model.createMenuArray();
	model.setNumberOfGuests(3);
	
	//And create the needed controllers and views
	var homeView = new HomeView($("#application"), model);

	var homeController = new HomeController(homeView, model);

});