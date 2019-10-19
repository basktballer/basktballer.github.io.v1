import React, { Component } from 'react';
import './App.css';
import './menu/menu.css';
import './card/react-slick carousel/carousel.css';
import './card/card.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Menu from "./menu/menu";
import Card from "./card/card";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      screenshots:[],
      repocontent:[],
      showproject: 0,
    }
    this.projectGHNames = ['lhl-final-project', 'TheWallMidterm', 'student-assessments', 'tweeter', 'tinyapp', 'Chatty'];
    this.projectAltName = ['Squabble Budgeting App', 'Resource Sharing Wall', 'Student Assessments React Front End', 'Tweeter', 'TinyApp', 'Chatty'];
    this.projectOrder = [];
  }

  componentDidMount() {
        
    this.projectGHNames.forEach( (elm, index) => {

      fetch(`https://api.github.com/repos/basktballer/${elm}`, {
      })
      .then(response => response.json())
      .then(data => {
        let repocontent = [...this.state.repocontent]
        repocontent.push({data})
        this.setState({ repocontent })
        return fetch(`https://api.github.com/repos/basktballer/${elm}/contents/docs`, {
        })
      })
      .then(response => response.json())
      .then(data => {
        let urls = []
        data.forEach( d => {
          urls.push(d.download_url)
        })
        let screenshots = [...this.state.screenshots]
        screenshots.push({urls})
        this.setState({screenshots})
        this.projectOrder.push(this.projectAltName[index])
      })
      // .then(() => console.log(this.state.screenshots, this.state.repocontent))
      .catch(error => console.error('Error:', error));
    })    

  }

  handleClickChangeProject(i) {

    let showproject = i;
    this.setState({ showproject });

  }

  render() {
    return (
      <div className="App">
        <Menu/>
        <h1 id="name">Eden Yeung</h1>
        <div id="about" className="container">
          <h4 className="sectionHeader">About</h4>
          <p className="content">
            Eden is a full-stack developer groomed at Lighthouse Labs with working experience in industrial robot development and supply chain. 
            As a developer with an engineering mindset, I am passionate about building web applications for solving modern problems. 
            With my diverse background, I am an eager and quick learner, not afraid of challenges and willing to take ownership. 
            Currently working on refactoring final Lighthouse Labs project to use React hooks and / or Redux to make code more efficient and logical. 
          </p>
        </div>

        <div id="skills" className="container">
          <h4 className="sectionHeader">Skills</h4>
          <ul className="skills-ul">Programming Languages
            <li className="skills-li">Javascript</li>
            <li className="skills-li">Ruby</li>
            <li className="skills-li">HTML</li>
            <li className="skills-li">CSS</li>
            <li className="skills-li">C#</li>
            <li className="skills-li">RAPID</li>
            <li className="skills-li">C++</li>
            <li className="skills-li">C</li>
          </ul>
          <ul className="skills-ul">Frameworks, Libraries, Environments
            <li className="skills-li">NodeJS</li>
            <li className="skills-li">React</li>
            <li className="skills-li">Rails</li>
            <li className="skills-li">Ajax</li>
            <li className="skills-li">Express</li>
            <li className="skills-li">Knex</li>
            <li className="skills-li">EJS</li>
            <li className="skills-li">JQuery</li>
            <li className="skills-li">Bootstrap</li>
            <li className="skills-li">ActiveRecord</li>
            <li className="skills-li">WebSockets</li>
          </ul>
          <ul className="skills-ul">Databases, Systems, CMS
            <li className="skills-li">SQL</li>
            <li className="skills-li">MongoDB</li>
            <li className="skills-li">Git</li>
          </ul>
          <ul className="skills-ul">Application Software
            <li className="skills-li">Visual Studio</li>
            <li className="skills-li">Robot Studio</li>
            <li className="skills-li">AutoCAD</li>
            <li className="skills-li">MS Access</li>
            <li className="skills-li">CAST Network Design</li>
            <li className="skills-li">Excel</li>
            <li className="skills-li">SAP</li>
            <li className="skills-li">MS Office</li>
          </ul>
        </div>

        <div id="projects" className="container">
          <h4 className="sectionHeader">List of Web Development Projects</h4>
            <ul className="content projects-ul">
              {this.projectOrder.map((v, i)=>{
                return (
                  <li key={i} href='/#projects' className="projects-li" onClick={()=>this.handleClickChangeProject(i)} >                
                    {v}
                  </li>)
              })}
            </ul>
        </div>

        <div id="viewer" className="container">
          <h4 className="sectionHeader">Screenshot Viewer</h4>
          <p className="projectHeader">Click on projects above to change view!</p>
          <Card altName={this.projectOrder[this.state.showproject]}screenshots={this.state.screenshots[this.state.showproject]} repocontent={this.state.repocontent[this.state.showproject]}/> 
        </div>

        <br/>
        <br/>
        <br/>

      </div>
    );
  }
}

export default App;
