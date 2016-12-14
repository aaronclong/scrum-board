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

	addTo(data) {
		console.log("Fired")
		let agenda = new Agenda(data)
		this.list.push(agenda)
	}

}