import { Component } from 'react'
import { List } from '../Components/List'

// JSON format of the menu list
const menuList = [
    {
        "category": "Menu",
        "list": [
            {
                "dropdown": false,
                "name": "Home",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-home"
            },
            {
                "dropdown": false,
                "name": "About",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-user"
            },
            {
                "dropdown": false,
                "name": "Contact",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-chevron-up"
            },
            {
                "dropdown": true,
                "id": "sidebar-info",
                "name": "Info",
                "icon": "fa fa-info",
                "dropdownList": [
                    {
                        "dropdown": false,
                        "name": "Paramedics",
                        "link": "http://sphotonkhan.com/tech",
                        "icon": "fa fa-chevron-left",
                    },
                    {
                        "dropdown": false,
                        "name": "Help",
                        "link": "http://sphotonkhan.com/tech",
                        "icon": "fa fa-chevron-right",
                    },
                ]
            },
            {
                "dropdown": true,
                "id": "sidebar-info",
                "name": "Design",
                "icon": "fa fa-key",
                "dropdownList": [
                    {
                        "dropdown": false,
                        "name": "Lock",
                        "link": "http://sphotonkhan.com/tech",
                        "icon": "fa fa-user",
                    },
                    {
                        "dropdown": false,
                        "name": "Help",
                        "link": "http://sphotonkhan.com/tech",
                        "icon": "fa fa-plus",
                    },
                ]
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
                "icon": "fa fa-info",
                "dropdownList": [
                    {
                        "dropdown": false,
                        "name": "Paramedics",
                        "link": "http://sphotonkhan.com/tech",
                        "icon": "fa fa-chevron-left",
                    },
                    {
                        "dropdown": false,
                        "name": "Help",
                        "link": "http://sphotonkhan.com/tech",
                        "icon": "fa fa-chevron-right",
                    },
                ]
            },
            {
                "dropdown": false,
                "name": "Home",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-home"
            },
            {
                "dropdown": false,
                "name": "About",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-user"
            },
            {
                "dropdown": false,
                "name": "Contact",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-chevron-up"
            },
            {
                "dropdown": false,
                "name": "Home",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-home"
            },
            {
                "dropdown": false,
                "name": "About",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-user"
            },
            {
                "dropdown": false,
                "name": "Contact",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-chevron-up"
            },
            {
                "dropdown": false,
                "name": "Home",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-home"
            },
            {
                "dropdown": false,
                "name": "About",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-user"
            },
            {
                "dropdown": false,
                "name": "Contact",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-chevron-up"
            },
            {
                "dropdown": false,
                "name": "Home",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-home"
            },
            {
                "dropdown": false,
                "name": "About",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-user"
            },
            {
                "dropdown": false,
                "name": "Contact",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-chevron-up"
            },
            {
                "dropdown": false,
                "name": "Home",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-home"
            },
            {
                "dropdown": false,
                "name": "About",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-user"
            },
            {
                "dropdown": false,
                "name": "Contact",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-chevron-up"
            },
            {
                "dropdown": false,
                "name": "Home",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-home"
            },
            {
                "dropdown": false,
                "name": "About",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-user"
            },
            {
                "dropdown": false,
                "name": "Contact",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-chevron-up"
            },
            {
                "dropdown": false,
                "name": "Home",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-home"
            },
            {
                "dropdown": false,
                "name": "About",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-user"
            },
            {
                "dropdown": false,
                "name": "Contact",
                "link": "http://sphotonkhan.com/tech",
                "icon": "fa fa-chevron-up"
            },
        ]
    },
    {
        "category": "Documents",
    },
]

// Create Sidebar
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
                    <SidebarFooter />
                </div>
            </div>
        )
    }
}

// Create Sidebar Heading
class SidebarHeading extends Component {
    render() {
        return (
            <div className="sidebar-heading">
                <div className="sidebar-heading-container">
                    <a className="sidebar-brand">
                        <img src="/static/svg/logo.svg" alt="Omis Logo" className="sidebar-logo"></img>
                        <span>Photon Kit</span>
                    </a>
                </div>
            </div>
        )
    }
}

// Creates Sidebar Conten
class SidebarContent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { menuList } = this.props
        return (
            <div>
                <div className="sidebar-content">
                {
                    _.map(menuList, (category, index) => {
                        return (
                            <div key={index}>
                                <div className="sidebar-header">
                                    <span className="text-muted">
                                        {category.category}
                                    </span>
                                </div>
                                <ul className="sidebar-list-content list-unstyled">
                                    <SidebarLink category={category} key={index}/>
                                </ul>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

// Create Sidebar Link
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

// Create Sidebar Footer
class SidebarFooter extends Component {
    constructor(props) {
        super(props)   
    }

    render() {
        return (
            <div>
                <div className="sidebar-footer">
                    <div className="sidebar-footer-profile">
                        <span className="sidebar-footer-profile-image">
                            <img src="/media/javascript.jpg" alt="sidebar-footer-user-photo" />
                        </span>
                        <span className="sidebar-footer-profile-detail">
                            <div className="sidebar-footer-profile-name">
                                Hello
                            </div>
                            <div className="sidebar-footer-profile-status">
                                <i className="fa fa-circle text-success"></i>
                                <span>online</span>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export { menuList, Sidebar, SidebarHeading, SidebarContent, SidebarLink }