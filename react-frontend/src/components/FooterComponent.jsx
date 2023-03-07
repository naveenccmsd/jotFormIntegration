import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer className="my-5 pt-5 text-muted text-center text-small">
                    <p className="mb-1">&copy; 2017–2022 Company Name</p>

                </footer>
            </div>
        )
    }
}

export default FooterComponent
