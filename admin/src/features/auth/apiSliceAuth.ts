import { apiSlice } from "../../app/api/apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: [{ type: "auth", id: "LIST" }],
    }),
    logout: builder.mutation({
      query: (username) => ({
         url: `auth/logout?username=${username}`,
         method: "POST",
         }),
      invalidatesTags: [{ type: "auth", id: "LIST" }],
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApiSlice;
