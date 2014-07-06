$(function() {
	$('#keyword').on('focus', function () {
		$('#option').show('fast');
	});
	
	$('#btnCancel').on('click', function () {
		$('#option').hide('fast');
	});
	
	SetCategories();
	$('.chosen-select').chosen();
	$('.chosen-select').hide();
	$('#option').hide();
});

function SetCategories() {
	var element = $('#categories');
	var categories = ['Компоненты', 'О компании', 'Общая информация', 'Обучение', 'Frontend', 'Linux', 'Ruby', 'Symfony2'];
	
	$.each(categories, function(index, value) {
		element.append($("<option />").val(index).text(value));
	});
}

function SetTags() {
	var element = $('#categories');
	var tags = ['apache', 'apt', 'autoprefixer', 'bash', 'bootstrap', 'C#', 'caniuse', 'cms', 'company', 'console', 'css', 'deploy', 'design', 'email', 'estimation', 'framework', 'git', 'gitflow', 'grunt', 'htaccess', 'html', 'linux', 'patterns', 'Phing', 'photoshop', 'PHP', 'Rails', 'retina', 'RoR', 'Ruby', 'sass', 'setup', 'shower', 'slides', 'styleguide', 'svg', 'symfony2', 'synchronization', 'tools', 'unit', 'testing', 'virtualbox', 'workflow', 'Проектирование', 'знакомство', 'учебник'];
	
	$.each(tags, function(index, value) {
		element.append($("<option />").val(index).text(value));
	});
}