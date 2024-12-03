import { useState } from "react";
import { Canvas } from "../components/delaunay";
import TabBox from "../components/TabBox"
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Grid, Typography } from "@mui/material";

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

            <Accordion>
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <Typography sx={{ width: '42%', flexShrink: 0 }}>
              </Typography>
              <Typography >Click For How To Use This Tool</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul id="info-box">
                  <li>Click either canvas to plot points - these will show up in <b id="red">red</b>.</li>
                  <li>On the Voronoi diagram (right), vertices are marked with <b>black</b> points. These correspond to the circumcenters of the delaunay triangles.</li>
                  <li>Click and drag a point on the <i>left canvas only</i> to move it around and see how the diagrams change.</li>
                  <li>Use <b>ctrl+click</b> inside a triangle on the Delaunay triangulation to view its circumcircle on both diagrams. The circumcenter will also appear in <b id="blue">blue</b> in the triangulation. Remove the circumcircle by using ctrl+click on the triangle again or placing another point.</li>
                </ul>
              </AccordionDetails>
            </Accordion>
            
            <div>
              <Canvas props={[coords,setCoords]} mode={mode} right={false} circumselected={circumselected} ctrl={ctrl}></Canvas>
              <Canvas props={[coords,setCoords]} mode={mode2} right={true} circumselected={circumselected} ctrl={ctrl}></Canvas>
            </div>
            <Button variant="outlined" onClick={handleClear}>
              Clear
            </Button>
            
            <h1>About Delaunay Triangulations and Voronoi Diagrams</h1>
            <div className="Info-Section" >
              <TabBox />
            </div>
        </div>
    )
}


export default Project;
