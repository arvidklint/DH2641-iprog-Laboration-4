var DinnerOverview = function(container, model) {
	// header(container);
	// before(container);
	// secondBar(model);
	// dishList(model);
	// after(container);
	this.dinnerOverviewContents = function(container, model) {
		appString = '<div id="dinnerOverviewMain">';
			appString += '<div class="container" id="dinnerOverviewObjects">';
				appString += '<div class="row">';
					// model.addDishToMenu(1);
					// model.addDishToMenu(100);
					// model.addDishToMenu(200);
					fullMenu = model.getFullMenu();
					for (key in fullMenu) {
						appString += '<div class="col-sm-3 col-xs-4 col-centered dinnerOverviewObject">';
							appString += dishThumb(fullMenu[key]);
							appString += '<div class="priceFrame">';
								appString += '<span class="priceAtBottom">';
									appString += (model.getDishPrice(fullMenu[key]["id"]) * model.getNumberOfGuests()).toFixed(2) + " SEK";
								appString += '</span>';
							appString += '</div>';
						appString += '</div>';
					}
					appString += '<div class="col-sm-3 col-xs-4 col-centered" id="total">';
						appString += '<div class="hiddenThumbnail">';
							appString += 'Total:';
						appString += '</div>';
						appString += '<div class="totalPriceFrame">';
							appString += '<span class="priceAtBottom">';
								appString += (model.getTotalMenuPrice() * model.getNumberOfGuests()).toFixed(2) + " SEK";
							appString += '</span>';
						appString += '</div>';
					appString += '</div>';
				appString += '</div>';

				appString += '<div id="dinnerOverviewDivider"/>';

				appString += '<button class="btn" id="printButton">Print Full Recipe</button>';
			appString += '</div>';
		appString += '</div>';

		container.append(appString);
	}

	// this.update = function(model, arg) {
	// 	this.dinnerOverviewContainer.remove();
	// 	this.dinnerOverviewContents(this.container, model);
	// }

	this.declareWidgets = function(container) {
		this.continer = container;
		this.dinnerOverviewContainer = container.find("#dinnerOverviewMain");
		this.printButton = container.find("#printButton");
	}

	this.dinnerOverviewContents(container, model);
	this.declareWidgets(container);
	controller = new DinnerOverviewController(this, model);
}

