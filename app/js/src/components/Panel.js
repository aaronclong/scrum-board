import React, { Component } from 'react'
import './Panel.css'

const addButton = props => {
	return (
			<button className="add" onClick={props} >
				Add Item
			</button> 
		)
}

const initAgenda = props => {
	console.log(props)
	return ( 
			<div className="Agenda" key={props._title} >
				<span className="lef"></span>
				<div className="inner">
					<span> { props.title() } </span><br/>
					<span> { props.text() } </span><br/>
					<span> Expires in: { props.date() }</span>
				</div>
				<span className="right"></span>
			</div>
		)
}

const title = props => {
	return (
			<div className="title">
				 { props["title"] }
				 { addButton(props["click"]) }
			</div>
		)
}

export default class Panel extends Component {

	renderAgenda(array) {
		return ( array.map(indice => {
			return initAgenda(indice)
		})  )

	}

	render() {
		let list = this.renderAgenda(this.props.list)
		return (
				<div className="Panel">
					{ title(this.props) }
					{ list }
				</div>
			)
	}
}