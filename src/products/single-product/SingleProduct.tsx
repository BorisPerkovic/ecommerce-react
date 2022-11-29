import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ECAlert } from "../../components/ECAlert";
import { BackdropSpinner } from "../../shared/BackdropSpinner";
import { MainLayout } from "../../shared/MainLayout";
import { RootState } from "../../store";
import { SingleProductImage } from "./SingleProductImage";
import { SingleProductOverview } from "./SingleProductOverview";
import { SingleProductTabs } from "./single-product-tabs/SingleProductTabs";
import { useGetSingleProductQuery } from "../productsSlice";

export const SingleProduct = () => {
  const { productId } = useParams<{ productId: string }>();

  const {
    data: product,
    isError,
    isFetching,
    isSuccess,
  } = useGetSingleProductQuery(productId ? +productId : 1);

  const languageTag = useSelector(
    (state: RootState) => state.language.applanguage
  ) as string;

  return (
    <MainLayout>
      {isFetching ? <BackdropSpinner /> : null}
      {isSuccess ? (
        <Fragment>
          <SingleProductImage
            imageAlt={product.product.productsTitle}
            imageSource={product.product.productsImage}
          />
          <SingleProductOverview
            id={product.product.productsId}
            title={product.product.productsTitle}
            price={product.product.productsPrice}
            rate={+product.product.productsRate}
            brand={product.product.productsBrand}
            image={product.product.productsImage}
          />
          <SingleProductTabs
            description={
              product.product[languageTag as keyof typeof product.product]
            }
          />
        </Fragment>
      ) : null}
      {isError ? (
        <ECAlert
          variant={"filled"}
          severity={"error"}
          message={"Something went wrong"}
        />
      ) : null}
    </MainLayout>
  );
};
