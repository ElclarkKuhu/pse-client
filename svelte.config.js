import adapter from '@sveltejs/adapter-cloudflare'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
		// prerender: {
		// 	enabled: true,
		// 	default: true
		// }
	}
}

export default config
