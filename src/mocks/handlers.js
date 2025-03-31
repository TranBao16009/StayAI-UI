
import { http } from 'msw';
import { fakeDB } from './fakeData';

export const handlers = [
  // ========== AUTH ==========
  http.post('/api/login', async ({ request }) => {
    const { email, password } = await request.json();
    const user = fakeDB.users.find(u => u.email === email && u.password === password);
    if (user) {
      return Response.json({ success: true, user });
    } else {
      return Response.json({ success: false, message: 'Sai thông tin đăng nhập' }, { status: 401 });
    }
  }),

  http.get('/api/profile', () => {
    return Response.json({ success: true, user: fakeDB.users[0] });
  }),

  http.post('/api/register', async ({ request }) => {
    const newUser = await request.json();
    fakeDB.users.push(newUser);
    return Response.json({ success: true, message: 'Đăng ký thành công' });
  }),

  // ========== ROOMS ==========
  http.get('/api/rooms', () => {
    return Response.json(fakeDB.rooms);
  }),

  http.get('/api/rooms/:id', ({ params }) => {
    const room = fakeDB.rooms.find(r => r.id === parseInt(params.id));
    return room ? Response.json(room) : new Response('Not found', { status: 404 });
  }),

  http.post('/api/rooms', async ({ request }) => {
    const newRoom = await request.json();
    newRoom.id = Date.now();
    fakeDB.rooms.push(newRoom);
    return Response.json(newRoom);
  }),

  http.put('/api/rooms/:id', async ({ request, params }) => {
    const updated = await request.json();
    const idx = fakeDB.rooms.findIndex(r => r.id === parseInt(params.id));
    if (idx !== -1) {
      fakeDB.rooms[idx] = { ...fakeDB.rooms[idx], ...updated };
      return Response.json(fakeDB.rooms[idx]);
    }
    return new Response('Not found', { status: 404 });
  }),

  http.delete('/api/rooms/:id', ({ params }) => {
    fakeDB.rooms = fakeDB.rooms.filter(r => r.id !== parseInt(params.id));
    return new Response(null, { status: 204 });
  }),

  // ========== CONTRACTS ==========
  http.get('/api/contracts', () => {
    return Response.json(fakeDB.contracts);
  }),

  http.post('/api/contracts', async ({ request }) => {
    const newContract = await request.json();
    newContract.id = Date.now();
    fakeDB.contracts.push(newContract);
    return Response.json(newContract);
  }),

  http.delete('/api/contracts/:id', ({ params }) => {
    fakeDB.contracts = fakeDB.contracts.filter(c => c.id !== parseInt(params.id));
    return new Response(null, { status: 204 });
  }),

  http.post('/api/contracts/:id/cancel', ({ params }) => {
    const contract = fakeDB.contracts.find(c => c.id === parseInt(params.id));
    if (contract) {
      contract.status = 'Đã hủy';
      return Response.json({ success: true });
    }
    return new Response('Not found', { status: 404 });
  }),

  // ========== INVOICES ==========
  http.get('/api/invoices', () => {
    return Response.json(fakeDB.invoices);
  }),

  http.post('/api/invoices/:id/pay', ({ params }) => {
    const invoice = fakeDB.invoices.find(i => i.id === parseInt(params.id));
    if (invoice) {
      invoice.status = 'Đã thanh toán';
      return Response.json(invoice);
    }
    return new Response('Not found', { status: 404 });
  }),

  // ========== NEWS ==========
  http.get('/api/news', () => {
    return Response.json(fakeDB.news);
  }),

  http.post('/api/news', async ({ request }) => {
    const newNews = await request.json();
    newNews.id = Date.now();
    fakeDB.news.push(newNews);
    return Response.json(newNews);
  }),

  http.delete('/api/news/:id', ({ params }) => {
    fakeDB.news = fakeDB.news.filter(n => n.id !== parseInt(params.id));
    return new Response(null, { status: 204 });
  }),

  // ========== TOPUP ==========
  http.post('/api/topup', async ({ request }) => {
    const { userId, amount } = await request.json();
    const user = fakeDB.users.find(u => u.id === userId);
    if (user) {
      user.balance += amount;
      return Response.json({ success: true, balance: user.balance });
    }
    return new Response('User not found', { status: 404 });
  }),

  http.get('/api/balance', () => {
    return Response.json({ balance: fakeDB.users[0].balance });
  })
];
