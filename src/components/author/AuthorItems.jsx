import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "../UI/Skeleton";
const AuthorItems = ({data}) => {

  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {!data || !data.nftCollection ? 
          new Array(8)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <Skeleton
              key={index}
              width={'100%'}
              height={400}
            /></div>
          ))
          :
          data.nftCollection.map((card) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={card.id}>
              <div className="nft__item">
                <div className="author_list_pp">
                  <Link to="">
                    <img className="lazy" src={data.authorImage} alt="" />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
