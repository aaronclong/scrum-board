
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

		this._dueDate = obj["date"]
		this._title = obj["title"]
		this._text = obj["text"]
	}

	date() { return this._dueDate.toDateString() }

	title() { return this._title }

	text() { return this._text }
}