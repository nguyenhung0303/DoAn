const initState = {
    users: [
        { id: 'd1', name: 'hung' },
        { id: 'd2', name: 'hung2' }
    ],
    // posts: []
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            }

        // case y:
        //     // code block
        //     break;
        default:
            // code block
            return state;
    }

}
export default rootReducer