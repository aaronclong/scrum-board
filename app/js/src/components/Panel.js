import React, { Component } from 'react'
import './Panel.css'

const addButton = props => {
	return (
			<button className="add" onClick={props} >
			Add Item
			</button> 
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
	constructor() {
		super()
		this.state = { title: "love",
						click : function() {
							console.log("Twas clicked");
						}
					}

	}

	render() {
		return (
				<div className="Panel">
					{ title(this.state) }
					What is going on?

				</div>
			)
	}
}