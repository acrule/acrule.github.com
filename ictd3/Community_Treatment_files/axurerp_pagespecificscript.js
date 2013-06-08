
var PageName = 'Community Treatment';
var PageId = '863fe8903bdb4a4ba086f2667d277c7a'
var PageUrl = 'Community_Treatment.html'
document.title = 'Community Treatment';
var PageNotes = 
{
"pageName":"Community Treatment",
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

}

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u51 = document.getElementById('u51');

u51.style.cursor = 'pointer';
if (bIE) u51.attachEvent("onclick", Clicku51);
else u51.addEventListener("click", Clicku51, true);
function Clicku51(e)
{
windowEvent = e;


if (true) {

	self.location.href="Community_Summary.html" + GetQuerystring();

}

}

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u53 = document.getElementById('u53');

var u54 = document.getElementById('u54');

var u55 = document.getElementById('u55');

u55.style.cursor = 'pointer';
if (bIE) u55.attachEvent("onclick", Clicku55);
else u55.addEventListener("click", Clicku55, true);
function Clicku55(e)
{
windowEvent = e;


if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u57 = document.getElementById('u57');

u57.style.cursor = 'pointer';
if (bIE) u57.attachEvent("onclick", Clicku57);
else u57.addEventListener("click", Clicku57, true);
function Clicku57(e)
{
windowEvent = e;


if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u21 = document.getElementById('u21');

u21.style.cursor = 'pointer';
if (bIE) u21.attachEvent("onclick", Clicku21);
else u21.addEventListener("click", Clicku21, true);
function Clicku21(e)
{
windowEvent = e;


if ((GetCheckState('u48')) == (false)) {

SetCheckState('u48', true);

}
else
if ((GetCheckState('u48')) == (true)) {

SetCheckState('u48', false);

}

}

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u23 = document.getElementById('u23');

u23.style.cursor = 'pointer';
if (bIE) u23.attachEvent("onclick", Clicku23);
else u23.addEventListener("click", Clicku23, true);
function Clicku23(e)
{
windowEvent = e;


if ((GetCheckState('u46')) == (false)) {

SetCheckState('u46', true);

}
else
if ((GetCheckState('u46')) == (true)) {

SetCheckState('u46', false);

}

}

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u25 = document.getElementById('u25');

u25.style.cursor = 'pointer';
if (bIE) u25.attachEvent("onclick", Clicku25);
else u25.addEventListener("click", Clicku25, true);
function Clicku25(e)
{
windowEvent = e;


if (true) {

	parent.location.href = "Home.html" + GetQuerystring();

}

}

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u29 = document.getElementById('u29');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u32 = document.getElementById('u32');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u34 = document.getElementById('u34');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u36 = document.getElementById('u36');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u38 = document.getElementById('u38');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u4 = document.getElementById('u4');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{
windowEvent = e;


if (true) {

	self.location.href="Community_Summary.html" + GetQuerystring();

}

}

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

	SetPanelVisibility('u54','toggle','none',500);

}

}

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u42 = document.getElementById('u42');

var u40 = document.getElementById('u40');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u44 = document.getElementById('u44');

var u48 = document.getElementById('u48');

var u46 = document.getElementById('u46');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u54','toggle','none',500);

}

}

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u12 = document.getElementById('u12');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u15 = document.getElementById('u15');

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{
windowEvent = e;


if ((GetCheckState('u40')) == (false)) {

SetCheckState('u40', true);

}
else
if ((GetCheckState('u40')) == (true)) {

SetCheckState('u40', false);

}

}

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u17 = document.getElementById('u17');

u17.style.cursor = 'pointer';
if (bIE) u17.attachEvent("onclick", Clicku17);
else u17.addEventListener("click", Clicku17, true);
function Clicku17(e)
{
windowEvent = e;


if ((GetCheckState('u42')) == (false)) {

SetCheckState('u42', true);

}
else
if ((GetCheckState('u42')) == (true)) {

SetCheckState('u42', false);

}

}

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u19 = document.getElementById('u19');

u19.style.cursor = 'pointer';
if (bIE) u19.attachEvent("onclick", Clicku19);
else u19.addEventListener("click", Clicku19, true);
function Clicku19(e)
{
windowEvent = e;


if ((GetCheckState('u44')) == (false)) {

SetCheckState('u44', true);

}
else
if ((GetCheckState('u44')) == (true)) {

SetCheckState('u44', false);

}

}

if (window.OnLoad) OnLoad();
