import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';


const HeaderCategoryMenu = ({headerMenu,selectCategory}) => (

    <ul className="header-menu__navigation">
        {headerMenu.categories.map((category) =>
            <li key={category.id} className="header-menu__navigation_category"
                onMouseEnter={() => selectCategory(category.name)}>
                {category.title}
            </li>
        )}
    </ul>
)


HeaderCategoryMenu.propTypes = {
    headerMenu: PropTypes.object,
    selectCategory: PropTypes.func
};

export default HeaderCategoryMenu;
