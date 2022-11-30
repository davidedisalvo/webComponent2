import { defineCustomElement } from 'vue'
import Second from './Second.vue'

const modules = import.meta.globEager('./components/**/*.vue')
Second.styles = Object.values(modules).reduce((arr, mod) => {
	return [...arr, ...(mod.default.styles || [])]
}, Second.styles || [])

customElements.define('second-web-component', defineCustomElement(Second))
