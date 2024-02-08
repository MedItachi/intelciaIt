import React from "react";
import axios from "axios";
import FileDownlod from "js-file-download";
const FileUpload = () => {
  const handleFileUpload = (event) => {
    // get the selected file from the input
    const file = event.target.files[0];
    // create a new FormData object and append the file to it
    const formData = new FormData();
    formData.append("file", file);
    // make a POST request to the File Upload API with the FormData object and Rapid API headers
    axios
      .post("http://localhost:8881/upload/tmp", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        // handle errors
        console.log(error);
      });
  };

  const handleDownload = (event) => {
    fetch("http://localhost:8881/file/download", {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `FileName.pdf`);

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      });
  };
  // render a simple input element with an onChange event listener that calls the handleFileUpload function
  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={(e) => handleDownload(e)}>Downlod</button>
    </div>
  );
};
export default FileUpload;
