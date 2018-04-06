import Immutable, {Map} from 'immutable'

export const VOTE = 'counter/VOTE'

const initialState = Immutable.fromJS({
    // ideally the questions should come from an ajax call and mounted inside componentsDidMount function in Home component
    questions: {questionsList:[{ "id": 1, "text": "Favorite color", "answers": [{ "id": 1, "text": "Red", "responses": 10 }, { "id": 2, "text": "Green", "responses": 20 }, { "id": 3, "text": "Blue", "responses": 5 }] }, { "id": 2, "text": "Favorite animal", "answers": [{ "id": 1, "text": "Dog", "responses": 150 }, { "id": 2, "text": "Cat", "responses": 100 }, { "id": 3, "text": "Bird", "responses": 17 }] }]}
})

export default (state = initialState, action) => {
    switch (action.type) {
        case "VOTE":
            const questionId =  parseInt(action.questionId) -1,
                  answerId = parseInt(action.answerId) -1;
            return state.updateIn(["questions","questionsList", questionId,"answers",answerId, "responses" ],currentCount => currentCount+1);
        default:
            return state
    }
}

export const increment = (questionId, answerId) => {
    return dispatch => dispatch({
        type: "VOTE",
        questionId: questionId,
        answerId: answerId
    });
}