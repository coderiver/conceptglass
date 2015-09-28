<?php get_header(); ?>
<?php include('top.php'); ?>



<?php

$term =	$wp_query->queried_object;
// print_r($term);
?>

	<!-- product -->
	<div class="product product_alcohol">
		<!-- center -->
		<div class="product__center center center_sm">
			<!-- back -->
			<a class="back" href="#">
				<i class="icon icon-arrow-left"></i>
			</a>
			<!-- title -->
			<div class="title">ПРОДУКЦИЯ:  <?php echo $term->name; ?></div>
			<!-- list -->
			<div class="list">
				<!-- item -->
				<?php

					
					query_posts(array('showposts' => -1,
						'post_type' => 'productions',
						$term->taxonomy => $term->slug,
						'orderby'=>'menu_order',
						'order'=>'ASC'));
					while (have_posts()) { the_post(); ?>
				<div class="item">
					<img class="item__pic" src="<?php echo the_field('picture'); ?>" alt="">
				</div>
				<?php } ?>
			</div>
		</div>
	</div>




<?php get_sidebar(); ?>
<?php get_footer(); ?>