import React, { Component } from 'react'
import './Panel.css'
import Form from './Form'
import Agenda from '../store/Agenda'


//Add Button
const button = props => {
	return (
			<button className="add" onClick={props["click"]} >
				{ props["title"] }
			</button> 
		)
}

//List item 
const initAgenda = props => {
	console.log(props)
	return ( 
			<div className="Agenda" key={props.id()} >
				<div className="inner">
					<h4> { props.title() } </h4>
					<span> { props.text() } </span><br/>
					<span> Due: { props.date() }</span>
				</div>
			</div>
		)
}

const title = props => {

	const showHideForm = () => {
		if (props["visible"] === true) return <Form submit={props["submit"]}/>
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
		return ( this.props.store.list.map(indice => {
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

	submit(data) {
		this.props.store.addTo(data)
	}
	//I should move visiblitity into the form itself proper
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
					{ title({ title: this.props.store.title, 
							  visible: this.state.visible, 
							  click: this.visible.bind(this),
							  submit: this.submit.bind(this)}) }
					{ list }
				</div>
			)
	}
}