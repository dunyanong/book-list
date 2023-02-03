import { createContext, useEffect, useReducer } from "react";
import { BookReducer } from "../reducers/BookReducer";

export const BookContext = createContext();

const dispatchEnhancer = () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
}

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(BookReducer, [], dispatchEnhancer);
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

    return (        
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;