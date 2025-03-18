import React from "react";
import { Link } from "react-router-dom";
<<<<<<< Updated upstream
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";

const ExploreItems = () => {
=======
import axios from 'axios';
import Countdown from "../home/Countdown";
import Skeleton from "../UI/Skeleton";
import Card from "../Card";

const ExploreItems = () => {
  const [loading, setLoading] = useState([])
    const [data, setData] = useState([])
    const [itemCount, setItemCount] = useState(8);
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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      {new Array(8).fill(0).map((_, index) => (
=======
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
>>>>>>> Stashed changes
        <div
          key={index}
          className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
          style={{ display: "block", backgroundSize: "cover" }}
<<<<<<< Updated upstream
        >
          <div className="nft__item">
            <div className="author_list_pp">
              <Link
                to="/author"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              >
                <img className="lazy" src={AuthorImage} alt="" />
                <i className="fa fa-check"></i>
              </Link>
            </div>
            <div className="de_countdown">5h 30m 32s</div>

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
              <Link to="/item-details">
                <img src={nftImage} className="lazy nft__item_preview" alt="" />
              </Link>
            </div>
            <div className="nft__item_info">
              <Link to="/item-details">
                <h4>Pinky Ocean</h4>
              </Link>
              <div className="nft__item_price">1.74 ETH</div>
              <div className="nft__item_like">
                <i className="fa fa-heart"></i>
                <span>69</span>
              </div>
            </div>
          </div>
=======
        >  <Card data = {card} />
       
>>>>>>> Stashed changes
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
