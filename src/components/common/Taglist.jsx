import React, { useRef } from "react";
import tagListArray from "../../services/fake_taglist";
import Tag from "./Tag";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Taglist() {
  const scrollContainer = useRef(null);
  const scrollRightBtn = useRef(null);
  const scrollLeftBtn = useRef(null);

  function handleScroll() {
    let container = scrollContainer.current;
    let leftBtnClasses = scrollLeftBtn.current.classList;
    let rightBtnClasses = scrollRightBtn.current.classList;

    if (container.scrollLeft > 50) {
      leftBtnClasses.remove("hide");
    } else {
      leftBtnClasses.add("hide");
    }

    let checkRightBtn =
      container.scrollLeft + container.clientWidth + 50 > container.scrollWidth;

    if (checkRightBtn) {
      rightBtnClasses.add("hide");
    } else {
      rightBtnClasses.remove("hide");
    }
  }

  function handleScrollRight() {
    scrollContainer.current.scrollLeft += 400;
  }

  function handleScrollLeft() {
    scrollContainer.current.scrollLeft -= 400;
  }

  return (
    <div ref={scrollContainer} onScroll={handleScroll} className="tag__list">
      <div
        ref={scrollLeftBtn}
        className="tag__list__scrollbutton tag__left hide"
      >
        <div onClick={handleScrollLeft} className="tag__list__icon__container">
          <ArrowBackIosIcon fontSize="small" />
        </div>
      </div>
      {tagListArray.map((tag) => {
        return <Tag key={tag}>{tag}</Tag>;
      })}
      <div ref={scrollRightBtn} className="tag__list__scrollbutton tag__right ">
        <div className="tag__list__icon__container" onClick={handleScrollRight}>
          <ArrowForwardIosIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Taglist;
