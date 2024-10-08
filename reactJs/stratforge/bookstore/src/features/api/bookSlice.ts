import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Books = { 
    books : BookSingle[]
}

export type BookSingle = {
    ISBN : string,
    title : string,
    author : string,
    summary : string,
    image : string;
    price: {
        currency: string;
        value: number;
        displayValue: string;
    }
}

export const apiSlice = createApi( {

    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://private-anon-480aa7418e-bookstore.apiary-mock.com'}),

    endpoints : (builder) => ({
        getBooks : builder.query<Books,void>({
            query: () => '/books',
        })
    })

})


export const { 
    useGetBooksQuery
} = apiSlice