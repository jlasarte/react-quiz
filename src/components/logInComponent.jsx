import React from 'react';

export const LogIn = React.createClass({
	

	//The function decides if the user can continue
	//takeing in count if the username input was filled 
	handleButtonClick(){
		if (this.getState('userText')) {
			console.log(this.username);
			//@TODO: the setting of the user that is 
			//going to play. 
		} else {
			alert("You have to put you name");
		}
	},

	render() {
		return <div>
			Username
			<input ref="username" type='text' onChange= {() => {
				this.setState('userText') = username.value;
			}}/>
			<button onClick={this.handleButtonClick.bind(this)}>
				Play !
			</button>
		</div>
	}	
});

