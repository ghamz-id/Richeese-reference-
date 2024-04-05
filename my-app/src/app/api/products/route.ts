import Model_Products from "@/db/models/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const search = request.nextUrl.searchParams.get("search") as string
    try {
        const data_products = await Model_Products.findAll(search)
        return NextResponse.json({data: data_products})
    } catch (error) {
        return NextResponse.json(
            {error: "Internal server error"},
            {status: 500}
        )
    }
}