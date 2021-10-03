"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=u(n),k=l,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||a;return n?r.createElement(d,o(o({ref:e},s),{},{components:n})):r.createElement(d,o({ref:e},s))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7357:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=["components"],i={id:"spotify.js"},p=void 0,u={unversionedId:"code/utility/spotify.js",id:"code/utility/spotify.js",isDocsHomePage:!1,title:"spotify.js",description:"spotify",source:"@site/docs/code/utility/spotify.js.md",sourceDirName:"code/utility",slug:"/code/utility/spotify.js",permalink:"/code/utility/spotify.js",editUrl:"https://github.com/librenotebot/librenote/edit/main/docs/docs/code/utility/spotify.js.md",tags:[],version:"current",frontMatter:{id:"spotify.js"},sidebar:"mySidebar",previous:{title:"redis.js",permalink:"/code/utility/redis.js"},next:{title:"track.js",permalink:"/code/utility/track.js"}},s=[{value:"spotify",id:"spotify",children:[{value:"spotify.getSpotifyAccessToken(client, nocache)",id:"spotifygetspotifyaccesstokenclient-nocache",children:[]},{value:"spotify.getYoutubeFromSpotify(client, url) \u21d2 <code>Promise.&lt;string&gt;</code>",id:"spotifygetyoutubefromspotifyclient-url--promisestring",children:[]},{value:"spotify.getYoutubeFromPlaylist(client, url) \u21d2 <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>",id:"spotifygetyoutubefromplaylistclient-url--promisearraystring",children:[]},{value:"spotify~isTrackURL(URL) \u21d2 <code>boolean</code>",id:"spotifyistrackurlurl--boolean",children:[]},{value:"spotify~isPlaylistURL(URL) \u21d2 <code>boolean</code>",id:"spotifyisplaylisturlurl--boolean",children:[]}]}],c={toc:s};function m(t){var e=t.components,n=(0,l.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"module_spotify"}),(0,a.kt)("h2",{id:"spotify"},"spotify"),(0,a.kt)("p",null,"Module to handle communication with Spotify APIs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_spotify"},"spotify"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"static"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_spotify.getSpotifyAccessToken"},".getSpotifyAccessToken(client, nocache)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_spotify.getYoutubeFromSpotify"},".getYoutubeFromSpotify(client, url)")," \u21d2 ",(0,a.kt)("code",null,"Promise.","<","string",">")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_spotify.getYoutubeFromPlaylist"},".getYoutubeFromPlaylist(client, url)")," \u21d2 ",(0,a.kt)("code",null,"Promise.","<","Array.","<","string",">",">")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"inner"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_spotify..isTrackURL"},"~isTrackURL(URL)")," \u21d2 ",(0,a.kt)("code",null,"boolean")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#module_spotify..isPlaylistURL"},"~isPlaylistURL(URL)")," \u21d2 ",(0,a.kt)("code",null,"boolean"))))))),(0,a.kt)("a",{name:"module_spotify.getSpotifyAccessToken"}),(0,a.kt)("h3",{id:"spotifygetspotifyaccesstokenclient-nocache"},"spotify.getSpotifyAccessToken(client, nocache)"),(0,a.kt)("p",null,"Gets a spotify access token, either from Redis or the Spotify API."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#module_spotify"},(0,a.kt)("code",null,"spotify")),"  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"client"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"object")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"Client object from discord.js"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nocache"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"If true, the cache will be skipped and go straight to the Spotify API"))))),(0,a.kt)("a",{name:"module_spotify.getYoutubeFromSpotify"}),(0,a.kt)("h3",{id:"spotifygetyoutubefromspotifyclient-url--promisestring"},"spotify.getYoutubeFromSpotify(client, url) \u21d2 ",(0,a.kt)("code",null,"Promise.","<","string",">")),(0,a.kt)("p",null,"Searches for a Youtube video based on the Spotify URL input"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#module_spotify"},(0,a.kt)("code",null,"spotify")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Promise.","<","string",">")," - ",(0,a.kt)("p",null,"Resolves to Youtube video URL"),"  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"client"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"object")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"Client object from discord.js"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"url"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"Spotify URL"))))),(0,a.kt)("a",{name:"module_spotify.getYoutubeFromPlaylist"}),(0,a.kt)("h3",{id:"spotifygetyoutubefromplaylistclient-url--promisearraystring"},"spotify.getYoutubeFromPlaylist(client, url) \u21d2 ",(0,a.kt)("code",null,"Promise.","<","Array.","<","string",">",">")),(0,a.kt)("p",null,"Converts tracks in a Spotify playlist to Youtube URLs"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#module_spotify"},(0,a.kt)("code",null,"spotify")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Promise.","<","Array.","<","string",">",">")," - ",(0,a.kt)("p",null,"The array of Youtube URLs"),"  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"client"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"object")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"Client object from discord.js"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"url"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"Spotify playlist URL"))))),(0,a.kt)("a",{name:"module_spotify..isTrackURL"}),(0,a.kt)("h3",{id:"spotifyistrackurlurl--boolean"},"spotify~isTrackURL(URL) \u21d2 ",(0,a.kt)("code",null,"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": inner method of ",(0,a.kt)("a",{parentName:"p",href:"#module_spotify"},(0,a.kt)("code",null,"spotify")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"boolean")," - ",(0,a.kt)("p",null,"If the URL is a Spotify Track URL or not"),"  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"URL"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"The URL you want to test"))))),(0,a.kt)("a",{name:"module_spotify..isPlaylistURL"}),(0,a.kt)("h3",{id:"spotifyisplaylisturlurl--boolean"},"spotify~isPlaylistURL(URL) \u21d2 ",(0,a.kt)("code",null,"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": inner method of ",(0,a.kt)("a",{parentName:"p",href:"#module_spotify"},(0,a.kt)("code",null,"spotify")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"boolean")," - ",(0,a.kt)("p",null,"If the URL is a Spotify Playlist URL or not"),"  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"URL"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"The URL you want to test"))))))}m.isMDXComponent=!0}}]);