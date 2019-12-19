import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './menu/menu.css';
import './card/react-slick carousel/carousel.css';
import './card/card.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Menu from "./menu/menu";
import Card from "./card/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(
  faEnvelope,
  faLinkedin,
  faGithub
  );

function App() {

  const [screenshots, setScreenshots] = useState([]);
  const [repocontent, setRepocontent] = useState([]);
  const [showproject, setShowproject] = useState(0);
  const [projectorder, setProjectorder] = useState([]);

  const projectGHNames = ['lhl-final-project', 'TheWallMidterm', 'student-assessments', 'tweeter', 'tinyapp', 'Chatty'];
  const projectAltName = ['Squabble Budgeting App', 'Resource Sharing Wall', 'Student Assessments React Front End', 'Tweeter', 'TinyApp', 'Chatty'];
  
  const incrementProject = () => {
    if(showproject === (projectGHNames.length - 1)) {
      setShowproject(0);
    } else {
      setShowproject(showproject + 1);
    }
  };

  const decrementProject = () => {
    if(showproject === 0) {
      setShowproject(projectGHNames.length - 1);
    } else {
      setShowproject(showproject - 1);
    }
  };

  useEffect(() => {

    const fetchGithubInfo = async (url) => {
      const githubInfo = await axios.get(url);
      const screens = await axios.get(url+'/contents/docs');

      return {
        githubInfo: githubInfo.data,
        screens: screens.data
      }

    }
        
    const fetchData = async (names) => {

      const requests = names.map((name) => {
        const url = `https://api.github.com/repos/basktballer/${name}`
        return fetchGithubInfo(url)
        .then((a) => {
          return a;
        })
      })
      
      return Promise.all(requests);
    }
   
    fetchData(projectGHNames)
    .then(data => {

      console.log("data", data)

      data.forEach((elm, index) => {

        setRepocontent(oldcontent =>[...oldcontent, elm.githubInfo ]);
        // console.log("This is the reporesult", elm.githubInfo);
  
        let urls = [];
        console.log("This is the ssResult.json", elm.screens);
        elm.screens.forEach( d => {
          console.log("THis is the d ", d)
          urls.push(d.download_url)
        });
        setScreenshots(oldscreens => [...oldscreens, urls]);
        setProjectorder(oldprojects => [...oldprojects, projectAltName[index]]);
        console.log("This is project alt name", projectAltName[index], projectorder)
      })

    })
    // .then(() => console.log("These are the states", repocontent, screenshots));
    ;

  }, [/*repocontent, screenshots*/]);

  return (
    <div className="App">
      <Menu/>
      <h1 id="name">Eden Yeung</h1>
      <div id="about" className="container">
        <h2 className="sectionHeader">About</h2>
        <p className="content">
          Eden is a full-stack developer groomed at Lighthouse Labs with working experience in industrial robot development and supply chain design and management. 
          As a developer with an engineering mindset, I am passionate about building web applications for solving modern problems. 
        </p>
        <p className="content">
          With my diverse background, I am an eager and quick learner, not afraid of challenges and willing to take ownership. 
          Currently working on refactoring Squabble Budget Splitting project to use React hooks to make code more efficient and logical. 
          Personal portfolio website is a work in progress - next step viewport size optimization. 
        </p>
        <div id="icons">
          <a className="aboutIcons" href="mailto:edenstyeung@gmail.com" target="_blank">
            <FontAwesomeIcon icon={['fas', 'envelope']} color="black" size="3x" />
          </a>
          <a className="aboutIcons" href="https://www.linkedin.com/in/eden-yeung/" target="_blank">
            <FontAwesomeIcon icon={['fab', 'linkedin']} color="black" size="3x" />
          </a>
          <a className="aboutIcons" href="https://github.com/basktballer" target="_blank">
            <FontAwesomeIcon icon={['fab', 'github']} color="black" size="3x" />
          </a>
        </div>

      </div>

      <div id="skills" className="container">
        <h2 className="sectionHeader">Skills</h2>
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
        <h2 className="sectionHeader">List of Web Development Projects</h2>
          <ul className="content projects-ul">
            {projectorder.map((v, i)=>{
              return (
                <li key={i} className="projects-li"  >                
                  <a href='#viewer' onClick={()=> setShowproject(i)}>
                    {v}
                  </a>
                </li>)
            })}
          </ul>
      </div>

      <div id="viewer" className="container">
        <h3 className="sectionHeader">Project Viewer</h3>
        <Card altName={projectorder[showproject]} screenshots={screenshots[showproject]} repocontent={repocontent[showproject]} decrementProject={decrementProject} incrementProject={incrementProject}/> 
      </div>

      <br/>
      <br/>
      <br/>

      <p className="footer">Eden Yeung 2019</p>

      <br/>
      <br/>

    </div>
  );
  
}

export default App;
