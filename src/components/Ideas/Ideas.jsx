import "./Ideas.css";

function Ideas() {
  return (
    <div className="ideas">
      <div className="ideas_head-description">
        <div className="ideas_head">Ideas have a place here</div>
        <div className="ideas_description">
          Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
        </div>
      </div>
      <div className="ideas_image-info">
        <div className="ideas_image">
          <img src="img/ideas.png" />
        </div>
        <div className="ideas_info">
          <div>We Make It Easy To Find The Great Design Talent, Easier...</div>
          <div>Road Design Handbook For The International Road...</div>
          <div>The Best Kept Secrets About Creative People</div>
          <div>We Make It Easy To Find The Great Design Talent, Easier...</div>
        </div>
      </div>
      <div className="ideas_see-all">
        <div className="ideas_see-all_txt">See all</div>
        <div className="ideas_see-all_arrow">
          <img src="icons/ideas-arrow.svg" />
        </div>
      </div>
    </div>
  );
}

export default Ideas;
