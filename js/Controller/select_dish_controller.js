var SelectDishController = function(view, model) {
	
	this.dishLinks = function(view) {
		//console.log("dishLinks körs");
		$('.dishObjectFrame').each(function() {
			$(this).click(function() {
				id = $(this).attr("id");
				view.container.empty();
				LasagneView(view.container, model, id);
			});
		});
	}

	function searchDish(searchString, dishType) {
		alert(searchString + " " + dishType);
	}

	function loadDishList() {
		view.searchResults.empty();
		model.getAllDishes(view.types.val(), view.searchBox.val());
	}

	view.types.change(loadDishList);

	view.searchButton.click(function() {
		if (filter = view.searchBox.val()) {
			dishType = view.types.val();
			model.getAllDishes(dishType, filter);
			// view.dishListContainer.empty();
			// view.dishList(view.dishListContainer, model, dishType, filter);
			view.cancelSearchButton.show();
		}
	});

	view.searchBox.keypress(function(event) {
		if (event.which === 13) { // om retur/enter trycks i sökfältet
			view.searchButton.click();
		}
	});

	view.cancelSearchButton.click(function() {
		view.cancelSearchButton.hide();
		view.searchBox.val("");
		loadDishList();
	});

	view.cancelSearchButton.hide();
	this.dishLinks(view);

}