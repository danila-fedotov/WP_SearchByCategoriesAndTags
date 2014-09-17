$(function() {
    $('#categories_search_by_params').chosen({ no_results_text: "Уппсс, ничего не найдено..." });
    $('#tags_search_by_params').chosen({ no_results_text: "Уппсс, ничего не найдено..." });

    $('#keywords-search-by-params').on('focus', function () {
        $('#settings-search-by-params').show('normal');
    });

    $('#searching-by-params').on('click', function () {
        $(this).focus();
    });

    $('.container-search-by-params').on('focusout', function () {
        setTimeout(FocusOutForSearchByParams, 500)
    });

    $('#keywords-search-by-params').on('keypress', function(e) {
        if(e.keyCode == 13){
            SearchBySubmit();
            e.preventDefault();
            return false;
        }
    });
});

function SearchBySubmit() {
    $('#form-search-by-params').submit();
}

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