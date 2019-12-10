export const initialState = 
{
    item: [{

        item: "",
        completed: false,
        id: Date.now()
    }]
    
}

export const todoReducer = (state, action) => { 

    switch(action.type){
        case "ADD_TODO":
            return {item: [...state.item, action.payload]}
        case "TOGGLE_TODO":
            return {item: state.item.filter(input => (input.id != action.payload))}
        case "CLEAR_COMPLETED":
            return{
                item: state.item.map(meme => {
                    if(meme.id === action.payload){
                        return {...state.item, completed: !meme.completed}
                    }else{
                        return meme
                    }
                })
            }
        default:
            return state;
    }
}


