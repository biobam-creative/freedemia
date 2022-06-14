import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Card from "../../ui/card/card";
import Loader from "../../ui/loader/loader";

import httpServices from "../../../services/httpServices";

import "./style.css";

const Courses = () => {
  let [courses, setCourses] = useState([]);
  let [loading, setLoading] = useState(true);
  let [nextUrl, setNextUrl] = useState("");
  let [count, setCount] = useState();
  let [moreExist, setMoreExist] = useState(false);

  useEffect(() => {
    async function getCourses() {
      const result = await httpServices.client.get("blogs");
      if (result.data.next) {
        setMoreExist(true);
      } else {
        setMoreExist(false);
      }
      setNextUrl(result.data.next);
      setCount(result.data.count);
      setCourses(result.data.results);
      setLoading(false);
    }
    getCourses();
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
    setCourses(courses.concat(result.data.results));
  }
  {
    if (loading) return <Loader />;
  }

  return (
    <>
      <div className="wraper">
        <div className="title">Latest Free Courses</div>
        <InfiniteScroll
          dataLength={courses.length}
          next={fetchData}
          hasMore={moreExist}
          loader={"Loading..."}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>No more Posts</b>
            </p>
          }
        >
          <div className="row body">
            {courses.map((course) => (
              <Card
                key={course.id}
                data={course}
                title={course.title}
                image={`https://res.cloudinary.com/freedemia/${course.image}`}
              />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Courses;
