/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

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
	const blockProps = useBlockProps.save();
	return (
		<>
		<div
			{ ...blockProps }
			data-visualisation={ attributes.visualisation || "" }
			data-selected_year={ attributes.selected_year || "" }
			data-selected_election={ attributes.selected_election || "" }
			data-selected_region={ attributes.selected_region || "" }
			data-selected_fields={ attributes.selected_fields || "" }
		>Elections Engine loading...</div>
		<script src="/wp-content/plugins/election-engine/packages/election-engine-wordpress-block/svelte/app/election-engine.umd.js"></script>
		</>
	);
}
