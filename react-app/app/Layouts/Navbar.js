import { Component } from 'react'
import { List } from '../Components/List'
import { InputField } from '../Forms/InputField'

const NavbarDropdrownList = [
    {
        "dropdown": false,
        "name": "Home",
        "link": "http://sphotonkhan.com",
    },
    {
        "dropdown": false,
        "name": "About",
        "link": "http://sphotonkhan.com",
    },
    {
        "dropdown": false,
        "name": "Contact",
        "link": "http://sphotonkhan.com",
    },
]


class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapse: true
        }
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick() {
        this.setState({
            collapse: !this.state.collapse
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.collapse !== prevState.collapse) {
            this.setState({
                collapse: this.state.collapse
            })
        }
    }

    render() {
        const { collapse } = this.state
        return (
            <div>
                <nav className="navbar">
                    <div className="mr-auto left-section">
                        <InputField />
                    </div>
                    <div className="right-section" onClick={this.handleOnClick}>
                        <span>
                            <img src="/media/javascript.jpg" alt="profile-photo"/>
                            <span className="circle text-primary hide-laptop-large-down">
                                &nbsp;
                            </span>
                        </span>
                        <div className={collapse ? 'd-none' : 'navbar-dropdown-expand'}>
                            <ul>
                                {
                                    _.map(NavbarDropdrownList, (menu, index) => {
                                        return (
                                            <List data={menu} key={index} hoverable={false} />
                                        )
                                    }) 
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export { Navbar }