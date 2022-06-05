import React, { useRef, useState } from "react";

import Loader from "../../ui/loader/loader";

import httpServices from "../../../services/httpServices";
import config from "../../../config.json";

const PdfMerge = ({ history }) => {
  let [newTitle, setNewTitle] = useState("");
  let [loading, setLoading] = useState(false);
  let filesRef = useRef();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let pdfs = [filesRef.current.files];

    setLoading(true);

    const pdfInputs = filesRef.current.files;

    let form_data = new FormData();
    for (let i = 0; i < pdfInputs.length; i++) {
      form_data.append(`pdf${i}`, pdfInputs[i]);
    }
    console.log(pdfs);

    form_data.append("new_title", newTitle);

    const result = await httpServices.client.post("pdf/merge", form_data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    setLoading(false);
    const url = "http://127.0.0.1:8000" + "/" + result.data;
    console.log(result.data);
    history.push({ pathname: "/download", url });
  };

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  {
    if (loading) return <Loader />;
  }

  return (
    <div className="row page-padding">
      <form className="m-2 form-group" onSubmit={handleFormSubmit}>
        <label htmlFor="title">New Title</label>
        <input
          placeholder="Title"
          onChange={handleTitleChange}
          value={newTitle}
          type="text"
          id="title"
          className="m-2 form-control"
        />
        <label htmlFor="pdfs">New Title</label>
        <input
          type="file"
          className="form-control m-2"
          multiple
          ref={filesRef}
          accept=".pdf"
          id="pdf"
        />
        <input
          type="submit"
          value="Submit"
          className="m-2 for-control btn-sm btn-success"
        />
      </form>
    </div>
  );
};

export default PdfMerge;
