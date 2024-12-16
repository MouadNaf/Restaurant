import { Button } from "@/components/ui/button";
import { CartItem } from "@/interfaces/cartItem";
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItemProps {
  item: CartItem;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export function CartItemRow({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center k justify-between py-4 border-b border-gray-200">
      {/* Product Details */}
      <div className="flex-1">
        <h3 className="font-bold text-lg text-gray-800">{item.item.name}</h3>
        <p className="text-sm text-gray-500">Price: £{item.item.price.toFixed(2)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 border-gray-300 text-gray-700 hover:bg-gray-100"
          onClick={() => onUpdateQuantity(item.item.id, -1)}
          disabled={item.quantity <= 1}
          title="Decrease quantity"
        >
          <Minus className="h-5 w-5" />
        </Button>
        <span className="w-8 text-center font-semibold text-gray-800">{item.quantity}</span>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 border-gray-300 text-gray-700 hover:bg-gray-100"
          onClick={() => onUpdateQuantity(item.item.id, 1)}
          title="Increase quantity"
        >
          <Plus className="h-5 w-5" />
        </Button>
      </div>

      {/* Remove Button */}
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10 text-red-500 hover:text-red-600"
        onClick={() => onRemove(item.item.id)}
        title="Remove item"
      >
        <Trash2 className="h-5 w-5" />
      </Button>
    </div>
  );
}
