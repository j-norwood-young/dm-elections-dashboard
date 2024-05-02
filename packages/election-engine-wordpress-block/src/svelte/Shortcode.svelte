<script>
	import Admin from '@election-engine/wordpress-block/src/svelte/Admin.svelte';

	let show_modal = false;
	let visualisation = 'hemicycle';
	let visualisation_data = {
		hemicycle: {
			selected_year: 2024,
			selected_election: 'National Assembly',
			selected_region: 'Gauteng'
		},
		carto: {
			selected_year: 2024,
			selected_election: 'National Assembly',
			selected_region: 'National'
		},
		table: {
			selected_year: 2024,
			selected_election: 'National Assembly',
			selected_region: 'National',
			selected_fields: ['Party', 'Votes', 'Seats']
		}
	}

	function clickShortcodeButton(e) {
		e.preventDefault();
		show_modal = true;
	}

	function onClose(e) {
		e.preventDefault();
		show_modal = false;
		const data = {
			visualisation,
			selected_year: visualisation_data[visualisation].selected_year,
			selected_election: visualisation_data[visualisation].selected_election,
			selected_region: visualisation_data[visualisation].selected_region,
		}
		if (visualisation === 'table') {
			data.selected_fields = visualisation_data[visualisation].selected_fields.join(',');
		}
		let strs = [];
		for (const key in data) {
			strs.push(`${key}="${data[key]}"`);
		}
		const shortcode = `[election-engine ${strs.join(" ")}]`;
        wp.media.editor.insert(shortcode);
	}
</script>

<a href="{"#"}" class="button" id="electionengine_insert_shortcode_button" data-editor="content" on:click={clickShortcodeButton}>
	<span class="wp-media-buttons-icon dashicons dashicons-chart-bar"></span> Election Engine
</a>
<Admin bind:visualisation bind:visualisation_data bind:show_modal is_block={false} on:close={onClose} />
