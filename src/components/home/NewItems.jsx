import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from 'axios';
import Countdown from "./Countdown";
import Slider from "react-slick";
import Skeleton from "../UI/Skeleton";

const NewItems = () => {
  const [loading, setLoading] = useState([])
  const [data, setData] = useState([])
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  useEffect(()=> {
    async function fetchNewItems() {
      try {
        setLoading(true);
          const response = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems');
          console.log(response.data)
          setData(response.data);
      } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
      }
      setLoading(false);
  }

  fetchNewItems();
  }, [])
  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <Slider {...settings}>
          {loading ?
        new Array(4)
        .fill()
        .map((_, index) => (
          <Skeleton
            key={index}
            width={'100%'}
            height={300}
            borderRadius={5}
          />
        ))  :

          data.map((card) => (
            <div key={card.id}>
              <div className="nft__item">
                <div className="author_list_pp">
                  <Link
                    to={`/author/${card.authorId}`}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Creator: Monica Lucas"
                  >
                    <img className="lazy" src={card.authorImage} alt="" />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
                {card.expiryDate && (<Countdown expiryDate = {card.expiryDate}/>)}

                <div className="nft__item_wrap">
                  <div className="nft__item_extra">
                    <div className="nft__item_buttons">
                      <button>Buy Now</button>
                      <div className="nft__item_share">
                        <h4>Share</h4>
                        <a href="" target="_blank" rel="noreferrer">
                          <i className="fa fa-facebook fa-lg"></i>
                        </a>
                        <a href="" target="_blank" rel="noreferrer">
                          <i className="fa fa-twitter fa-lg"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-envelope fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <Link to={`/item-details/${card.nftId}`}>
                    <img
                      src={card.nftImage}
                      className="lazy nft__item_preview"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="nft__item_info">
                  <Link to="/item-details">
                    <h4>{card.title}</h4>
                  </Link>
                  <div className="nft__item_price">{card.price} ETH</div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>{card.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
=======
        data.map((card) => (
          <div key={card.id}>
            <Card data = {card} />
            </div>
      ))}
>>>>>>> Stashed changes
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
