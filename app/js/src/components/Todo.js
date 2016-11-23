import Panel from './Panel'
import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
export default class Todo extends Component {

	render() {
		return ( <Panel store={ this.props.store }  /> )
	}
}
