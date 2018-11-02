import { Component } from 'react'

/**
 * @ Creates List
 * Required Field: data [properties: dropdown, bsClass, link, name] (No DropDown)
 * Required Field: data [properties: dropdown, id, bsClass, link, name, DropdownArray] (Dropdown)
 */
class List extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { data } = this.props
        if (data.dropdown) {
            return (
                <div>
                    <div>
                        <a href={"#" + data.id} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <span className="p-l-25 p-r-5">
                                <i className={data.icon + " fa-fw"}></i>
                            </span>
                            <span className="p-r-25">
                                {data.name}
                            </span>
                        </a>
                    </div>
                    <ul className="collapse list-unstyled" id={data.id} >
                        {
                            _.map(data.dropdownList, (menu, index) => {
                                return (
                                    <List data={menu} key={index} />
                                )
                            })
                        }
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    <li className={data.bsClass}>
                        <a href={data.link}>
                            <span className="p-l-25 p-r-5">
                                <i className={data.icon + " fa-fw"}></i>
                            </span>
                            <span className="p-r-25">
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