<?php

/**
 * Election Engine Embed
 *
 * @package     ElectionEngine
 * @since       1.0.0
 */

if (!defined('ABSPATH')) {
	exit;
}

// require_once(plugin_dir_path( __FILE__ ) . './views/crosswordengine-view.php' );

class ElectionEngineEmbed
{
	public function __construct()
	{
		if (empty($_SERVER['REQUEST_URI'])) return;
		$this->uri = sanitize_url($_SERVER['REQUEST_URI']);
		$this->parsed_url = wp_parse_url($this->uri);
		if (!is_array($this->parsed_url)) return;
		$this->parameters = wp_parse_args($this->parsed_url["query"] ?? null);
		// print_r($this->parameters);
		if (!preg_match('/\/election-engine\/(embed)\/(.*)/', $this->parsed_url["path"], $matches)) {
			return;
		}
		$this->render_embed($this->parameters);
		exit;
	}

	public function render_embed($params)
	{
		$visualisation = $params['visualisation'] ?: "hemicycle";
		$selected_year = $params['selected_year'] ?: "2019";
		$selected_election = $params['selected_election'] ?: "National Assembly";
		$selected_region = $params['selected_region'] ?: "National";
		$selected_ballot = $params['selected_ballot'] ?: "Combined";
		$show_title = $params['show_title'] ? "1" : "0";
		$show_blurb = $params['show_blurb'] ? "1" : "0";
		$show_buttons = $params['show_buttons'] ? "1" : "0";
		include_once(plugin_dir_path(__FILE__) . "./views/header-iframe.php");
		$html = "<div
			class=\"wp-block-tenlayer-election-engine\"
			data-visualisation=\"{$visualisation}\"
			data-selected_year=\"{$selected_year}\"
			data-selected_election=\"{$selected_election}\"
			data-selected_region=\"{$selected_region}\"
			data-selected_ballot=\"{$selected_ballot}\"
			data-show_title=\"{$show_title}\"
			data-show_blurb=\"{$show_blurb}\"
			data-show_buttons=\"{$show_buttons}\"
		>
		</div>";
		wp_enqueue_script("electionengine-frontend-script", plugin_dir_url(__FILE__) . "../dist/app/election-engine.umd.js", [], ELECTIONENGINE_VERSION, true);
		wp_enqueue_style("electionengine-frontend-style", plugin_dir_url(__FILE__) . "../dist/app/style.css", [], ELECTIONENGINE_VERSION);
		// phpcs:ignore
		echo $html;
		include_once(plugin_dir_path(__FILE__) . "./views/footer-iframe.php");
	}
}
