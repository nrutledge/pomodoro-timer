(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(25)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var s=n(0),i=n.n(s),a=n(7),r=n.n(a),o=(n(13),n(1)),c=n(2),l=n(4),m=n(3),h=n(5),g=(n(15),function(e){return i.a.createElement("div",{className:"length-controls"},i.a.createElement("h2",{className:"length-controls__h2",id:e.labelId},e.label),i.a.createElement("div",{className:"length-controls__container"},i.a.createElement("button",{className:"length-controls__btn",id:e.decrementId,onClick:e.decrementAction},"-"),i.a.createElement("div",{className:"length-controls__length",id:e.lengthId},e.length),i.a.createElement("button",{className:"length-controls__btn",id:e.incrementId,onClick:e.incrementAction},"+")))}),d=(n(17),function(e){var t=e.isBreak?"Break":"Session";return i.a.createElement("div",{className:"time-display"},i.a.createElement("div",{className:"time-display__label",id:"timer-label"},t),i.a.createElement("div",{className:"time-display__time",id:"time-left"},e.time))}),u=(n(19),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this))).tick=function(){setTimeout(function(){n.state.isRunning&&(n.setState(function(e){return{secondsRemaining:e.secondsRemaining-1}}),n.tick())},1e3)},n.toggleTimer=function(){n.setState({isRunning:!n.state.isRunning})},n.toggleBreak=function(){n.setState({isBreak:!n.state.isBreak})},n.setTimeRemaining=function(e){n.setState(function(t){return{secondsRemaining:60*e}})},n.resetTimer=function(){n.setState({breakLength:n.state.defaultBreakLength,sessionLength:n.state.defaultsessionLength,secondsRemaining:60*n.state.defaultsessionLength,isRunning:!1,isBreak:!1}),n.stopBeep()},n.getFormattedTime=function(){var e=Math.floor(n.state.secondsRemaining/60),t=n.state.secondsRemaining%60;return e.toString().padStart(2,"0")+":"+t.toString().padStart(2,"0")},n.playBeep=function(){n.refs.beep.play()},n.stopBeep=function(){n.refs.beep.pause(),n.refs.beep.currentTime=0},n._setLength=function(e,t){var s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(){n.setState(function(n){var i=s?n[e]+t:t;if(!(i<=0||i>60)){var a={};return a[e]=i,a}})}},n.increaseBreakLength=n._setLength("breakLength",1),n.decreaseBreakLength=n._setLength("breakLength",-1),n.increaseSessionLength=n._setLength("sessionLength",1),n.decreaseSessionLength=n._setLength("sessionLength",-1),n.state={defaultBreakLength:e.breakLength||5,breakLength:e.breakLength||5,defaultsessionLength:e.sessionLength||25,sessionLength:e.sessionLength||25,secondsRemaining:60*e.sessionLength||1500,isRunning:!1,isBreak:!1},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){if(this.state.isRunning){if(this.state.isRunning!==t.isRunning&&this.tick(),0===this.state.secondsRemaining&&this.refs.beep.play(),this.state.secondsRemaining<0){var n=this.state.isBreak?this.state.sessionLength:this.state.breakLength;this.setTimeRemaining(n),this.toggleBreak()}}else this.state.sessionLength!==t.sessionLength&&this.setTimeRemaining(this.state.sessionLength)}},{key:"render",value:function(){return i.a.createElement("div",{className:"pomodoro-timer"},i.a.createElement("h1",{className:"pomodoro-timer__h1"},"Pomodoro Timer"),i.a.createElement("div",{className:"pomodoro-timer__container"},i.a.createElement("div",{className:"pomodoro-timer__controls"},i.a.createElement(g,{label:"Break Length",labelId:"break-label",length:this.state.breakLength,lengthId:"break-length",incrementAction:this.increaseBreakLength,incrementId:"break-increment",decrementAction:this.decreaseBreakLength,decrementId:"break-decrement"}),i.a.createElement(g,{label:"Session Length",labelId:"session-label",length:this.state.sessionLength,lengthId:"session-length",incrementAction:this.increaseSessionLength,incrementId:"session-increment",decrementAction:this.decreaseSessionLength,decrementId:"session-decrement"})),i.a.createElement(d,{time:this.getFormattedTime(),isBreak:this.state.isBreak}),i.a.createElement("button",{className:"pomodoro-timer__btn",id:"start_stop",onClick:this.toggleTimer},"Start/Stop"),i.a.createElement("button",{className:"pomodoro-timer__btn pomodoro-timer__btn--reset",id:"reset",onClick:this.resetTimer},"Reset"),i.a.createElement("audio",{id:"beep",ref:"beep",src:"./sounds/bell.wav",preload:"auto"})))}}]),t}(s.Component)),b=(n(21),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{class:"app"},i.a.createElement(u,null))}}]),t}(s.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,2,1]]]);
//# sourceMappingURL=main.60ea4765.chunk.js.map