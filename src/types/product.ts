export type Image = {
  desktop: string;
  tablet: string;
  mobile: string;
};

export type Accessory = {
  quantity: number;
  item: string;
};

export type Product = {
  category: string;
  createdAt: string;
  description: string;
  features: string;
  image: Image;
  name: string;
  new: boolean;
  price: number;
  slug: string;
  updatedAt: string;
  categoryImage: Image;
  accessories?: Accessory[];
};
