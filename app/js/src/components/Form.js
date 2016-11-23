import React, { Component } from 'react'
import './Panel.css'

class Form extends Component {

	constructor() {
		super()
		this.state = {
			form : {
				description: "",
				title: "",
				date: ""
			},
			visible: false
		}
	}

	change(e)  {
		e.preventDefault()
		let name = e.target.name
		let theState = Object.assign({}, this.state["form"])
		theState[name] = e.target.value
		this.setState({ form : theState })
	}

	submit(e) {
		e.preventDefault()
		let { form } = this.state 
		console.log(new Date(this.state.date))
	}


	render() {
		return (
			<div className="Form" action="" onSubmit={this.submit.bind(this)}>
				<form>
					<input type="text" defaultValue="Title" onChange={this.change.bind(this)} name="title" />
					<br/><input type="textarea" defaultValue="Description" onChange={this.change.bind(this)} name="description" />
					<br/><input type="date" onChange={this.change.bind(this)} name="date" />
					<br/><input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
}