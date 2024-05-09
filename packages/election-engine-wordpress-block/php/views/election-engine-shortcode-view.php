<?php
	class ElectionEngineShortcodeView {
		function __construct($atts) {
			$this->atts = $atts;
		}

		function generate() {
			$visualisation = $this->atts['visualisation'] ?: "hemicycle";
			$selected_year = $this->atts['selected_year'] ?: "2019";
			$selected_election = $this->atts['selected_election'] ?: "National Assembly";
			$selected_region = $this->atts['selected_region'] ?: "National";
			$selected_fields = $this->atts['selected_fields'] ?: "";
			if (is_array($selected_fields)) {
				$selected_fields = implode(",", $selected_fields);
			}
			$embed = get_site_url() . '/election-engine/embed/' . $this->id .
			"?visualisation=" . urlencode($visualisation) .
			"&selected_year=" . urlencode($selected_year) .
			"&selected_election=" . urlencode($selected_election) .
			"&selected_region=" . urlencode($selected_region) .
			"&selected_fields=" . urlencode($selected_fields);
			$html = "<div
				class=\"wp-block-tenlayer-election-engine\"
				data-visualisation=\"{$visualisation}\"
				data-selected_year=\"{$selected_year}\"
				data-selected_election=\"{$selected_election}\"
				data-selected_region=\"{$selected_region}\"
				data-selected_fields=\"{$selected_fields}\"
			>
				<div class=\"election-engine-inline\" data-inline=\"$embed\"></div>
			</div>";
            wp_enqueue_script( "electionengine-frontend-script", plugin_dir_url( __FILE__ ) . "../../svelte/app/election-engine.umd.js", [], ELECTIONENGINE_VERSION, true );
			wp_enqueue_style( "electionengine-frontend-style", plugin_dir_url( __FILE__ ) . "../../svelte/app/style.css", [], ELECTIONENGINE_VERSION );
			return $html;
		}
	}
