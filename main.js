
/* Start Create AllToolsObject */
/* *********************************************************************************************************** */
let AllToolsObject = [{
    ToolName: "Video-Downloader",
    ToolLink: "https://omar-abd-aziz.github.io/YT-Downloader/",
},{
    ToolName: "Short-Link",
    ToolLink: "https://omar-abd-aziz.github.io/Short-Link/",
},{
    ToolName: "Notes",
    ToolLink: "https://omar-abd-aziz.github.io/Notes/",
},{
    ToolName: "Max-Eg",
    ToolLink: "https://omar-abd-aziz.github.io/Max-Eg/index.html",
}]
/* *********************************************************************************************************** */
/* End Create AllToolsObject */





/* Start Show AllToolsObject In Dropdown */
/* *********************************************************************************************************** */
document.querySelector("body > div > li > div").innerHTML=``;
AllToolsObject.forEach(e=>{
    document.querySelector("body > div > li > div").innerHTML+=`
    <div role="separator" class="dropdown-divider"></div>
    <a class="dropdown-item" href="?tool=${e.ToolName}">${e.ToolName}</a>
    `;
});
/* *********************************************************************************************************** */
/* End Show AllToolsObject In Dropdown */






/* Start Get Tool Name From The Url */
/* *********************************************************************************************************** */
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const tool = urlParams.get('tool');

if(tool!==null){
    let ToolObject=AllToolsObject.find(e => e.ToolName == `${tool}`);
    document.querySelector(".iframe").src=ToolObject.ToolLink;
};
/* *********************************************************************************************************** */
/* End Get Tool Name From The Url */














/* Start Full Screen Btn */
/* *********************************************************************************************************** */
var elem = document.querySelector(".iframe");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

console.log(document.querySelector(".btnFillScreen"))
document.querySelector(".btnFillScreen").addEventListener("click",(e)=>{
    openFullscreen();
})
/* *********************************************************************************************************** */
/* End Full Screen Btn */








