<?php
/*
 * Template Name: Search Page
 */
?>
<?php
$query_args = explode("&", $_SERVER['QUERY_STRING']);
$search_query = array();

foreach($query_args as $key => $string) {
	
	$query_split = explode("=", $string);
	
	if ($search_query[$query_split[0]] == null) {
		$search_query[$query_split[0]] = array();
	}
	
	array_push($search_query[$query_split[0]], urldecode($query_split[1]));
}

$query = new WP_Query( array(
	'post_type' => array( 'post' ),
	's' => $search_query["q"][0],
    'category__in' => $search_query["categories"],
	'tag__and' => $search_query["tags"],
) );

?>
<?php get_header(); ?>

	<div id="primary" class="site-content">
		<div id="content" role="main">
		
			<?php SearchByParams::getForm(); ?>
			
			<?php if ( $query->have_posts() ) : ?>
				<?php while ( $query->have_posts() ) : $query->the_post(); ?>
					<?php get_template_part( 'content', 'page' ); ?>
				<?php endwhile; // end of the loop. ?>
			<?php else : ?>
			
				<article id="post-0" class="post no-results not-found">
					<header class="entry-header">
						<h1 class="entry-title"><?php _e( 'К сожалению, ничего не найдено.', 'twentytwelve' ); ?></h1>
					</header>

					<div class="entry-content">
						<p><?php _e( 'Мы не Яндекс и не обещали, что все найдем. :)', 'twentytwelve' ); ?></p>
						
					</div><!-- .entry-content -->
				</article><!-- #post-0 -->
			
			<?php endif; ?>
			
		</div><!-- #content -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
