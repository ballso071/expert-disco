import React from 'react'
import { Switch, Route } from 'react-router-dom'
import bi from "./part/Root of Equation/Bisection"
import fa from "./part/Root of Equation/False Position"
import ne from "./part/Root of Equation/Newthon Rhapson"
import se from "./part/Root of Equation/Secant"
import on from "./part/Root of Equation/One point iteration"
import cr from "./part/Matrix/Cramer"
import gaj from "./part/Matrix/Gauss Jodan"
import gae from "./part/Matrix/Gauss Elimination"
import gsi from "./part/Matrix/Gauss-seidel iteration"
import jbi from "./part/Matrix/Jacobi iteration"
import lud from "./part/Matrix/Lu decomposition"
import reg from "./part/Regression/Regression"
import newt from "./part/Interpolation/Newton"
import spl from "./part/Interpolation/Spline"
import lag from "./part/Interpolation/Lagrange"
import hom from "./Home"
export default () =>(
    <Switch>
        <Route exact path="/" component={hom}/>
        <Route path="/bisec" component={bi}/>
        <Route path="/fal" component={fa}/>
        <Route path="/new" component={ne}/>
        <Route path="/sec" component={se}/>
        <Route path="/one" component={on}/>
        <Route path="/cra" component={cr}/>
        <Route path="/gj" component={gaj}/>
        <Route path="/ge" component={gae}/>
        <Route path="/gi" component={gsi}/>
        <Route path="/ji" component={jbi}/>
        <Route path="/ld" component={lud}/>
        <Route path="/re" component={reg}/>
        <Route path="/ne" component={newt}/>
        <Route path="/sp" component={spl}/>
        <Route path="/la" component={lag}/>
    </Switch>
)
