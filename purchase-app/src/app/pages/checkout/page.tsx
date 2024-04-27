/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { toast } from "react-toastify";
import Image from "next/image";
import { useEffect, useState } from "react";

import Button from "@/components/atoms/Button";
import Line from "@/components/atoms/Line";
import LoadingSpinner from "@/components/atoms/LoadingSpinner";
import DeliveryCard from "@/components/molecules/DeliveryCard";
import FormInput from "@/components/molecules/FormInput";
import PaymentCard from "@/components/molecules/PaymentCard";

import { useDataContext } from "@/context/data.context";

import { FormInputProps, IProductData, UserAddress } from "@/interfaces/data.interfaces";

import { navigate } from "@/services/actions";

const Checkout = () => {
  const { cart, clearCart } = useDataContext()

  const [subtotal, setSubtotal] = useState<number>(0)
  const [shipping, setShipping] = useState<number>(0)
  const [payment, setPayment] = useState<string>("")
  const [total, setTotal] = useState<number>(0)
  const [shippingAddress, setShippingAddress] = useState<UserAddress>()

  const handleShippingAddres = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingAddress(prev => {
      if (prev){
        return {
          ...prev,
          [(e.target.name).split(" ").join("_").toLocaleLowerCase()]: e.target.value 
        }
      }
    })
  }

  const shippingAddressOptions: FormInputProps[] = [
    {
      id: 1,
      onChange: (e) => handleShippingAddres(e),
      placeholder: "First name",
      required: true,
      title: "Enter your first name",
    },
    {
      id: 2,
      onChange: (e) => handleShippingAddres(e),
      placeholder: "Last name",
      required: true,
      title: "Enter your last name",
    },
    {
      id: 3,
      onChange: (e) => handleShippingAddres(e),
      placeholder: "Address",
      required: true,
      title: "Enter your address",
    },
    {
      id: 4,
      onChange: (e) => handleShippingAddres(e),
      placeholder: "City",
      required: true,
      title: "Enter your city",
    },
    {
      id: 5,
      onChange: (e) => handleShippingAddres(e),
      placeholder: "State",
      required: true,
      title: "Enter your state",
    },
    {
      id: 6,
      onChange: (e) => handleShippingAddres(e),
      placeholder: "Phone",
      required: true,
      title: "Enter your phone",
    }
  ]

  const handleCheckout = () => {
    toast.success("Checkout successfully")
    clearCart();
    navigate("/")
  }

  const handleDelivery = (price: number) => {
    setShipping(prev => prev === price ? 0 : price)
  }

  const handlePayment = (payment: string) => {
    setPayment(payment)
  }

  useEffect(() => {
    if (cart.length) {
      const subtotal = cart.reduce((acumulador, actual) => acumulador + actual.total, 0);
      setSubtotal(subtotal)
      setTotal(subtotal)
    }
  }, [cart])

  useEffect(() => {
    setTotal(subtotal + shipping)
  }, [shipping])

  return (
    <div id="checkout-container" 
      className="grid grid-cols-[1fr_600px] p-8 m-16 mt-8 gap-12 relative">
      <div>
        <div id="shipping-container" className="p-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          {/* Molecula - Shipping address */}
          <div>
            <h2 className="text-xl font-bold">Shipping Address</h2>
          </div>
          <form className="mt-8">
            <div className="pb-8">
              <div className="grid grid-cols-2 gap-8">
                {shippingAddressOptions.map((options: FormInputProps) => (
                  <FormInput
                    key={options.id}
                    onChange={options.onChange}
                    placeholder={options.placeholder}
                    required={options.required}
                    title={options.title}
                  />
                  )
                )}
              </div>
            </div>
          </form>
          {/* Molecula - Shipping address */}
        </div>
        <div id="payment-container" className="mt-8">
          <div className="flex flex-row items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Delivery</h2>
          </div>
          <div className="pb-8">
            <DeliveryCard
              title="FakeOcasa standar"
              price={800}
              onClick={handleDelivery}
            />
            <DeliveryCard
              title="FakeCA plus"
              price={1800}
              onClick={handleDelivery}
            />
          </div>
        </div>
        <div id="payment-container" className="mt-8">
        <div className="flex flex-row items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Delivery</h2>
          </div>
          <div className="pb-8">
            <PaymentCard
              title="Visa fake"
              onClick={handlePayment}
            />
            <PaymentCard
              title="Bco Fake"
              onClick={handlePayment}
            />
          </div>
        </div>
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