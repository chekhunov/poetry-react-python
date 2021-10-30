const initialState = {
    isReady: false,
    poetry: null,
}

export default (state=initialState, action) => {
    switch (action.type) {
        case 'SET_POETRY':
    return {
        //первое вернуть прежнее состояние а после загрузить
        ...state,
        // если просто загрузить
        poetry: action.payload,
        isReady: true,
    }
        case 'ADD_POETRY':
            return {
                ...state,
            //если добавляется много книг
            poetry: [
                ...state.poetry,
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