webpackHotUpdate("main",{"./src/call-service.js":
/*!*****************************!*\
  !*** ./src/call-service.js ***!
  \*****************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var i=n(/*! connectycube */"./node_modules/connectycube/lib/cubeMain.js"),a=n.n(i),s=n(/*! handlebars */"./node_modules/handlebars/dist/cjs/handlebars.js"),o=n.n(s),c=n(/*! ./config */"./src/config.js");function l(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"init",(function(){a.a.videochat.onCallListener=t.onCallListener.bind(t),a.a.videochat.onAcceptCallListener=t.onAcceptCallListener.bind(t),a.a.videochat.onRejectCallListener=t.onRejectCallListener.bind(t),a.a.videochat.onStopCallListener=t.onStopCallListener.bind(t),a.a.videochat.onUserNotAnswerListener=t.onUserNotAnswerListener.bind(t),a.a.videochat.onRemoteStreamListener=t.onRemoteStreamListener.bind(t),document.getElementById("call-modal-reject").addEventListener("click",t.rejectCall),document.getElementById("call-modal-accept").addEventListener("click",t.acceptCall)})),r(this,"$calling",document.getElementById("signal-in")),r(this,"$dialing",document.getElementById("signal-out")),r(this,"$endCall",document.getElementById("signal-end")),r(this,"mediaParams",{audio:!0,video:!0,elementId:"localStream",options:{muted:!0,mirror:!0}}),r(this,"_session",null),r(this,"mediaDevicesIds",[]),r(this,"activeDeviceId",[]),r(this,"isAudioMuted",!1),r(this,"addStreamElements",(function(e){var t=document.getElementById("videochat-streams"),n=document.getElementById("videochat-streams-template"),i=o.a.compile(n.innerHTML);2===e.length?t.classList.value="grid-2-1":3===e.length&&(t.classList.value="grid-2-2"),document.getElementById("call").classList.add("hidden"),document.getElementById("videochat").classList.remove("hidden"),t.innerHTML=i({opponents:e})})),r(this,"onCallListener",(function(e,n){if(t._session)return t.rejectCall(e,{busy:!0}),!1;t._session=e,t.showIncomingCallModal()})),r(this,"onAcceptCallListener",(function(e,n,i){var a=t._getUserById(n,"name"),s="".concat(a," has accepted the call");t.showSnackbar(s),t.$dialing.pause()})),r(this,"onRejectCallListener",(function(e,n,i){var a=t._getUserById(n,"name"),s=i.busy?"".concat(a," is busy"):"".concat(a," rejected the call request");t.showSnackbar(s),t.stopCall(n)})),r(this,"onStopCallListener",(function(e,n,i){var a=e.initiatorID===n,s=t._getUserById(n,"name"),o="".concat(s," has ").concat(a?"stopped":"left"," the call");t.showSnackbar(o),a?t.stopCall():t.stopCall(n)})),r(this,"onUserNotAnswerListener",(function(e,n){var i=t._getUserById(n,"name"),a="".concat(i," did not answer");t.showSnackbar(a),t.stopCall(n)})),r(this,"onRemoteStreamListener",(function(e,n,i){document.getElementById("videochat-stream-loader-".concat(n)).remove(),t._session.attachMediaStream("remoteStream-".concat(n),i)})),r(this,"acceptCall",(function(){var e={},n=t._session,i=n.opponentsIDs,a=n.initiatorID,s=n.currentUserID,o=[a].concat(l(i)).filter((function(e){return s!==e})).map((function(e){return{id:e,name:t._getUserById(e,"name")}}));t.addStreamElements(o),t.setMediaDevices(),t.hideIncomingCallModal(),t._session.getUserMedia(t.mediaParams).then((function(n){t._session.accept(e),t.setActiveDeviceId(n)}))})),r(this,"rejectCall",(function(){t.hideIncomingCallModal(),t._session.reject({}),t._session=null})),r(this,"startCall",(function(){var e=[],n=[],i=a.a.videochat.CallType.VIDEO;t.$dialing.play(),document.getElementById("call").classList.add("hidden"),document.getElementById("videochat").classList.remove("hidden"),document.querySelectorAll(".select-user-checkbox").forEach((function(i){if(i.checked){var a=+i.dataset.id,s=t._getUserById(a,"name");e.push({id:a,name:s}),n.push(a),i.checked=!1}})),t.addStreamElements(e),t.setMediaDevices(),t._session=a.a.videochat.createNewSession(n,i,{}),t._session.getUserMedia(t.mediaParams).then((function(e){t._session.call({}),t.setActiveDeviceId(e)}))})),r(this,"stopCall",(function(e){var n=document.getElementById("videochat-streams");if(e){document.getElementById("videochat-stream-container-".concat(e)).remove();var i=document.querySelectorAll(".videochat-stream-container");i.length<2?t.stopCall():2===i.length?n.classList.value="":3===i.length&&(n.classList.value="grid-2-1")}else t._session&&(t._session.stop({}),a.a.videochat.clearSession(t._session.ID),t.$dialing.pause(),t.$calling.pause(),t.$endCall.play(),t._session=null,t.mediaDevicesIds=[],t.activeDeviceId=null,t.isAudioMuted=!1,n.innerHTML="",n.classList.value="",document.getElementById("call").classList.remove("hidden"),document.getElementById("videochat").classList.add("hidden"))})),r(this,"setActiveDeviceId",(function(e){if(e){var n=e.getVideoTracks()[0].getSettings();t.activeDeviceId=n.deviceId}})),r(this,"setAudioMute",(function(){var e=document.getElementById("videochat-mute-unmute");t.isAudioMuted?(t._session.unmute("audio"),t.isAudioMuted=!1,e.classList.remove("muted")):(t._session.mute("audio"),t.isAudioMuted=!0,e.classList.add("muted"))})),r(this,"switchCamera",(function(){var e=t.mediaDevicesIds.find((function(e){return e!==t.activeDeviceId}));t._session.switchMediaTracks({video:e})})),r(this,"showSnackbar",(function(e){var t=document.getElementById("snackbar");t.innerHTML=e,t.className="show",setTimeout((function(){t.innerHTML="",t.className=t.className.replace("show","")}),3e3)})),r(this,"showIncomingCallModal",(function(){return t._incomingCallModal("show")})),r(this,"hideIncomingCallModal",(function(){return t._incomingCallModal("hide")})),r(this,"_incomingCallModal",(function(e){var n=document.getElementById("call-modal-icoming"),i=document.getElementById("call-modal-initiator");"hide"===e?(t.$calling.pause(),i.innerHTML="",n.className=n.className.replace("show","")):(t.$calling.play(),i.innerHTML=t._getUserById(t._session.initiatorID,"name"),n.className="show")})),r(this,"_getUserById",(function(e,t){var n=c.users.find((function(t){return t.id==e}));return"string"==typeof t?n[t]:n}))}var t,n,i;return t=e,(n=[{key:"setMediaDevices",value:function(){var e=this;a.a.videochat.getMediaDevices("videoinput").then((function(t){if(e.mediaDevicesIds=null==t?void 0:t.map((function(e){return e.deviceId})),t.length<2){var n=document.getElementById("videochat-switch-camera");n&&(n.style.opacity=.5,n.style.cursor="not-allowed",n.disabled=!0)}}))}}])&&d(t.prototype,n),i&&d(t,i),e}();t.default=new u}});
//# sourceMappingURL=main.map