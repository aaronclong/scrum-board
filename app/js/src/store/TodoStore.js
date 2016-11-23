import { observable, actions } from 'mobx'
import Store from './Store'
import Agenda from './Agenda'

export default class TodoStore {

	@observable list 
	@observable visible
	@observable title 

	constructor() {
		this.list = []
		this.title = "Todo"
		this.store = new Store(this)
	}

	addTo(agenda) {
		if (agenda instanceof Agenda) {
			this.list.push(agenda)
		}
		return false
	}

}