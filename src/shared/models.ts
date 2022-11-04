export interface SearchProductsModel {
  productsId: number;
  productsTitle: string;
}

export interface ProductsModel {
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
}

export interface CartModel {
  id: number;
  title: string;
  price: number;
  image: string;
  cartQuantity: number;
}

export interface FavoritesModel {
  productsId: number;
  productsTitle: string;
  productsRating: number;
  productsPrice: number;
  productsImage: string;
}
