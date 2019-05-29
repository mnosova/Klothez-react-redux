const SHOW_NAVIGATION = "SHOW_NAVIGATION";
const HIDE_NAVIGATION = "HIDE_NAVIGATION";

let initialState = {
    openMenu: '',
    categories: [
        {title: 'Женщинам', name: 'womanNav', id: '0'},
        {title: 'Мужчинам', name: 'manNav', id: '1',}
    ],
    manNav: [
        {
            'name': 'Одежда',
            'link': 'https://google.com'
        },
        {
            'name': 'Обувь',
            'link': 'Сумки и аксессуары'
        },
        {
            'name': 'Одежда',
            'link': 'https://google.com'
        }

    ],
    womanNav : [
        {
            'name': 'Одежда',
            'link': 'https://google.com'

        },
        {
            'name': 'Обувь',
            'link': 'Сумки и аксессуары'
        },
        {
            'name': 'Одежда',
            'link': 'https://google.com'
        },
        {
            'name': 'Распродажа',
            'link': 'https://google.com'
        }
    ]




};
let headerMenuReducer = (state = initialState, action) => {

    switch (action.type) {

        case SHOW_NAVIGATION:
         return{
             ...state,
             openMenu: action.showNavName
         }


        case HIDE_NAVIGATION:
            return {
                ...state,
                openMenu: ''

            }
        default:
            return state
    }


}


export const showNavigationCreator = (navigationName) => ({'type': SHOW_NAVIGATION,showNavName: navigationName});
export const hideNavigationCreator = () => ({'type': HIDE_NAVIGATION});

export default headerMenuReducer;