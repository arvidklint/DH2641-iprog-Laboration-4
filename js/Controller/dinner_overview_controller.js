var DinnerOverviewController = function(view, model) {
	view.printButton.click(function() {
		view.container.empty();
		SecondBar(view.container, model);
		DinnerPreparation(view.container, model);
	});
}