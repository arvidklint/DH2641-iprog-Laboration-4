var HomeController = function(view, model) {
	view.createNewDinner.click(function() {
		view.container.empty();
		view.container.css('background-image', 'none');
		view.container.css('background-color', 'white');
		model.createMenuArray();
		model.setNumberOfGuests(3);
		
		header($('#application'));
		mainRow($('#application'));
		MyDinner($('#mainRow'), model);
		//meinFrame($('#mainRow'), model);
		$('#mainRow').append('<div class="col-xs-9" id="meinFrame"></div>');
		SelectDish($('#meinFrame'), model);
	});
}