import React, { useEffect,useState,useContext } from 'react'
import StateContext from "../Context/stateContext";
import "./NewFarmInput.css"


function NewFarmInput() {

  const [farms, setFarms] = useState([]);
  const [fertilizers, setFertilizers] = useState([]);
  const [plants, setPlants] = useState([]);
  const stateContext = useContext(StateContext);
  const { user, getFertilizers, getPlants, getFarmerFarms } = stateContext;
  
    // load fertilizers from API data and from global state
    useEffect(() => {
      // load all fertilizers
      const fertilizerResponse=async ()=>{ await getFertilizers()}
      setFertilizers(fertilizerResponse.json());
    }, [getFertilizers]);
    
    // load all plants in the database
    useEffect(() => {
      // load all fertilizers
      const plantsResponse=async ()=>{ await getPlants()}
      setPlants(plantsResponse.json());
    }, [getPlants]);
    useEffect(()=>{
      // load all farms by the farmer
      const farmResponse = async ({user}) => { 
        await getFarmerFarms(user.id)}
      setFarms(farmResponse.json())
    },[getFarmerFarms, user.id])
    return (
      <div>
        <div className="input_main">
          <h6>Add A New Farm input</h6>
          <div>
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="fertilizers">Fertilizer</label>
                  <select id="fertilizers" className="form-control">
                    <option selected>Choose fertilizer</option>
                    {fertilizers.map((fertilizer,index) => {
                      return (
                        <option key={index} value={fertilizer}>
                          {fertilizer}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="purpose">Purpose</label>
                  <input type="text" class="form-control" id="purpose"></input>
                </div>
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <textarea
                  class="form-control"
                  id="description"
                  placeholder="how the input willbe done"
                ></textarea>
              </div>
              <div class="form-group">
                <label for="farm">Farm</label>
                <select id="farm" className="form-control">
                  <option selected>Choose the farm to apply this input</option>
                  {farms.map((farm,index) => {
                    return (
                      <option key={index} value={farm}>
                        {farm}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div class="form-row">
                <div class="form-group col-md-3">
                  <label for="inputCity">date</label>
                  <input
                    type="date"
                    class="form-control"
                    id="inputCity"
                  ></input>
                </div>
                <div class="form-group col-md-4">
                  <label for="plant">Plant</label>
                  <select id="plant" class="form-control">
                    <option selected>
                      Choose plant to apply the farminput
                    </option>
                    {plants.map((plant,index) => {
                      return (
                        <option key={index} value={plant}>
                          {plant}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div class="form-group col-md-2">
                  6433`11
                  <label for="calcvalue">calculation value</label>
                  <input
                    type="text"
                    readOnly={true}
                    value={0}
                    class="form-control"
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
                    class="btn btn-outline-success btn-block"
                  >
                    Calculate
                  </button>
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="schedule"
                  ></input>
                  <label class="form-check-label" for="schedule">
                    Schedule
                  </label>
                </div>
              </div>

              <button type="submit" class="btn btn-primary btn-block">
                Add Farm Input
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default NewFarmInput
