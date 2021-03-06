import React from 'react'
import { connect } from 'react-redux'
import { getUserList } from '../../redux/chatuser.redux'
import UserCard from '../usercard/usercard'

@connect(
	state=>state.chatuser,
	{ getUserList }
)
class Hunter extends React.Component{
	componentDidMount(){
		this.props.getUserList('recruiter')
	}
	render(){
		return <UserCard userList = {this.props.userList}></UserCard>
	}
}

export default Hunter