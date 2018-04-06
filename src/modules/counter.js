import Immutable from 'immutable'

export const VOTE = 'counter/VOTE'

const initialState = {
    count: 0,
    questions: Immutable.fromJS([{ "id": 1, "text": "Favorite color", "answers": [{ "id": 1, "text": "Red", "responses": 10 }, { "id": 2, "text": "Green", "responses": 20 }, { "id": 3, "text": "Blue", "responses": 5 }] }, { "id": 2, "text": "Favorite animal", "answers": [{ "id": 1, "text": "Dog", "responses": 150 }, { "id": 2, "text": "Cat", "responses": 100 }, { "id": 3, "text": "Bird", "responses": 17 }] }])
}

export default (state = initialState, action) => {
    switch (action.type) {
        case VOTE:
            return state.

        default:
            return state
    }
}

export const increment = () => {
    return dispatch => {
        dispatch({
            type: "VOTE",
            questionId: 1,
            answerId: 3
        })
    }
}