export const initialState = {
    addItem:[{
        item: 'Learn about reducers',
        completed: false,
        id: Date.now()
    }]
}

export const reducer = (state,action) =>{
    switch(action.type){
        case 'Add_Item':
            return{
                ...state,
                item: action.payload
            }
        case "Clear_Task":
            return{
                ...state,
                item: state.item.filter(item =>{
                    return(!item.completed)
                })
            }
        case 'Toogle_Tasks':
            return{
                ...state.item,
                item: state.item.map(e =>{
                    if(e.id === action.payload){
                        return{
                            ...e,
                            completed: (!state.item.completed)
                        }
                    }else{
                        return e
                    }
                })
                
            }
        default:
            return state
    }
}




