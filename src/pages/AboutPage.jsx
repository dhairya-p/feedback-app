 import Card from "../components/shared/Card"
 import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a prduct or service.</p>
        <p>Part of the "React Front to Back" course by Brad Traversy</p>
        <p>Version 1.0.0</p>

        <Link to='/'>Back to Home</Link>
      </div>
    </Card>
  )
}

export default AboutPage
