import { observable, actions } from 'mobx'
import Store from './Store'

export default class TodoStore {

	@observable list 
	@observable visible
	@observable title 

	constructor() {
		this.list = []
		this.title = "Todo"
		this.store = new Store(this)
	}

}