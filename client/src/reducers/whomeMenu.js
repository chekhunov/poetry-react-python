const initialState = {
    isReady: false,
    whomeMenu: null,
}

export default (state=initialState, action) => {
    switch (action.type) {
        case 'SET_WHOMEMENU':
    return {
        //первое вернуть прежнее состояние а после загрузить
        ...state,
        // если просто загрузить
        whomeMenu: action.payload,
        isReady: true,
    }
        case 'ADD_WHOMEMENU':
            return {
                ...state,
            //если добавляется много книг
            whomeMenu: [
                ...state.whomeMenu,
                // в конец вставим обьект который передали через экшен
                action.payload
            ]
    }
    case 'SET_IS_READY':
            return {
            ...state,
            isReady: action.payload
    }

        default:
            return state;
    }
}