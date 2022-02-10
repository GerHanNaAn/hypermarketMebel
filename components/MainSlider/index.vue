<template>
	<div class="mainSlider">
		<Swiper
			ref="swiper"
			class="mainSlider__swiper swiper"
			v-viewer="viewerOptions"
			:options="swiperOption"
		>
			<SwiperSlide
				v-for="(item, index) in photos"
				:key="index"
				class="mainSlider__slide"
			>
				<img
					class="mainSlider__img"
					:src="item.download_url"
					:alt="item.author"
				>

				<h3 class="mainSlider__title">
					{{item.author}}
				</h3>
			</SwiperSlide>

			<button
				class="swiper-button-prev"
				slot="button-prev"
			></button>

			<button
				class="swiper-button-next"
				slot="button-next"
			></button>
		</Swiper>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
	name: 'MainSlider',
	components: {
		Swiper,
		SwiperSlide,
	},

	props: {
		photos: {
			type: Array,
			default: () => [],
		},
	},

	data() {
		return {
			swiperOption: {
				autoplay: {
					disableOnInteraction: false,
				},
				spaceBetween: 10,
				slidesPerView: 3,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				on: {
					slidesLengthChange: () => {
						this.$refs.swiper.$swiper.slideTo(
							this.$refs.swiper.$swiper.slides.length - 1
						)
					},
				},
			},

			viewerOptions: {
				modal: true,
				button: true,
				navbar: true,
				title: false,
				toolbar: true,
				tooltip: false,
				movable: false,
				zoomable: true,
				rotatable: false,
				scalable: false,
				transition: true,
				fullscreen: true,
				keyboard: true,
			},
		}
	},
}
</script>

<style lang="scss" scoped>
.mainSlider {
	&__swiper {
		height: 100%;
	}

	&__slide {
	}

	&__img {
		width: 100%;
		height: 100%;

		object-fit: cover;
	}

	&__title {
		position: relative;
		bottom: 60px;

		background: rgba(145, 145, 145, 0.616);
	}
}

.swiper {
	&-button {
	}
}
</style>
