import { Product } from "@/db/models/products"
import { Metadata, ResolvingMetadata } from 'next'
type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const slug = params.slug

    // fetch data
    const data_detail: Product = await (await fetch("http://localhost:3000/api/products/" + slug)).json()

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: data_detail.name,
        openGraph: {
            images: ['/some-specific-page-image.jpg', ...previousImages],
        },
    }
}

export default async function CardDetail({ params, searchParams }: Props) {
    const data_detail: Product = await (await fetch("http://localhost:3000/api/products/" + params.slug)).json()

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={data_detail.thumbnail}
                    className="max-w-sm rounded-lg shadow-2xl transition ease-in-out duration-300 hover:scale-110 hover:cursor-pointer"
                />
                <div className="ms-8">
                    <h1 className="text-5xl font-bold">{data_detail.name}</h1>
                    <p className="py-4">{data_detail.description}</p>
                    <h2 className="card-title pb-14">{new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                    }).format(data_detail.price)}</h2>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}