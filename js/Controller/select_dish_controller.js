var SelectDishController = function(view, model) {
	
	dishLinks = function(view) {
		$('.dishObjectFrame').each(function() {
			$(this).click(function() {
				id = $(this).attr("id");
				//alert(id);
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
		view.cancelSearchButton.hide();
		view.dishList(view.dishListContainer, model, view.types.val());
		dishLinks(view);
	}

	view.types.change(loadDishList);

	view.searchButton.click(function() {
		if (filter = view.searchBox.val()) {
			dishType = view.types.val();
			results = model.getAllDishes(dishType, filter);
			view.searchResults.html("Found dishes: " + results.length);
			view.dishListContainer.empty();
			view.dishList(view.dishListContainer, model, dishType, filter);
			view.cancelSearchButton.show();
		}
	});

	view.searchBox.keypress(function(event) {
		if (event.which === 13) { // om retur/enter trycks i sökfältet
			view.searchButton.click();
		}
	});

	view.cancelSearchButton.click(loadDishList);

	view.cancelSearchButton.hide();
	dishLinks(view);

}