import teacher from "../../assets/images/teacher.png"
function ProfCard() {
    return (
        <div className="d-flex flex-column gap-3">

        <div className="d-flex gap-4 text-start border-start border-bottom shadow-sm p-3 w-100">
            <div className="prof-pic">
                <img className="prof-img" src={teacher} />
            </div>
            <div class="vr"></div>

            <div className="right-side d-flex flex-column   " >
                <div className="prof-info">
                    <p className="h3">John Doe</p>
                    <p className="hint">Basic physics</p>
                </div>
                <div className="prof-stat">
                    <p className="h6">23 reviews</p>
                </div>
            </div>
        </div>
    
         <div className="d-flex gap-4 text-start border-start border-bottom shadow-sm p-3 w-100">
            <div className="prof-pic">
                <img className="prof-img" src={teacher} />
            </div>
            <div class="vr"></div>

            <div className="right-side d-flex flex-column   " >
                <div className="prof-info">
                    <p className="h3">John Doe</p>
                    <p className="hint">Basic physics</p>
                </div>
                <div className="prof-stat">
                    <p className="h6">23 reviews</p>
                </div>
            </div>
        </div>
    

       


        <div className="d-flex gap-4 text-start border-start border-bottom shadow-sm p-3 w-100">
            <div className="prof-pic">
                <img className="prof-img" src={teacher} />
            </div>
            <div class="vr"></div>

            <div className="right-side d-flex flex-column   " >
                <div className="prof-info">
                    <p className="h3">John Doe</p>
                    <p className="hint">Basic physics</p>
                </div>
                <div className="prof-stat">
                    <p className="h6">23 reviews</p>
                </div>
            </div>
        </div>
    




        </div>

    )
}

export default ProfCard;
