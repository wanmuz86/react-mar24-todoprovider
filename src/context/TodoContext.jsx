import { createContext,useReducer,useContext } from 'react';

// Is the group of components that will share the variable or declared inside this file
const TodoContext = createContext();
// We will create a component wrapper <TodoProvider> that will wrap
// all the components sharing this state
// And these components are sent as prop in {children} // Add/ List / Row  
const TodoProvider = ({ children }) => {

    // Add an intialized the sharable state between the components
    const initialState = {
        todos: []
    }

    // Row -> have access to delete method/action -> 'ADD_TODO'
    // Add -> to have access to add method/action -> 'REMOVE_TODO'
    // List -> To have access to read the state/todos

    const todoReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_TODO':
                return {
                    // spread operator , it will update all the state 
                    // we will add action.payload (name) into todos array => added to the state
                    ...state, todos: [...state.todos, action.payload]
                };
            case 'REMOVE_TODO':
                return {
                    // spread operator , it will update all the state 
                    // we will remove the todolist, based on the id, update todos , update the state
                    ...state, todos: state.todos.filter(todo => todo.id != action.payload)
                };
            default:
                // the others, eg: for List/Get -> We return the state/todos
                return state;
        }
    }
    // We declared the state (initialState) and the methods (todoReducer) that can be used by the shard components
    //{children}
// Using useReducer, I will combine this two and it is accesible through <TodoContext.Provider> component
// state -> to get the state , and dispatch -> to get the method
    const [ state, dispatch ] = useReducer(todoReducer, initialState);
    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
}

// A custom hook that will be used by component in case they want to access the state, and dispatch method
const useTodo = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('useTodo must be used with a TodoProvider')
    }
    return context
}

export { TodoProvider, useTodo }