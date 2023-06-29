import Card from "../Card/Card";
import "./List.scss";

const List = () => {

    const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic t-Shirt",
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Skirt",
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "T-shirt",
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "T-shirt",
      oldPrice: 19,
      newPrice: 12,
    },
  ]
  return (
    <div className="list">
          {data?.map(item => ( 
              <Card item={item} key={item.id} />
        ))}
    </div>
  )
}

export default List