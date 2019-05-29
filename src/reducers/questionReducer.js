const CONTENT_TOGGLE = "CONTENT_TOGGLE";
const CONTENT_SHOW = "CONTENT_SHOW";

let initialState = {
    questions: [
        {'title': 'Что если я не могу определиться с размером?', 'content': 'content', 'id': '1'},
        {'title': 'Если мне ничего не подошло?', 'content': 'content', 'id': '2'},
        {'title': 'Как получить бесплатную доставку с примеркой?', 'content': 'content', 'id': '3'},
        {
            'title': 'Мне придется ждать торгового представителя целый день?',
            'content': 'Нет. Торговый представитель приедет в тот временной интервал, который вы указали при оформлении заказа. Если вы точно знаете, в какое время нужен заказ, закажите доставку в течение выбранного часа или 15-ти минут.',
            'id': '4'
        },
        {
            'title': 'Где должен находиться торговый представитель, пока я примеряю одежду?',
            'content': 'content',
            'id': '5'
        },
        {'title': 'Что такое постамат?', 'content': 'content', 'id': '6'}
    ],
    openQuestionId: null,
    openQuestionList: []
};

const questionReducer = (state = initialState, action) => {
    switch (action.type) {

        case CONTENT_SHOW: {

            let copyState = {...state};
            let oldOpenList = [...copyState.openQuestionList];
            let NewOpenQuestionList;
            if (oldOpenList.includes(action.question)) {
                NewOpenQuestionList = oldOpenList.filter((item => {
                        return item !== action.question
                    }

                ))
            } else {
                NewOpenQuestionList = [...oldOpenList, action.question]

            }
            return {
                ...state,
                openQuestionList: NewOpenQuestionList

            }

        }

        case CONTENT_TOGGLE:
            return {
                ...state,
                openQuestionId: action.id
            };
        default:
            return state;
    }


};

export const toggleQuestionCreator = (id) => ({type: CONTENT_TOGGLE, id: id});
export const showQuestionCreator = (newQuestion) => ({type: CONTENT_SHOW, question: newQuestion});

export default questionReducer;