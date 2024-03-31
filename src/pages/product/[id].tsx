import {SearchInput} from "@/api/dto/search-input";
import {TopProductInput} from "@/api/dto/top-products-input";
import {getSearchProducts, getTopProducts} from "@/api/lib/main";
import ProductCard from "@/components/cards/product-card";
import ProductCardSkeleton from "@/components/cards/product-card/product-card.skeleton";
import Button from "@/components/common/button";
import Heading from "@/components/heading";
import {CartContext} from "@/context/cart-provider";
import PublicLayout from "@/layouts/public/public-layout";
import {useRouter} from "next/router";
import {useContext, useEffect, useState} from "react";
import Skeleton from "react-loading-skeleton";

const ProductDetailsPage = () => {
  const cartContext = useContext(CartContext);

  const router = useRouter();
  const {id} = router.query;
  const productID = parseInt(id?.toString() ?? "");
  const [product, setProduct] = useState<SearchInput>();
  const [loading, setLoading] = useState(true);

  const [relatedProduct, setRelatedProduct] = useState<TopProductInput[]>();
  const [relatedProductLoading, setRelatedProductLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (productID) {
      getSearchProducts({id: productID}).then(({data}) => {
        setProduct(data[0]);
        setLoading(false);
      });
    }
    getTopProducts().then(({data}) => {
      setRelatedProduct(data);
      setRelatedProductLoading(false);
    });
  }, [id]);

  return (
    <PublicLayout>
      {/* product details */}
      <section className="centered-container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-3 gap-y-4 my-5">
          <div className="lg:h-[450px] w-full flex items-center justify-center">
            {!loading ? (
              <img
                className="h-full"
                src={product?.imagePath ?? ""}
                alt={product?.title}
              />
            ) : (
              <div className="h-full w-full">
                <Skeleton className="h-full" />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-y-8">
            {loading ? (
              <Skeleton count={1} height={40} />
            ) : (
              <h1 className="text-2xl font-bold text-[#0B254B]  pb-1">
                {product?.title}
              </h1>
            )}
            <div>
              {loading ? (
                <Skeleton count={3} height={20} />
              ) : (
                <>
                  <h3 className="font-bold pb-2 text-lg"> توضیحات محصول:</h3>
                  <p>{product?.description}</p>
                </>
              )}
            </div>
            <div>
              {loading ? (
                <Skeleton count={6} height={20} />
              ) : (
                <>
                  <h3 className="font-bold pb-2 text-lg"> ویژگی محصول:</h3>
                  <div className="flex flex-row  gap-x-2 gap-y-2">
                    <div className="bg-[#efefef] w-full rounded-lg p-3">
                      <b>سال ساخت:</b>
                      <br />

                      <p className="text-left">
                        {product?.information.introductionTime}
                      </p>
                    </div>
                    <div className="bg-[#efefef] w-full rounded-lg p-3">
                      <b>اندازه:</b>
                      <p className="text-left">{product?.information.size}</p>
                    </div>
                    <div className="bg-[#efefef] w-full rounded-lg p-3">
                      <b>وزن:</b>
                      <p className="text-left">{product?.information.weight}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
            {loading ? (
              <Skeleton height={40} />
            ) : (
              <div>
                <Button
                  onClick={() => {
                    if (product) {
                      cartContext.addToCart({
                        cost: product.cost,
                        id: product.id,
                        imagePath: product.imagePath,
                        title: product.title,
                      });
                    }
                  }}
                  loading={cartContext.loading}
                >
                  افزودن به سبد خرید{" "}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* end product details */}

      {/* related product */}
      <section className="py-10 centered-container">
        <Heading
          title="محصولات مرتبط"
          subTitle="مرتبط ترین محصولات موجود در سایت محمد حسین خالقی پور"
        />
        <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-1 gap-x-3 gap-y-3 pt-3">
          {!relatedProduct && relatedProductLoading ? (
            <ProductCardSkeleton items={6} />
          ) : (
            relatedProduct &&
            relatedProduct.map((item) => (
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
      {/* end related product */}
    </PublicLayout>
  );
};
export default ProductDetailsPage;
