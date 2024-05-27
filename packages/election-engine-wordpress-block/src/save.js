/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

import { select as wpDataSelect } from '@wordpress/data';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const site_url = election_engine_admin.site_url;
	const embed = `${site_url}/election-engine/embed/?visualisation=${attributes.visualisation}&selected_year=${attributes.selected_year}&selected_election=${attributes.selected_election}&selected_region=${attributes.selected_region}&selected_fields=${attributes.selected_fields}&show_buttons=${attributes.show_buttons}&show_title=${attributes.show_title}&show_blurb=${attributes.show_blurb}`;
	const blockProps = useBlockProps.save();
	const result = (
		<>
			<div
				{...blockProps}
				data-visualisation={attributes.visualisation || ""}
				data-selected_year={attributes.selected_year || ""}
				data-selected_election={attributes.selected_election || ""}
				data-selected_region={attributes.selected_region || ""}
				data-selected_fields={attributes.selected_fields || ""}
				data-show_buttons={attributes.show_buttons || ""}
				data-show_title={attributes.show_title || ""}
				data-show_blurb={attributes.show_blurb || ""}
			>
				<div class="election-engine-inline" data-inline={embed}></div>
			</div>
		</>
	);
	return result;
}
