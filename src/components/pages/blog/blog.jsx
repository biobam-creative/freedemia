// import Card from "../../ui/card/card";
import "./style.css";

const Blog = () => {
  return (
    <div className="row page-padding">
      <div className="card">
        {/* <img src={img} className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">Title</h5>
          <p className="card-text">
            thr real thing is to keep on doin your best
          </p>
        </div>
      </div>
    </div>
    // <Card
    //   key={product.id}
    //   discount="100"
    //   price="100"
    //   onCartClick={handleCartClick}
    //   onLike={handleLike}
    //   // data={product}
    //   title="blogging"
    //   image={img}
    // />
  );
};

export default Blog;
