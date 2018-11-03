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
            collapse: true
        }
        this.handleOnClickCollapse = this.handleOnClickCollapse.bind(this)
    }

    handleOnClickCollapse() {
        this.setState({
            collapse: ! this.state.collapse
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
        const { data } = this.props
        const { collapse } = this.state

        if (data.dropdown) {
            return (
                <div>
                    <li className="dropdown-group">
                        <a onClick={this.handleOnClickCollapse}>
                            <span className="p-x-16">
                                <i className={data.icon + " fa-fw"}></i>
                            </span>
                            <span>
                                {data.name}
                            </span>
                        </a>
                        <ul className={"list-unstyled " + (collapse ? 'd-none' : 'sub-list')}>
                            {
                                _.map(data.dropdownList, (menu, index) => {
                                    return (
                                        <List data={menu} key={index} />
                                    )
                                })
                            }
                        </ul>
                    </li>
                </div>
            )
        } else {
            return (
                <div>
                    <li className={data.bsClass}>
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