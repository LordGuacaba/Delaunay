
const About = () => {
  return (

    <div className="App">
      <h1>Delaunay Triangulation and Voronoi Diagrams</h1>
      <p>The Delaunay triangulation of a set of points subdivides the polygon formed by their convex hull into a set of triangles whose circumcircles do not contain any other point in the set. As it happens, connecting the centers of those circumcircles with lines produces the Voronoi diagram for that set. Why is that? In this project, we present a pedagogical aid that shows a dynamic Delaunay triangulation for a set of points and a corresponding Voronoi diagram that moves and grows alongside the triangulation. We explore the simple mathematics and intuition behind the connection between the two artifacts as well as some of their real-world applications. Our aid will allow viewers to visualize the connection between Delaunay triangulation and Voronoi diagrams and understand their importance.
      </p>
      <p>This project was created as a final project for CSCI 716 - Computational Geometry at the Rochester Institute of Technology. The link to our final presentation video can be found <a href="https://www.youtube.com/watch?v=SkdSsqciFTs">here.</a></p>
      <h2>Application Details</h2>
      <p>The problem that we address with this application is that despite the prevalence of aids that help visualize Delaunay Triangulations and Voronoi Diagrams, there are few sources that efficiently and intuitively display the connection between them. More details on the project domain including said connections can be found on the project homepage. Our project takes inspiration from multiple visual aids and displays the knowledge compiled from several informational sources (see our sources page) in a simple visual format. Our goals are a little abstract. We have provided a sandbox for placing and moving points and viewing their effects as intended, but the true purpose is to effectively illustrate the connection between the two diagrams. Based on multiple presentations and received feedback, we believe to have achieved this.</p>
      <p>Our approach starts by taking the Delaunay triangulation of a set of points input onto a canvas by the using the delaunator library. The entire application is run on ReactJS with no backend due to the delaunator being an npm package. We put most of our work into the visual display - dynamic updates, point movement, and duplicate point sets - since the visual aid and understanding is the purpose of the application. However, the Voronoi diagram - in connection with the app’s demonstration - is calculated directly from the Delaunay triangulation. Our code takes the circumcenters of each generated Delaunay triangle and connects them in accordance with the information section on our project’s homepage. Although most users would not understand the code if viewed, future versions of this project would benefit from the ability to animate the creation of a Voronoi diagram from the Delaunay triangulation.</p>
      <footer>
        Project by Will Hoover and Max Bustillo
      </footer>
    </div>
  )
}

export default About;