$(function() {
	// $('#keyword').on('focus', function () {
		// $('#option').show('fast');
	// });
	
	// $('#btncancel').on('click', function () {
		// $('#option').hide('fast');
	// });
	
	// setcategories();
	// $('.chosen-select').chosen();
	// $('.chosen-select').hide();
	// $('#option').hide();
	// $('.search-field').keypress(function(e){
		// var oldText = $(this).val();
		// var newText = String.fromCharCode(e.charCode);
		// var start = this.selectionStart;
		// var end = this.selectionEnd;
		
		// newText = oldText.substr(0, start) + newText + oldText.substr(end);
        // alert(newText);
		// e.stopPropagation();
    // });
	SetElements();
	$('#categories').chosen();
});

function SetElements() {
	var element = $('#categories');
	var categories = ['Компоненты', 'О компании', 'Общая информация', 'Обучение', 'Frontend', 'Linux', 'Ruby', 'Symfony2'];
	
	$.each(categories, function(index, value) {
		element.append($("<option />").val(index).text(value));
	});
}