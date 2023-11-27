import React from 'react';
import '../../App.css';
import "./Download.css";

const ZIP_PARENT_FILE_URL = "/zip_parent.zip";
const ZIP_CHILD_FILE_URL = "/zip_child.zip";

function Download() {
  const downloadFileAtURL = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(blob);
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        document.body.removeChild(aTag);
      })
      .catch((error) => {
        console.error("Error fetching the file:", error);
      });
  };

  return (
    <div className="App">
      <h1 className="header">ULTIMATE PARENTAL CONTROL APP FOR ANDROID</h1>
      <p className="description">STEP-1: Click on the child zip file to install the application on the child's device</p>
      <p className="description">STEP-2: Click on the parent zip file to install the application on the parent's device</p>
      <div className="button-container">
        <button onClick={() => { downloadFileAtURL(ZIP_PARENT_FILE_URL) }}>DOWNLOAD PARENT ZIP FILE</button>
        <button onClick={() => { downloadFileAtURL(ZIP_CHILD_FILE_URL) }}>DOWNLOAD CHILD ZIP FILE</button>
      </div>
    </div>
  );
}

export default Download;

