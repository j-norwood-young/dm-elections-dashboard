<?php
class ElectionEngineShortcodeView
{
	function __construct($atts)
	{
		$this->atts = $atts;
	}

	function generate()
	{
		$visualisation = $this->atts['visualisation'] ?: "hemicycle";
		$selected_year = $this->atts['selected_year'] ?: "2019";
		$selected_election = $this->atts['selected_election'] ?: "National Assembly";
		$selected_region = $this->atts['selected_region'] ?: "National";
		$show_title = $this->atts['show_title'] ? "1" : "0";
		$show_blurb = $this->atts['show_blurb'] ? "1" : "0";
		$show_buttons = $this->atts['show_buttons'] ? "1" : "0";
		$embed = get_site_url() . '/election-engine/embed/' .
			"?visualisation=" . urlencode($visualisation) .
			"&selected_year=" . urlencode($selected_year) .
			"&selected_election=" . urlencode($selected_election) .
			"&selected_region=" . urlencode($selected_region) .
			"&show_title=" . urlencode($show_title) .
			"&show_blurb=" . urlencode($show_blurb) .
			"&show_buttons=" . urlencode($show_buttons);
		$html = "<div
				class=\"wp-block-tenlayer-election-engine\"
				data-visualisation=\"{$visualisation}\"
				data-selected_year=\"{$selected_year}\"
				data-selected_election=\"{$selected_election}\"
				data-selected_region=\"{$selected_region}\"
				data-show_title=\"{$show_title}\"
				data-show_blurb=\"{$show_blurb}\"
				data-show_buttons=\"{$show_buttons}\"
			>
				<div class=\"election-engine-inline\" data-inline=\"$embed\"></div>
			</div>";
		wp_enqueue_script("electionengine-frontend-script", plugin_dir_url(__FILE__) . "../../dist/app/election-engine.umd.js", [], ELECTIONENGINE_VERSION, true);
		wp_enqueue_style("electionengine-frontend-style", plugin_dir_url(__FILE__) . "../../dist/app/style.css", [], ELECTIONENGINE_VERSION);
		return $html;
	}
}
