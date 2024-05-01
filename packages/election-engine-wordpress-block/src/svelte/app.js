// import './app.css'
import App from './App.svelte'
console.log("App")
// Get "id" attribute from the div element in the block
jQuery(() => {
	const targets = document.querySelectorAll('.wp-block-tenlayer-election-engine');
	console.log({targets})
	targets.forEach(target => {
		let props = {
			id: target.id,
			visualisation: target.dataset.visualisation,
			selected_year: target.dataset.selected_year,
			selected_election: target.dataset.selected_election,
			selected_region: target.dataset.selected_region,
			selected_fields: target.dataset.selected_fields,
		}
		new App({
			target,
			props
		})
	})
})
// export default app
