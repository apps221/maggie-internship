import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";

const ExploreItems = () => {

import axios from 'axios';
import Countdown from "../home/Countdown";
import Skeleton from "../UI/Skeleton";
import Card from "../Card";

const ExploreItems = () => {
  const [loading, setLoading] = useState([])
    const [data, setData] = useState([])
    const [itemCount, setItemCount] = useState(8);

import axios from 'axios';
import Countdown from "../home/Countdown";
import Skeleton from "../UI/Skeleton";

const ExploreItems = () => {
  const [loading, setLoading] = useState([])
    const [data, setData] = useState([])

  useEffect(()=> {
    async function fetchExploreItems() {
      try {
        setLoading(true);
          const response = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/explore');
          console.log(response.data)
          setData(response.data);
      } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
      }
      setLoading(false);
  }

  fetchExploreItems();
  }, [])

  async function filterItems(filter) {
    setLoading(true)
 const response = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${filter}`)
 setData(response.data)
 setLoading(false)
 
  }

  return (
    <>
      <div>
        <select id="filter-items" defaultValue="" onChange={(event) => filterItems(event.target.value)}>
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>

      {new Array(8).fill(0).map((_, index) => (

      {loading ?
        new Array(8)
        .fill()
        .map((_, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <Skeleton
            key={index}
            width={'100%'}
            height={400}
          /></div>
        )):

      data.slice(0, itemCount).map((card) => (

      data.map((card) => (

        <div
          key={card.id}
          className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
          style={{ display: "block", backgroundSize: "cover" }}

        >
          <div className="nft__item">
            <div className="author_list_pp">
              <Link
                to={`/author/${card.authorId}`}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
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
                <img src={card.nftImage} className="lazy nft__item_preview" alt="" />
              </Link>
            </div>
            <div className="nft__item_info">
              <Link to={`/item-details/${card.nftId}`}>
                <h4>{card.title}</h4>
              </Link>
              <div className="nft__item_price">{card.price}</div>
              <div className="nft__item_like">
                <i className="fa fa-heart"></i>
                <span>{card.likes}</span>
              </div>
            </div>
          </div>

        >  <Card data = {card} />
       

        </div>
      ))}
      <div className="col-md-12 text-center">
        <Link to="" id="loadmore" className="btn-main lead" onClick={()=>setItemCount(itemCount + 4)}>
          Load more
        </Link>
      </div>
    </>
  );
};

export default ExploreItems;
