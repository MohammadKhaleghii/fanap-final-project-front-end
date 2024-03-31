import {SearchInput} from "@/api/dto/search-input";
import {SearchProductsOutput} from "@/api/dto/search-output";
import {getSearchProducts} from "@/api/lib/main";
import ProductCard from "@/components/cards/product-card";
import ProductCardSkeleton from "@/components/cards/product-card/product-card.skeleton";
import PublicLayout from "@/layouts/public/public-layout";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const SearchPage = () => {
  const router = useRouter();

  // products states
  const [products, setProducts] = useState<SearchInput[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const categoryID = parseInt(router.query.categoryID?.toString() ?? "");
    const params: SearchProductsOutput = {};

    categoryID ? (params.categoryID = categoryID) : null;

    // products api
    setLoading(true);
    getSearchProducts(params).then(({data}) => {
      setProducts(data);
      setLoading(false);
    });
  }, [router.query]);
  return (
    <PublicLayout>
      <section className="centered-container">
        <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-1 gap-x-3 gap-y-3 pt-3 my-4">
          {!products && loading ? (
            <ProductCardSkeleton items={6} />
          ) : (
            products &&
            products.map((item) => (
              <ProductCard
                key={item.id}
                cost={item.cost}
                description={item.description}
                id={item.id}
                imagePath={item.imagePath}
                title={item.title}
              />
            ))
          )}
        </div>
      </section>
    </PublicLayout>
  );
};
export default SearchPage;
