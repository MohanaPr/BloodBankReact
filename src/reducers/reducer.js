let initialState={
  demo:[],demo1:""
    
}
export function formReducer(state=initialState,action){

    switch(action.type){
        case "FORM_DEMO":{
           
        // console.log(action.data.bloodGroup);
          
            return Object.assign({},state,{demo:[...state.demo,action.data]})
        }
      
         case "SEARCH_DEMO":{
              
        // console.log(action.data1.bloodGroup);
           
            return Object.assign({},state,{demo1:action.data1.bloodGroup})
        }
        default:
            return state;
    }
 
  
    
}