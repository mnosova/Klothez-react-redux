import React from 'react';
import PropTypes from 'prop-types';



const HeaderNavigationMenu = ({headerMenu,hideNavigation}) => {

    if (headerMenu.openMenu !== '') {
        return(
            <nav className="header-secondmenu" onMouseLeave={()=> hideNavigation()}>
                <ul className="header-secondmenu__navigation content-container">
                    {headerMenu[headerMenu.openMenu].map((item,i) =>
                        <li className="header-secondmenu__navigation_category" key={i} >
                            <a href={item.link}>{item.name}</a>
                        </li>
                    )}
                </ul>
            </nav>
        )
    }else {
        return(
            null
        )

    }

};

HeaderNavigationMenu.propTypes ={
    headerMenu : PropTypes.object,
    hideNavigation: PropTypes.func
};




export default HeaderNavigationMenu;