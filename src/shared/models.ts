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
