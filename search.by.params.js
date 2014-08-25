$(function() {
	$('#keywords-search-by-params').on('focus', function () {
		$('#settings-search-by-params').show('normal');
	});
	
	$('.container-search-by-params').on('focusout', function () {
		setTimeout(FocusOutForSearchByParams, 500)
	});
	
	$('#searching-by-params').on('click', function () {
		$(this).focus();
	});
		
	SetCategoriesToSearchByParams();
	SetTagsToSearchByParams();
	
	$('#categories_search_by_params').chosen({no_results_text: "Уппсс, ничего не найдено..."});
	$('#tags_search_by_params').chosen({no_results_text: "Уппсс, ничего не найдено..."});
});

function FocusOutForSearchByParams() {
	var isFocus = false;
	
	isFocus |= $('#keywords-search-by-params').val().length;
	isFocus |= $('#keywords-search-by-params').is(":focus");
	
	isFocus |= $('#categories_search_by_params option:selected').length;
	isFocus |= $('#categories_search_by_params_chosen').hasClass('chosen-container-active');

	isFocus |= $('#tags_search_by_params option:selected').length;
	isFocus |= $('#tags_search_by_params_chosen').hasClass('chosen-container-active');
	
	isFocus |= $('#searching-by-params').is(":focus");
	
	if (!isFocus) {
		$('#settings-search-by-params').hide('normal');
	}
}

function SetCategoriesToSearchByParams() {
	var element = $('#categories_search_by_params');
	// заполняем категории
	var categories = ['Компоненты', 'О компании', 'Общая информация', 'Обучение', 'Frontend', 'Linux', 'Ruby', 'Symfony2'];
	
	$.each(categories, function(index, value) {
		element.append($("<option />").val(index).text(value));
	});
}

function SetTagsToSearchByParams() {
	var element = $('#tags_search_by_params');
	// заполняем теги
	var tags = ['C#', 'РУССКИЙ ЯЗЫК', 'LINUX', 'PHP', 'УЧЕБНИК'];
	
	$.each(tags, function(index, value) {
		element.append($("<option />").val(index).text(value));
	});
}