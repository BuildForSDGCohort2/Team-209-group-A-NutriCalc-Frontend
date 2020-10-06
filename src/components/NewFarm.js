import React from 'react'
import "./NewFarm.css"
import { IoIosAdd } from "react-icons/io";

// get plants


function NewFarm() {
    return (
      <div>
        <h3>Add New Farm</h3>
        <div>
          <form>
            <div class="form-group">
              <label for="ifarm_name">Farm name</label>
              <input
                type="text"
                class="form-control"
                id="farm_name"
                placeholder="title of the farm"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="county">County</label>
                <select id="county" class="form-control">
                  <option selected>Choose county where farm is located</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="area">Area</label>
                <input type="text" class="form-control" id="area"></input>
              </div>
            </div>

            <div class="form-group">
              <label for="size_of_land">Size of land</label>
              <input
                type="text"
                class="form-control"
                id="size_of_land"
                placeholder="size in acres"
              />
            </div>

            <div class="form-group ">
              <label for="plant">Plant</label>
              <select id="plant" class="form-control">
                <option selected>Choose plant to grow</option>
                <option>...</option>
              </select>
            </div>
            <h6>for other elements, such as soil assement and farm inputs add new and choose this farm</h6>
            <button type="submit" class="btn btn-primary btn-block">
              <span><IoIosAdd size={30}/></span> New Farm
            </button>
          </form>
        </div>
      </div>
    );
}

export default NewFarm
