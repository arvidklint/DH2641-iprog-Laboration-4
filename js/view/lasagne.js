var LasagneView = function(container, model, dishID) {
	this.dishID = dishID;
	this.container = container;

	this.viewID = "Lasagne ID: " + Math.random();

	
	this.getPendingPrice = function(model) {
		dish = model.getSelectedDish("main dish");
		pendingPrice = model.getDishPrice(dish["id"]) * model.getNumberOfGuests();
		return pendingPrice;
	}

	this.showDish = function(container, model, dinner) {
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

	this.dishFrame = function(container) {
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

	this.showIngredientsFrame = function(container) {
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

	this.showIngredients = function(container, model, dinner) {
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

	this.declareWidgets = function(container) {
		this.container = container;
		this.backButton = container.find("#backButton");
		this.confirmDishButton = container.find('#confirmDishButton');
		this.ingredientsFrame = container.find('#ingredientsFrame');
		this.lasagneRow = this.container.find('#lasagneRow');

	}

	this.update = function(model, args) {
		if (args == null) {
			return;
		}

		if (args["description"] == "dish") {
			console.log(args);
			this.dish = args["data"];
			this.showDish(this.lasagneRow, model, this.dish);
			this.showIngredients(this.lasagneRow, model, this.dish);
			this.dish = args["data"];
			model.setPendingPrice(model.getDishPrice(this.dish) * model.getNumberOfGuests());
		} else if (args["description"] == "numberOfGuests" && this.dish != null) {
			this.showDish(this.lasagneRow, model, this.dish);
			this.showIngredients(this.lasagneRow, model, this.dish);
		}
	}

	this.container.append('<div class="row" id="lasagneRow"></div>');
	// showDish(container.find('#lasagneRow'), model);
	// showIngredients(container.find('#lasagneRow'), model);

	//declareWidgets(container);

	//model.setPendingPrice(model.getDishPrice(dishID) * model.getNumberOfGuests());
	this.dishFrame(this.container.find('#lasagneRow'));
	this.showIngredientsFrame(this.container.find("#lasagneRow"));
	this.declareWidgets(container);

	model.addObserver(this);
	model.getDish(this.dishID);
	this.lasagneControllerInstance = new LasagneController(this, model);
}