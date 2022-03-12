import type { Request } from "@sveltejs/kit";

//Todo: persis data base


let todos: Todo[] = []; 

export const api = (request: Request, todo?: Todo) =>{

    let body = {};
    let status = 500;
    
    switch(request.method.toUpperCase()){
        case "GET":
            body = todos;
            status = 200;
            break;

        case "POST":
            todos.push(todo);
            body = todo;
            status = 201;
            break;
          
        case "DELETE":
             todos = todos.filter(todo => todo.uid !== request.params.uid)
            status = 200;
            break;
        
        if (request.method.toUpperCase() !== "Get"){
            return{
                status:303,
                headers:{
                    location: "/"
                }
             };
        }

        default:
            break;
    }

    return {
        status,
        body
    }
}