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
