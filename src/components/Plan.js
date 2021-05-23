import axios from "axios";
import React,{ useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import './plan.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AppMap from "./AppMap";
import Ticket from "./Ticket";
import Comments from "./Comments";
import { Button } from "./Button";
export default function Plan(){
    const [plan,setPlan] = useState(null)
    const [showSchedule,setShowSchedule] = useState(false)
    const [flight,setFlight]=useState(null)
    let { id } = useParams();
    useEffect(()=>{
        getPlan()
    },[])
    function getPlan(){
        axios.get("http://localhost:8000/api/plan/"+id)
        .then(result => {
          setPlan(result.data.plan)
          setFlight(result.data.flight)
        })
    }
    if(!plan){
        return <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',height:'100vh'}}><h2>OPTIMIZING FLIGHT</h2><div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div></div>
    }
    
    return (
        <div style={{background:` linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://static01.nyt.com/images/2020/02/07/world/07hongkong-1/merlin_168336351_fce8cc0c-5e7f-404e-b299-6ea3b7245bea-superJumbo.jpg)`, minHeight:'100vh',backgroundSize:'cover',padding:'15px'}}>
          
                <div style={{display:'flex',justifyContent:'center'}}><h1 style={{marginBottom:'5px'}}>My Trip to {plan.city}</h1></div>
            

<Carousel>

{plan.day_set.map((day,index)=>(

<div className="schedule-map-container" key={day.id}>
    
<div  className="todo-cmp" style={{display:(showSchedule?"block":""),width:(showSchedule?"100%":"")}}>
			<header  className="todo-cmp__header">
				<h2>Day {index+1}</h2>
				<p>Have fun!</p>
			</header>

				<ul  className="todo-cmp__list">
                    {day.location_set.map(loc=>(
                        <li key={loc.id}>
						<label >
							<input type="checkbox"/>
							<span>{loc.name}</span>
                            <span style={{opacity:'0.6'}}>{loc.type}</span>
						</label>
					</li>
                    ))}
					
			</ul>
		</div>
        {!showSchedule&&<AppMap places={day.location_set}/>}
        <button onClick={()=>setShowSchedule(!showSchedule)} className="show-schedule btn btn-light"><i className="fa fa-arrow-up mr-2"></i>Show/Hide Schedule</button>
        </div>))}
</Carousel>
<div style={{display:'flex',justifyContent:'center',marginBottom:'15px'}}>
<Button
                  className='btns'
                  
                  buttonStyle='btn--primary'
                  buttonSize='btn--large'
                >Book Flight and Hotel! </Button></div>
<div className="row">
{/*certain height but overflow or no comments yet */}
<div className="col-lg-8">
<Ticket flight={flight}/></div>
<div className="col-lg-4">
<Comments plan={plan}/></div>{/*  get flight when page loads and balance length with price, schedule info- length of trip, etc */}
</div>
              
              </div>
    )
}



