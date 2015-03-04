var SelectDish = function(container, model, dishType) {
	dishType = dishType || "starter";

	this.dishChooser = function(container, dishType) {
		appString = '<div class="row">';
			appString += '<div class="col-xs-12" id="dishChooserHeadline">';
				appString += '<p id="select_dish">Select dish</p>';
			appString += '</div>';
		appString += '</div>';
		appString += '<div class="row">'
			appString += '<div class="col-xs-12" id="dishChooserSearchFrame">';
				appString += '<input type="search" placeholder="Enter key words" name="search" id="searchBox"/>';
				appString += '<button class="btn" id="cancelSearch">X</button>';
				appString += '<button class="btn" id="searchButton">Search</button>';
				appString += '<select id="types">';
					appString += 	'<option value="starter">Starter</option>' + 
									'<option value="main dish">Main</option>' + 
									'<option value="dessert">Dessert</option>';
				appString += '</select>';
				appString += '<span id="searchResults"></span>';
			appString += '</div>';
		appString += '</div>';

		container.append(appString);
	}

	this.dishList = function(container, model, selectedType, filter) {
		container.empty();

		dishListStr = '';
		this.foundDishes = model.getAllDishes(selectedType, filter);
		for (i = 0; i < this.foundDishes.length; i++) {
			dishListStr += '<div class="col-md-3 col-sm-4 col-xs-6 dishObjectFrame" id="' + this.foundDishes[i]["id"] + '">';
				dishListStr += dishThumb(this.foundDishes[i]);
				dishListStr += '<div class="dishDescription">';
					dishListStr += shortenDescription(this.foundDishes[i]["description"]);
				dishListStr += '</div>';
			dishListStr += '</div>';
		}

		container.append(dishListStr);
		model.setPendingPrice(0);
	}

	this.shortenDescription = function(description) {
		// Tar emot en beskrivning av en maträtt. Förkortar den till den maximalt tillåtna längden på valsidan.
		if (description.length > 200) {
			return description.substr(0,200) + "…";
		} else {
			return description;
		}
	}

	this.declareWidgets = function(container) {
		this.container = container;
		this.types = container.find("#types");
		this.buttonId1 = container.find("#1");
		this.searchBox = container.find("#searchBox");
		this.searchButton = container.find("#searchButton");
		this.cancelSearchButton = container.find('#cancelSearch');
		this.dishListContainer = container.find("#dishList");
		this.searchResults = container.find('#searchResults');
	}

	container.append('<div class="row" id="dishChooser"></div>');
	dishChooser($('#dishChooser'), dishType);

	container.append('<div class="row" id="dishList"></div>');
	dishList($('#dishList'), model, dishType);

	declareWidgets(container);

	controller = new SelectDishController(this, model);

	
}

// var DishChooser = function(container) {
// 	container.append('<div class="row">');
// 	container.append('<div class="col-xs-12">Rad</div>');


// 	container.append('</div>');
// }


