import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
const Product = () => {
  const [selectedImg, SetSelectedImg] = useState(0);
  const [quantity, SetQuantity] = useState(0);
  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e)=>SetSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={(e)=>SetSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt=""/>
        </div>
      </div>      
      <div className="right">
        <h1>Title</h1>
        <span>$199</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ex expedita sed, voluptate rem eveniet harum odit asperiores deleniti necessitatibus sit neque possimus nostrum ratione maiores quaerat eos atque animi.</p>
        <div className="quantity">
            <button onClick={() => SetQuantity((prev)=>( prev === 1 ? 0: prev-1))}>-</button>
              {quantity}
            <button onClick={() => SetQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className="add">
            <AddShoppingCartIcon/>ADD TO CART
        </button>
        <div className="links">
            <div className="item">
              <FavoriteBorderIcon/>ADD TO WISH LIST
            </div>
            <div className="item">
              <BalanceIcon/> ADD TO COMPARE  
            </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt,Women,Top</span>
        </div>
        <hr/>
        <div className="datails">
          <span>DESCRIPTION</span>
          <hr/>
          <span>ADDITIONAL INFORMATION</span>
          <hr/>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}
export default Product