
/* Start Create AllToolsObject */
/* *********************************************************************************************************** */
let AllToolsObject = [{
    ToolName: "PDF-Ai",
    ToolLink: "https://firebasestorage.googleapis.com/v0/b/file-upload-d8004.appspot.com/o/1748282230323-Pdf%20Ai%20v005.html?alt=media&token=fd379ddc-3183-492e-b116-193a74252e05",
},
{
    ToolName: "Pages-With-Ai",
    ToolLink: "https://firebasestorage.googleapis.com/v0/b/file-upload-d8004.appspot.com/o/1747852089263-Ai%20Deepseak%20V001.html?alt=media&token=6d813bf5-f56b-43ec-afd0-2b418ab51ddb",
},
{
    ToolName: "Short-Link",
    ToolLink: "https://omar-abd-aziz.github.io/Short-Link/",
},
{
    ToolName: "QR-Code-Genrator",
    ToolLink: "https://firebasestorage.googleapis.com/v0/b/pagebuilder-6d4aa.appspot.com/o/webpage_1747395160170.html?alt=media&token=b2785ca5-2c9e-455a-944c-9a63dad950e3",
},
{
    ToolName: "File-Upload",
    ToolLink: "https://omar-abd-aziz.github.io/File-Uploaded-By-Elhalwany/",
},
{
    ToolName: "مصفوفة الأولويات - Notes",
    ToolLink: "https://firebasestorage.googleapis.com/v0/b/pagebuilder-6d4aa.appspot.com/o/webpage_1748290486114.html?alt=media&token=00cb1395-7b90-41f0-977b-111425af251a",
},
{
    ToolName: "نظام نقاط البيع",
    ToolLink: "https://firebasestorage.googleapis.com/v0/b/pagebuilder-6d4aa.appspot.com/o/webpage_1748291406035.html?alt=media&token=2a5b7336-e458-416e-8122-815569cebfb3",
},
{
    ToolName: "Exam-Zone-Make-Exam-With-Ai",
    ToolLink: "https://examzone.infinityfreeapp.com/dashboard.html?i=1",
},
{
    ToolName: "Elhalwany-Site",
    ToolLink: "https://elhalwany.infinityfreeapp.com/Dashboard-Accepted.html",
},
{
    ToolName: "Omar-Portfolio-Site",
    ToolLink: "https://menu.infinityfreeapp.com/?store=346682332&i=2",
},
{
    ToolName: "Notes",
    ToolLink: "https://omar-abd-aziz.github.io/Notes/",
},
{
    ToolName: "Notes-Online",
    ToolLink: "https://omar-abd-aziz.github.io/Notes-Online/index.html",
},
{
  ToolName: "Max-Eg",
  ToolLink: "https://omar-abd-aziz.github.io/Max-Eg/index.html",
},
{
  ToolName: "Css-Bg-Gradians",
  ToolLink: "https://www.gradientmagic.com/browse",
},
{
  ToolName: "CSS Sections",
  ToolLink: "https://wweb.dev/resources/css-separator-generator",
},
{
  ToolName: "CSS Box Shadow",
  ToolLink: "https://getcssscan.com/css-box-shadow-examples",
},
{
  ToolName: "Web To Apk",
  ToolLink: "https://volt.build/upload/",
},
{
  ToolName: "Fancy-Border-Radius",
  ToolLink: "https://9elements.github.io/fancy-border-radius/#89.100.22.81--.",
},
]
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
    document.title=ToolObject.ToolName;
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








