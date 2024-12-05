import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma"

export const GET = async (req: Request) => {

    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page") || "1", 10);
    const cat = searchParams.get("cat");

    const POST_PER_PAGE = 4;
    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where: {
            ...(cat && { catSlug: cat })
        }
    };

    try {
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({ where: query.where })
        ])

        return new NextResponse(JSON.stringify({ success: true, posts, count }), { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ success: false, message: "Internal Server Error" }), { status: 500 });

    }
}