import './index.css'
import './icons.css'
import './nprogress.css'
import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'
import 'prismjs-tomorrow-theme/prism-tomorrow.css'
import App from './App.svelte'
import wf from 'webfontloader'

const app = new App({
  target: document.getElementById('app'),
})

wf.load({
  google: {
    families: ['Oxygen:300,400', 'Ubuntu', 'Inconsolata']
  }
})

export default app
