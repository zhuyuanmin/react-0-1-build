const initState = {
    name: '张三',
    age: 20
}
export default function user(state = initState, action) {
    switch (action.type) {
        case 'Add':
            return { ...state, list: action.preload }
        default:
            return state
    }
}
