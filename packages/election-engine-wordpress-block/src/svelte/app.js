// import './app.css'
import App from './App.svelte'
console.log("App")
// Get "id" attribute from the div element in the block
jQuery(() => {
	const targets = document.querySelectorAll('.wp-block-tenlayer-election-engine');
	targets.forEach(target => {
		let props = {
			id: target.id,
			visualisation: jQuery(target).data("visualisation"),
			selected_year: jQuery(target).data("selected_year"),
			selected_election: jQuery(target).data("selected_election"),
			selected_region: jQuery(target).data("selected_region"),
			selected_fields: jQuery(target).data("selected_fields")?.split(",").map(s => s.trim()),
		}
		new App({
			target,
			props
		})
	})
})
// export default app
