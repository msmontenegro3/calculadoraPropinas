import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[]
    removeItem: (id: MenuItem['id']) => void
}

export default function OrderContents({ order, removeItem }: OrderContentsProps) {
    return (
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>
            <div className="space-y-3 mt-5">
                {
                    order.map(item => (
                        <div
                            className="flex items-center justify-between border-t border-gray-200 py-5 last-of-type:border-b"
                            key={item.id}>
                            <div>
                                <p className="text-lg">
                                    {item.name} - ${item.price}
                                </p>
                                <p className="font-black">
                                    Cantidad: {item.quantity} - ${item.price * item.quantity}
                                </p>
                            </div>

                            <button
                                className="bg-red-600 h-8 w-8 rounded-full font-black text-white hover:bg-red-900 transition-all"
                                onClick={() => removeItem(item.id)}
                            >
                                X
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
