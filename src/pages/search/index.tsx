import {SearchInput} from "@/api/dto/search-input";
import {getSearchProducts} from "@/api/lib/main";
import ProductCard from "@/components/cards/product-card";
import ProductCardSkeleton from "@/components/cards/product-card/product-card.skeleton";
import PublicLayout from "@/layouts/public/public-layout";
import {useEffect, useState} from "react";

const SearchPage = () => {
  // products states
  const [products, setProducts] = useState<SearchInput[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // products api
    setLoading(true);
    getSearchProducts().then(({data}) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);
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
