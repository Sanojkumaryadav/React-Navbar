import React from "react";
import logo from "../images/art1.jpg";
import Records from "../Data.json"

const Home = () => {
  return (
    <div className="text-center mt-5">
      <h1>Welcome to Art Gellery</h1>
      {
        Records.map(record =>{
          return(
            <div className="box">
                 <img src={logo}/>
                 <div className="inner-box">
                    <div className="top-box">
                    <p>{record.artName}</p>
                    <p>{record.ratings}</p>
                    </div>
                    <div className="top-box">
                    <p>{record.uploadedBy}</p>
                    <p>{record.uploadedOn}</p>
                    </div>
                </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default Home;
