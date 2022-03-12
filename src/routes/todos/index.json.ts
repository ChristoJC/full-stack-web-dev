

import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";


//get
export const get: RequestHandler = (request) => {
    return api(request);
  }

//post 
export const post: RequestHandler = async ({request}) => {
    const formData = await request.formData();
    return api(request,
        {
       
            uid: `${Date.now()}`, // TODO: Replace with the UID from the database
            created_at: new Date(),
            text: formData.get("text") as string,
            done: false
        
    }
    )}

    
//     import type { RequestHandler } from "@sveltejs/kit";
// import { api } from "./_api";



// export const post: RequestHandler<{}, FormData> = async (request) => {
//     const formData = await request.formData();
//   return api(request, {
//       uid: `${Date.now}`,
//     created_at: new Date(),
//     text: formData.get("text") as string,
//     done: false
//   });
// }