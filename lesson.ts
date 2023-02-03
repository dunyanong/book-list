/* 
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
React Context & Hooks Tutorial #19 - Reducers, Actions & State
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
{ Reducer }
-> A reducer in React is a pure function that takes the previous state and an action, 
and returns the next state of your application.

-> While you can manage the state of a simple React application using the useState hook, 
it becomes challenging to manage the state of a complex application with many components and different state updates.
-> A reducer allows you to manage the state in a centralized way, making it easier to reason about and debug the state of your application. It also allows you to have a clear history of state changes, which can be useful for debugging and testing purposes.

const [state, dispatch] = useReducer(reducerFunction, initialState);

{ action }
-> An action in the context of a useReducer hook is simply an object that describes the change you want to make to the state. 
The action can contain any data that you need to make the update, such as the type of update, the new value for a state variable, etc.

simple example:
function Counter() {
  const [state, dispatch] = useReducer(reducer, { count1: 0, count2: 0, count3: 0 });

  function reducer(state, action) {
    switch (action.type) {
      case 'increment1':
        return { ...state, count1: state.count1 + 1 };
      case 'increment2':
        return { ...state, count2: state.count2 + 1 };
      case 'increment3':
        return { ...state, count3: state.count3 + 1 };
      default:
        throw new Error();
    }
  }

  return (
    <div>
      <button onClick={() => dispatch({ type: 'increment1' })}>Count 1: {state.count1}</button> <-----common format trick
      <button onClick={() => dispatch({ type: 'increment2' })}>Count 2: {state.count2}</button>
      <button onClick={() => dispatch({ type: 'increment3' })}>Count 3: {state.count3}</button>
    </div>
  );
}

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
React Context & Hooks Tutorial #21 - Adding Local Storage
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
{LocalStorage}
LocalStorage is a type of web storage that allows JavaScript to store key-value pairs locally within a user's browser.

{setItem }
The setItem method is used to add or update key-value pairs in the localStorage object. 

The syntax is as follows:
localStorage.setItem(key, value);

here key is a string that represents the name of the item being stored and value is the data being stored, 
which can be any string or JavaScript object that has been converted to a string using JSON.stringify().

{getItem}
The getItem method is used to retrieve the value of a key from the localStorage object. 
The syntax is as follows:
var value = localStorage.getItem(key);

where key is a string that represents the name of the item being retrieved and value is the data being returned, which will be a string. 
To access the original JavaScript object, you can use JSON.parse(value).

{RARE CASE: third argument of useReducer}
The useReducer hook in React allows you to manage complex state and update it in response to actions. 
The third argument for useReducer is an optional dispatch enhancer. 

A dispatch enhancer is a special type of function that can modify or add extra behavior to the dispatch action. 
It takes the original dispatch function as input and returns a new, modified dispatch function.

const enhancedDispatch = dispatch => action => {
  console.log(`Dispatching action: ${action.type}`);
  dispatch(action);
};

const [state, dispatch] = useReducer(reducer, initialState, enhancedDispatch);







*/