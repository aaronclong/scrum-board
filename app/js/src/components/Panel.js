import React, { Component } from 'react'
import './Panel.css'

const title = props => {
	return(
			<div className="title">
				 { props["title"] }
			</div>
		)
}

export default class Panel extends Component {
	constructor() {
		super()
		this.state = { title: "love"}

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