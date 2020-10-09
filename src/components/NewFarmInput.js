import React from 'react'
// import StateContext from "../Context/stateContext";
// import Cookies from "js-cookie";
// import getPlants from "../API/getPlants"
// import getFertilizers from "../API/getFertilizers"
// import getFarmerFarms from "../API/getFarmerFarms"

import "./NewFarmInput.css"


const NewFarmInput= ()=>{

  // const [farms, setFarms] = useState([]);
  // const [fertilizers, setFertilizers] = useState([]);
  // const [plants, setPlants] = useState([]);
  // const stateContext = useContext(StateContext);
  // const { user } = stateContext;
  // const csrftoken = Cookies.get("csrftoken");
    // load fertilizers from API data and from global state
    // useEffect(() => {
    //   // load all fertilizers
    //   const fertilizerResponse=getFertilizers(csrftoken)
    //   setFertilizers(fertilizerResponse);

    // }, [csrftoken]);
    
    // // load all plants in the database
    // useEffect(() => {
    //   // load all plants
    //    const plants = getPlants(csrftoken)
    //    setPlants(plants)
     
    // }, [csrftoken]);
    // useEffect(()=>{
    //   // load all farms by the farmer
    //   const farmResponse = getFarmerFarms(user.id)}
    //   setFarms(farmResponse)
    // },[user.id])
  //   const farmOptions = farms.map((farm, index) => {
  //    return <option key={index} value={farm}>
  //       {farm.name}
  //     </option>
  //   });
  //   const fertilizerOptions = fertilizers.map((fertilizer, index) => {
  //    return <option key={index} value={fertilizer}>
  //       {fertilizer.fertilizer_name}
  //     </option>
  //   });
  //  const plantOptions = plants.map((plant, index) =>{
  //   return <option key={index} value={plant.name}>
  //       {plant.name}
  //     </option>
// });
    return (
      <div>
        <div className="input_main">
          <h6>Add A New Farm input</h6>
          <div>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="fertilizers">Fertilizer</label>
                  <select id="fertilizers" className="form-control">
                    <option selected value="Choose fertilizers">
                      Choose fertilizer
                    </option>
                    {/* {fertilizerOptions} */}
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label for="purpose">Purpose</label>
                  <input
                    type="text"
                    className="form-control"
                    id="purpose"
                  ></input>
                </div>
              </div>
              <div className="form-group">
                <label for="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  placeholder="how the input willbe done"
                ></textarea>
              </div>
              <div className="form-group">
                <label for="farm">Farm</label>
                <select id="farm" className="form-control">
                  <option selected value="Choose the farm to apply this input">
                    Choose the farm to apply this input
                  </option>
                  {/* {farmOptions} */}
                </select>
              </div>
              <div className="form-row">
                <div className="form-group col-md-3">
                  <label for="inputCity">date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="inputCity"
                  ></input>
                </div>
                <div className="form-group col-md-4">
                  <label for="plant">Plant</label>
                  <select id="plant" cclassName="form-control">
                    <option
                      selected
                      value="Choose plant to apply the farminput"
                    >
                      Choose plant to apply the farminput
                    </option>
                    {/* {plantOptions} */}
                  </select>
                </div>
                <div className="form-group col-md-2">
                  6433`11
                  <label for="calcvalue">calculation value</label>
                  <input
                    type="text"
                    readOnly={true}
                    value={0}
                    className="form-control"
                    id="calcvalue"
                  ></input>
                </div>
                <div className="form-group col-md-3">
                  <label for="calcfarminputvalue">
                    calculate farminput value
                  </label>
                  <button
                    type="submit"
                    id="calcfarminputvalue"
                    className="btn btn-outline-success btn-block"
                  >
                    Calculate
                  </button>
                </div>
              </div>
              <div className="form-group">
                <div class="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="schedule"
                  ></input>
                  <label className="form-check-label" for="schedule">
                    Schedule
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Add Farm Input
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default NewFarmInput
