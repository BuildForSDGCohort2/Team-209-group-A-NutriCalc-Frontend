import React,{ useState} from "react";
import { Link } from "react-router-dom";
import { IoIosAdd, IoIosHome, IoMdCalendar } from "react-icons/io";

const SideBar= ()=>{
    
    const [link1,setLink1]=useState(false)
    const [link2, setLink2] = useState(false);
    const [link3, setLink3] = useState(false);
    const [link4, setLink4] = useState(false);
    const [link5, setLink5] = useState(false);
    const [link6, setLink6] = useState(false);

    return (
      <div className="side-bar">
        <div className="side-bar-content">
          <div className="list-group">
            <Link
              className={`list-group-item list-group-item-action ${
                link1 ? "active" : ""
              }`}
              to="/"
              onClick={() => {
                setLink1(true);
                setLink2(false);
                setLink3(false);
                setLink4(false);
                setLink5(false);
                setLink6(false);
              }}
            >
              <span className="span">
                <IoIosHome color={"#45f542"} size={24} />
              </span>
              Home
            </Link>
            <Link
              className={`list-group-item list-group-item-action ${
                link4 ? "active" : ""
              }`}
              to="/farm"
              onClick={() => {
                setLink4(true);
                setLink1(false);
                setLink2(false);
                setLink3(false);
                setLink5(false);
                setLink6(false);
              }}
            >
              My Farms
            </Link>
            <Link
              className={`list-group-item list-group-item-action ${
                link3 ? "active" : ""
              }`}
              to="/schedule_farm_input"
              onClick={() => {
                setLink3(true);
                setLink1(false);
                setLink2(false);
                setLink4(false);
                setLink5(false);
                setLink6(false);
              }}
            >
              <span className="span">
                <IoMdCalendar color={"#45f542"} size={20} />
              </span>
              My schedule
            </Link>
            <Link
              className={`list-group-item list-group-item-action ${
                link6 ? "active" : ""
              }`}
              to="/new_farm"
              onClick={() => {
                setLink6(true);
                setLink1(false);
                setLink2(false);
                setLink3(false);
                setLink4(false);
                setLink5(false);
              }}
            >
              <span>
                <IoIosAdd color={"#45f542"} size={38} />
              </span>
              New Farm
            </Link>
            <Link
              className={`list-group-item list-group-item-action ${
                link2 ? "active" : ""
              }`}
              to="/new_farm_input"
              onClick={() => {
                setLink2(true);
                setLink1(false);
                setLink3(false);
                setLink4(false);
                setLink5(false);
                setLink6(false);
              }}
            >
              <span>
                <IoIosAdd color={"#45f542"} size={38} />
              </span>
              New farm input
            </Link>
            <Link
              className={`list-group-item list-group-item-action ${
                link5 ? "active" : ""
              }`}
              to="/soil_assesment"
              onClick={() => {
                setLink5(true);
                setLink1(false);
                setLink3(false);
                setLink4(false);
                setLink2(false);
                setLink6(false);
              }}
            >
              <span>
                <IoIosAdd color={"#45f542"} size={38} />
              </span>
              New Soil Assesment
            </Link>
          </div>
        </div>
      </div>
    );
}

export default SideBar