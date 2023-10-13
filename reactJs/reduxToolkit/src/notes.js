
// We will use one common file to store all the data
// then get the required data from there instead of prop-drilling


// Reducers

// reducers are like controllers they add the things delete, etc ..
// all the oprations are done through reducers


//useSelector

// we will use this hook to get the data from store


//useDispatch

// to update the data in store along with reducer , we can't directly call reducers


//todoSlice file is responsible for changing the state of the app

// we will need state inside reducer to know which state and update the state also to know whats inside the store
// action is something through which we can send some data like delete a todo using the id which means sending a payload

// we should export everything as actions in todoSlice