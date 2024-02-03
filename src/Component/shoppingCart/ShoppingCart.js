import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from '../redux/Slice';
import { Link, useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);

  const handleDelete = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.amount;
    });
    return totalPrice;
  };

  return (
    <div className="bg-gray-200">
      <div className="w-full h-full top-0 overflow-y-auto overflow-x-hidden  sticky-0" id="chec-div">
        <div className="w-full  z-10 right-0 h-full overflow-x-hidden" id="checkout">
          <div className="flex md:flex-row flex-col justify-center p-5" id="cart">
            <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
              <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
                <Link to='/' className="text-sm pl-2 leading-none">Back</Link>
              </div>
              <p className="text-4xl font-black leading-10 text-gray-800 pt-3">Your Cart</p>

              <div className="items-center mt-4 py-8 border-t border-gray-200">
                {items.map((item) => (
                  <div key={item.id} className="w-full md:flex mt-3 items-center">
                    <div className="w-1/4">
                      <img src={item.image} alt={item.name} className="w-full h-full object-center object-cover" />
                    </div>
                    <div className="md:pl-3 md:w-3/4">
                      <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">{item.id}</p>
                      <div className="flex items-center justify-between w-full pt-1">
                        <p className="text-base font-black leading-none text-gray-800">{item.title}</p>
                        <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                          <option>01</option>
                          <option>02</option>
                          <option>03</option>
                        </select>
                      </div>
                      <p className="text-[10px] px-2">{item.description}</p>
                      <div className="flex items-center justify-between pt-5 pr-6">
                        <div className="flex items-center">
                          <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                          <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer" onClick={() => handleDelete(item.id)}>Remove</p>
                        </div>
                        <p className="text-base font-black leading-none text-gray-800">{item.amount}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/3 w-full bg-gray-100 h-full">
              <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                <div>
                  <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                  <div className="flex items-center justify-between pt-16">
                    <p className="text-base leading-none text-gray-800">Subtotal</p>
                    <p className="text-base leading-none text-gray-800">{calculateTotalPrice()}</p>
                  </div>
                  {/* <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">Shipping</p>
                    <p className="text-base leading-none text-gray-800">$30</p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">Tax</p>
                    <p className="text-base leading-none text-gray-800">$35</p>
                  </div> */}
                </div>
                <div>
                  <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                    <p className="text-2xl leading-normal text-gray-800">Total</p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">{calculateTotalPrice() + 30 + 35}</p>
                  </div>
                  <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white" onClick={() => (alert("Success", navigate('/')))}>
                    Checkout
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
