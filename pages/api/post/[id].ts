import prisma from "../../../lib/prisma";
import NextCors from 'nextjs-cors';

// DELETE /api/post/:id
export default async function handle(req, res) {
    
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
    const postId = req.query.id;
    if (req.method === 'DELETE') {
        const post = await prisma.post.delete({
        where: { id: Number(postId) },
        });
        res.json(post);
    } else {
        throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`,
        );
    }
}