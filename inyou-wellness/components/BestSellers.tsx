import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Balance InYou",
    tagline: "Hormonal & PCOS Nutrition for Her",
    bg: "#C8D9C5",
    image: "/images/product-balance.png",
    slug: "balance-inyou",
  },
  {
    id: 2,
    name: "Young InYou",
    tagline: "Hormonal & PCOS Nutrition for Her",
    bg: "#E8C4B0",
    image: "/images/product-young.png",
    slug: "young-inyou",
  },
  {
    id: 3,
    name: "Enlarge InYou",
    tagline: "Hormonal & PCOS Nutrition for Her",
    bg: "#8B3A3A",
    image: "/images/product-enlarge.png",
    slug: "enlarge-inyou",
    light: false,
  },
  {
    id: 4,
    name: "Last Long InYou",
    tagline: "Hormonal & PCOS Nutrition for Her",
    bg: "#2A3556",
    image: "/images/product-lastlong.png",
    slug: "last-long-inyou",
    light: false,
  },
];

export default function BestSellers() {
  return (
    <section id="best-sellers" className="bg-[#F5F0EB] py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex items-start justify-between mb-10 md:mb-14">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] font-normal leading-tight">
              Best sellers
            </h2>
            <p className="text-[#7A6E65] text-sm md:text-base font-sans mt-1.5">
              Products for everyday wellness
            </p>
          </div>
          <Link
            href="#"
            className="hidden sm:inline-flex items-center gap-2 border border-[#1A1A1A]/30 text-[#1A1A1A] text-sm font-sans px-5 py-2.5 rounded-full hover:border-[#1A1A1A] transition-colors whitespace-nowrap"
          >
            View All <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => {
            const textClass =
              product.light === false ? "text-white" : "text-[#1A1A1A]";

            return (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group flex flex-col"
              >
                {/* Card */}
                <div
                  className="relative rounded-2xl overflow-hidden aspect-square flex items-center justify-center p-6 mb-4 transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ backgroundColor: product.bg }}
                >
                  {/* Placeholder box when no real image is available */}
                  <div
                    className={`w-24 h-32 md:w-32 md:h-44 rounded-lg flex items-center justify-center text-xs font-sans font-medium text-center ${textClass} opacity-60`}
                    style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                  >
                    {product.name}
                  </div>
                </div>

                {/* Text */}
                <p className="font-sans font-medium text-sm md:text-base text-[#1A1A1A]">
                  {product.name}
                </p>
                <p className="font-sans text-xs md:text-sm text-[#7A6E65] mt-0.5 leading-snug">
                  {product.tagline}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Mobile "View All" */}
        <div className="sm:hidden mt-8 flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 border border-[#1A1A1A]/30 text-[#1A1A1A] text-sm font-sans px-6 py-3 rounded-full hover:border-[#1A1A1A] transition-colors"
          >
            View All <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
