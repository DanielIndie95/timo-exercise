import *  as React from 'react'
import *  as Ons from 'react-onsenui'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import {Users} from "../models/user/user.model"

interface CounterProps {
    initialCount: number
}

@observer
class Counter extends React.Component<CounterProps, {}> {

    @observable
    count: number
	 
	usersApi : Users.UsersApi = new Users.UsersApi();
    componentWillMount() {
        this.count = this.props.initialCount
    }

    render() {
        return (
            <div>
                The count is: {this.count}
                <br />
                <Ons.Button onClick={()=> {
                     this.count++;}
                }>
                    Click me!
                </Ons.Button>
            </div>
        )
    }

}
//
export { Counter }