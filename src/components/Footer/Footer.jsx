import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div className="item">
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div>
            <div className="item">
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className="item">
                <h1>About</h1>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, maiores voluptas. Suscipit cupiditate enim odio eius esse eveniet eum saepe amet veritatis accusamus, optio corporis, reprehenderit eaque rerum error quo.</span>
            </div>
            <div className="item">
                <h1>Contact</h1>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, maiores voluptas. Suscipit cupiditate enim odio eius esse eveniet eum saepe amet veritatis accusamus, optio corporis, reprehenderit eaque rerum error quo.</span>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <span className="logo">Lamastore</span>
                <span className="copyright"> © Copyright 2023.All rights reserved</span>
            </div>
            <div className="right">
                <img src="img/payment.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer