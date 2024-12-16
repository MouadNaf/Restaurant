import { Button } from "@/components/ui/button";
import { Product } from "@/interfaces/product";
import { Card, CardContent } from "./ui/card";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaInfoCircle } from "react-icons/fa";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg border border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-0">
        <div className="flex flex-col gap-4 p-4">
          {/* Product Image */}
          <div className="w-full h-40 bg-gray-100 flex items-center justify-center rounded-md overflow-hidden">
            <img
              alt={product.name}
              className="object-contain h-full w-full"
              src={product.image}
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-1 flex-col justify-between">
            <div className="mb-2">
              <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
            </div>

            {/* Price and Add to Cart Button */}
            <div className="flex items-center justify-between mt-4">
              <span className="text-xl font-bold text-green-600">${product.price.toFixed(2)}</span>

              <div className="flex items-center gap-2">
                <Button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2"
                  onClick={() => onAddToCart(product)}
                >
                  <AiOutlineShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
                <Button
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 flex items-center gap-2"
                >
                  <FaInfoCircle className="h-5 w-5" />
                  Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
