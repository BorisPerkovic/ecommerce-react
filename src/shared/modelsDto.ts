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

export interface SingleProductDTO {
  products_id: number;
  products_title: string;
  products_price: string;
  products_category: string;
  en: string;
  de: string;
  it: string;
  es: string;
  products_image: string;
  products_rate: string;
  products_brand: string;
}
