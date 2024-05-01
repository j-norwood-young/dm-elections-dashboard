import Admin from './Admin.svelte'

jQuery(() => {
	const target = document.getElementById('ElectionsEngineAdminModal');
	new Admin({
		target
	})
});
