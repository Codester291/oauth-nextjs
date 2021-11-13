// pages/api/publish/[id].ts

import prisma from '../../../lib/prisma';
import NextCors from 'nextjs-cors';

// PUT /api/publish/:id
export default async function handle(req, res) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
  const postId = req.query.id;
  const post = await prisma.post.update({
    where: { id: Number(postId) },
    data: { published: true },
  });
  res.json(post);
}