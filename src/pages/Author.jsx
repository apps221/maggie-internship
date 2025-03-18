import React, { useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import axios from "axios";

const Author = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const [data, setData] = useState([])
    const id = useParams().id;
    const [isFollowing, setIsFollowing] = useState(false);
    const [followerCount, setFollowerCount] = useState(data.followers)
    useEffect(() => {
      if (data.followers !== undefined) {
        setFollowerCount(data.followers);
      }
    }, [data]); //runs once the data is filled in, because initially it is equal to empty array
  useEffect(()=> {
    async function fetchAuthorItems() {
      try {
      
          const response = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`);
          console.log(response.data)
          setData(response.data);
      } catch (error) {
          console.error('Error fetching data:', error);
        
      }
    
  }
  
  fetchAuthorItems();
  }, [id])
  const handleFollowButton = async () => {
    if (isFollowing === true) {
      setFollowerCount(followerCount - 1); 
    } else {
      setFollowerCount(followerCount + 1); 
    }
    setIsFollowing(!isFollowing); 
  };
  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      <img src={data.authorImage} alt="" />

                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                        <h4>
                         {data.authorName}
                          <span className="profile_username">{data.tag}</span>
                          <span id="wallet" className="profile_wallet">
                           {data.address}
                          </span>
                          <button id="btn_copy" title="Copy Text">
                            Copy
                          </button>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">{followerCount}</div>
                      <Link to="#" className="btn-main" onClick={handleFollowButton}>
                      {isFollowing ? "Unfollow" : "Follow"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <AuthorItems data = {data}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
