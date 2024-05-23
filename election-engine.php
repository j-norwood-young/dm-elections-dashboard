<?php

/**
 * Plugin Name:       Election Engine
 * Description:       Visualisations for the South African general elections.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.3.3
 * Author:            10Layer
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       election-engine
 *
 * @package CreateBlock
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

define("ELECTIONENGINE_VERSION", '0.3.3');
define("ELECTIONENGINE_DIST_DIR", __DIR__ . '/packages/election-engine-wordpress-block/dist/');
define("ELECTIONENGINE_DIST_URL", plugins_url('packages/election-engine-wordpress-block/dist/', __FILE__));
define("ELECTIONENGINE_BLOCK_NAME", 'tenlayer/election-engine');

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

function election_engine_init()
{
	$dir = __DIR__;
	// $block_name = 'tenlayer/election-engine';
	// if ( has_block( $block_name ) ) {
	wp_register_script(
		'election-engine-app',
		ELECTIONENGINE_DIST_URL . "app/election-engine.umd.js",
		array('wp-blocks', 'wp-element', 'wp-editor', 'jquery'),
		filemtime(ELECTIONENGINE_DIST_DIR . "app/election-engine.umd.js")
	);

	wp_register_script(
		'election-engine-admin',
		ELECTIONENGINE_DIST_URL . "admin/election-engine-admin.umd.js",
		array('wp-blocks', 'wp-element', 'wp-editor', 'jquery'),
		filemtime(ELECTIONENGINE_DIST_DIR . "admin/election-engine-admin.umd.js")
	);
	register_block_type($dir . '/packages/election-engine-wordpress-block/build');
}
add_action('init', 'election_engine_init');

function elections_engine_enqueue_script()
{
	if (!has_block(ELECTIONENGINE_BLOCK_NAME)) return;
	wp_enqueue_script('election-engine-app');
	wp_enqueue_style(
		'election-engine-app',
		ELECTIONENGINE_DIST_URL . "app/style.css",
		array(),
		filemtime(ELECTIONENGINE_DIST_DIR . "app/style.css")
	);
}
add_action('wp_enqueue_scripts', 'elections_engine_enqueue_script', 9999);

function elections_engine_enqueue_admin_script()
{
	wp_enqueue_script('election-engine-admin');
	wp_enqueue_style(
		'election-engine-admin',
		ELECTIONENGINE_DIST_URL . "admin/election-engine-admin.css",
		array(),
		filemtime(ELECTIONENGINE_DIST_DIR . "admin/election-engine-admin.css")
	);
	// Add site_url to the script
	wp_localize_script('election-engine-admin', 'election_engine_admin', array('site_url' => site_url()));
}
add_action('admin_enqueue_scripts', 'elections_engine_enqueue_admin_script', 9999);


function elections_engine_insert_admin_div()
{
?>
	<div id="ElectionsEngineAdminModal"></div>
<?php
}
add_action('admin_init', 'elections_engine_insert_admin_div');

function electionengine_shortcode($atts)
{
	// print_r($atts);
	$atts = shortcode_atts(array(
		'visualisation' => 'hemicycle',
		'selected_election' => 'National Assembly',
		'selected_year' => '2019',
		'selected_region' => 'National',
		'selected_fields' => ['party', 'seats'],
	), $atts);
	require_once plugin_dir_path(__FILE__) . 'packages/election-engine-wordpress-block/php/views/election-engine-shortcode-view.php';
	$election_view = new ElectionEngineShortcodeView($atts);
	return $election_view->generate();
}
add_shortcode('election-engine', 'electionengine_shortcode');

function electionengine_media_button()
{
	require_once plugin_dir_path(__FILE__) . 'packages/election-engine-wordpress-block/php/views/election-engine-mediabutton.php';
}
add_action('media_buttons', 'electionengine_media_button');

// Serve Embed
function embed_init()
{
	require_once(plugin_dir_path(__FILE__) . 'packages/election-engine-wordpress-block/php/embed.php');
	new ElectionEngineEmbed();
}
add_action('init', 'embed_init');
