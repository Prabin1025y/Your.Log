import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma"

export const GET = async () => {
    try {
        const categories = await prisma.category.findMany();
        return new NextResponse(JSON.stringify({ success: true, categories }), { status: 200 });

    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ success: false, message: "Internal server error" }), { status: 500 });
    }
}