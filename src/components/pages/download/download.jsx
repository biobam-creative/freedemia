import "./style.css";

const Download = (props) => {
  const url = props.location && props.location.url;
  console.log(url);
  return (
    <div>
      <div className="center">
        <a href={url} target="_blank" rel="noreferrer">
          <span className="download-text"> Your download is ready</span>
          <div className="download-icon">
            <i className="fa fa-download"></i>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Download;
