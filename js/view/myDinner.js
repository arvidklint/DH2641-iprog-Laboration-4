var MyDinner = function(container, model) {
	this.viewName = "myDinner";
	//console.log("Meddelande från the lord: " + randomParam);

	this.viewID = "My Dinner ID: " + Math.random();

	this.myDinnerContents = function(container, model) {
		appString = 'My Dinner';
		appString += '<div>';
			appString += '<input type="number" value="' + model.getNumberOfGuests() + '" id="numberOfGuests"/>';
		appString += '</div>';
		appString += '<div class="row">';
			appString += '<div class="col-xs-12 sidebarTableTitle"">';
				appString += '<table class="tableSidebar">';
					appString += '<tr>';
						appString += '<td></td>';
						appString += '<td class="textAlignCenter">Dish Name</td>';
						appString += '<td class="textAlignRight">Cost</td>';
						appString += '<td></td>';
					appString += '</tr>';
				appString += '</table>';
			appString += '</div>';
		appString += '</div>';

		appString += '<table class="tableSidebar">';
			fullMenu = model.getFullMenu();
			for (var key = 0; key < fullMenu.length; key++) {
				appString += '<tr class="border">';
					appString += '<td>' + model.getNumberOfGuests() + '</td>';
					appString += '<td class="textAlignCenter">' + fullMenu[key]["Title"] + '</td>';
					appString += '<td class="textAlignRight">' + (model.getDishPrice(fullMenu[key]) * model.getNumberOfGuests()).toFixed(2) + '</td>';
					appString += '<td>';
						appString += '<button class="removeButton" dishid="' + fullMenu[key]["RecipeID"] + '">Ⓧ</button>';
					appString += '</td>';
				appString += '</tr>';
			}
			appString += '<tr>';
				appString += '<td colspan="2">Pending</td>';
				appString += '<td class="textAlignRight">' + model.getPendingPrice().toFixed(2)  + '</td>';
			appString += '</tr>';
			appString += '<tr>';
				appString += '<td class="textAlignRight borderTop" colspan="3">SEK ' + (model.getTotalMenuPrice() * model.getNumberOfGuests() + model.getPendingPrice()).toFixed(2) + '</td>';
			appString += '</tr>';
		appString += '</table>';
		appString += '<div class="center">';
			appString += '<button class="btn" id="confirmDinnerButton">Confirm Dinner</button>';
		appString += '</div>';

		container.append(appString);
	}

	this.update = function(model, args) {
		//console.log("My Dinner ID: " + this.viewID);
		//console.log("My dinner update, viewID: " + this.viewID);
		console.log("my dinner update args: " + args);
		this.myDinnerContainer.empty();
		this.myDinnerContents(this.myDinnerContainer, model);
		// this.confirmDinnerButton = $('#confirmDinnerButton'); //Vi måste omdeklarera knappen eftersom den tillfälligtvis var borta. Det fungerade inte att bara köra declareWidgets igen av någon anledning.
		// this.numberOfGuestsInput = $('#numberOfGuests');
		this.declareWidgets(this.container);
		this.controller = new MyDinnerController(this, model);
	}

	this.declareWidgets = function(container) {
		this.confirmDinnerButton = $('#confirmDinnerButton');
		this.numberOfGuestsInput = $('#numberOfGuests');
	}

	//menu = model.getFullMenu();

	container.append('<div class="col-xs-3" id="myDinner"></div>');
	this.myDinnerContainer = container.find("#myDinner");
	this.container = container;
	// this.myDinnerContents(, model);
	this.update(model);
	model.addObserver(this);

	// this.controller = new MyDinnerController(this, model);
	console.log("My Dinner: Nu har jag lagt till mig själv i model._observers");
}