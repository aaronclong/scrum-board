import React, { Component } from 'react'
import './Panel.css'
import Agenda from '../store/Agenda'

// Insert Form
const form = props => {
	return (
			<div className="Form" >
				<form>
					<input type="text" value="Title" />
					<br/><input className="input" type="textarea" value="Description" />
					<br/><input type="submit" value="Submit" />
				</form>
			</div>
		)
}

//Add Button
const button = props => {
	return (
			<button className="add" onClick={props["click"]} >
				{props["title"]}
			</button> 
		)
}

//List item 
const initAgenda = props => {
	console.log(props)
	return ( 
			<div className="Agenda" key={props.id()} >
				<div className="Left"></div>
				<div className="inner">
					<h4> { props.title() } </h4>
					<span> { props.text() } </span><br/>
					<span> Due: { props.date() }</span>
				</div>
				<div className="Right"></div>
			</div>
		)
}

const title = props => {

	const showHideForm = () => {
		if (props["visible"] === true) return form()
		return null
	}

	let title = props["visible"] === false ? "Add Item" : "Remove"
	return (
			<div className="title">
				 { props["title"] }
				 { button({ title: title, click: props["click"] }) }
				 { showHideForm() }
			</div>
		)
}

export default class Panel extends Component {

	constructor() {
		super()
		this.state = { visible : false }
	}

	renderAgenda() {
		return ( this.props.list.map(indice => {
			return initAgenda(indice)
		})  )

	}

	add(agenda) {
		if (agenda instanceof Agenda) {
			this.props.store.list.push(agenda)
		}
	}

	addAll(array) {
		array.forEach(indice => {
			if (indice instanceof Agenda) {
				this.props.store.list.push(indice)
			}
		})
	}

	visible() {
		if (this.state.visible === true ) {
			this.setState({ visible: false})
			return
		}
		//standard case
		this.setState({visible: true})

	}

	render() {
		console.log(this.props)
		let list = this.renderAgenda()
		return (
				<div className="Panel">
					{ title({ title: this.props.title, visible: this.state.visible, click: this.visible.bind(this) }) }
					{ list }
				</div>
			)
	}
}