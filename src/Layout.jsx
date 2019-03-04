import React from 'react'
import { loggerHelper } from './helpers/helpers'

import Header from './components/Header'

class Layout extends React.Component {
    render() {
        loggerHelper('testing')
        return (
            <div>
                <Header></Header>
                <h2>Keep going, don't stop.</h2>
            </div>
        )
    }
}


export default Layout
