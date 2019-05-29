import React from 'react';
import './style.scss';
import MobMenu from './MobMenu';
import HeaderNavigationMenuContainer from './HeaderNavigationMenuContainer';
import HeaderCategoryMenuContainer from './HeaderCategoryMenuContainer';


const Header = () => (
    <header>
        <div className="header-menu">
            <div className="content-container row no-column">
                {/*eslint-disable-next-line*/}
                <div><a href="https://google.com" className="header-menu__logo"/></div>

                <HeaderCategoryMenuContainer/>

                <form className="header-menu__search icon--search" id="header-search">
                    <input className="header-menu__search-input" type="text" placeholder="Поиск товаров"/>
                </form>
                <div className="header-menu__login icon--user">Войти</div>
            </div>
        </div>

        <HeaderNavigationMenuContainer/>

        <div className="header-mob-menu">
            <div className="content-container row no-column">
                <MobMenu/>
            </div>
        </div>
    </header>

)


export default Header;
