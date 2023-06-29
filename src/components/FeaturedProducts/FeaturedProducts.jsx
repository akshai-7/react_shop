import Card from "../../components/Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({type}) => {


  const data = [
    {
      id: 1,
      img: "img/94661-wedding-dresse-for-girls-jade-modern-silhouettes-20trendingweddingdresses-for-girls.jpeg",
      img2: "img/istockphoto-1169982382-1024x1024.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic t-Shirt",
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 2,
      img: "img/images.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Skirt",
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
  ]
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellendus ad, quidem debitis, adipisci consequatur velit aliquid veritatis excepturi aspernatur sapiente nostrum odit obcaecati aliquam eligendi natus optio blanditiis nisi!</p>
      </div>
      <div className="bottom">
        {data.map(item => (
          <Card item={item} key={item} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts