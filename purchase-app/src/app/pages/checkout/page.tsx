"use client"
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Line from "@/components/atoms/Line";
import LoadingSpinner from "@/components/atoms/LoadingSpinner";
import { useDataContext } from "@/context/data.context";
import { IProductData } from "@/interfaces/data.interfaces";
import { navigate } from "@/services/actions";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Checkout = () => {
  const { cart, clearCart } = useDataContext()

  const [subtotal, setSubtotal] = useState<number>(0)
  const [shipping, setShipping] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)

  const handleCheckout = () => {
    toast.success("Checkout successfully")
    clearCart();
    navigate("/")
  }

  useEffect(() => {
    if (cart.length) {
      const subtotal = cart.reduce((acumulador, actual) => acumulador + actual.total, 0);
      setSubtotal(subtotal)
      setTotal(subtotal)
    }
  }, [cart])

  return (
    <div id="checkout-container" 
      className="grid grid-cols-[1fr_600px] p-8 m-16 mt-8 gap-12 relative">
      <div>
        <div id="shipping-container" className="p-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          {/* Molecula - Shipping address */}
          <div>
            <h2 className="text-xl font-bold">Shipping Address</h2>
          </div>
          <form action="" className="mt-8">
            <div className="pb-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col w-full">
                  <div className="flex relative z-0 w-full txt-compact-medium">
                    <Input
                      onChange={() => console.log("!")}
                      placeholder="First name"
                      required
                      title="Enter your first name"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex relative z-0 w-full txt-compact-medium">
                    <Input
                      onChange={() => console.log("!")}
                      placeholder="Last name"
                      required
                      title="Enter your last name"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex relative z-0 w-full txt-compact-medium">
                    <Input
                      onChange={() => console.log("!")}
                      placeholder="Address"
                      required
                      title="Enter your address"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex relative z-0 w-full txt-compact-medium">
                    <Input
                      onChange={() => console.log("!")}
                      placeholder="City"
                      required
                      title="Enter your city"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex relative z-0 w-full txt-compact-medium">
                    <Input
                      onChange={() => console.log("!")}
                      placeholder="State"
                      required
                      title="Enter your state"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex relative z-0 w-full txt-compact-medium">
                    <Input
                      onChange={() => console.log("!")}
                      placeholder="Phone"
                      required
                      title="Enter your phone"
                    />
                  </div>
                </div>

              </div>
            </div>
          </form>
          {/* Molecula - Shipping address */}
        </div>
        <div id="delivery-container" className="p-8 mt-16 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          {/* Molecula - Delivery address */}
          <div>
            <h2 className="text-xl font-bold">Shipping Address</h2>
          </div>
          <form action="" className="mt-8">
            <div className="pb-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col w-full">
                  <div className="flex relative z-0 w-full txt-compact-medium">
                    <Input
                      onChange={() => console.log("!")}
                      placeholder="First name"
                      required
                      title="Enter your first name"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex relative z-0 w-full txt-compact-medium">
                    <Input
                      onChange={() => console.log("!")}
                      placeholder="Last name"
                      required
                      title="Enter your last name"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex relative z-0 w-full txt-compact-medium">
                    <Input
                      onChange={() => console.log("!")}
                      placeholder="Address"
                      required
                      title="Enter your address"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex relative z-0 w-full txt-compact-medium">
                    <Input
                      onChange={() => console.log("!")}
                      placeholder="City"
                      required
                      title="Enter your city"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex relative z-0 w-full txt-compact-medium">
                    <Input
                      onChange={() => console.log("!")}
                      placeholder="State"
                      required
                      title="Enter your state"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex relative z-0 w-full txt-compact-medium">
                    <Input
                      onChange={() => console.log("!")}
                      placeholder="Phone"
                      required
                      title="Enter your phone"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* Molecula - Delivery address */}
        </div>
        <div id="payment-container"></div>
        <div id="review-container"></div>
      </div>
      <div id="cart-container" className="sticky flex flex-col gap-x-40 top-0">
        <div className="w-full flex flex-col bg-gray-bg p-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <h2 className="text-xl font-bold">In your cart</h2>
          <Line />
          <div id="product-container">
            <div className="mt-8">
              {
                cart?.length ? cart.map((product: IProductData) => {
                  return (
                    <>
                    <div key={product.id} className="w-full gap-2 flex items-center pb-4">
                      <div className="w-[33%]">
                        <Image
                          src={product.thumbnail}
                          width={100}
                          height={100}
                          alt={product.title}
                        />
                      </div>
                      <div className="w-[50%]">
                        <h3>{product.title} - <span>{product.brand}</span></h3>
                        <p>{product.description}</p>
                      </div>
                      <div className="w-[13%] text-end">
                        <p>{product.quantity}x ${product.price}</p>
                      </div>
                    </div>
                    <Line />
                    </>
                  )
                })
                : <LoadingSpinner />
              }
            </div>
          </div>
          <div>
            <div>
              <p className="flex justify-between items-center pt-4">Subtotal <span>$ {subtotal}</span></p>
              <p className="flex justify-between items-center pt-4">Shipping <span>$ {shipping}</span></p>
            </div>
            <Line />
            <div>
              <p className="flex justify-between items-center text-xl pt-4 font-semibold">Total <span>$ {total}</span></p>
            </div>
          </div>
        </div>
        <div>
          <Button name="Checkout" onClick={handleCheckout} />
        </div>
      </div>
    </div>
  );
}

export default Checkout;