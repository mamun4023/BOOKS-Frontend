import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {Axios} from '../utils/axios'


export const applicationAPI = createApi({
    reducerPath : "APP_API",
    baseQuery: Axios,
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (data) => ({
                url: "/sign-up",
                method: "POST",
                body: data,
            }),
        }),
        signin: builder.mutation({
            query: (data) => ({
                url: "/sign-in",
                method: "POST",
                body: data,
            }),
        }),
      
       
    }),
});

export const {
    useSignupMutation,
    useSigninMutation,

} = applicationAPI;