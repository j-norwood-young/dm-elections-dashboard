import "./app.css";
import App from "./App.svelte";

const app = new App({
    target: document.getElementById("app")!,
    props: {
        show_buttons: true,
        selected_year: 2024,
        selected_election: "Provincial Legislature",
        selected_region: "Eastern Cape",
    },
});

export default app;
