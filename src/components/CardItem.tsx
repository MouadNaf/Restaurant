import { Button } from "@/components/ui/button";
import { CartItem } from "@/interfaces/cartItem";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa"; // Using FontAwesome icons

interface CartItemProps {
  item: CartItem;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export function CartItemRow({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 mb-4">
      {/* Product Info */}
      <div className="flex-1">
        <h3 className="font-bold text-lg text-gray-900">{item.item.name}</h3>
        <p className="text-sm text-gray-500">Price: £{item.item.price.toFixed(2)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-4">
        <Button
          className="h-10 w-10 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center"
          onClick={() => onUpdateQuantity(item.item.id, -1)}
          disabled={item.quantity <= 1}
          title="Decrease quantity"
        >
          <FaMinus size={16} />
        </Button>
        <span className="w-8 text-center font-semibold text-indigo-600">{item.quantity}</span>
        <Button
          className="h-10 w-10 bg-indigo-500 text-white hover:bg-indigo-600 rounded-full flex items-center justify-center"
          onClick={() => onUpdateQuantity(item.item.id, 1)}
          title="Increase quantity"
        >
          <FaPlus size={16} />
        </Button>
      </div>

      {/* Remove Button */}
      <Button
        className="h-10 w-10 bg-red-100 text-red-500 hover:bg-red-200 rounded-full flex items-center justify-center"
        onClick={() => onRemove(item.item.id)}
        title="Remove item"
      >
        <FaTrashAlt size={16} />
      </Button>
    </div>
  );
}
