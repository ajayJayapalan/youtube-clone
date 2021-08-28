import React from "react";
import tagListArray from "../../services/fake_taglist"
import Tag from './Tag';

function Taglist() {
  return (
    <div className="tag-list">    
      {tagListArray.map(tag=>{
          return <Tag key={tag}>{tag}</Tag>
      })}
    </div>
  );
}

export default Taglist;
