/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
	const props = useBlockProps();
	function clickHandler() {
		jQuery(document).trigger('election-engine-edit-block-click', [props, attributes, setAttributes]);
	}
	const site_url = election_engine_admin.site_url;
	const embed = `${site_url}/election-engine/embed/?visualisation=${attributes.visualisation}&selected_year=${attributes.selected_year}&selected_election=${attributes.selected_election}&selected_region=${attributes.selected_region}&selected_fields=${attributes.selected_fields}&show_buttons=${attributes.show_buttons ? 1 : 0}&show_title=${attributes.show_title ? 1 : 0}&show_blurb=${attributes.show_blurb ? 1 : 0}`;
	return (
		<div class="election-engine-block-editor">
			<p {...props}>
				<iframe src={embed} width="100%" height="500px" title="Election Engine" />
				<button class="components-button is-primary is-compact" onClick={clickHandler}>Edit</button>
			</p>
		</div>
	);
}
