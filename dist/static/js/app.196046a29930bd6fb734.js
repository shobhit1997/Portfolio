webpackJsonp([1],{Glms:function(t,e,i){t.exports=i.p+"static/img/shobhit.b138c6d.png"},KDLS:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),n={name:"App",data:function(){return{about:!0,education:!1,experience:!1,skills:!1,project:!1}},methods:{setActive:function(t){0===t?(this.about=!0,this.education=!1,this.experience=!1,this.skills=!1,this.project=!1):1===t?(this.about=!1,this.education=!0,this.experience=!1,this.skills=!1,this.project=!1):2===t?(this.about=!1,this.education=!1,this.experience=!0,this.skills=!1,this.project=!1):3===t?(this.about=!1,this.education=!1,this.experience=!1,this.skills=!0,this.project=!1):4===t&&(this.about=!1,this.education=!1,this.experience=!1,this.skills=!1,this.project=!0)}},mounted:function(){"/project"===window.location.pathname?this.setActive(4):"/skills"===window.location.pathname?this.setActive(3):"/education"===window.location.pathname?this.setActive(1):"/experience"===window.location.pathname&&this.setActive(2)}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),i("nav",{staticClass:"navbar navbar-default"},[i("div",{staticClass:"container-fluid"},[i("ul",{staticClass:"nav navbar-nav"},[i("li",{class:{active:t.about},on:{click:function(e){t.setActive(0)}}},[i("router-link",{attrs:{to:"/"}},[t._v("About")])],1),t._v(" "),i("li",{class:{active:t.education},on:{click:function(e){t.setActive(1)}}},[i("router-link",{attrs:{to:"/education"}},[t._v("Education")])],1),t._v(" "),i("li",{class:{active:t.experience},on:{click:function(e){t.setActive(2)}}},[i("router-link",{attrs:{to:"/experience"}},[t._v("Experience")])],1),t._v(" "),i("li",{class:{active:t.skills},on:{click:function(e){t.setActive(3)}}},[i("router-link",{attrs:{to:"/skills"}},[t._v("Skills")])],1),t._v(" "),i("li",{class:{active:t.project},on:{click:function(e){t.setActive(4)}}},[i("router-link",{attrs:{to:"/project"}},[t._v("Projects")])],1),t._v(" "),t._m(1),t._v(" "),t._m(2)])])]),t._v(" "),i("router-view"),t._v(" "),t._m(3)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",height:"20vh","flex-direction":"column","background-color":"black",color:"white"}},[e("h1",{staticStyle:{"text-align":"center"}},[this._v("SHOBHIT AGARWAL")]),this._v(" "),e("h3",{staticStyle:{"text-align":"center"}},[this._v("Backend and Cloud Engineer")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"/static/CV_Shobhit Agarwal.pdf",target:"_blank"}},[this._v("CV")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"/static/Resume.pdf",target:"_blank"}},[this._v("Resume")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",height:"20vh","flex-direction":"column","background-color":"black",color:"white"}},[e("h3",[this._v("Contact")]),this._v(" "),e("ul",{staticStyle:{"list-style":"none",padding:"0px"}},[e("li",{staticStyle:{display:"inline",padding:"5px"}},[e("a",{attrs:{href:"https://www.facebook.com/shobhitagarwal56"}},[e("i",{staticClass:"fa fa-facebook-official",staticStyle:{"font-size":"36px",color:"grey"},attrs:{"aria-hidden":"true"}})])]),this._v(" "),e("li",{staticStyle:{display:"inline",padding:"5px"}},[e("a",{attrs:{href:"https://github.com/shobhit1997"}},[e("i",{staticClass:"fa fa-github",staticStyle:{"font-size":"36px",color:"grey"},attrs:{"aria-hidden":"true"}})])]),this._v(" "),e("li",{staticStyle:{display:"inline",padding:"5px"}},[e("a",{attrs:{href:"https://www.linkedin.com/in/shobhit1997/"}},[e("i",{staticClass:"fa fa-linkedin",staticStyle:{"font-size":"36px",color:"grey"},attrs:{"aria-hidden":"true"}})])]),this._v(" "),e("li",{staticStyle:{display:"inline",padding:"5px"}},[e("a",{attrs:{href:"mailto:shobhitagarwal756@gmail.com"}},[e("i",{staticClass:"fa fa-envelope",staticStyle:{"font-size":"36px",color:"grey"},attrs:{"aria-hidden":"true"}})])])])])}]},o=i("VU/8")(n,s,!1,null,null,null).exports,r=i("/ocq"),v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"flex-grow":"1","min-height":"52vh"}},[e("section",{staticClass:"intro"},[e("div",{staticClass:"row",staticStyle:{padding:"20px"}},[e("div",{staticClass:"col-lg-3 col-sm-12 left"},[e("img",{attrs:{src:i("Glms")}})]),this._v(" "),e("div",{staticClass:"col-lg-9 col-sm-12 right",staticStyle:{"margin-top":"12px"}},[e("p",{staticClass:"lead"},[this._v("I am a 4th-year undergraduate student. I am currently pursuing my B.Tech in CSE branch from JSS Academy of Technical Education Noida. I am a tech enthusiast and love working on the latest technology. I work on MEVN Stack(MongoDB,Express,Vue.js,Node.js) and Android App Development. I have a handful of experience on deploying apps on servers both cloud and local. I have experience on AWS and GCE. I have explored docker as well. I keep looking for opportunities to learn and develop new skills. I believe in project-based learning.")])])])])])}]};var l=i("VU/8")({name:"About"},v,!1,function(t){i("KDLS")},null,null).exports,d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",{staticStyle:{"list-style":"none",margin:"10px 0"}},[i("li",[i("div",[i("h3",[t._v("B.Tech in Computer Science & Engineering ")]),t._v(" "),i("hr"),t._v(" "),i("dl",[i("dt",[t._v("JSS Academy of Technical Education, Noida (2016-Present)")]),t._v(" "),i("dd",[i("i",[t._v("Affiliated to Abdul Kalam Technical University,Lukhnow")])]),t._v(" "),i("dd",[t._v("Percentage:85%(as per 3rd year)")])])])]),t._v(" "),i("li",[i("div",[i("h3",[t._v("XII (Senior Secondary),in PCM with CS")]),t._v(" "),i("hr"),t._v(" "),i("dl",[i("dt",[t._v("Boys' High School and College, Allahabad (2015-2016)")]),t._v(" "),i("dd",[i("i",[t._v("Affiliated to ISC Board")])]),t._v(" "),i("dd",[t._v("Percentage:97%")]),t._v(" "),i("dd",[t._v("School topper and 2nd rank holder in city")])])])]),t._v(" "),i("li",[i("div",[i("h3",[t._v("X (Secondary), in Science")]),t._v(" "),i("hr"),t._v(" "),i("dl",[i("dt",[t._v("Boys' High School and College, Allahabad (2013-2014)")]),t._v(" "),i("dd",[i("i",[t._v("Affiliated to ISC Board")])]),t._v(" "),i("dd",[t._v("Percentage:93%")]),t._v(" "),i("dd",[t._v("School rank 10th")])])])])])])}]},c=i("VU/8")({name:"Education"},d,!1,null,null,null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",{staticStyle:{"list-style":"none",margin:"10px 0"}},[i("li",[i("div",[i("h3",[i("a",{attrs:{href:"https://www.gradeup.co/"}},[t._v("GradeUp, Noida")])]),t._v(" "),i("hr"),t._v(" "),i("h4",[i("b",[t._v("Backend Intern (June,2019-September,19)")])]),t._v(" "),i("h4",[t._v("Intern")]),t._v(" "),i("p",[t._v("Writing Api's in Node.js and Resolvers in GraphQL")])])]),t._v(" "),i("li",[i("div",[i("h3",[i("a",{attrs:{href:"https://www.lecupido.com/"}},[t._v("Cupido (Startup), Bangalore")])]),t._v(" "),i("hr"),t._v(" "),i("h4",[i("b",[t._v("Rest Api development on Node.js (April,2019-May,19)")])]),t._v(" "),i("h4",[t._v("Intern")]),t._v(" "),i("p",[t._v("Developed rest API for a social networking ecommerce app with node.js,express,mongodb and redis.")])])]),t._v(" "),i("li",[i("div",[i("h3",[i("a",{attrs:{href:"http://www.zester.in"}},[t._v("Zester (Startup), Noida")])]),t._v(" "),i("hr"),t._v(" "),i("h4",[i("b",[t._v("Rest Api development on Node.js (June,2018-December,18)")])]),t._v(" "),i("h4",[t._v("Intern")]),t._v(" "),i("p",[t._v("Developed rest API for a social networking app with node.js,express,mongodb and redis.")])])]),t._v(" "),i("li",[i("div",[i("h3",[i("a",{attrs:{href:"http://www.hopaka.com"}},[t._v("Hopaka Technologies (Startup), Noida")])]),t._v(" "),i("hr"),t._v(" "),i("h4",[i("b",[t._v("Android App Development (Feb,2018-April,2018)")])]),t._v(" "),i("h4",[t._v("Intern")]),t._v(" "),i("p",[t._v("Developed an android app to solve parking problems in cities.")])])]),t._v(" "),i("li",[i("div",[i("h3",[i("a",{attrs:{href:"https://www.eninov.com"}},[t._v("Eninov Systems, Noida")])]),t._v(" "),i("hr"),t._v(" "),i("h4",[i("b",[t._v("Hybrid App Development (June,2017-August,2017)")])]),t._v(" "),i("h4",[t._v("Intern")]),t._v(" "),i("p",[t._v("Worked on an accounting app based on phonegap for the organisation.")])])]),t._v(" "),i("li",[i("div",[i("h3",[i("a",{attrs:{href:"http://www.expertsinstitute.co.in/"}},[t._v("Experts' Institute, Allahabad")])]),t._v(" "),i("hr"),t._v(" "),i("h4",[i("b",[t._v("Java Teaching (April,2016-June,2016)")])]),t._v(" "),i("h4",[t._v("Intern")]),t._v(" "),i("p",[t._v("Teaching core java to class 9th-10th students")])])])])])}]},_=i("VU/8")({name:"Experience"},h,!1,null,null,null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",{staticStyle:{"list-style":"none",margin:"10px 0"}},[i("li",{staticStyle:{"padding-bottom":"12px"}},[i("div",[i("h3",[i("a",{attrs:{href:"https://assistant.google.com/services/a/uid/0000000dfd7af245"}},[t._v("Talk to Nibble Computer Society")])]),t._v(" "),i("hr"),t._v(" "),i("h4",[i("b",[t._v("Node.js, Google Assistant, Dialog Flow, Firebase Functions")])]),t._v(" "),i("p",[t._v("The assistant gives you information about the ncs, its projects, events and members.")])])]),t._v(" "),i("li",{staticStyle:{"padding-bottom":"12px"}},[i("div",[i("h3",[i("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.hackncs.zealicon.loot"}},[t._v("Loot App")])]),t._v(" "),i("hr"),t._v(" "),i("h4",[i("b",[t._v("Android, Node.js, MongoDB, Express.js, Redis, Firebase Firestore, Realtime DB, Firebase Auth, FCM, AWS EC2")])]),t._v(" "),i("p",[t._v("An android app, location based game where a user find a mission at a random place in college.Solving the mission player earns coins which he can bet for a duel with other online players on a small game.The api's for the app are written on node.js")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/ncs-jss/loot"}},[t._v("Github Android")])]),t._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/ncs-jss/Loot-Backend"}},[t._v("Github Backend")])])])]),t._v(" "),i("li",{staticStyle:{"padding-bottom":"12px"}},[i("div",[i("h3",[i("a",{attrs:{href:"http://ide.shobhitagarwal.me/"}},[t._v("IDE")])]),t._v(" "),i("hr"),t._v(" "),i("h4",[i("b",[t._v("Node.js, MongoDB, Express.js, HTML, CSS, JS, Docker, Python, EC2")])]),t._v(" "),i("p",[t._v("An Online IDE for running programs using docker and other node.js")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/shobhit1997/Code_Compiler"}},[t._v("Github")])])])]),t._v(" "),i("li",{staticStyle:{"padding-bottom":"12px"}},[i("div",[i("h3",[i("a",{attrs:{href:"http://register.hackncs.com/form/Yib"}},[t._v("Cform")])]),t._v(" "),i("hr"),t._v(" "),i("h4",[i("b",[t._v("Node.js, Vue.js, MongoDB, Express.js, AWS EC2, PM2")])]),t._v(" "),i("p",[t._v("It is a platform for converting boring forms into interactive conversational forms.")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/shobhit1997/chatbotModel-form"}},[t._v("Github")])])])]),t._v(" "),i("li",{staticStyle:{"padding-bottom":"12px"}},[i("div",[i("h3",[i("a",{attrs:{href:"http://oauth.shobhitagarwal.me/"}},[t._v("Infoconnect OAuth")])]),t._v(" "),i("hr"),t._v(" "),i("h4",[i("b",[t._v("Node.js, MongoDB, HTML, CSS, JSS")])]),t._v(" "),i("p",[t._v("An OAuth service of college registration portal for other college projects and portals. Visit the github page for more details. ")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/shobhit1997/OAuth"}},[t._v("Github")])])])]),t._v(" "),i("li",{staticStyle:{"padding-bottom":"12px"}},[i("div",[i("h3",[i("a",{attrs:{href:"https://www.npmjs.com/package/automatesim/"}},[t._v("Automatic Sim Feedback")])]),t._v(" "),i("hr"),t._v(" "),i("h4",[i("b",[t._v("Node.js, Google Chrome's Puppeteer")])]),t._v(" "),i("p",[t._v("Automatic filling of feedback on sim.")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/shobhit1997/automate_sim_feedback"}},[t._v("Github")])])])]),t._v(" "),i("li",{staticStyle:{"padding-bottom":"12px"}},[i("div",[i("h3",[i("a",{attrs:{href:"https://chat-app97.herokuapp.com/"}},[t._v("Chat App")])]),t._v(" "),i("hr"),t._v(" "),i("h4",[i("b",[t._v("Node.js, MongoDB, HTML, CSS, JSS")])]),t._v(" "),i("p",[t._v("A Chat App using socket.io where users can sign in and join a room or create a room to chat.")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/shobhit1997/ChatAppNode"}},[t._v("Github")])])])]),t._v(" "),i("li",{staticStyle:{"padding-bottom":"12px"}},[i("div",[i("h3",[i("a",{attrs:{href:"/"}},[t._v("Portfolio")])]),t._v(" "),i("hr"),t._v(" "),i("h4",[i("b",[t._v("Vue.js")])]),t._v(" "),i("p",[t._v("My portfolio built on vue.js")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/shobhit1997/Portfolio"}},[t._v("Github")])])])]),t._v(" "),i("li",{staticStyle:{"padding-bottom":"12px"}},[i("div",[i("h3",[i("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.hackncs.click"}},[t._v("Infoconnect App")])]),t._v(" "),i("hr"),t._v(" "),i("h4",[i("b",[t._v("Android App")])]),t._v(" "),i("p",[t._v("An android app for the "),i("a",{attrs:{href:"http://210.212.85.155/"}},[t._v("information portal")]),t._v(" of the college with features like login/signup, notice creation and push notifications.")])]),t._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/ncs-jss/click"}},[t._v("Github")])])])])])}]},u=i("VU/8")({name:"Project"},p,!1,null,null,null).exports,m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",{staticStyle:{"list-style":"none",margin:"10px 0"}},[i("li",[i("div",[i("h3",[t._v("Languages")]),t._v(" "),i("dl",[i("dt",[t._v("JAVA")]),t._v(" "),i("dd",[t._v("Expert")]),t._v(" "),i("dt",[t._v("C")]),t._v(" "),i("dd",[t._v("Intermediate")]),t._v(" "),i("dt",[t._v("Python")]),t._v(" "),i("dd",[t._v("Beginner")])])])]),t._v(" "),i("li",[i("div",[i("h3",[t._v("Web Technologies")]),t._v(" "),i("dl",[i("dt",[t._v("Node.js")]),t._v(" "),i("dd",[t._v("Intermediate")]),t._v(" "),i("dt",[t._v("RestFul Web Services")]),t._v(" "),i("dd",[t._v("Intermediate")]),t._v(" "),i("dt",[t._v("GraphQL")]),t._v(" "),i("dd",[t._v("Beginner")])])])]),t._v(" "),i("li",[i("div",[i("h3",[t._v("Frameworks")]),t._v(" "),i("dl",[i("dt",[t._v("Express")]),t._v(" "),i("dd",[t._v("Intermediate")]),t._v(" "),i("dt",[t._v("Vue.js")]),t._v(" "),i("dd",[t._v("Intermediate")])])])]),t._v(" "),i("li",[i("div",[i("h3",[t._v("Frontend")]),t._v(" "),i("dl",[i("dt",[t._v("HTML")]),t._v(" "),i("dd",[t._v("Intermediate")]),t._v(" "),i("dt",[t._v("CSS")]),t._v(" "),i("dd",[t._v("Beginner")]),t._v(" "),i("dt",[t._v("JavaScript")]),t._v(" "),i("dd",[t._v("Intermediate")])])])]),t._v(" "),i("li",[i("div",[i("h3",[t._v("Databases")]),t._v(" "),i("dl",[i("dt",[t._v("MongoDb")]),t._v(" "),i("dd",[t._v("Expert")]),t._v(" "),i("dt",[t._v("Firebase Realtime Database")]),t._v(" "),i("dd",[t._v("Expert")]),t._v(" "),i("dt",[t._v("MySQL")]),t._v(" "),i("dd",[t._v("Intermediate")]),t._v(" "),i("dt",[t._v("Postgresql")]),t._v(" "),i("dd",[t._v("Intermediate")])])])]),t._v(" "),i("li",[i("div",[i("h3",[t._v("Cloud Services")]),t._v(" "),i("dl",[i("dt",[t._v("AWS")]),t._v(" "),i("dd",[t._v("EC2 Instance,Lamda,S3,VPC")]),t._v(" "),i("dd",[t._v("Intermediate")]),t._v(" "),i("dt",[t._v("Google Cloud")]),t._v(" "),i("dd",[t._v("GCE,Storage")]),t._v(" "),i("dd",[t._v("Intermediate")])])])]),t._v(" "),i("li",[i("div",[i("h3",[t._v("Deployment")]),t._v(" "),i("dl",[i("dt",[t._v("Nginx")]),t._v(" "),i("dd",[t._v("Intermediate")]),t._v(" "),i("dt",[t._v("Docker")]),t._v(" "),i("dd",[t._v("Intermediate")])])])]),t._v(" "),i("li",[i("div",[i("h3",[t._v("Android")]),t._v(" "),i("dl",[i("dt",[t._v("Advance Java")]),t._v(" "),i("dd",[t._v("Expert")]),t._v(" "),i("dt",[t._v("XML")]),t._v(" "),i("dd",[t._v("Expert")]),t._v(" "),i("dt",[t._v("Firebase")]),t._v(" "),i("dd",[t._v("Intermediate")]),t._v(" "),i("dt",[t._v("Firebase Cloud Messaging")]),t._v(" "),i("dd",[t._v("Expert")])])])])])])}]},f=i("VU/8")({name:"Skills"},m,!1,null,null,null).exports;a.a.use(r.a);var g=new r.a({mode:"history",routes:[{path:"/",name:"About",component:l},{path:"/education",name:"Education",component:c},{path:"/experience",name:"Experience",component:_},{path:"/project",name:"Project",component:u},{path:"/skills",name:"Skills",component:f}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:g,components:{App:o},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.196046a29930bd6fb734.js.map