import teacher_f from "../assets/images/teacher-f.png";
import like from "../assets/images/like.png";
import dislike from "../assets/images/dont-like.png";

function ProfDetail() {
  return (
    <div className="d-flex flex-column gap-5 text-start">
      <div className="d-flex gap-4 text-start border-start border-bottom shadow-sm p-3 w-100 mt-5">
        <div className="prof-pic">
          <img className="prof-img" src={teacher_f} />
        </div>
        <div class="vr"></div>

        <div className="right-side d-flex flex-column   ">
          <div className="prof-info">
            <p className="h3">John Doe</p>
            <p className="hint">Basic physics</p>
          </div>
          <div className="prof-stat">
            <p className="h6">23 reviews</p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column gap-3">
        <p className="h2 mt-0">commets and ratings</p>
        <div>
          <div class="p-3 mb-2 custom-border">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            cof a document or a t. L
          </div>
          <div className="d-flex flex-row justify-content-end pr-3">
            <div className="px-3 d-flex">
              <img src={like} alt="like" className="like-dislike" />
              <p className="pr-3">10</p>
            </div>
            <div className="d-flex bg-info">
              <img src={dislike} alt="dis-like" className="like-dislike" />
              <p>1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfDetail;
