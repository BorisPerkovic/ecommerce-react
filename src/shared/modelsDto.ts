export interface SearchProductsModelDto {
  products_id: number;
  products_title: string;
}

export interface ProductsModelDto {
  products_id: number;
  products_title: string;
  de: string;
  es: string;
  en: string;
  it: string;
  products_rate: number;
  products_price: number;
  products_image: string;
}
