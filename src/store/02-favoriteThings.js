export function addFavoriteThing(thing) {
    return {
        type: "ADD_FAVORITE_THING",
        payload: thing
    }
}

export function removeFavoriteThing(thing) {
    return {
        type: "REMOVE_FAVORITE_THING",
        payload: thing
    }
}

export default function favoriteThingsReducer(favoriteThings = [], action) {
    switch(action.type) {
        case "ADD_FAVORITE_THING":
            return [...favoriteThings, action.payload]
        case "REMOVE_FAVORITE_THING": {            
            const updatedArr = favoriteThings.filter(thing => thing.toLowerCase() !== action.payload.toLowerCase())
            return updatedArr
        }
        default:
            return favoriteThings
    }
}