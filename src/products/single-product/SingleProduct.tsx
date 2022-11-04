import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ECText } from "../../components/ECText";
import { MainLayout } from "../../shared/MainLayout";
import { AppThunkDispatch, RootState } from "../../store";
import { singleProduct } from "./singleProductSlice";

export const SingleProduct = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = useSelector((state: RootState) => state.product.product);

  const dispatch = useDispatch<AppThunkDispatch>();

  useEffect(() => {
    dispatch(singleProduct(productId ?? ""));
  }, [dispatch, productId]);
  return (
    <MainLayout>
      <ECText component={"h1"} fontSize={24}>
        Title: {product.productsTitle}
      </ECText>
    </MainLayout>
  );
};
