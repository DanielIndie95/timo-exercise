import * as React from 'react'
import * as Ons from 'react-onsenui'

import { Counter } from './counter'

class App extends React.Component<{}, {}> {
    render() {
        return (
            <Ons.Page renderToolbar={() => this.renderToolbar()}>
                Hey :D<br />
                <Counter initialCount={5} />
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