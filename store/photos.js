export const state = () => ({
	PHOTO_LIST: null,
})

export const getters = {
	GET_PHOTO_LIST(state) {
		return state.PHOTOS
	},
}

export const mutations = {
	SET_PHOTO_LIST(state, photoList) {
		state.PHOTO_LIST = photoList
	},

	ADD_PHOTO(state, photo) {
		state.PHOTO_LIST.push(photo)
	},
}

export const actions = {
	async getPhotoList({ commit }) {
		try {
			const response = await this.$axios.get(
				'https://picsum.photos/v2/list?limit=3'
			)
			const photosList = response?.data ?? []

			commit('SET_PHOTO_LIST', photosList ?? [])
		} catch (err) {
			console.log(err)
		}
	},

	async uploadPhoto({ commit }, form) {
		try {
			const response = await this.$axios.post(
				// Имитация успешной загрузки изображения и ифнормации к нему
				'https://jsonplaceholder.typicode.com/posts',
				form
			)

			const photo = await this.$axios.get(
				`https://picsum.photos/id/${Math.round(
					Math.random() * 101
				)}/info`
			)

			commit('ADD_PHOTO', photo.data)
		} catch (err) {
			console.log(err)
		}
	},
}
