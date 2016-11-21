
const validate = obj => {
	let checks = ["date", "title", "text"]
	let bool = true
	checks.forEach(check => {
		if(obj[check] === undefined) bool = false
	})
	return bool
}

export default class Agenda {
	constructor(obj) {
		if (validate(obj) === false) throw Error("Details missing for Agenda creation")
		this._id = Math.floor(Math.random() * 20)
		this._dueDate = obj["date"]
		this._title = obj["title"]
		this._text = obj["text"]
	}

	date() { return this._dueDate.toDateString() }

	id() { return this._id }

	text() { return this._text }

	title() { return this._title }

}