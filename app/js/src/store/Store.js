import Agenda from './Agenda'

export default class Store {
	constructor(ref) {
		this.ref= ref
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
}