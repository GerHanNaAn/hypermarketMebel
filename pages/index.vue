<template>
	<div class="mainPage">
		<MainSlider
			class="mainPage__slider"
			:photos="photoList"
		/>

		<div class="mainPage__wrap">
			<AddImage class="mainPage__form" />
		</div>
	</div>
</template>

<script>
import MainSlider from '~/components/MainSlider/index.vue'
import AddImage from '~/components/AddImage/index.vue'
export default {
	name: 'MainPage',
	components: { MainSlider, AddImage },

	data() {
		return {
			photoList: null,
		}
	},

	methods: {
		async getPhotoList() {
			await this.$store
				.dispatch('photos/getPhotoList')
				.then(async () => {
					this.photoList = this.$store.state.photos.PHOTO_LIST
				})
				.catch((err) => {
					console.log(err)
				})
		},
	},

	async mounted() {
		await this.getPhotoList()
	},
}
</script>

<style lang="scss" scoped>
.mainPage {
	display: grid;
	grid-template-columns: 1000px auto;
	justify-content: center;
	gap: 30px;

	padding-top: 80px;

	&__slider {
		height: 400px;
	}

	&__form {
	}
}
</style>
