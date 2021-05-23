import './Ticket.css'
import React from 'react'
export default function Ticket({flight}){
    return <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
      
        <h1 className="ticket-header">Departure</h1>
        <article className="ticket card">
          <section className="date">
            <time>
              <span>3</span><span>April</span>
            </time>
          </section>
          <section className="card-cont">
            <small>Departure</small>
            <h3>Flight to Hong Kong</h3>
            <div className="even-date">
             <i className="fa fa-calendar"></i>
             <time>
               <span>Duration: 3 hours 55 minutes</span>
               <span>08:55pm to 12:00 am</span>
             </time>
            </div>
            <div className="even-info">
              <i className="fa fa-map-marker"></i>
              <p>
                Flight to "warm" Hong Kong, stops at "nowhere"
              </p>
            </div>
            <a href="#">tickets</a>
          </section>
        </article>
        <h1 className="ticket-header">Arrival</h1>
        <article className="ticket card card">
          <section className="date">
            <time>
              <span>5</span><span>April</span>
            </time>
          </section>
          <section className="card-cont">
            <small>Arrival</small>
            <h3>Flight back from HK</h3>
            <div className="even-date">
             <i className="fa fa-calendar"></i>
             <time>
               <span>wednesday 5 April 2021</span>
               <span>08:55pm to 12:00 am</span>
             </time>
            </div>
            <div className="even-info">
              <i className="fa fa-map-marker"></i>
              <p>
                Flight back form hong kong. Ex price: 202
              </p>
            </div>
            <a href="#">tickets</a>
          </section>
        </article>
      </div>
      
}
/* import './Ticket.css'
import React from 'react'
export default function Ticket({flight}){
  if(!flight){
    return null
  }
    return <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
      
        <h1 className="ticket-header">Departure</h1>
        <article className="ticket card">
          <section className="date">
            <time>
              <span>{flight.OutDay}</span><span>Departure time: {flight.OutTime}</span>
            </time>
          </section>
          <section className="card-cont">
            <small>Airports: {flight.OutCities}</small>
            <h3>Airline: {flight.OutAirline}</h3>
            <div className="even-date">
             <i className="fa fa-calendar"></i>
             <time>
               <span>Stops: {flight.OutStops}</span>
               <span>Total Duration: {flight.OutDuration}</span>
             </time>
            </div>
            <div className="even-info">
              <i className="fa fa-map-marker"></i>
              <p>
                Weekday: {flight.OutWeekday}
              </p>
            </div>
            <a href="#">Purchase</a>
          </section>
        </article>
        <h1 className="ticket-header">Arrival</h1>
        <article className="ticket card card">
          <section className="date">
            <time>
              <span>{flight.ReturnDay}</span><span>Return Time: {flight.ReturnTime}</span>
            </time>
          </section>
          <section className="card-cont">
            <small>Cities: {flight.ReturnCities}</small>
            <h3>Airline: {flight.ReturnAirline} </h3>
            <div className="even-date">
             <i className="fa fa-calendar"></i>
             <time>
               <span>Stops: {flight.ReturnStops}</span>
               <span>Total Duration: {flight.ReturnDuration}</span>
             </time>
            </div>
            <div className="even-info">
              <i className="fa fa-map-marker"></i>
              <p>
                Weekday: {flight.ReturnWeekday}
              </p>
            </div>
            <a href="#">Purchase</a>
          </section>
        </article>
      </div>
      
} */