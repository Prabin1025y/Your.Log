import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";

export const GET = async (req: Request) => {
    const { searchParams } = new URL(req.url);
    const postSlug = searchParams.get("postSlug");

    try {
        const comments = await prisma.comment.findMany({ where: { ...(postSlug && { postSlug }) }, include: { user: true } })

        return new NextResponse(JSON.stringify({ success: true, comments }), { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ success: false, message: "Internal Server Error" }), { status: 500 });
    }
}