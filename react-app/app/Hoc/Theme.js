import { Component } from 'react'

const theme = WrappedComponent => {
    class Theme extends Component {
        constructor(props) {
            super(props)
            this.state = {
                currentTheme: "light-theme"
            }
        }

        render() {
            const { currentTheme } = this.state
            return (
                <div>
                    <div className={ currentTheme }>
                        <WrappedComponent {...this.props}/>
                    </div>
                </div>
            )
        }
    }

    return Theme
}

export { theme }