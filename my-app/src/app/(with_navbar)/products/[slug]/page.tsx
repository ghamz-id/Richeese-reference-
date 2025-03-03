import BtnWishlist from "@/component/btnWishlist";
import { Product } from "@/db/models/products"
import { Metadata } from 'next'

// SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const data_detail: Product = await (await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/products/${params.slug}`, { cache: 'no-store' })).json()
    return {
        title: data_detail.name,
        openGraph: {
            images: ['/some-specific-page-image.jpg'],
        },
    }
}

// RENDERING
export default async function CardDetail({ params }: { params: { slug: string } }) {
    const data_detail: Product = await (await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/products/${params.slug}`, { cache: 'no-store' })).json()

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img src={data_detail.thumbnail}
                            className="max-w-sm rounded-lg shadow-2xl transition ease-in-out duration-300 hover:scale-110 hover:cursor-pointer"
                        />
                    </div>
                    <div className="ms-8">
                        <h1 className="text-5xl font-bold">{data_detail.name}</h1>
                        <p className="py-4">{data_detail.description}</p>
                        <h2 className="card-title pb-14">{new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                        }).format(data_detail.price)}</h2>
                        <BtnWishlist id={String(data_detail._id)} />
                        <ul className="flex gap-1 mt-8 border-t">
                            <p className="text-sm font-bold p-2">Tags terkait :</p>
                            {data_detail.tags.map((el, i) => (
                                <li className="border-r p-2 hover:cursor-pointer text-sm" key={i}>#{el}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}