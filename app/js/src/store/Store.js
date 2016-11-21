import Agenda from './Agenda'

export default class Store {
	constructor(ref) {
		this.ref= ref
		if (this.ref.list === undefined) {
			this.ref["list"] = []
		}
		if (this.ref.visible === undefined) {
			this.ref["visible"] = false
		}
	}

	add(agenda) {
		if (agenda instanceof Agenda) {
			this.ref.list.push(agenda)
		}
	}

	addAll(array) {
		array.forEach(indice => {
			if (indice instanceof Agenda) {
				this.ref.list.push(indice)
			}
		})
	}

	visibility() {
		if (this.ref.visible === true ) {
			this.ref.visible = false
			return
		}
		//standard case
		this.ref.visible = true

	}
}