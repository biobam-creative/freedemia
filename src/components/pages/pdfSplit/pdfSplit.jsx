import { useState, useRef } from "react";

import Loader from "../../ui/loader/loader";
// import Download from "../download/download";

import httpServices from "../../../services/httpServices";
import config from "../../../config.json";

import "./style.css";

const PdfSplit = ({ history }) => {
  const fileInput = useRef();

  let [startPage, setStartPage] = useState(0);
  let [endPage, setEndPage] = useState(0);
  let [newTitle, setNewTitle] = useState("");
  let [loading, setLoading] = useState(false);

  const handleStartPageChange = (e) => {
    setStartPage(e.target.value);
  };
  const handleEndPageChange = (e) => {
    setEndPage(e.target.value);
  };
  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    let form_data = new FormData();
    form_data.append("book", fileInput.current.files[0]);
    form_data.append("new_title", newTitle);
    form_data.append("start_page", startPage);
    form_data.append("end_page", endPage);

    const result = await httpServices.client.post("pdf/split", form_data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    console.log(result.data);
    setLoading(false);

    const url = config.apiEndpoint + "/" + result.data;
    history.push({ pathname: "/download", url });
  };

  {
    if (loading) return <Loader />;
  }
  return (
    <div className="row page-padding">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="start">Start Page</label>
          <input
            className="form-control"
            type="number"
            id="start"
            value={startPage}
            onChange={handleStartPageChange}
            required
          />
          <label htmlFor="end">End Page</label>
          <input
            className="form-control"
            type="number"
            id="end"
            value={endPage}
            onChange={handleEndPageChange}
            required
          />
          <label htmlFor="title">New Title</label>
          <input
            className="form-control"
            placeholder="New Title"
            type="text"
            id="title"
            value={newTitle}
            onChange={handleTitleChange}
          />
          <label htmlFor="pdf">Pdf File</label>
          <input
            className="form-control"
            type="file"
            id="pdf"
            ref={fileInput}
            accept=".pdf"
          />
          <input
            type="submit"
            value="Submit"
            className="form-control btn-sm btn-success"
          />
        </div>
      </form>
    </div>
  );
};

export default PdfSplit;
