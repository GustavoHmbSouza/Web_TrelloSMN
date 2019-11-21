export default function dadosTrello(state = '', action) {
    switch (action.type) {
        case 'ADD_TO_DADOSTRELLO':
            return [action.data];
        default:
            return state;
    }
}
