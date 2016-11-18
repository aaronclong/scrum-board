import Panel from './Panel'
import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Todo extends Component {

	addAgenda() {
		console.log("'Twas clicked")
	}

	render() {
		return <Panel title={ this.props.store.title } 
					   click={ this.addAgenda.bind(this) } />
	}
}

export default Todo;