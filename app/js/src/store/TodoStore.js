import { observable } from 'mobx'
import Store from './Store'

export default class TodoStore {
	@observable list 

	@observable title 

	constructor() {
		this.list = []
		this.title = "Todo"
		this.store = new Store(this)
	}

}