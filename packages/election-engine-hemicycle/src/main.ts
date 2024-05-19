import "./app.css";
import App from "./App.svelte";

const app = new App({
    target: document.getElementById("app")!,
    props: {
        show_buttons: true,
        selected_year: 2019,
        selected_election: "National Assembly",
        selected_region: "National",
    },
});

export default app;
