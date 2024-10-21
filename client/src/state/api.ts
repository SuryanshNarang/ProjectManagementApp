import { createApi } from "@reduxjs/toolkit/query";
import { CreateApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";
export const api= createApi({
    baseQuery: fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL}),
})
// base url which our api call is going to use.