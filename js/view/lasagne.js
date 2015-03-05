var LasagneView = function(container, model, dishID) {
	this.dishID = dishID;
	this.container = container;
	
	var getPendingPrice = function(model) {
		dish = model.getSelectedDish("main dish");
		pendingPrice = model.getDishPrice(dish["id"]) * model.getNumberOfGuests();
		return pendingPrice;
	}

	var showDish = function(container, model, dinner) {
		//var dinner = model.getDish(this.dishID);
		container.find("#dishFrame").empty();
		
		appString = '<h3>';
			appString += dinner["Title"];
		appString += '</h3>';
		appString += '<img src="' + dinner["ImageURL"] + '" class="img-responsive" alt="' + dinner["Title"] + '">'
		appString += '<p>';
			appString += dinner["Description"];
		appString += '</p>';

		container.find("#dishFrame").append(appString);
	}

	var dishFrame = function(container) {
		appString = '<div class="col-xs-6">';
		appString += '<div id="dishFrame">';
		appString += '</div>';
		appString += '<button class="btn" id="backButton">';
				appString += '<span class="glyphicon glyphicon-chevron-left floatLeft"></span>';
				appString += 'Back to Select Dish';
			appString += '</button>';
		appString += '</div>';
		container.append(appString);
	}

	var showIngredientsFrame = function(container) {
		appString = '<div class="col-xs-6" id="ingredientsFrame">';
			appString += '<h4 id="ingredientsTitle">';
			appString += '</h4>';
			appString += '<table id="ingredientsTable">';
			appString += '</table>';
			appString += '<table width="100%">';
				appString += '<tr>';
					appString += '<td width="80%">';
						appString += '<button class="btn" id="confirmDishButton">Confirm Dish</button>';
					appString += '</td>';
					appString += '<td width="10%">SEK</td>';
					appString += '<td id="totalPrice" class="textAlignRight" width="10%">';
					appString += '</td>';
				appString += '</tr>';
			appString += '</table>';
		appString += '</div>';
		container.append(appString);
	}

	var showIngredients = function(container, model, dinner) {
		//var dinner = model.getDish(this.dishID);
		container.find("#totalPrice").empty();
		container.find("#ingredientsTable").empty();
		container.find("#ingredientsTitle").empty();
		
		var total = 0;
		appString = '';
		n = model.getNumberOfGuests();
		for (i = 0; i < dinner["Ingredients"].length; i++) {
			appString += '<tr>';
				appString += '<td width="20%">' + dinner["Ingredients"][i]["Quantity"] * n + " " + dinner["Ingredients"][i]["Unit"] + '</td>';
				appString += '<td width="60%">' + dinner["Ingredients"][i]["Name"] + '</td>';
				appString += '<td width="10%">SEK</td>';
				appString += '<td class="textAlignRight" width="10%">' + dinner["Ingredients"][i]["Quantity"].toFixed(2) * n + '</td>';
			appString += '</tr>';
			total += dinner["Ingredients"][i]["Quantity"] * n;
		}
		container.find("#ingredientsTable").append(appString);
			
		container.find("#totalPrice").append(total.toFixed(2));
		container.find("#ingredientsTitle").append('Ingredients for ' + model.getNumberOfGuests() + ' people');

	}

	var declareWidgets = function(container) {
		this.container = container;
		this.backButton = $('#backButton');
		this.confirmDishButton = $('#confirmDishButton');
		this.ingredientsFrame = container.find('#ingredientsFrame');
	}

	this.update = function(model, args) {
		if (args["description"] == "dish") {
			console.log(args);
			lasagneRow = this.container.find('#lasagneRow');
			this.dish = args["data"];
			showDish(lasagneRow, model, this.dish);
			showIngredients(lasagneRow, model, this.dish);
		} else if (args["description"] == "numberOfGuests" && this.dish != null) {
			showDish(lasagneRow, model, this.dish);
			showIngredients(lasagneRow, model, this.dish);
		}
	}

	this.container.append('<div class="row" id="lasagneRow"></div>');
	// showDish(container.find('#lasagneRow'), model);
	// showIngredients(container.find('#lasagneRow'), model);

	//declareWidgets(container);

	//model.setPendingPrice(model.getDishPrice(dishID) * model.getNumberOfGuests());
	dishFrame(this.container.find('#lasagneRow'));
	showIngredientsFrame(this.container.find("#lasagneRow"));
	declareWidgets(this.container);

	model.addObserver(this);
	model.getDish(this.dishID);
	LasagneController(this, model);
}