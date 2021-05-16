import './App.css';
import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import Routing  from './routing.js'

class App extends Component {
  render(){
    return (
      <div className="myApp">
        <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
  
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
      <Link to="/" className="navbar-item">
                  <span class="icon">
                    <i class="fas fa-home"></i>
                  </span>
                  <span>Home</span>
                  </Link>
  
       
      </div>
  
      <div class="navbar-end">
        <div class="navbar-item">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Root of Equation
          </a>
          <div class="navbar-dropdown">
           <Link to="bisec" class="navbar-item">
             Bisection
           </Link>
           <Link to="fal" class="navbar-item">
              False Position
              </Link>
              <Link to="new" class="navbar-item">
              Newthon Rhapson
              </Link>
              <Link to="sec" class="navbar-item">
              Secant
              </Link>
              <Link to="one" class="navbar-item">
              One point iteration
              </Link>
          
          </div>
          
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Matrix
          </a>
          <div class="navbar-dropdown">
            <Link to="cra" class="navbar-item">
              Cramer
            </Link>
            <Link to="gj" class="navbar-item">
              Gauss Jodan
              </Link>
              <Link to="ge" class="navbar-item">
              Gauss Elimination
              </Link>
              <Link to="gi" class="navbar-item">
              Gauss-seidel iteration
              </Link>
              <Link to="ji" class="navbar-item">
              Jacobi iteration
              </Link>
              <Link to="ld" class="navbar-item">
               Lu decomposition
               </Link>
          
          </div>
          
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Interpolation
          </a>
          <div class="navbar-dropdown">
            <Link to="ne" class="navbar-item">
              Newton
              </Link>
            <Link to="la" class="navbar-item">
              Lagrange
              </Link>
            <Link to="sp" class="navbar-item">
              Spline
              </Link>
           
          </div>
        </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          
        <a  class="navbar-link">
               Regression
            </a>
            <div class="navbar-dropdown">
        <Link to="re" class="navbar-item">
               Regression
               </Link>
               </div>
        </div>
      </div>
    </div>
  </nav>
  <Routing></Routing>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
  
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
    
    
    </div>
  </nav>
      </div>  
    )
  }
}

export default App;
