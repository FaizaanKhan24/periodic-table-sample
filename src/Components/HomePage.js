import React from 'react'
import './HomePage.css'
import AtomicStructure from './AtomicStructure';
import ElementDetail from './ElementDetail';
import MiniShortPeriodicTable from './MiniShortPeriodicTable';
import ElectronsSetup from './ElectronsSetup';
import { useState } from 'react';

function HomePage() {
  const[selectedElement, setSelectedElement] = useState({
      "name" : "Hydrogen",
      "symbol" : "H",
      "atomicNumber" : 1,
      "electron-split": "1s(1)",
      "grid" : {
          "gridRow" : 1,
          "gridColumn" : 1
      }
  })

  const onElementChange = (newElement) => {
    setSelectedElement(newElement);
  };

  return (
    <div className="container">
        <div className="left">
        <ElementDetail selectedElement={selectedElement}/>
        <MiniShortPeriodicTable selectedElement={selectedElement} onChangeSelectedElement={onElementChange} />
        <ElectronsSetup selectedElement={selectedElement}/>
        </div>
        <div className="right">
          <div>
          {/* <label>1s(2)2s(2)2p(4)</label> */}
          <text className='electron-splitup'>{selectedElement['electron-split']}</text>
          </div>
            <AtomicStructure selectedElement={selectedElement}/>
        </div>
    </div>
  )
}

export default HomePage