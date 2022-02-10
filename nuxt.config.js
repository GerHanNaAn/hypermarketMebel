export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'hypermarketMebel',
		htmlAttrs: {
			lang: 'ru',
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['@/assets/scss/app.scss'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: '~/plugins/axios' },
		{ src: '~/plugins/vue-awesome-swiper', mode: 'client' },
		{ src: '~/plugins/v-viewer' },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: '/',
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
}
