import { useEffect, useState } from "react";
import { getProducts } from "../Api";

const Cart = () => {
  const [apidata, setApiData] = useState();
  const [storagedata, setStorageData] = useState(localStorage.getItem("array"));

  useEffect(() => {
    getProducts().then((Response) => {
      setApiData(Response.data);
    });
  }, []);
  useEffect(() => {
    setStorageData(localStorage.getItem("array"));
  });

  return (
    <>
      <div>This is CART page</div>
      <div>
        { apidata?.map((item) => {
                    return storagedata
                        .includes(item.id) ? <div>
                        <div>{item.title}</div>
                        <img style={{ width: '50px' }} src={item.image} alt="" className="img-responsive" />
                        <div>{item.price} ₹</div>
                    </div> : null
                })}
      </div>
    </>
  );
};
export default Cart;
