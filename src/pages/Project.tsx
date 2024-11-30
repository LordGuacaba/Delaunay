import { useState } from "react";
import { Canvas } from "../components/delaunay";
import TabBox from "../components/TabBox"

const Project = () => {
    
  const [coords,setCoords] = useState<number[]>([])
  const circumselected = useState<boolean[]>([])
  const mode = useState<boolean>(true)
  const mode2 = useState<boolean>(false)
  const ctrl = useState<boolean>(false)

  const handleClear = () => {
    setCoords([])
    circumselected[1]([])
  };
  const buttonDown = (event: { which: number; }) =>{
    if(event.which===17)
      ctrl[1](true)
  }
  const buttonUp = (event: { which: number; }) =>{
    if(event.which===17)
      ctrl[1](false)
  }

    return (
        <div tabIndex={0} onKeyDown={buttonDown} onKeyUp={buttonUp}>
            <h1>Delaunay/Voronoi Plotter</h1>
            <p>Click to plot points on the canvases below. The program will automatically construct the Delaunay Triangulation
              and corresponding Voronoi diagram.
            </p>
            <div>
              <Canvas props={[coords,setCoords]} mode={mode} right={false} circumselected={circumselected} ctrl={ctrl}></Canvas>
              <Canvas props={[coords,setCoords]} mode={mode2} right={true} circumselected={circumselected} ctrl={ctrl}></Canvas>
            </div>
            <button type="button" onClick={handleClear}>
              Clear
            </button>
            <ul id="info-box"><h4>How to use this tool:</h4>
              <li>Click either canvas to plot points - these will show up in <b id="red">red</b>.</li>
              <li>On the Voronoi diagram (right), vertices are marked with <b>black</b> points. These correspond to the circumcenters of the delaunay triangles.</li>
              <li>Click and drag a point on the <i>left canvas only</i> to move it around and see how the diagrams change.</li>
              <li>Use <b>ctrl+click</b> inside a triangle on the Delaunay triangulation to view its circumcircle on both diagrams. The circumcenter will also appear in <b id="blue">blue</b> in the triangulation. Remove the circumcircle by using ctrl+click on the triangle again or placing another point.</li>
            </ul>
            <div className="Info-Section" >
              <TabBox />
            </div>
        </div>
    )
}


export default Project;
