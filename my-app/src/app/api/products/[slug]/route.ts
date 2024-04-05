import Model_Products from "@/db/models/products";
import { NextResponse } from "next/server";

export async function GET(request: Request, {params}:{params: {slug: string}} ){
    try {
        if (params.slug === "favorite"){
            const data_fav = await Model_Products.findFavorite()
            return NextResponse.json(data_fav)
        }

        const detail_product = await Model_Products.findOne(params.slug)
        if(!detail_product) return NextResponse.json({msg: "Data not found"})

        return NextResponse.json(detail_product)
    } catch (error) {
        return NextResponse.json(
            {error: "Internal server error"},
            {status: 500}
        )
    }
}