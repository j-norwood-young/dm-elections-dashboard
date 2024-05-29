<script>
	import HemicycleConfig from "@election-engine/wordpress-block/src/svelte/admin/HemicycleConfig.svelte";
	import MapConfig from "@election-engine/wordpress-block/src/svelte/admin/MapConfig.svelte";
	import TableConfig from "@election-engine/wordpress-block/src/svelte/admin/TableConfig.svelte";
	import ProgressConfig from "@election-engine/wordpress-block/src/svelte/admin/ProgressConfig.svelte";
	import Modal from "@election-engine/wordpress-block/src/svelte/components/Modal.svelte";
	import Button from "@election-engine/wordpress-block/src/svelte/components/svelte-wordpress-button.svelte";

	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	export let show_modal = false;
	export let is_block = true;
	export let visualisation = "hemicycle";
	export let visualisation_data = {
		hemicycle: {
			selected_year: 2024,
			selected_election: "National Assembly",
			selected_region: "Eastern Cape",
			show_title: true,
			show_blurb: true,
			show_buttons: false,
		},
		carto: {
			selected_year: 2024,
			selected_election: "National Assembly",
			selected_region: "National",
			show_title: true,
			show_blurb: true,
			show_buttons: false,
		},
		table: {
			selected_year: 2024,
			selected_election: "National Assembly",
			selected_region: "National",
			show_title: true,
			show_blurb: true,
			show_buttons: false,
		},
		progress: {
			selected_year: 2024,
			show_title: true,
			show_blurb: true,
			show_buttons: false,
		},
	};
	let props = null;
	let attributes = null;
	let setAttributes = null;
	const site_url = election_engine_admin.site_url;
	if (is_block) {
		jQuery(document).on(
			"election-engine-edit-block-click",
			(e, _props, _attributes, _setAttributes) => {
				props = _props;
				attributes = _attributes;
				setAttributes = _setAttributes;
				if (attributes.visualisation) {
					visualisation = attributes.visualisation;
				}
				visualisation_data[visualisation] = { ...attributes };
				show_modal = true;
			},
		);
	}

	$: if (attributes && setAttributes && is_block) {
		if (visualisation === "hemicycle") {
			setAttributes({ ...attributes, ...visualisation_data.hemicycle });
		} else if (visualisation === "carto") {
			setAttributes({ ...attributes, ...visualisation_data.carto });
		} else if (visualisation === "table") {
			setAttributes({ ...attributes, ...visualisation_data.table });
		} else if (visualisation === "progress") {
			setAttributes({ ...attributes, ...visualisation_data.progress });
		}
	}

	function selectVisualisation(visualisation_name) {
		visualisation = visualisation_name;
		if (attributes) attributes.visualisation = visualisation_name;
	}

	function onClose(e) {
		e.preventDefault();
		dispatch("close");
	}
</script>

{#if show_modal}
	<Modal on:close={() => (show_modal = false)} on:close={onClose}>
		<div slot="title">
			<h2>Elections Engine</h2>
		</div>
		<div class="election-engine-visualisation-container">
			<div
				class="election-engine-visualisation-item"
				class:selected={visualisation === "hemicycle"}
				role="button"
				on:click={() => selectVisualisation("hemicycle")}
				on:keypress={() => selectVisualisation("hemicycle")}
				tabindex="0"
			>
				<p>Hemicycle</p>
			</div>
			<div
				class="election-engine-visualisation-item"
				class:selected={visualisation === "carto"}
				role="button"
				on:click={() => selectVisualisation("carto")}
				on:keypress={() => selectVisualisation("carto")}
				tabindex="0"
			>
				<p>Map</p>
			</div>
			<div
				class="election-engine-visualisation-item"
				class:selected={visualisation === "table"}
				role="button"
				on:click={() => selectVisualisation("table")}
				on:keypress={() => selectVisualisation("table")}
				tabindex="0"
			>
				<p>Table</p>
			</div>
			<div
				class="election-engine-visualisation-item"
				class:selected={visualisation === "progress"}
				role="button"
				on:click={() => selectVisualisation("progress")}
				on:keypress={() => selectVisualisation("progress")}
				tabindex="0"
			>
				<p>Progress</p>
			</div>
		</div>
		{#if visualisation === "hemicycle"}
			<HemicycleConfig
				bind:selected_year={visualisation_data.hemicycle.selected_year}
				bind:selected_election={visualisation_data.hemicycle.selected_election}
				bind:selected_region={visualisation_data.hemicycle.selected_region}
				bind:show_buttons={visualisation_data.hemicycle.show_buttons}
				bind:show_blurb={visualisation_data.hemicycle.show_blurb}
				bind:show_title={visualisation_data.hemicycle.show_title}
			/>
		{/if}
		{#if visualisation === "carto"}
			<MapConfig
				bind:selected_year={visualisation_data.carto.selected_year}
				bind:selected_election={visualisation_data.carto.selected_election}
				bind:selected_region={visualisation_data.carto.selected_region}
				bind:show_buttons={visualisation_data.carto.show_buttons}
				bind:show_title={visualisation_data.carto.show_title}
				bind:show_blurb={visualisation_data.carto.show_blurb}
			/>
		{/if}
		{#if visualisation === "table"}
			<TableConfig
				bind:selected_year={visualisation_data.table.selected_year}
				bind:selected_election={visualisation_data.table.selected_election}
				bind:selected_region={visualisation_data.table.selected_region}
				bind:show_buttons={visualisation_data.table.show_buttons}
				bind:show_title={visualisation_data.table.show_title}
			/>
		{/if}
		{#if visualisation === "progress"}
			<ProgressConfig
				bind:selected_year={visualisation_data.progress.selected_year}
				bind:show_buttons={visualisation_data.progress.show_buttons}
				bind:show_title={visualisation_data.progress.show_title}
				bind:show_blurb={visualisation_data.progress.show_blurb}
			/>
		{/if}
		<hr class="mt-4" />
		<div class="mt-4">
			<Button secondary on:click={() => (show_modal = false)} on:click={onClose}
				>Done</Button
			>
		</div>
		<hr class="mt-4" />
		<iframe
			title="{visualisation} Preview"
			src={`${site_url}/election-engine/embed/?visualisation=${visualisation}&selected_year=${
				visualisation_data[visualisation].selected_year
			}&selected_election=${
				visualisation_data[visualisation].selected_election
			}&selected_region=${
				visualisation_data[visualisation].selected_region
			}&show_buttons=${
				visualisation_data[visualisation].show_buttons ? 1 : 0
			}&show_title=${
				visualisation_data[visualisation].show_title ? 1 : 0
			}&show_blurb=${visualisation_data[visualisation].show_blurb ? 1 : 0}`}
			width="100%"
			height="500px"
		></iframe>
	</Modal>
{/if}

<style>
	.election-engine-visualisation-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	.election-engine-visualisation-item {
		background-color: #f1f1f1;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 10px;
		margin: 0px 10px;
		/* width: 30%; */
	}

	.election-engine-visualisation-item:hover {
		background-color: #e1e1e1;
	}

	.selected {
		background-color: #e1e1e1;
		border: 1px solid #aaa;
	}

	.mt-4 {
		margin-top: 1rem;
	}
</style>
