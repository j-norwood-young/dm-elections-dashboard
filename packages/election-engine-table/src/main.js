import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
  props: {
    show_buttons: true,
  }
})

export default app
