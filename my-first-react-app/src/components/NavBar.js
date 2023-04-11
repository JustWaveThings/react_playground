import React from 'react';

export default function NavBar(props) {
	const { username } = props;
	return <div>The user name here in this Navbar is: {username}</div>;
}
