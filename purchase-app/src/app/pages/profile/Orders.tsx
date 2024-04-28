import Line from "@/components/atoms/Line";
import ProductOrder from "@/components/molecules/ProductOrder";

import { IProductData } from "@/interfaces/data.interfaces";

import getData from "@/services/firestore/getData";

interface IOrders {
  email: string
}

const Orders = async ({ email }: IOrders) => {
  const { response } = await getData(email)
  return (
    <div
      className="bg-white p-8 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-8 h-screen overflow-scroll"
      style={{ width: "800px" }}
    >
      <h1 className="text-4xl font-semibold mb-8">Orders</h1>
      <div className="text-xl mb-8">
        <p>Your recent purchases:</p>
        <Line />
        <ul>
          {response ? response.map((product: IProductData) => (
            <ProductOrder
              key={product.id}
              image={product.thumbnail}
              title={product.title}
              brand={product.brand}
              price={product.price}
              quantity={product.quantity!}
            />
          ))
          : <p className="text-lg">No orders have been completed yet</p>
        }
        </ul>
      </div>
    </div>
);
}

export default Orders;