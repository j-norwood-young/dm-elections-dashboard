<?php
	class ElectionEngineShortcodeView {
		function __construct($atts) {
			$this->atts = $atts;
		}

		function generate() {
			$html = "<div
				class=\"wp-block-tenlayer-election-engine\"
				data-visualisation=\"{$this->atts['visualisation']}\"
				data-selected_year=\"{$this->atts['selected_year']}\"
				data-selected_election=\"{$this->atts['selected_election']}\"
				data-selected_region=\"{$this->atts['selected_region']}\"
				data-selected_fields=\"{$this->atts['selected_fields']}\"
			></div>";
            wp_enqueue_script( "electionengine-frontend-script", plugin_dir_url( __FILE__ ) . "../svelte/app/election-engine.umd.js", [], ELECTIONENGINE_VERSION, true );
			wp_enqueue_style( "electionengine-frontend-style", plugin_dir_url( __FILE__ ) . "../svelte/app/style.css", [], ELECTIONENGINE_VERSION );
			return $html;
		}
	}
