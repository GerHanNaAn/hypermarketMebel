<template>
	<div class="addImage">
		<p>
			Из-за отсутсвия API с реальной загрузкой своего изображения, идет иммитация загрузки изображения. Приходит просто ответ от сервера.
		</p>

		<p>
			Изображения загружаются с https://picsum.photos/. Подставляется рандомный id
		</p>

		<code>
			https://picsum.photos/id/${
			<br>
			Math.round(Math.random() * 101)
			<br>
			}/info
		</code>

		<label class="addImage__item">
			<h4 class="addImage__subtitle">
				Ввести имя автора
			</h4>

			<input
				class="addImage__input"
				v-model="authorName"
				placeholder="Имя автора"
				type="text"
			>
		</label>

		<label class="addImage__item">
			<h4 class="addImage__subtitle">
				Загрузить изображение
			</h4>

			<input
				ref="fileUpload"
				class="addImage__fileUpload"
				type="file"
				accept="image/*"
			>
		</label>

		<button
			class="addImage__addImage"
			@click="submitImg"
		>
			Добавить изображение в слайдер
		</button>
	</div>
</template>

<script>
export default {
	name: 'AddImage',

	data() {
		return {
			authorName: '',
		}
	},

	methods: {
		async submitImg() {
			const formData = new FormData()
			formData.append('file', this.$refs.fileUpload.files[0])
			formData.append('author', this.authorName)

			await this.$store.dispatch('photos/uploadPhoto', formData)
		},
	},
}
</script>

<style lang="scss" scoped>
.addImage {
	display: grid;
	gap: 16px;

	padding: 20px;

	width: 400px;

	background: #5d85b7;

	&__item {
		border: 1px solid #000;
	}

	&__subtitle {
		margin: 0 0 8px;
	}

	&__input {
	}

	&__fileUpload {
	}

	&__addImage {
	}
}

code {
	padding: 4px;

	background: rgb(216, 216, 216);
}
</style>
