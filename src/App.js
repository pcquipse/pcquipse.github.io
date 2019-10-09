import React from 'react';

import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Jumbotron } from './components/Jumbotron';
import { Badge } from './components/Badge';
import { Card } from './components/Card';

export class App extends React.Component{

  render(){

    var info = {
      name: "Phillip Castroverde Quipse",
      title: "Web Developer",
      summary: "A web developer & programmer based in Manila, Philippines. I make web applications, usually with Laravel, CodeIgniter, & ReactJS",
      email: "pcquipse@gmail.com",
      mobile: "(+63) 977-1855-059",
      address: "785 Maceda St, Unit 2D, Sampaloc, Manila, PH"
    };

    var links = [
      {
        logo: 'fab fa-facebook-square',
        title: 'Facebook',
        url: 'https://facebook.com/pcquipse'
      },
      {
        logo: 'fab fa-linkedin',
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/phillip-quipse-8b7059117/'
      },
      {
        logo: 'fab fa-instagram',
        title: 'Instagram',
        url: 'https://www.instagram.com/pcquipse/?hl=en'
      },
    ];

    var projects = [
      {
        title: "ONVENT - An Event Management System",
        description: "A system that we developed for our thesis subject in college.",
        image: "https://via.placeholder.com/150"
      },
      {
        title: "PBCC Website",
        description: "An online website for Paranaque Bible Christian Church (PBCC).",
        image: "https://via.placeholder.com/150"
      },
      {
        title: "Lorem Ipsum Dolor Sit Amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://via.placeholder.com/150"
      },
    ];

    var skills = [
      {
        logo: 'fab fa-php',
        skill: 'PHP'
      },
      {
        logo: 'fab fa-js-square',
        skill: 'JavaScript'
      },
      {
        logo: 'fab fa-android',
        skill: 'Android'
      },
      {
        logo: 'fas fa-database',
        skill: 'MySQL'
      },
      {
        logo: 'fab fa-js',
        skill: 'jQuery'
      },
      {
        logo: 'fab fa-laravel',
        skill: 'Laravel'
      },
      {
        logo: 'fas fa-code',
        skill: 'CodeIgniter'
      },
      {
        logo: 'fab fa-react',
        skill: 'ReactJS'
      },
      {
        logo: 'fab fa-angular',
        skill: 'AngularJS'
      },
      {
        logo: 'fab fa-node-js',
        skill: 'NodeJS'
      },
      {
        logo: 'fab fa-css3-alt',
        skill: 'CSS/CSS3'
      },
      {
        logo: 'fab fa-java',
        skill: 'Java'
      },
      {
        logo: 'fas fa-code',
        skill: 'C++'
      }
    ];

    return(
      <div>
        <a href="#banner" id="floating-button" className="btn btn-dark border" ><span className="fas fa fa-chevron-up" ></span></a>
        <Header>
          <a className="nav-item nav-link mx-5" href="#banner" title="Home" ><span className="fas fa fa-home" ></span></a>
          <a className="nav-item nav-link mx-5" href="#skills" title="Skills" ><span className="fas fa fa-code" ></span></a>
          <a className="nav-item nav-link mx-5" href="#projects" title="Projects" ><span className="fas fa fa-folder" ></span></a>
          <a className="nav-item nav-link mx-5" href="#contact" title="Contact" ><span className="fas fa fa-envelope" ></span></a>
        </Header>
        <Banner info={info} ></Banner>
        <Jumbotron id="skills" className="bg-dark text-light" >
          <h3><span className="fas fa fa-code text-warning" ></span> Skills</h3>
          <small className="font-size-14 text-muted" >Frameworks/Languages I'm familiar working with</small>
          <div className="mx-auto text-center my-5 w-75" >
            {
              skills.map((item) => {
                return(
                  <Badge item={item}></Badge>
                );
              })
            }
          </div>
        </Jumbotron>
        <Jumbotron id="projects" className="" >
          <h3><span className="far fa-folder text-warning" ></span> Projects</h3>
          <small className="font-size-14" >Projects/Applications that I have developed</small>
          <div className="card-deck my-5" >
            {
              projects.map((item) => {
                return(
                  <Card item={item} className="" ></Card>
                )
              })
            }
          </div>
        </Jumbotron>
        <Jumbotron id="contact" className="bg-dark text-light" >
          <h3><span className="far fa-envelope text-warning" ></span> Contact</h3>
          <small className="font-size-14 text-muted" >Let's get in touch</small>
          <div className="my-5 text-center" >
            {
              links.map((item) => {
                return(
                  <a href={item.url} >
                    <Badge item={item} ></Badge>
                  </a>
                )
              })
            }
          </div>
        </Jumbotron>
      </div>
    )
  }
}
