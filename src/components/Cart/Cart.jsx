import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const Cart = () => {
    const data = [
        {
            id: 1,
            img: "img/94661-wedding-dresse-for-girls-jade-modern-silhouettes-20trendingweddingdresses-for-girls.jpeg",
            img2: "img/istockphoto-1169982382-1024x1024.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve Graphic t-Shirt",
            desc: "Long Sleeve Graphic t-Shirt",
            isNew: true,
            oldPrice: 19,
            newPrice: 12,
        },
        {
            id: 2,
            img: "img/images.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Skirt",
            desc: "Skirt",
            isNew: true,
            oldPrice: 19,
            newPrice: 12,
        },
        {
            id: 3,
            img: "img/french_wine_polo_t-shirt_base_2_2_2022_19_05_2023_700x933.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "T-shirt",
            oldPrice: 19,
            newPrice: 12,
        },
        {
            id: 4,
            img: "img/istockphoto-1169982382-1024x1024.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "T-shirt",
            oldPrice: 19,
            newPrice: 12,
        },
    ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              1 x ${item.price}
            </div>
          </div> 
          <DeleteOutlinedIcon
            className="delete"            
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">
        Reset Cart
      </span>
    </div>
  );
};
export default Cart;