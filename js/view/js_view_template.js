$(function() {
		var model = new DinnerModel();
		var view = new GggView($('#application'), model);
	}
);

var GggView = function(container, model) {
	header(container);
}