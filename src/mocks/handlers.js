// src/mocks/handlers.js
import { http, HttpResponse } from 'msw';
import roomsData from "../Assets/library";

export const handlers = [
  http.get('/api/user', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        name: 'Bao Tran',
        followers: 10,
        following: 5,
      })
    );
  }),

  http.get('/api/posts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, title: 'Bài viết 1', content: 'Nội dung bài viết 1' },
        { id: 2, title: 'Bài viết 2', content: 'Nội dung bài viết 2' },
      ])
    );
  }),

  http.get('/api/allRoom', (req, res, ctx) => {
    return new HttpResponse(JSON.stringify(roomsData), {status: 200})
  }),
];
