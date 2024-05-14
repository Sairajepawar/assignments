import Title from "./component/Title";
import Links from "./component/Links";
import Description from "./component/Describe";
import Skills from "./component/Skills"
import "./App.css"

function App() {
  const name = "Sairaj Pawar";
  const description = "A software developer and competitive programmer";
  const skills = ["Open Source","Web Dev","Competitive Programming"];
  // const links = ["link1","link2"];
  const links = [{
    title:"LinkedIn",
    link:"https://www.linkedin.com/in/sairaj-pawar-1a3a0922a/",
  },{
    title:"Github",
    link:"https://github.com/Sairajepawar"
  }]
  return (
    <>
      <div className="main-box smooth-border">
        <Title title={name}></Title>
        <Description description={description}></Description>
        <Skills skills={skills}></Skills>
        <Links links={links}></Links>
      </div>
    </>
  )
}

export default App
