const redux = require('redux');
const createStore = redux.createStore;
const InilialState = {
    counter: 0,
    name:"Pradeep"
}

//Reducer
let RootReducer = (state = InilialState, action) => {
    if (action.type === "Increment") {
        return newstate={
            ...state,
            counter: state.counter + 1
        }
    }
     if (action.type === "AddValue") {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}


// Store
let store = createStore(RootReducer);
console.log(store.getState());


//Dispatching(Action)
store.dispatch({ type: "Increment" })
store.dispatch({ type: "AddValue", value: 5 })
console.log(store.getState())


// Subscription