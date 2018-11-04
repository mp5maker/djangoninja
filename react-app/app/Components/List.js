import { Component } from 'react'

/**
 * @ Creates List
 * Required Field No Dropdown: Category, List [{dropdown, name, link, icon}]
 * Required Field Dropdown: Category, List[{dropdown, name, link, icon, dropdownList[{}]}]
 */
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapse: true,
            collapsibleElement: null
        }
        this.handleOnClickCollapse = this.handleOnClickCollapse.bind(this)
        this.handleOnMouseEnterCollapse = this.handleOnMouseEnterCollapse.bind(this)
        this.handleOnMouseLeaveCollapse = this.handleOnMouseLeaveCollapse.bind(this)
    }

    /**
     * Toggles the dropdown 
     * @param {object} event 
     */
    toggleHideShow(event) {
        const element = event.target.nextElementSibling;
        if (element) {
            this.setState({
                collapsibleElement: element
            })
            if (element.style.maxHeight) {
                element.style.maxHeight = null
            } else {
                element.style.maxHeight = element.scrollHeight + "px"
            }
        } else {
            if (this.state.collapsibleElement) {
                this.state.collapsibleElement.style.maxHeight = null
            }
        }
    }

    /**
     * Toggle the dropdown using click
     * @param {object} event 
     */
    handleOnClickCollapse(event) {
        this.setState({
            collapse: ! this.state.collapse
        })
        this.toggleHideShow(event)
    }

    /**
     * Expand the dropdown on hover
     * @param {object} event 
     */
    handleOnMouseEnterCollapse(event) {
        this.setState({
            collapse: false
        })
        this.toggleHideShow(event)
    }
    
    /**
     * Collapse the dropdown on mouse leave
     * @param {object} event 
     */
    handleOnMouseLeaveCollapse(event) {
        this.setState({
            collapse: true
        })
        this.toggleHideShow(event)
    }
    
    /**
     * Make the dom element know about the update
     * @param {object} prevProps 
     * @param {object} prevState 
     */
    componentDidUpdate(prevProps, prevState) {
        if (this.state.collapse !== prevState.collapse) {
            this.setState({
                collapse: this.state.collapse
            })
        }
    }

    // Rendering the DOM
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
                            className={"dropdown-group-category " + (collapse ? "" : "active")}>
                            <a>
                                <span className="p-x-16 dropdown-group-icon">
                                    <i className={data.icon + " fa-fw"}></i>
                                </span>
                                <span className="dropdown-group-name">
                                    {data.name}
                                </span>
                                <span className="dropdown-group-caret">
                                    <i className="fa fa-caret-down"></i>
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