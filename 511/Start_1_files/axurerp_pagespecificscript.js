
var PageName = 'Start';
var PageId = '2ced8a267fa8489cbf14bf6639aa148e'
var PageUrl = 'Start_1.html'
document.title = 'Start';
var PageNotes = 
{
"pageName":"Start",
"showNotesNames":"False"}
var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '28');
  value = value.replace(/\[\[GenMonth\]\]/g, '5');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'May');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'Monday');
  value = value.replace(/\[\[GenYear\]\]/g, '2012');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

if (true) {

	SetPanelVisibility('u3','','fade',1000);

	SetPanelVisibility('u0','','fade',1000);

}
else
if (true) {
function waitu65f166768c2647d6bfcc3ebcf286522c1() {

	SetPanelVisibility('u0','hidden','none',500);

	SetPanelVisibility('u3','hidden','fade',1000);
}
setTimeout(waitu65f166768c2647d6bfcc3ebcf286522c1, 3000);

}

}

var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');

u1.style.cursor = 'pointer';
if (bIE) u1.attachEvent("onclick", Clicku1);
else u1.addEventListener("click", Clicku1, true);
function Clicku1(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u0','hidden','none',500);

	SetPanelVisibility('u3','hidden','fade',1000);
function waitue1c9ce20b1774dd285d8c20c2ae9404b1() {

	self.location.href="Home.html" + GetQuerystring();
}
setTimeout(waitue1c9ce20b1774dd285d8c20c2ae9404b1, 1000);

}

}

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u3 = document.getElementById('u3');

var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u0','hidden','none',500);

	SetPanelVisibility('u3','hidden','fade',1000);
function waitu05eb6a5cd29f4c26bebcd92a2e1ca6ed1() {

	self.location.href="Home.html" + GetQuerystring();
}
setTimeout(waitu05eb6a5cd29f4c26bebcd92a2e1ca6ed1, 1000);

}

}
gv_vAlignTable['u4'] = 'top';
if (window.OnLoad) OnLoad();
