import accountPic from "../assets/images/accountPic.jpg"

function SomeProfs() {
  return (
    <>
        <p className="lexend-header ">Some Profs.</p>
    
        <div className="some-profs gap-3">
          <div className="card" >
            <img className="card-img-top" src={accountPic} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card" >
            <img className="card-img-top" src={accountPic} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div>
          
          <div className="card" >
            <img className="card-img-top" src={accountPic} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div>
          
    
    
        </div>
    </>
  );
}

export default SomeProfs;
