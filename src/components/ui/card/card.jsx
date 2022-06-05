import "./style.css";

const Card = ({ data, image, title }) => {
  return (
    <div className="card m-2">
      <img src={image} className="card-img-top" alt="..." />
      <a
        href={data.link ? data.link : "https://google.com"}
        target="_blank"
        rel="noreferrer"
        className="card-link"
      >
        <div className="card-body">
          <div className="card-title">{title}</div>
        </div>
      </a>
    </div>
  );
};

export default Card;
