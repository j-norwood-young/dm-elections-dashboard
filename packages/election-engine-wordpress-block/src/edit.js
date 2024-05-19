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
	return (
		<>
			<p {...props}>
				<div id="ElectionsEngineEditBlock" class="election-engine-block-editor" onClick={clickHandler}>
					<h1>Click to Edit your Elections Block</h1>
					<div className='pills'>
						{attributes.visualisation && <div className='pill'>{attributes.visualisation}</div>}
						{attributes.selected_year && <div className='pill'>{attributes.selected_year}</div>}
						{attributes.selected_election && <div className='pill'>{attributes.selected_election}</div>}
						{attributes.selected_region && <div className='pill'>{attributes.selected_region}</div>}
						{attributes.selected_fields && <div className='pill'>{attributes.selected_fields}</div>}
					</div>
				</div>
			</p>
		</>
	);
}
