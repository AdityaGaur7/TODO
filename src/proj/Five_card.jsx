import React from 'react'

function Five_card(props) {
  return (
    <>
        <div className="card naruto">
          <img src={props.imgsrc} alt="jm" className="image" />
          <div className="info">
            <span className="type">{props.sname}</span>
            <h3 className="title">{props.title}</h3>
            
          </div>
      </div>
    </>
  );
}

export default Five_card
