import React from 'react'
import './Comments.css'
export default function Comments({plan}){
    return (
        <div style={{height:'100%'}}><div style={{color:'white'}}>

        <details>
          <summary>Hotel</summary>
          <p>
          {plan.hotel}    </p>
        </details>
        <details>
          <summary>Transportation</summary>
          <p>
      {plan.transportation}    </p>
        </details>
        <details>
          <summary>Days
          </summary>
      <p>{plan.day_set&&plan.day_set.length} day trip </p> </details>
      
      
                  </div>
        <div className="container justify-content-center" style={{width:'100%',border:'3px solid #ccc'}}>
        <div className="d-flex justify-content-center pt-3 pb-2"> <input type="text" name="text" placeholder="+ Add a note" className="form-control addtxt"/> </div>
        <div className="py-2">
            <div className="second py-2 px-2"> <span className="text1">Type your note, and hit enter to add it</span>
                <div className="d-flex justify-content-between py-1 pt-2">
                    <div><span className="text2">Martha</span></div>
                    <div><span className="text3">Upvote?</span><span className="thumbup"><i className="fa fa-thumbs-o-up"></i></span><span className="text4">3</span></div>
                </div>
            </div>
        </div>
        <div className="py-2">
            <div className="second py-2 px-2"> <span className="text1">Type your note, and hit enter to add it</span>
                <div className="d-flex justify-content-between py-1 pt-2">
                    <div><span className="text2">Curtis</span></div>
                    <div><span className="text3">Upvote?</span><span className="thumbup"><i className="fa fa-thumbs-o-up"></i></span><span className="text4">3</span></div>
                </div>
            </div>
        </div>
        <div className="py-2">
            <div className="second py-2 px-2"> <span className="text1">Type your note, and hit enter to add it</span>
                <div className="d-flex justify-content-between py-1 pt-2">
                    <div><span className="text2">Beth</span></div>
                    <div><span className="text3 text3o">Upvoted</span><span className="thumbup"><i className="fa fa-thumbs-up thumbupo"></i></span><span className="text4 text4i">1</span></div>
                </div>
            </div>
        </div>
        <div className="py-2 pb-3">
            <div className="second py-2 px-2"> <span className="text1">Type your note, and hit enter to add it</span>
                <div className="d-flex justify-content-between py-1 pt-2">
                    <div><span className="text2">Curtis</span></div>
                    <div><span className="text3">Upvote?</span><span className="thumbup"><i className="fa fa-thumbs-o-up"></i></span><span className="text4 text4o">1</span></div>
                </div>
            </div>
        </div>
    </div></div>
    )
}