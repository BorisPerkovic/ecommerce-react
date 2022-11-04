import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ECAlert } from "../../components/ECAlert";
import { BackdropSpinner } from "../../shared/BackdropSpinner";
import { MainLayout } from "../../shared/MainLayout";
import { AppThunkDispatch, RootState } from "../../store";
import { SingleProductImage } from "./SingleProductImage";
import { SingleProductOverview } from "./SingleProductOverview";
import { singleProduct } from "./singleProductSlice";

export const SingleProduct = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = useSelector((state: RootState) => state.product.product);
  const productStatus = useSelector(
    (state: RootState) => state.product.loading
  );

  const dispatch = useDispatch<AppThunkDispatch>();

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      dispatch(singleProduct(productId ?? ""));
    }

    return () => {
      mounted = false;
    };
  }, [dispatch, productId]);

  return (
    <MainLayout>
      {productStatus === "pending" ? <BackdropSpinner /> : null}
      {productStatus === "succeeded" ? (
        <Fragment>
          <SingleProductImage
            imageAlt={product.productsTitle}
            imageSource={product.productsImage}
          />
          <SingleProductOverview
            id={product.productsId}
            title={product.productsTitle}
            price={product.productsPrice}
            rate={+product.productsRate}
            brand={product.productsBrand}
            image={product.productsImage}
          />
        </Fragment>
      ) : null}
      {productStatus === "failed" ? (
        <ECAlert
          variant={"filled"}
          severity={"error"}
          message={"Something went wrong"}
        />
      ) : null}
    </MainLayout>
  );
};
