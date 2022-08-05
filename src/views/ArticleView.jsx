import React, { useEffect, useState } from "react";
import "../assets/css/ArticleView.css";
import arcellaImage from "../assets/images/arcella.jpg";
import { getDateForNow } from "./../constat/helpers";
import { FacebookShareButton } from "react-share";

export default function ArticleView() {
  // switch reading mode function
  const [readingMode, setReadingMode] = useState(false);
  const switchToReadingMode = () => {
    if (readingMode) {
      setReadingMode(false);
    } else {
      setReadingMode(true);
    }
  };
  //zoom in and out description texts function
  const [defaultTextSize, setDefaultTextSize] = useState(17);
  const zoomInText = () => {
    if (defaultTextSize >= 35) {
      console.log("You cant zoom in more");
      return;
    }
    let defaultTextSizeStorage = defaultTextSize + 3;
    setDefaultTextSize(defaultTextSizeStorage);
  };
  const zoomOutText = () => {
    if (defaultTextSize <= 9) {
      console.log("You cant zoom out more");
      return;
    }
    let defaultTextSizeStorage = defaultTextSize - 3;
    setDefaultTextSize(defaultTextSizeStorage);
  };
  const resetTextSize = () => {
    setDefaultTextSize(17);
  };
  //get title or project name from global variables
  const [title, setTitle] = useState("");
  useEffect(() => {
    setTitle(process.env.REACT_APP_PROJECT_NAME);
  }, []);

  return (
    <div className="article-section">
      <div className="container">
        {!readingMode ? (
          <div className="row px-5">
            {/* article-title */}
            <h2 className="article-title col-lg-12 pt-5 pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>

            {/* article-budges */}
            <div className="article-budges col-lg-12 mb-4">
              <span className="badge bg-danger ms-1 px-3 py-2 mt-2">Lorem</span>
              <span className="badge bg-danger ms-3 px-3 py-2 mt-2">
                Lorem Lorem
              </span>
              <span className="badge bg-danger ms-3 px-3 py-2 mt-2">
                Loremmm
              </span>
            </div>

            {/* article-image */}
            <div className="article-image">
              <img src={arcellaImage} alt="arcella-telecom-company" />
            </div>
          </div>
        ) : null}
        {/* article-menu */}
        <div className="row px-5 my-4">
          {/* article-date */}
          <div className="col-lg-3 d-flex justify-content-start">
            <p>
              <i className="fas fa-clock"></i> {getDateForNow()}
            </p>
          </div>
          {/* article-actions */}
          <div className="article-actions col-lg-9 d-flex justify-content-end">
            {/* in the url you can put the valid article url after publishing */}
            <FacebookShareButton
              url="https://arcellatelecom.com/"
              quote={title}
              className="Demo__some-network__share-button"
            >
              <div className="btn btn-light mx-4 d-flex align-items-center">
                <i className="fas fa-share-alt"></i>{" "}
                <strong className="px-2">Share</strong>
              </div>
            </FacebookShareButton>
            <div className="article-readmode">
              <button className="btn btn-white" onClick={switchToReadingMode}>
                <i className="fas fa-file-alt"></i> &nbsp;
                {readingMode ? "Disable " : "Enable "}
                reading mode
              </button>
              <span className="mx-2">|</span>
              <button className="btn btn-white" onClick={zoomOutText}>
                A-
              </button>
              <button className="btn btn-white" onClick={resetTextSize}>
                A
              </button>
              <button className="btn btn-white" onClick={zoomInText}>
                A+
              </button>
            </div>
          </div>
        </div>
        {readingMode ? (
          <h2 className="article-title pt-5 pb-2 px-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        ) : null}
        {/* article-description */}
        <div
          className="article-description px-5"
          style={{ fontSize: `${defaultTextSize}px` }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            neque optio nemo nostrum blanditiis eligendi quia! Amet quos
            explicabo sequi harum ratione dolor totam officiis. Eum illum
            dolorum laudantium nesciunt.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Accusamus neque optio nemo nostrum blanditiis
            eligendi quia! Amet quos explicabo sequi harum ratione dolor totam
            officiis. Eum illum dolorum laudantium nesciunt.Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Accusamus neque optio nemo
            nostrum blanditiis eligendi quia! Amet quos explicabo sequi harum
            ratione dolor totam officiis.Accusamus neque optio nemo nostrum
            blanditiis eligendi quia! Amet quos explicabo sequi harum ratione
            dolor totam officiis. Eum illum dolorum laudantium nesciunt.Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>
            Eum illum dolorum laudantium nesciunt.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Accusamus neque optio nemo nostrum
            blanditiis eligendi quia! Amet quos explicabo sequi harum ratione
            dolor totam officiis. Eum illum dolorum laudantium nesciunt.Lorem
            ipsum dolor sit amet consectetur adipisicing elit.Accusamus neque
            optio nemo nostrum blanditiis eligendi quia! Amet quos explicabo
            sequi harum ratione dolor totam officiis. Eum illum dolorum
            laudantium nesciunt.Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <p>
            Accusamusneque optio nemo nostrum blanditiis eligendi quia! Amet
            quos explicabo sequi harum ratione dolor totam officiis. Eum illum
            dolorum laudantium nesciunt. dolor totam officiis. Eum illum dolorum
            laudantium nesciunt, dolor totam officiis. Eum illum dolorum
            laudantium nesciunt.
          </p>
          <p>
            Accusamusneque optio nemo nostrum blanditiis eligendi quia! Amet
            quos explicabo sequi harum ratione dolor totam officiis. Eum illum
            dolorum laudantium nesciunt. dolor totam officiis. Eum illum dolorum
            laudantium nesciunt, dolor totam officiis. Eum illum dolorum
            laudantium nesciunt.Accusamusneque optio nemo nostrum blanditiis
            eligendi quia! Amet quos explicabo sequi harum ratione dolor totam
            officiis. Eum illum dolorum laudantium nesciunt. dolor totam
            officiis. Eum illum dolorum laudantium nesciunt, dolor totam
            officiis. Eum illum dolorum laudantium nesciunt.
          </p>
        </div>
      </div>
    </div>
  );
}
