import { useState, useEffect } from "react";

import config from "../../config.json";
import httpServices from "../../services/httpServices";

const useInfiniteScroll = (callback) => {
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!loading) return;
    callback(() => {
      console.log("called back");
    });
  }, [loading]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    )
      return;
    setLoading(true);
  };

  return [loading, setLoading];
};

export default useInfiniteScroll;
