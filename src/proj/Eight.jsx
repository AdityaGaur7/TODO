import React, { useState } from "react";
import "./EightStyle.css";
import Eight_comp from "./Eight_comp";
import AddIcon from "@mui/icons-material/Add";
function Eight() {
  const [kaam, setkaam] = useState();

  const [karya, setkarya] = useState([]);

  const task = (e) => {
    setkaam(e.target.value);
  };

  const ok = () => {
    setkarya((old) => {
      return [...old, kaam];
    });
    setkaam("");
  };

  const delitem = (id) => {
    console.log("deleted");
    setkarya((olditem) => {
      return olditem.filter((arr, ind) => {
        return !(ind === id);
      });
    });
  };
  return (
    <div>
      <div className="card">
        <div className="title">
          <h2>To Do list</h2>
        </div>
        <br />
        <input
          type="text"
          placeholder="Add a item"
          onChange={task}
          value={kaam}
        />
        <button onClick={ok}>
          <AddIcon />
        </button>
        <br />
        <ol>
          {/* <li>{karya}</li> */}
          {karya.map((val, ind) => {
            return (
              <Eight_comp text={val} key={ind} id={ind} select={delitem} />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Eight;
