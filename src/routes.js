/*!
=========================================================
        ** Enviro+ Web UI Dashboard **
=========================================================

MIT License

Copyright (c) 2022 dedSyn4ps3

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


***This project is built on a skeleton using components designed by Creative Tim***

Any use, re-use, and adaptations of this project and it's code shall include the above license as well
as credit for the components used that were adapted from Creative Tim's work...


=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


import Dashboard from "views/Dashboard";
import Maps from "views/SideDash";
import About from "views/AboutProject";
import More from "views/MoreProjects"

var dashRoutes = [
  {
    path: "/overview",
    name: "Overview",
    icon: "business_chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/secondary",
    name: "Secondary Dashboard",
    icon: "objects_globe",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/about",
    name: "About",
    icon: "education_atom",
    component: About,
    layout: "/admin",
  },
  {
    path: "/more",
    name: "More Projects",
    icon: "business_bulb-63",
    component: More,
    layout: "/admin",
  },
];
export default dashRoutes;
