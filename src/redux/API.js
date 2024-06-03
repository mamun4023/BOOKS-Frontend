import { createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const applicationAPI = createApi({
    reducerPath : "API",
    baseQuery: fetchBaseQuery({ 
        baseUrl : "http://localhost:4000",
        credentials : 'include'
    }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (data) => ({
                url: "/sign-up",
                method: "POST",
                body: data,
            }),
        }),
        signIn: builder.mutation({
            query: (data) => ({
                url: "/sign-in",
                method: "POST",
                body: data,
            }),
        }),
      
       
    }),
});

export const {
    useSignUpMutation,
    useSignInMutation,

} = applicationAPI;