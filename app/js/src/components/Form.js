import React, { Component } from 'react'
//import Calendar from 'react-input-calendar'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import './Form.css'
import 'react-datepicker/dist/react-datepicker.css';

export default class Form extends Component {

	constructor() {
		super()
		this.state = {
			form : {
				description: "",
				title: "",
				date: new moment()
			},
			visible: false
		}
	}

	change(e)  {
		let name = e.target.name
		let theState = Object.assign({}, this.state["form"])
		theState[name] = e.target.value
		this.setState({ form : theState })
	}

	datePick(e) {
		console.log(e)
		let theState = Object.assign({}, this.state["form"])
		theState["date"] = e
		this.setState({ form : theState })
	}

	submit(e) {
		e.preventDefault()
		let { form } = this.state
		if (form.title !== "" && form.description !== "") {
			this.props.upstream(form)
		}
	}


	render() {
		return (
			<div className="Form">
				<form action="" onSubmit={this.submit.bind(this)}>
					<input type="text" defaultValue="Title" onChange={this.change.bind(this)} name="title" />
					<br/><input type="textarea" defaultValue="Description" onChange={this.change.bind(this)} name="description" />
					<br/><DatePicker dateFormat='DD/MM/YYYY' 
									 selected={this.state.form.date}
									 onChange={this.datePick.bind(this)} 
									 showMonthDropdown />
					<br/><input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
}