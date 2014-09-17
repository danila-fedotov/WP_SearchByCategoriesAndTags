<?php
/*
Plugin Name: Search By Parameters
Plugin URI: 
Description: Search by keywords posts, that it is in input categories and it has selected tags.
Version: 1.0
Author: Fedotov Danila
Author URI:
*/

function includeFiles()
{
    wp_enqueue_style( 'multi.chosen', plugins_url( '/css/multi.chosen.css', __FILE__ ));
    wp_enqueue_style( 'search.by.params', plugins_url( '/css/search.by.params.css', __FILE__ ));
    
    wp_enqueue_script( 'jquery.search', plugins_url( '/js/jquery-1.11.1.min.js', __FILE__ ) );
    wp_enqueue_script( 'search.by.params', plugins_url( '/js/search.by.params.js', __FILE__ ), array('jquery.search') );
    wp_enqueue_script( 'multi.chosen.jquery', plugins_url( '/js/multi.chosen.jquery.js', __FILE__ ), array('jquery.search') );

    wp_localize_script( 'search.by.params', 'MyAjax', array( 'ajaxurlsbp' => plugins_url( 'search-by-params.php' ) ) );
}

add_action( 'wp_enqueue_scripts', 'includeFiles' );
add_action( 'wp_ajax_nopriv_uwpqsf_ajax', array($this, 'search_by_params_ajax') );
add_action( 'wp_ajax_uwpqsf_ajax', array($this, 'search_by_params_ajax') );

function search_by_params_ajax() {
}

class SearchByParams {

    static function getForm() {
        $form = '';

        $form .= "<form id='form-search-by-params' method='get' action='/search'>";
            $form .= "<div class='container-search-by-params'>";
		        $form .= "<input name='q' type='text' placeholder='Поиск статей...' id='keywords-search-by-params' tabindex='1' />";

		        $form .= "<div id='settings-search-by-params'>";
		            $form .= "<div class='setting-search-by-params'>";
                    $form .= SearchByParams::getElementCategories();
		            $form .= "</div>";

		            $form .= "<div class='setting-search-by-params'>";
                    $form .= SearchByParams::getElementTags();
		            $form .= "</div>";

		            $form .= "<a id='searching-by-params' onclick='SearchBySubmit();'>НАЙТИ</a>";
		        $form .= "</div>";
		    $form .= "</div>";
        $form .= "</form>";

        echo $form;
    }
    
    static function getElementCategories() {
        $args = array(
	        'type'                     => 'post',
	        'child_of'                 => 0,
	        'parent'                   => '',
	        'orderby'                  => 'name',
	        'order'                    => 'ASC',
	        'hide_empty'               => 1,
	        'hierarchical'             => 1,
	        'exclude'                  => '',
	        'include'                  => '',
	        'number'                   => '',
	        'taxonomy'                 => 'category',
	        'pad_counts'               => false
        );
        $categories = get_categories( $args );
        //$categories_output = '';
        //$categories_output .= "<input type='hidden' value='categories' /> ";
        $categories_output = "<select name='categories' id='categories_search_by_params' data-placeholder='Искать во всех категориях...' class='chosen-select' multiple='' style='width: 100%; display: none;' tabindex='2'>";
        foreach ($categories as $category) {
            $categories_output .= "<option value='{$category->cat_ID}'>{$category->cat_name}</option>";
        }
        $categories_output .= "</select>";
        
        return $categories_output;
    }
    
    static function getElementTags() {
        $args = array(
            'number' 		=> 0
            ,'offset' 		=> 0
            ,'orderby' 		=> 'id'
            ,'order' 		=> 'ASC'
            ,'hide_empty' 	=> true
            ,'fields' 		=> 'all'
            ,'slug' 		=> ''
            ,'hierarchical' => true
            ,'name__like' 	=> ''
            ,'pad_counts' 	=> false
            ,'get' 			=> ''
            ,'child_of' 	=> 0
            ,'parent' 		=> ''
        );

        $tags = get_tags( $args );
        $tags_output = "<select name='tags' id='tags_search_by_params' data-placeholder='Искать по всем тегам...' class='chosen-select' multiple='' style='width: 100%; display: none;' tabindex='2'>";
        foreach ($tags as $tag) {
            $tags_output .= "<option value='{$tag->term_id}'>{$tag->name}</option>";
        }
        $tags_output .= "</select>";
        
        return $tags_output;
    }
}

//add_shortcode( 'search-by-params', array('SearchByParams', 'getForm') );
