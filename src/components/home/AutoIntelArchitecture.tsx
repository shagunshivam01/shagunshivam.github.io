import { useState } from 'react'

import {
  ArrowUpRight,
  AudioLines,
  ChevronDown,
  Cpu,
  RadioTower,
  ShieldCheck,
} from 'lucide-react'

import { layers } from '../../data/homeData'

export default function AutoIntelArchitecture() {
  const [activeLayer, setActiveLayer] = useState('edge')

  const currentLayer = layers.find((layer) => layer.id === activeLayer)!

  return (
    <section id="autointel" className="architecture section-wrap section-block">
      <div className="section-heading">
        <div>
          <div className="section-kicker">/ FLAGSHIP SYSTEM · AUTOINTEL</div>
          <h2>
            From vehicle signal
            <br />
            to <em>useful insight.</em>
          </h2>
        </div>
        <p>
          A B2B connected-vehicle telemetry and analytics platform for
          automotive stakeholders — not a consumer-facing app.
        </p>
      </div>

      <div className="arch-panel">
        <div className="arch-map">
          <div className="arch-map-head">
            <span>PLATFORM MAP / INTERACTIVE</span>
            <span>
              <i className="status-dot" /> SYSTEM OVERVIEW
            </span>
          </div>
          <div className="flow-line" />
          <div className="arch-nodes">
            {layers.map((layer, index) => (
              <button
                key={layer.id}
                className={`arch-node 
                  ${activeLayer === layer.id ? 'active' : ''} 
                  ${layer.id === 'future' ? 'future-node' : ''}
                `}
                onClick={() => setActiveLayer(layer.id)}
              >
                <span className="node-index">0{index + 1}</span>
                <span className="node-icon">
                  {index === 0 ? (
                    <Cpu size={18} />
                  ) : index === 1 ? (
                    <ShieldCheck size={18} />
                  ) : index === 2 ? (
                    <RadioTower size={18} />
                  ) : index === 3 ? (
                    <AudioLines size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </span>
                <b>{layer.label.split(' / ')[1]}</b>
                <small>
                  {index === 4
                    ? 'PLANNED'
                    : index === 3
                      ? 'PARTIAL'
                      : 'IMPLEMENTED'}
                </small>
              </button>
            ))}
          </div>
          <div className="arch-map-foot">
            <span>SELECT A NODE TO INSPECT THE LAYER</span>
            <span>EDGE → CLOUD → INSIGHT</span>
          </div>
        </div>
        <div className="arch-detail" key={currentLayer.id}>
          <div className="section-kicker">{currentLayer.label}</div>
          <h3>{currentLayer.title}</h3>
          <p>{currentLayer.text}</p>
          <div className="component-list">
            {currentLayer.components.map((component, i) => (
              <div key={component}>
                <span>0{i + 1}</span>
                {component}
              </div>
            ))}
          </div>
          <div className="arch-note">
            {activeLayer === 'future'
              ? 'ROADMAP / PLANNED EXTENSIONS'
              : 'IMPLEMENTATION / COMPLETED COMPONENTS'}
          </div>
        </div>
      </div>
      <div className="arch-disclaimer">
        Architecture shown at a portfolio level. Company implementation details
        and proprietary code are intentionally not disclosed.
      </div>
      <a className="text-link" href="autointel.html">
        Explore the full AutoIntel case study
        <ArrowUpRight size={15} />
      </a>
    </section>
  )
}
