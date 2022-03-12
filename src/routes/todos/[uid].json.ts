import type { RequestHandler} from "@sveltejs/kit";
import {api} from "./_api"


export const del: RequestHandler = (request) => {
    return api(request);
  }

  export const patch: RequestHandler  = ({request}) =>{
    const formData = await request.formData();
    return api(request, {
      text: formData.get("text") as string,
    }
  }