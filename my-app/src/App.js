import React, {Component, useState, useEffect} from 'react';
import './App.css';
import '@coreui/coreui/dist/css/coreui.min.css'

import TestModal from './components/TestModal';
import BuildModal from './components/modals/BuildModal';
import StatsModal from './components/modals/StatsModal';
import VillagersModal from './components/modals/VillagersModal';


function App() {
  const [dataObj, setDataObj] = useState(0);

  const [villageName, setVillageName] = useState("");
  const [villagePop, setVillagePop] = useState(0);

  const [foodStored, setFoodStored] = useState(0);
  const [waterStored, setWaterStored] = useState(0);
  const [woodStored, setWoodStored] = useState(0);
  const [stoneStored, setStoneStored] = useState(0);

  const [foodProd, setFoodProd] = useState(0);
  const [waterProd, setWaterProd] = useState(0);
  const [woodProd, setWoodProd] = useState(0);
  const [stoneProd, setStoneProd] = useState(0);

  const [weekNum, setWeekNum] = useState(0)

  const [valsReady, setValsReady] = useState(false);
  // const [valsSet, setValsSet] = useState(false);

  const [pageContent, setPageContent] = useState(<div>Blank</div>)

  const [testModalVisible, setTestModalVisible] = useState(false);

  function NextWeekButtonClick() {
    setWeekNum(weekNum + 1)
    
    setFoodStored(foodStored + (foodProd - villagePop/10))
    setWaterStored(waterStored + (waterProd - villagePop/10))
    setWoodStored(woodStored + woodProd)
    setStoneStored(stoneStored + stoneProd)

  }

  useEffect(() => { 
    if (valsReady === false) {
      fetch('http://127.0.0.1:5000/InitGame').then(res => res.json()).then(data => {
        setDataObj(data);
        console.log(data);
      });
    }
  }, []);
  
  useEffect(() => { 
    if (dataObj !== 0 && valsReady === false) {
      setVillageName(dataObj.village_info.name)
      setVillagePop(Number(dataObj.village_info.pop))

      setFoodStored(Number(dataObj.village_store.food))
      setWaterStored(Number(dataObj.village_store.water))
      setWoodStored(Number(dataObj.village_store.wood))
      setStoneStored(Number(dataObj.village_store.stone))

      setFoodProd(Number(dataObj.village_production.food_prod))
      setWaterProd(Number(dataObj.village_production.water_prod))
      setWoodProd(Number(dataObj.village_production.wood_prod))
      setStoneProd(Number(dataObj.village_production.stone_prod))

      setWeekNum(Number(dataObj.world_info.week_no))

      setValsReady(true)
    } else {
      console.log('Data Obj is 0 OR vals set')
    }

  }, [dataObj]);

  useEffect(() => { 
    if (valsReady) {
      const readyPageContent = (
        <div>
          <div>{villageName}</div>
          <div>Population: {villagePop.toFixed(0)}</div>
          <div>Week: {weekNum}</div>
          <div>--------------------</div>
          <div>Food: {foodStored.toFixed(1)}</div>
          <div>Water: {waterStored.toFixed(1)}</div>
          <div>Wood: {woodStored.toFixed(1)}</div>
          <div>Stone: {stoneStored.toFixed(1)}</div>
          <div>--------------------</div>
          <div>Food Prod.: {foodProd}</div>
          <div>Water Prod.: {waterProd}</div>
          <div>Wood Prod.: {woodProd}</div>
          <div>Stone Prod.: {stoneProd}</div>
          <div>--------------------</div>
          {/* <TestModal /> */}
          <div>
            <button className='NextWeekButton' onClick={NextWeekButtonClick}>
              Next Week
            </button>
            <BuildModal
              foodStored={foodStored}
              waterStored={waterStored}
              woodStored={woodStored}
              stoneStored={stoneStored}

              setFoodStored={setFoodStored}
              setWaterStored={setWaterStored}
              setWoodStored={setWoodStored}
              setStoneStored={setStoneStored}

              foodProd={foodProd}
              waterProd={waterProd}
              woodProd={woodProd}
              stoneProd={stoneProd}

              setFoodProd={setFoodProd}
              setWaterProd={setWaterProd}
              setWoodProd={setWoodProd}
              setStoneProd={setStoneProd}

            />
            <VillagersModal
              foodStored={foodStored}
              waterStored={waterStored}
              woodStored={woodStored}
              stoneStored={stoneStored}

              setFoodStored={setFoodStored}
              setWaterStored={setWaterStored}
              setWoodStored={setWoodStored}
              setStoneStored={setStoneStored}

              foodProd={foodProd}
              waterProd={waterProd}
              woodProd={woodProd}
              stoneProd={stoneProd}

              setFoodProd={setFoodProd}
              setWaterProd={setWaterProd}
              setWoodProd={setWoodProd}
              setStoneProd={setStoneProd}

            />
            <StatsModal
              villagePop={villagePop}
              
              foodProd={foodProd}
              waterProd={waterProd}
              woodProd={woodProd}
              stoneProd={stoneProd}

              setFoodProd={setFoodProd}
              setWaterProd={setWaterProd}
              setWoodProd={setWoodProd}
              setStoneProd={setStoneProd}

            />
            
          </div>
          
        </div>
      )
      setPageContent(readyPageContent)
    }

  }, [
    valsReady,
    weekNum,
    villagePop,
    foodStored,
    waterStored,
    woodStored,
    stoneStored,
    foodProd,
    waterProd,
    woodProd,
    stoneProd,
  ]);


  

  return (
    <div className="App">
      <header className="App-header">
        {pageContent}
      </header>
    </div>
  );
}


export default App;