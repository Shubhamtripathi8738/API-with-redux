import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../Store/Action";
import { Link } from "react-router-dom";

const Home = () => {
  const [state, setState] = useState([]);
  const [LocalData, setLocalData] = useState();
  const [newlocaldata, setNewLocalData] = useState();
  const [cartdata,setCartData]=useState()

  useEffect(()=>{
    const getproducts=localStorage.getItem("array")
    setCartData(getproducts);
})

  useEffect(() => {
    let z = [];
    localStorage
      .getItem("array")
      ?.split(",")
      .map((item) => {
        z.push(Number(item));
        setLocalData(z);
      });
    setNewLocalData(localStorage.getItem("array"));
  }, [newlocaldata]);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer?.productData);

  useEffect(() => {
    getProductsAction(dispatch);
  }, [dispatch]);

  useEffect(() => {
    // getProducts().then((Response) => { return (setState(Response.data)) })
    setNewLocalData(localStorage.getItem("array"));
  }, []);

  const AddToCart = (x) => {
    var getdata = localStorage.getItem("array")?.split(",") || [];
    if (!getdata.includes(`${x}`)) {
      getdata.push(x);
    }
    localStorage.setItem("array", getdata);
    setNewLocalData(localStorage.getItem("array"));
  };

  const RemoveFromCart = (y) => {
    var localstoragedata = localStorage.getItem("array")?.split(",");
    var indexnumber = localstoragedata.indexOf(String(y));
    if (indexnumber == -1) {
    } else {
      localstoragedata.splice(indexnumber, 1);
      localStorage.setItem("array", localstoragedata);
    }
    setNewLocalData(localStorage.getItem("array"));
  };

  return (
    <>

      <span>
        <Link to="/cart">Cart Page</Link>
      </span>
      {/* {cartdata?<span>{cartdata}</span>:null} */}


      {products?.map((val, index) => {
        return (
          <div key={index}>
            <div>price: {val.price} ₹</div>
            <div>description:{val.description}</div>
            <div>category:{val.category}</div>
            <span>
              rate: {val.rating.rate} by {val.rating.count}
            </span>

            <img
              style={{ width: "50px" }}
              src={val.image}
              alt=""
              className="img-responsive"
            />

            {LocalData?.includes(val.id) ? (
              <button onClick={() => RemoveFromCart(val.id)}>
                Remove from cart
              </button>
            ) : (
              <button onClick={() => AddToCart(val.id)}>Add to Cart</button>
            )}
          </div>
        );
      })}
    </>
  );
};
export default Home;
