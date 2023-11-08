import React from "react";

function Third() {
  // const time = new Date();
  const time = new Date();
  const hour = time.getHours();
  let Greet;
 
  const cssStyle={color:'yellow',fontFamily:'cursive',};

  if (hour >= 1 && hour < 12) {
    Greet = "Good Morning";
    cssStyle.color='green';

  } else if (hour >= 12 && hour < 19) {
    Greet = "Good Afternoon";
   cssStyle.color='orange';
  } else {
    Greet = "Good Night";
 cssStyle.color="black";
  }
  return (
    <>
    <div>
      <h1>HELLO SIR,<span style={cssStyle}>{Greet}</span> </h1>
    </div>
    </>
  );
}

export default Third;
