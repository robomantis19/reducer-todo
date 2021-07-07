export const initialState = 
{
    todoitems: [{

        item: "Website Dev Stuff",
        completed: false,
        id: Date.now()
    }]
    
}

export const todoReducer = (state, action) => { 

    switch(action.type){
        case "ADD_TODO":
            return {todoitems: [...state.todoitems, action.payload]}
        case "TOGGLE_TODO":
            let toggledToDos = [...state.todoitems]
            toggledToDos.map(output => { 
                if(output.id === action.payload){
                    output.completed = !output.completed;
                }
            })
            return {...state, todoitems: toggledToDos}


            // return {item: state.item.map(input => {
            //     if (input.id === action.payload){
            //         return input.completed = !input.completed
            //     }else{
            //         return 
            //     }
            // })}
        case "CHECKALL_COMPLETED":
            return{
                todoitems: [...state.todoitems].filter(meme => {
                    if(meme.completed = true){
                        return {...state.todoitems, completed: !meme.completed}
                    }else{
                        return {...state, todoitems: [...state.todoitems]}
                    }
                })
            }
            

        case "UNCHECKALL_COMPLETED":
            let completedCleared = [...state.todoitems]
            completedCleared.filter(meme => {
                if(meme.completed === true){
                    return meme.completed = !meme.completed
                    // return meme.item = "";
                }
            });
            return {...state, todoitems: completedCleared}
    
        case "CLEAR":
            let clearAll = [...state.todoitems]
            clearAll.filter(meme => {
                if(meme.completed === true){
                    // return meme.completed = !meme.completed
                    return meme.item = "";
                }
            });
            return {...state, todoitems: clearAll}

        // case "CLEAR":
        //     let clearAll = [...state.todoitems]

        default:
            return state;
    }
}


