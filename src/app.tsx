import * as React from 'react'
import * as Ons from 'react-onsenui'

import { Counter } from './counter'
import {Users} from "./models/user/user.model"

class App extends React.Component<{}, {}> {
    usersApi = new Users.UsersApi();
    render() {
        return (
            <Ons.Page renderToolbar={() => this.renderToolbar()}>
                Hey :D<br />
                <Counter initialCount={5} />
                <Ons.Input id="email_input" type="textbox" placeholder="email"/>
                <Ons.Button onClick={() => {
                    var comp = document.getElementById('email_input');
                    var email = comp.value;
                    this.usersApi.createNewUser(email , "fuckoff" , "danielindie");
                    alert(this.usersApi.getCurrentUser().name)
                }}>Register</Ons.Button>
                
            </Ons.Page>
        )
    }

    renderToolbar() {
        return (
            <Ons.Toolbar>
				<div className='center'>
					Hello world!
				</div>
			</Ons.Toolbar>
        )
    }
}

export { App }