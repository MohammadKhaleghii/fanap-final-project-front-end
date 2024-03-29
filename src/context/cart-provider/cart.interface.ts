export interface CartContextInterface {
  cart: CartItem[];
  addToCart: (product: ProductItem) => void;
  decreaseProduct: (productID: number) => void;
  removeProduct: (productID: number) => void;
  loading: boolean;
}

export interface CartItem extends ProductItem {
  QTY: number;
}

export interface ProductItem {
  id: number;
  imagePath: string;
  title: string;
  cost: number;
}
