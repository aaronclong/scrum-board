
const validate = obj => {
	let checks = ["date", "title"]
	let bool = true
	checks.forEach(check => {
		if(checks[check] === undefined) bool = false
	})
}

export default class Agenda {
	constructor(obj) {
		if (validate(obj) === false) throw Error("Details missing for Agenda creation")
		this.dueDate = obj["date"]
		this.title = obj["title"]
	}

	get dueDate() { return this.dueDate }

	get title() { return this.title }
}