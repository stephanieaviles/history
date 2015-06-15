var HistoryView = Backbone.View.extend({


$(document).ready( function() {
	$('#search').click(function(){
		console.log('click');
  	searchClicked($('#datePicker').val());
  });
});
})