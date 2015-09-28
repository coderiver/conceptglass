</div>
<!-- load scripts -->
<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/js/lib/head.js"></script> 
<script> 
	head.js("<?php bloginfo('template_directory'); ?>/js/lib/jquery.js",
			"<?php bloginfo('template_directory'); ?>/js/lib/slick.min.js",
			"<?php bloginfo('template_directory'); ?>/js/lib/jquery.fullPage.min.js",
			"<?php bloginfo('template_directory'); ?>/js/common.js"
	);
</script>
<?php $page_id = $wp_query->get_queried_object_id();
echo get_post_meta( $page_id, '_wp_page_template', true ); ?>
</body>
</html>