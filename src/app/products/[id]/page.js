import Link from "next/link";

export default function ProductPage({ params, searchParams }) {
    const { id } = params;
 

  if (!product) {
    return <h1>Product not found</h1>;
  }

  const validTabs = ["about", "details", "specs"];
  const tab = validTabs.includes(searchParams?.tab)
    ? searchParams.tab
    : "about";

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">

      {/* Tabs */}
      <div className="flex gap-6 border-b pb-4 mb-6">
        <Link
        href={`/products/${params.id}?tab=about`}
          className={tab === "about" ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-500"}
        >
          About Product
        </Link>

        <Link
          href={`/products/${params.id}?tab=details`}
          className={tab === "details" ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-500"}
        >
          Details
        </Link>

        <Link
         href={`/products/${params.id}?tab=specs`}
          className={tab === "specs" ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-500"}
        >
          Specs
        </Link>
      </div>

      {/* Product Title */}
      <h1 className="text-2xl font-semibold mb-4">
        Product ID: {id}
      </h1>

      {/* Dynamic Content */}
      {tab === "about" && (
        <p className="text-gray-600">
          This is ABOUT section for product {id}
        </p>
      )}

      {tab === "details" && (
        <ul className="list-disc pl-5 text-gray-600">
          <li>Detail 1</li>
          <li>Detail 2</li>
        </ul>
      )}

      {tab === "specs" && (
        <div className="border p-4">
          <p>Specs info for {id}</p>
        </div>
      )}
    </div>
  );
}

{/* <Link href={`/products/${params.id}?tab=about`}>About</Link>
<Link href={`/products/${params.id}?tab=details`}>Details</Link>
<Link href={`/products/${params.id}?tab=specs`}>Specs</Link> */}