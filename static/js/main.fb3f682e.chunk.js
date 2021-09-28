(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var l=n(1),a=n.n(l),o=n(4),s=n.n(o),c=(n(9),n(2)),r=(n(10),n(0));function i(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg my-0 ",children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsxs)("h3",{className:"appName text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("span",{children:Object(r.jsx)("img",{className:"faviconInTitle",src:"apple-touch-icon.png",alt:""})}),e.title]}),Object(r.jsx)("button",{className:"navbar-toggler navbar-light bg-light",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("button",{className:"homePageBtn nav-link active text-".concat("light"===e.mode?"dark":"light"),"aria-current":"page",onClick:e.homePage,children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("button",{className:" aboutPageBtn nav-link active text-".concat("light"===e.mode?"dark":"light"," "),onClick:e.aboutPage,children:"About"})})]}),Object(r.jsxs)("div",{className:"colorContainer",children:[Object(r.jsx)("div",{className:"colorBox black",onClick:e.back_black}),Object(r.jsx)("div",{className:"colorBox blue",onClick:e.back_blue}),Object(r.jsx)("div",{className:"colorBox red",onClick:e.back_red}),Object(r.jsx)("div",{className:"colorBox green",onClick:e.back_green}),Object(r.jsx)("div",{className:"colorBox yellow",onClick:e.back_yellow}),Object(r.jsx)("div",{className:"colorBox white",onClick:e.back_white})]})]})]})})}function d(e){var t,n,a=Object(l.useState)(""),o=Object(c.a)(a,2),s=o[0],i=o[1],d=0;if(""===s)d=0,t=0,n=0;else{if(""===s)d=0,t=0,n=0;else{for(var m=s.split(/\s+/),b=0;b<s.split(/\s+/).length;b++)""!==m[b]&&d++;t=s.length}n=.08*d}return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"bodyContainer",children:[Object(r.jsxs)("div",{className:"textFormContainer mx-5",children:[Object(r.jsx)("h6",{className:" text-".concat("light"===e.mode?"dark":"light"),children:e.heading}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{className:"form-control text-".concat("light"===e.mode?"dark":"light"),value:s,onChange:function(e){i(e.target.value)},id:"myBox",rows:"8"})})]}),Object(r.jsx)("div",{className:"mx-5",children:Object(r.jsxs)("div",{className:"btnContainer",children:[Object(r.jsx)("button",{disabled:0===s.length,className:"btn rounded btn-primary action-btn mx-2 my-1 text-".concat("light"===e.mode?"dark":"light"),onClick:function(){i(s.toUpperCase()),e.showAlert("CONVERTED TO UPPERCASE.")},children:"CONVERT TO UPPERCASE"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn rounded btn-primary action-btn mx-2 my-1 text-".concat("light"===e.mode?"dark":"light"),onClick:function(){i(s.toLowerCase()),e.showAlert("converted to lower case.")},children:"convert to lowercase"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn rounded btn-primary action-btn mx-2 my-1 text-".concat("light"===e.mode?"dark":"light"),onClick:function(){i(""),e.showAlert("Text Cleared!!")},children:"Clear Text"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn rounded btn-primary action-btn mx-2 my-1 text-".concat("light"===e.mode?"dark":"light"),onClick:function(){for(var t="",n=s.split(" "),l=0;l<s.split(" ").length-1;l++)t+=n[l].charAt(0).toUpperCase()+n[l].slice(1)+" ";t+=n[s.split(" ").length-1].charAt(0).toUpperCase()+n[s.split(" ").length-1].slice(1),i(t),e.showAlert("Each Word Is Capitalised.")},children:"Capitalise Each Word"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn rounded btn-primary action-btn mx-2 my-1 text-".concat("light"===e.mode?"dark":"light"),onClick:function(){for(var t="",n=s.split(". "),l=0;l<s.split(". ").length-1;l++)t+=n[l].charAt(0).toUpperCase()+n[l].slice(1)+". ";t+=n[s.split(". ").length-1].charAt(0).toUpperCase()+n[s.split(". ").length-1].slice(1),i(t),e.showAlert("Each sentence is capitalised.")},children:"Capitalise each sentence"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn rounded btn-primary action-btn mx-2 my-1 text-".concat("light"===e.mode?"dark":"light"),onClick:function(){var t=document.createElement("a"),n=new Blob([document.getElementById("myBox").value],{type:"text/plain"});t.href=URL.createObjectURL(n),t.download="myFile.txt",document.body.appendChild(t),t.click(),e.showAlert(".txt file is downloading....")},children:"Download Text"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn rounded btn-primary action-btn mx-2 my-1 text-".concat("light"===e.mode?"dark":"light"),onClick:function(){navigator.clipboard.writeText(s),e.showAlert("Text is copied to Clipboard.")},children:"Copy Text"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn rounded btn-primary action-btn mx-2 my-1 text-".concat("light"===e.mode?"dark":"light"),onClick:function(){for(var t=s.split(" "),n="",l=0;l<s.split(" ").length-1;l++)""!==t[l]&&(n+=t[l]+" ");n+=t[s.split(" ").length-1],i(n.trim()),e.showAlert("Extra spaces are removed.")},children:"Remove Extra        Spaces"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn rounded btn-primary action-btn mx-2 my-1 text-".concat("light"===e.mode?"dark":"light"),onClick:function(){var t=document.getElementById("myBox"),n=t.value.length,l=t.selectionStart,a=t.selectionEnd,o=t.value.substring(l,a).toUpperCase();i(t.value.substring(0,l)+o+t.value.substring(a,n)),e.showAlert("SELECTED TEXT IS CONVERTED TO UPPERCASE.")},children:"SELECTED TEXT TO UPPERCASE"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn rounded btn-primary action-btn mx-2 my-1 text-".concat("light"===e.mode?"dark":"light"),onClick:function(){var t=document.getElementById("myBox"),n=t.value.length,l=t.selectionStart,a=t.selectionEnd,o=t.value.substring(l,a).toLowerCase();i(t.value.substring(0,l)+o+t.value.substring(a,n)),e.showAlert("selected text is converted to lowercase.")},children:"selected text to lowercase"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn rounded btn-primary action-btn mx-2 my-1 text-".concat("light"===e.mode?"dark":"light"),onClick:function(){for(var t=document.getElementById("myBox"),n=t.value.length,l=t.selectionStart,a=t.selectionEnd,o=t.value.substring(l,a),s="",c=o.split(" "),r=0;r<o.split(" ").length-1;r++)s+=c[r].charAt(0).toUpperCase()+c[r].slice(1)+" ";s+=c[o.split(" ").length-1].charAt(0).toUpperCase()+c[o.split(" ").length-1].slice(1),i(t.value.substring(0,l)+s+t.value.substring(a,n)),e.showAlert("Each Word In Selected Text Is Capitalised.")},children:"Capitalise Each Word In Selected Text"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn rounded btn-primary action-btn mx-2 my-1 text-".concat("light"===e.mode?"dark":"light"),onClick:function(){for(var t=document.getElementById("myBox"),n=t.value.length,l=t.selectionStart,a=t.selectionEnd,o=t.value.substring(l,a),s="",c=o.split(". "),r=0;r<o.split(". ").length-1;r++)s+=c[r].charAt(0).toUpperCase()+c[r].slice(1)+". ";s+=c[o.split(". ").length-1].charAt(0).toUpperCase()+c[o.split(". ").length-1].slice(1),i(t.value.substring(0,l)+s+t.value.substring(a,n)),e.showAlert("Each sentence in selected text is capitalised.")},children:"Capitalise each sentence in selected text"})]})})]}),Object(r.jsxs)("div",{className:"textFormContainer container my-3 text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("h3",{className:"underlinedHeading",children:"Text Summary"}),Object(r.jsxs)("h6",{className:"textSummary",children:[Object(r.jsxs)("span",{children:[" ",d," words \xa0\xa0"]}),"|",Object(r.jsxs)("span",{children:["\xa0\xa0",t," characters\xa0 \xa0"]}),"|",Object(r.jsxs)("span",{children:["\xa0\xa0",n," minutes to read "]})]}),Object(r.jsx)("h3",{className:"underlinedHeading",children:"Preview"}),Object(r.jsx)("p",{id:"previewText",children:s.length>0?s:"Nothing to Preview!!"})]})]})}function m(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"aboutPageContainer text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsxs)("ul",{style:{listStyleType:"square",fontSize:"20px",fontFamily:"cursive"},children:[Object(r.jsxs)("li",{children:[" ",Object(r.jsxs)("p",{className:"mx-2",children:[" ",Object(r.jsx)("span",{style:{fontSize:"40px"},children:"Correctext"})," is a TextUtility which tells you about number of Words and Characters in your Text. Additionally, it also tells about approximate time to read the Text."]})]}),Object(r.jsx)("li",{children:Object(r.jsx)("p",{className:"mx-2",children:"Here you can also change Case of your Text like UpperCase to LowerCase and LowerCase to UpperCase."})}),Object(r.jsx)("li",{children:Object(r.jsx)("p",{className:"mx-2",children:"You can also Capitalise Words and Sentences in your Text."})})]}),Object(r.jsxs)("div",{className:"my-5 mx-5",children:[Object(r.jsx)("a",{className:"text-".concat("light"===e.mode?"dark":"light"),href:"https://docs.google.com/forms/d/e/1FAIpQLSfmchAlbg1s7Sofcdqn9r6J9Z8N5hLzH-XQOaCVAznYJcftng/viewform?usp=sf_link",children:"Submit any complaint/suggestion here."})," ",Object(r.jsx)("span",{className:"text-".concat("light"===e.mode?"dark":"light"),children:"It will help me in improving this web application."})]})]})})}i.defaultProps={title:"Set Titile Here"};var b=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{id:"alertContainer",children:Object(r.jsxs)("div",{id:"innerAlert",style:{height:"10px",marginTop:"-15px",marginBottom:"-15px"},className:"alert alert-success d-flex align-items-center",role:"alert",children:[Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-exclamation-triangle-fill flex-shrink-0 me-2",viewBox:"0 0 16 16",role:"img","aria-label":"Warning:",children:Object(r.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"})}),Object(r.jsx)("div",{children:e.alert})]})})})};var g=function(){var e=Object(l.useState)("light"),t=Object(c.a)(e,2),n=t[0],a=t[1],o=Object(l.useState)("white"),s=Object(c.a)(o,2),g=s[0],u=s[1],h=Object(l.useState)("Light Mode Enabled"),x=Object(c.a)(h,2),y=x[0],j=x[1];setTimeout((function(){document.getElementById("alertContainer").style.visibility="hidden"}),1500);var C=function(){document.getElementById("alertContainer").style.visibility="hidden"};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i,{title:"Correctext",mode:n,homePage:function(){document.getElementsByClassName("colorContainer")[0].style.display="flex",document.getElementsByClassName("textFormContainer")[0].style.display="block",document.getElementsByClassName("textFormContainer")[1].style.display="block",document.getElementsByClassName("btnContainer")[0].style.display="flex",document.getElementsByClassName("aboutPageContainer")[0].style.display="none"},aboutPage:function(){document.getElementsByClassName("colorContainer")[0].style.display="none",document.getElementsByClassName("textFormContainer")[0].style.display="none",document.getElementsByClassName("textFormContainer")[1].style.display="none",document.getElementsByClassName("btnContainer")[0].style.display="none",document.getElementsByClassName("aboutPageContainer")[0].style.display="block"},back_black:function(){a("dark"),u("black"),document.body.style.backgroundColor="#171616",document.getElementsByClassName("navbar")[0].style.backgroundColor="black",document.getElementById("myBox").style.backgroundColor="#171616",document.getElementById("myBox").style.border="2px solid white";for(var e=0;e<12;e++)document.getElementsByClassName("btn")[e].style.backgroundColor="black",document.getElementsByClassName("btn")[e].style.borderColor="white"},back_blue:function(){a("dark"),u("blue"),document.body.style.backgroundColor="#140c53",document.getElementsByClassName("navbar")[0].style.backgroundColor="#09042f",document.getElementById("myBox").style.backgroundColor="#140c53",document.getElementById("myBox").style.border="2px solid white";for(var e=0;e<12;e++)document.getElementsByClassName("btn")[e].style.backgroundColor="#09042f",document.getElementsByClassName("btn")[e].style.borderColor="white"},back_red:function(){a("dark"),u("red"),document.body.style.backgroundColor="#550404",document.getElementsByClassName("navbar")[0].style.backgroundColor="#390505",document.getElementById("myBox").style.backgroundColor="#550404",document.getElementById("myBox").style.border="2px solid white";for(var e=0;e<12;e++)document.getElementsByClassName("btn")[e].style.backgroundColor="#390505",document.getElementsByClassName("btn")[e].style.borderColor="white"},back_green:function(){a("dark"),u("green"),document.body.style.backgroundColor="green",document.getElementsByClassName("navbar")[0].style.backgroundColor="#023c0b",document.getElementById("myBox").style.backgroundColor="green",document.getElementById("myBox").style.border="2px solid white";for(var e=0;e<12;e++)document.getElementsByClassName("btn")[e].style.backgroundColor="#023c0b",document.getElementsByClassName("btn")[e].style.borderColor="white"},back_yellow:function(){a("light"),u("yellow"),document.body.style.backgroundColor="yellow",document.getElementsByClassName("navbar")[0].style.backgroundColor="#b0bf0b",document.getElementById("myBox").style.backgroundColor="yellow",document.getElementById("myBox").style.border="2px solid black";for(var e=0;e<12;e++)document.getElementsByClassName("btn")[e].style.backgroundColor="#b0bf0b",document.getElementsByClassName("btn")[e].style.borderColor="black"},back_white:function(){a("light"),u("white"),document.body.style.backgroundColor="white",document.getElementsByClassName("navbar")[0].style.backgroundColor="grey",document.getElementById("myBox").style.backgroundColor="white",document.getElementById("myBox").style.border="2px solid black";for(var e=0;e<12;e++)document.getElementsByClassName("btn")[e].style.backgroundColor="grey",document.getElementsByClassName("btn")[e].style.borderColor="black"}}),Object(r.jsx)("div",{className:"container my-3",children:Object(r.jsx)(b,{alert:y})}),Object(r.jsx)(d,{showAlert:function(e){document.getElementById("alertContainer").style.visibility="visible",j(e),setTimeout((function(){C()}),1500)},mode:n,heading:"Correctext- Word Counter | Character Counter | Case Converter | UpperCase to LowerCase | LowerCase to UpperCase | Capitalise Words | Capitalise Sentences | Remove Extra Spaces | Download Text File"}),Object(r.jsx)("div",{children:Object(r.jsx)(m,{mode:n,theme:g})})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,l=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),l(e),a(e),o(e),s(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),u()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.fb3f682e.chunk.js.map