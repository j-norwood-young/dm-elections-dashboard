<?php
/**
 * Plugin Name:       Election Engine
 * Description:       Visualisations for the South African general elections.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            10Layer
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       election-engine
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

function election_engine_init() {
	$dir = __DIR__;
	// $block_name = 'tenlayer/election-engine';
	// if ( has_block( $block_name ) ) {
	wp_register_script(
		'election-engine-app',
		plugins_url( 'packages/election-engine-wordpress-block/svelte/app/election-engine.umd.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor', 'jquery' ),
		filemtime( "$dir/packages/election-engine-wordpress-block/svelte/app/election-engine.umd.js" )
	);
	
	wp_register_script(
		'election-engine-admin',
		plugins_url( 'packages/election-engine-wordpress-block/svelte/admin/election-engine-admin.umd.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor', 'jquery' ),
		filemtime( "$dir/packages/election-engine-wordpress-block/svelte/admin/election-engine-admin.umd.js" )
	);
	register_block_type( $dir . '/packages/election-engine-wordpress-block/build');
}
add_action( 'init', 'election_engine_init' );

function elections_engine_enqueue_script() {
	$dir = __DIR__;
	wp_enqueue_script( 'election-engine-editor' );
	wp_enqueue_style(
		'election-engine-editor',
		plugins_url( 'packages/election-engine-wordpress-block/svelte/app/style.css', __FILE__ ),
		array(),
		filemtime( "$dir/packages/election-engine-wordpress-block/svelte/app/style.css" )
	);
}
add_action( 'wp_enqueue_scripts', 'elections_engine_enqueue_script', 9999 );

function elections_engine_enqueue_admin_script() {
	$dir = __DIR__;
	wp_enqueue_script( 'election-engine-admin' );
	wp_enqueue_style(
		'election-engine-admin',
		plugins_url( 'packages/election-engine-wordpress-block/svelte/admin/election-engine-admin.css', __FILE__ ),
		array(),
		filemtime( "$dir/packages/election-engine-wordpress-block/svelte/admin/election-engine-admin.css" )
	);
}
add_action('admin_enqueue_scripts', 'elections_engine_enqueue_admin_script', 9999);


function elections_engine_insert_div() {
	?>
	<div id="ElectionsEngineAdminModal"></div>
	<?php
}
add_action( 'admin_init', 'elections_engine_insert_div' );
