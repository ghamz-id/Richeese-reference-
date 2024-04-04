import Model_Products from "@/db/models/products";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const data_products = await Model_Products.findAll()
        return NextResponse.json({data: data_products})
    } catch (error) {
        return NextResponse.json(
            {error: "Internal server error"},
            {status: 500}
        )
    }
}