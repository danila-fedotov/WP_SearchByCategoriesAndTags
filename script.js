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
	SetTags();
	$('#categories').chosen({no_results_text: "�����, ������ �� �������..."});
	$('#tags').chosen({no_results_text: "�����, ������ �� �������..."});
});

function SetElements() {
	var element = $('#categories');
	var categories = ['����������', '� ��������', '����� ����������', '��������', 'Frontend', 'Linux', 'Ruby', 'Symfony2'];
	
	$.each(categories, function(index, value) {
		element.append($("<option />").val(index).text(value));
	});
}

function SetTags() {
	var element = $('#tags');
	var categories = ['C#', '������� ����', 'LINUX', '��������', 'Frontend', 'Linux', 'Ruby', 'Symfony2'];
	
	$.each(categories, function(index, value) {
		element.append($("<option />").val(index).text(value));
	});
}