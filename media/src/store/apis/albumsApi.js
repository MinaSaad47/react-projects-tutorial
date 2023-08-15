import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001",
  }),
  endpoints(builder) {
    return {
      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => [
          { type: "Album", id: album.id.toString() },
        ],
        query: (album) => {
          return {
            url: `albums/${album.id}`,
            method: "DELETE",
          };
        },
      }),
      addAlbum: builder.mutation({
        invalidatesTags: (result, error, user) => [
          { type: "Album", id: user.id.toString() },
        ],
        query: (user) => {
          return {
            url: "albums",
            body: {
              name: faker.commerce.productName(),
              userId: user.id,
            },
            method: "POST",
          };
        },
      }),
      fetchAlbums: builder.query({
        providesTags: (result, error, user) => {
          let tags = result.map((album) => ({
            type: "Album",
            id: album.id.toString(),
          }));
          tags.push({ type: "UsersAlbums", id: user.id });
          return tags;
        },
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
export { albumsApi };
