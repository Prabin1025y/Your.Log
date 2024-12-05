import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma";

export const GET = async (req: Request, { params }: { params: { slug: string } }) => {
    const { slug } = params;

    try {
        const post = await prisma.post.findUnique({ where: { postSlug: slug }, include: { user: true } });

        return new NextResponse(JSON.stringify({ success: true, post }), { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ success: false, message: "Internal Server Error" }), { status: 500 });
    }
}