
var PageName = 'Home';
var PageId = '597be0dae3ee46c18b37e07567048e90'
var PageUrl = 'Home.html'
document.title = 'Home';
var PageNotes = 
{
"pageName":"Home",
"showNotesNames":"False"}
var $OnLoadVariable = '';

var $PasswordEntered = '';

var $PatientSummaryLoad = '';

var $ClinicalSummaryLoad = '';

var $Measles = '';

var $Ear = '';

var $Pnemonia = '';

var $Diarrhea = '';

var $Malaria = '';

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
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&PasswordEntered=' + encodeURIComponent($PasswordEntered) + '&PatientSummaryLoad=' + encodeURIComponent($PatientSummaryLoad) + '&ClinicalSummaryLoad=' + encodeURIComponent($ClinicalSummaryLoad) + '&Measles=' + encodeURIComponent($Measles) + '&Ear=' + encodeURIComponent($Ear) + '&Pnemonia=' + encodeURIComponent($Pnemonia) + '&Diarrhea=' + encodeURIComponent($Diarrhea) + '&Malaria=' + encodeURIComponent($Malaria) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PasswordEntered\]\]/g, $PasswordEntered);
  value = value.replace(/\[\[PatientSummaryLoad\]\]/g, $PatientSummaryLoad);
  value = value.replace(/\[\[ClinicalSummaryLoad\]\]/g, $ClinicalSummaryLoad);
  value = value.replace(/\[\[Measles\]\]/g, $Measles);
  value = value.replace(/\[\[Ear\]\]/g, $Ear);
  value = value.replace(/\[\[Pnemonia\]\]/g, $Pnemonia);
  value = value.replace(/\[\[Diarrhea\]\]/g, $Diarrhea);
  value = value.replace(/\[\[Malaria\]\]/g, $Malaria);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '8');
  value = value.replace(/\[\[GenMonth\]\]/g, '6');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'June');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'Saturday');
  value = value.replace(/\[\[GenYear\]\]/g, '2013');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

if (true) {

SetGlobalVariableValue('$Measles', '0');

SetGlobalVariableValue('$Ear', '0');

SetGlobalVariableValue('$Pnemonia', '0');

SetGlobalVariableValue('$Diarrhea', '0');

SetGlobalVariableValue('$Malaria', '0');

	parent.location.href = "Home.html" + GetQuerystring();

}

}

var u20 = document.getElementById('u20');

if (bIE) u20.attachEvent("onchange", Changeu20);
else u20.addEventListener("change", Changeu20, true);
function Changeu20(e)
{
windowEvent = e;


if ((GetSelectedOption('u20')) == ('Community')) {

	SetPanelState('u5', 'pd1u5','none','',500,'fade','',500);

}
else
if ((GetSelectedOption('u20')) == ('Clinical')) {

	SetPanelState('u5', 'pd3u5','none','',500,'fade','',500);

}
else
if ((GetSelectedOption('u20')) == (' ')) {

	SetPanelState('u5', 'pd0u5','none','',500,'fade','',500);

}

}

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u10 = document.getElementById('u10');

if (bIE) u10.attachEvent("onkeyup", KeyUpu10);
else u10.addEventListener("keyup", KeyUpu10, true);
function KeyUpu10(e)
{
windowEvent = e;


if ((GetWidgetValueLength('u10')) == ('4')) {

	SetPanelState('u5', 'pd3u5','none','',500,'fade','',500);

}

}

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u14 = document.getElementById('u14');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{
windowEvent = e;


if (true) {

	self.location.href="Community_Questions.html" + GetQuerystring();

}

}

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u18 = document.getElementById('u18');

var u16 = document.getElementById('u16');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u5 = document.getElementById('u5');

var u6 = document.getElementById('u6');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{
windowEvent = e;


if (true) {

	self.location.href="Clinician_Saved_Assessment.html" + GetQuerystring();

}

}

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
if (window.OnLoad) OnLoad();
