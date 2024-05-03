import Admin from './Admin.svelte'
import Shortcode from "./Shortcode.svelte";

jQuery(() => {
	const target = document.getElementById('ElectionsEngineAdminModal');
	if (target) {
		new Admin({
			target
		})
	}
	const shortcode = document.getElementById('ElectionsEngineShortcodeModal');
	if (shortcode) {
		new Shortcode({
			target: shortcode
		})
	}
});
