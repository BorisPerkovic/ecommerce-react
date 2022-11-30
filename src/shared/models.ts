export interface SearchProductsModel {
  productsId: number;
  productsTitle: string;
}
export interface ProductsContentModel {
  productsId: number;
  productsTitle: string;
  de: string;
  en: string;
  it: string;
  es: string;
  productsRating: number;
  productsPrice: number;
  productsImage: string;
}

export interface ProductsModel {
  totalElements: number;
  content: ProductsContentModel[];
}

export interface SingleProductModel {
  productsId: number;
  productsTitle: string;
  productsPrice: number;
  productsCategory: string;
  en: string;
  de: string;
  it: string;
  es: string;
  productsImage: string;
  productsRate: number;
  cartQuantity: number;
  productsBrand: string;
  productsRam: string;
  productsInternal: string;
  productsSystem: string;
}

export interface CartModel {
  id: number;
  title: string;
  price: number;
  image: string;
  cartQuantity: number;
}

export interface FeedbackModel {
  feedbackId: number;
  feedbackUser: string;
  feedbackRating: number;
  feedbackComment: string;
  feedbackAdded: Date;
}

export interface Feedbacks {
  product: SingleProductModel;
  feedbacks: FeedbackModel[];
}

export interface FavoritesModel {
  productsId: number;
  productsTitle: string;
  productsRating: number;
  productsPrice: number;
  productsImage: string;
}
