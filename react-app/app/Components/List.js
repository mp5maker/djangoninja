import { Component } from 'react'

/**
 * @ Creates List
 * Required Field: data [properties: dropdown, bsClass, link, name] (No DropDown)
 * Required Field: data [properties: dropdown, id, bsClass, link, name, DropdownArray] (Dropdown)
 */
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapse: true,
        }
        this.handleOnClickCollapse = this.handleOnClickCollapse.bind(this)
        this.handleOnMouseEnterCollapse = this.handleOnMouseEnterCollapse.bind(this)
        this.handleOnMouseLeaveCollapse = this.handleOnMouseLeaveCollapse.bind(this)
    }

    toggleHideShow(event) {
        const element = event.target.nextElementSibling;
        if (element) {
            if (element.style.maxHeight) {
                element.style.maxHeight = null
            } else {
                element.style.maxHeight = element.scrollHeight + "px"
            }
        }
    }

    handleOnClickCollapse(event) {
        this.setState({
            collapse: ! this.state.collapse
        })
        this.toggleHideShow(event)
    }

    handleOnMouseEnterCollapse(event) {
        this.setState({
            collapse: false
        })
        this.toggleHideShow(event)
    }
    
    handleOnMouseLeaveCollapse(event) {
        this.setState({
            collapse: true
        })
        this.toggleHideShow(event)
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.state.collapse !== prevState.collapse) {
            this.setState({
                collapse: this.state.collapse
            })
        }
    }

    render() {
        const { data } = this.props
        const { collapse } = this.state
        if (data.dropdown) {
            return (
                <div>
                    <li 
                        onMouseEnter={this.handleOnMouseEnterCollapse}
                        onMouseLeave={this.handleOnMouseLeaveCollapse} 
                        className="dropdown-group">
                        <div
                            onClick={this.handleOnClickCollapse} 
                            className={"dropdown-group-name " + (collapse ? "" : "active")}>
                            <a>
                                <span className="p-x-16">
                                    <i className={data.icon + " fa-fw"}></i>
                                </span>
                                <span>
                                    {data.name}
                                </span>
                            </a>
                        </div>
                        <div className="dropdown-group-list">
                            <ul className="list-unstyled">
                                {
                                    _.map(data.dropdownList, (menu, index) => {
                                        return (
                                            <List data={menu} key={index} />
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </li>
                </div>
            )
        } else {
            return (
                <div>
                    <li className="no-dropdown">
                        <a href={data.link}>
                            <span className="p-x-16">
                                <i className={data.icon + " fa-fw"}></i>
                            </span>
                            <span>
                                {data.name}
                            </span>
                        </a>
                    </li> 
                </div>
            )
        }
    }
}

export { List }