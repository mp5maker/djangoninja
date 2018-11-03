import { Component } from 'react'
import { List } from '../Components/List'

const menuList = [
    {
        "category": "Menu",
        "list": [
            {
                "dropdown": false,
                "name": "Home",
                "bsClass": "",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-home"
            },
            {
                "dropdown": false,
                "name": "About",
                "bsClass": "",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-user"
            },
            {
                "dropdown": false,
                "name": "Contact",
                "bsClass": "",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-chevron-up"
            },
        ]
    },
    {
        "category": "Components",
        "list": [
            {
                "dropdown": true,
                "id": "sidebar-info",
                "name": "Info",
                "bsClass": "",
                "icon": "fa fa-info",
                "dropdownList": [
                    {
                        "dropdown": false,
                        "name": "Paramedics",
                        "bsClass": "",
                        "link": "http://sphotonkhan.com/tech",
                        "icon": "fa fa-chevron-left",
                    },
                    {
                        "dropdown": false,
                        "name": "Help",
                        "bsClass": "",
                        "link": "http://sphotonkhan.com/tech",
                        "icon": "fa fa-chevron-right",
                    },
                ]
            }
        ]
    }
]

/**
 * Collectiosn of Sidebar List
 */
class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuList: menuList
        }
    }

    render() {
        const { menuList } = this.state
        return (
            <div>
                <div className="sidebar-menu">
                    <SidebarHeading />
                    <SidebarContent menuList={menuList} />
                </div>
            </div>
        )
    }
}

/**
 * Creates SidebarHeading
 */
class SidebarHeading extends Component {
    render() {
        return (
            <div className="sidebar-heading">
                <div className="sidebar-heading-container">
                    <a className="sidebar-brand">
                        <img src="/static/svg/logo.svg" alt="Omis Logo" className="sidebar-logo"></img>
                        <span>OMIS</span>
                    </a>
                </div>
            </div>
        )
    }
}

/**
 * Creates Sidebar
 */
class SidebarContent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { menuList } = this.props
        return (
            <div>
                {
                    _.map(menuList, (category, index) => {
                        return (
                            <div key={index}>
                                <div className="sidebar-header">
                                    <span className="text-muted ">
                                       {category.category}
                                    </span>
                                </div>
                                <ul className="sidebar-content list-unstyled">
                                    <SidebarLink category={category} key={index}/>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

class SidebarLink extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { category } = this.props
        return (
            <div>
                {
                    _.map(category.list, (menu, index) => {
                        return (
                            <List data={menu} key={index} />
                        )
                    }) 
                }
            </div>
        )
    }
}

export { menuList, Sidebar, SidebarHeading, SidebarContent, SidebarLink }