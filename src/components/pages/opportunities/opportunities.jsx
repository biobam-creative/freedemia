import { useState, useEffect } from "react";

import "./style.css";

import Card from "../../ui/card/card";
import Loader from "../../ui/loader/loader";

import InfiniteScroll from "react-infinite-scroll-component";

import config from "../../../config.json";
import httpServices from "../../../services/httpServices";

const Opportunities = () => {
  let [opportunities, setOpportunities] = useState([]);
  let [loading, setLoading] = useState(true);
  let [nextUrl, setNextUrl] = useState("");
  let [count, setCount] = useState();
  let [moreExist, setMoreExist] = useState(false);

  useEffect(() => {
    async function getOpportunities() {
      const result = await httpServices.client.get("opportunities");
      if (result.data.next) {
        setMoreExist(true);
      } else {
        setMoreExist(false);
      }
      setNextUrl(result.data.next);
      setCount(result.data.count);
      setOpportunities(result.data.results);
      setLoading(false);
    }
    getOpportunities();
  }, []);

  async function fetchData() {
    const result = await httpServices.get(nextUrl);
    if (result.data.next) {
      setMoreExist(true);
    } else {
      setMoreExist(false);
    }
    setNextUrl(result.data.next);
    setCount(result.data.count);
    setOpportunities(opportunities.concat(result.data.results));
  }

  {
    if (loading) return <Loader />;
  }

  return (
    <>
      <div className="wraper">
        <div className="title">Latest opportunities</div>
        <InfiniteScroll
          dataLength={opportunities.length}
          next={fetchData}
          hasMore={moreExist}
          loader={<h4>Loading</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>No more Posts</b>
            </p>
          }
        >
          <div className="row body">
            {opportunities.map((opportunity) => (
              <Card
                key={opportunity.id}
                data={opportunity}
                title={opportunity.title}
                image={opportunity.image}
              />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Opportunities;
