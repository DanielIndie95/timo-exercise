import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import * as React from 'react'
import * as ReactDom from 'react-dom'

import { App } from './app'

const root = document.getElementById('root')
ReactDom.render(<App />, root)