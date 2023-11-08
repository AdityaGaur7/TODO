import React from "react";
// import img1 from "./img/ok.jpg";
import Card from "./Five_card";
import Sdata from "./Five_Arr";

// console.log(Sdata[0].sname);


// function ncard(val){
// //  console.log(val);
//   return (  
//           <Card
//           imgsrc={img1}
//           title={val.title}
//           sname={val.sname}
//           link={val.links}
//         />
//   );

// }
function Five() {
  return (
    <>
      <h1>Mine past desktop Wallpapers 😘</h1>
      <div className="cards">
        

          {Sdata.map((val,index)=>{
            console.log(index);
            return (  
              <Card
              imgsrc={val.imgsrc}
              title={val.title}
              sname={val.sname}
             
            />
      )
          })}

      
      </div>
    </>
  );
}

export default Five;

