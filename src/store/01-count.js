export function changeCount(amount = 1) {
    return {
        type: "CHANGE_COUNT",
        payload: amount
    }
}

export function increment() {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({type: "INCREMENT"})
        }, 1500)
    }
}

export default function countReducer(count = 0, action) {
    switch(action.type) {
        case "CHANGE_COUNT":
            return count + action.payload
        case "INCREMENT":
            return count + 1
        default:
            return count
    }
}