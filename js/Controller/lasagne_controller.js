var LasagneController = function(view, model) {
	view.backButton.click(function() {
		view.container.empty();
		SelectDish(view.container, model);
		$('#ingredientsFrame').remove(); // av oförklarliga skäl måste denna tas bort separat, annars är den kvar
	});

	view.confirmDishButton.click(function() {
		model.addDishToMenu(view.dishID);
		view.container.empty();
		SelectDish(view.container, model);
		$('#ingredientsFrame').remove(); // av oförklarliga skäl måste denna tas bort separat, annars är den kvar
	});
}