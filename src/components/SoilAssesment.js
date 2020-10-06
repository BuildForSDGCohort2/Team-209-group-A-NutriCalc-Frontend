import React from 'react'
import "./SoilAssesment.css"

function SoilAssesment() {
    // const macro=["nitrogen", "potassium", "phosphorus","Sodium", "Calcium","Magnesium"]
    // const trace=["Iron", "Zinc", "Manganese","Copper"]
    // const heavy = ["Lead", "Cadmium", "Chromium"];
    // const soluble=["carbonates", "nitrates", "sulphates", "chlorides","bicarbonates"]
    return (
      <div>
        <h6>New Soil Assesment</h6>
        <div>
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="soiltype">Soil Type</label>
                <select id="soiltype" className="form-control">
                  <option selected>Choose soil type</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="pH">pH Value</label>
                <input type="text" class="form-control" id="pH"></input>
              </div>
            </div>

            <div class="form-group">
              <label for="farm">Farm</label>
              <select id="farm" className="form-control">
                <option selected>
                  Choose farm which soil assessment is part of
                </option>
                <option>...</option>
              </select>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="soil moisture ">Soil moisture </label>
                <input id="soil moisture " className="form-control"></input>
              </div>
              <div class="form-group col-md-6">
                <label for="soil texture">Soil texture</label>
                <input
                  type="text"
                  class="form-control"
                  id="soil texture"
                ></input>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="soil Bulky density   (Db)">
                  Soil Bulky density (Db)
                </label>
                <input
                  id="soil Bulky density   (Db)"
                  className="form-control"
                ></input>
              </div>
              <div class="form-group col-md-6">
                <label for="soil porosity">Soil porosity</label>
                <input
                  type="text"
                  class="form-control"
                  id="soil porosity"
                ></input>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="cationexchange">
                  Measurement of cation exchange capacity using 1N Ammonium
                  acetate in soils
                </label>
                <input id="cationexchange" className="form-control"></input>
              </div>
              <div class="form-group col-md-6">
                <label for="total_organic_carbon">
                  Estimation of Total Organic carbon (TOC) by Walkley and Black
                  rapid titration method in soils
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="total_organic_carbon"
                ></input>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="available_nutrients">
                  Estimation of available Nutrients
                </label>
                <select
                  id="available_nutrients"
                  className="form-control"
                >
                  <option selected> macro nutrients in soil</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="trace_nutrients">
                  Estimation of Trace Elements
                </label>
                <select id="trace_nutrients" className="form-control">
                  <option selected> trace nutrients in soil</option>
                  <option>...</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="heavy_metals">Estimation of heavy metals</label>
                <select id="heavy_metals" className="form-control" >
                  <option selected> Choose heavy metals in soil</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="trace_nutrients">
                  Estimation of water soluble nutrients
                </label>
                <select id="trace_nutrients" className="form-control" >
                  <option selected> Choose water soluble nutrients in soil</option>
                  <option>...</option>
                </select>
              </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              Add Soil Assessment
            </button>
          </form>
        </div>
      </div>
    );
}

export default SoilAssesment
