

import type { RequestHandler }  from "@sveltejs/kit"

//Todo: persis data base
let todos: Todo[] = []; 

//get
export const get: RequestHandler = async () => {
    return{
        status:200,
        body: todos
    }
}


//post
export const post: RequestHandler = async ({request}) => {

    const formData = await request.formData();
    todos.push({
        created_at: new Date(),
        text: formData.get("text") as string,
        done: false
    })
 

   
   return{
      status:303,
      headers:{
          location: "/"
      }
   }
    
}

// body: formData.get("text") as string