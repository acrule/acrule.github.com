﻿
var PageName = 'Community Questions';
var PageId = '63ff2e62d40143d3934f02e253204532'
var PageUrl = 'Community_Questions.html'
document.title = 'Community Questions';
var PageNotes = 
{
"pageName":"Community Questions",
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
  value = value.replace(/\[\[GenDay\]\]/g, '15');
  value = value.replace(/\[\[GenMonth\]\]/g, '5');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'May');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'Wednesday');
  value = value.replace(/\[\[GenYear\]\]/g, '2013');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

if ((GetGlobalVariableValue('$PatientSummaryLoad')) == ('1')) {

	SetPanelState('u16', 'pd0u16','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$PatientSummaryLoad')) == ('2')) {

	SetPanelState('u16', 'pd1u16','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$PatientSummaryLoad')) == ('3')) {

	SetPanelState('u16', 'pd2u16','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$PatientSummaryLoad')) == ('4')) {

	SetPanelState('u16', 'pd3u16','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$PatientSummaryLoad')) == ('5')) {

	SetPanelState('u16', 'pd4u16','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$PatientSummaryLoad')) == ('6')) {

	SetPanelState('u16', 'pd5u16','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u16', 'pd0u16','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('$Pnemonia')) == ('1')) {

SetWidgetSelected('u80');
}
else
if (true) {

SetWidgetSelected('u82');
}

}

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u38 = document.getElementById('u38');

u38.style.cursor = 'pointer';
if (bIE) u38.attachEvent("onclick", Clicku38);
else u38.addEventListener("click", Clicku38, true);
function Clicku38(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u16', 'pd5u16','none','',500,'none','',500);

}

}

var u80 = document.getElementById('u80');

u80.style.cursor = 'pointer';
if (bIE) u80.attachEvent("onclick", Clicku80);
else u80.addEventListener("click", Clicku80, true);
function Clicku80(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u80');
	SetPanelVisibility('u64','','none',500);

SetGlobalVariableValue('$Pnemonia', '1');

}

}

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u82 = document.getElementById('u82');

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u82');
	SetPanelVisibility('u64','hidden','none',500);

SetGlobalVariableValue('$Pnemonia', '0');

}

}

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u84 = document.getElementById('u84');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u86 = document.getElementById('u86');

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u86');
	SetPanelVisibility('u55','','none',500);

SetGlobalVariableValue('$Diarrhea', '1');

}

}

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u88 = document.getElementById('u88');

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u88');
	SetPanelVisibility('u55','hidden','none',500);

SetGlobalVariableValue('$Diarrhea', '0');

}

}

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');

var u90 = document.getElementById('u90');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u92 = document.getElementById('u92');

u92.style.cursor = 'pointer';
if (bIE) u92.attachEvent("onclick", Clicku92);
else u92.addEventListener("click", Clicku92, true);
function Clicku92(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u92');
	SetPanelVisibility('u67','','none',500);

SetGlobalVariableValue('$Malaria', '1');

}

}

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u94 = document.getElementById('u94');

u94.style.cursor = 'pointer';
if (bIE) u94.attachEvent("onclick", Clicku94);
else u94.addEventListener("click", Clicku94, true);
function Clicku94(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u94');
	SetPanelVisibility('u67','hidden','none',500);

SetGlobalVariableValue('$Malaria', '0');

}

}

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u96 = document.getElementById('u96');

var u97 = document.getElementById('u97');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u17 = document.getElementById('u17');

u17.style.cursor = 'pointer';
if (bIE) u17.attachEvent("onclick", Clicku17);
else u17.addEventListener("click", Clicku17, true);
function Clicku17(e)
{
windowEvent = e;


if (true) {

	self.location.href="Community_Summary.html" + GetQuerystring();

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


if (true) {

	self.location.href="Community_Summary.html" + GetQuerystring();

}

}

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u22');
}

}

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u24 = document.getElementById('u24');

u24.style.cursor = 'pointer';
if (bIE) u24.attachEvent("onclick", Clicku24);
else u24.addEventListener("click", Clicku24, true);
function Clicku24(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u24');
}

}

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u28 = document.getElementById('u28');

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u28');
SetGlobalVariableValue('$Measles', '1');

}

}

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u103 = document.getElementById('u103');

u103.style.cursor = 'pointer';
if (bIE) u103.attachEvent("onclick", Clicku103);
else u103.addEventListener("click", Clicku103, true);
function Clicku103(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u103');
}

}

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u105 = document.getElementById('u105');

u105.style.cursor = 'pointer';
if (bIE) u105.attachEvent("onclick", Clicku105);
else u105.addEventListener("click", Clicku105, true);
function Clicku105(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u105');
}

}

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u107 = document.getElementById('u107');

var u108 = document.getElementById('u108');

u108.style.cursor = 'pointer';
if (bIE) u108.attachEvent("onclick", Clicku108);
else u108.addEventListener("click", Clicku108, true);
function Clicku108(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u108');
}

}

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u30 = document.getElementById('u30');

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", Clicku30);
else u30.addEventListener("click", Clicku30, true);
function Clicku30(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u30');
SetGlobalVariableValue('$Measles', '0');

}

}

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{
windowEvent = e;


if ((GetPanelState('u16')) == ('pd0u16')) {

	SetPanelState('u16', 'pd1u16','none','',500,'none','',500);

}
else
if ((GetPanelState('u16')) == ('pd1u16')) {

	SetPanelState('u16', 'pd2u16','none','',500,'none','',500);

}
else
if (((GetPanelState('u16')) == ('pd2u16')) && (((GetGlobalVariableValue('$Pnemonia')) == ('0')) && (((GetGlobalVariableValue('$Diarrhea')) == ('0')) && ((GetGlobalVariableValue('$Malaria')) == ('0'))))) {

	SetPanelState('u16', 'pd4u16','none','',500,'none','',500);

}
else
if ((GetPanelState('u16')) == ('pd2u16')) {

	SetPanelState('u16', 'pd3u16','none','',500,'none','',500);

}
else
if ((GetPanelState('u16')) == ('pd3u16')) {

	SetPanelState('u16', 'pd4u16','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('$Ear')) == ('0')) && ((GetPanelState('u16')) == ('pd4u16'))) {

	self.location.href="Community_Summary.html" + GetQuerystring();

}
else
if ((GetPanelState('u16')) == ('pd4u16')) {

	SetPanelState('u16', 'pd5u16','none','',500,'none','',500);

}
else
if ((GetPanelState('u16')) == ('pd5u16')) {

	self.location.href="Community_Summary.html" + GetQuerystring();

}

}

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{
windowEvent = e;


if ((GetPanelState('u16')) == ('pd1u16')) {

	SetPanelState('u16', 'pd0u16','none','',500,'none','',500);

}
else
if ((GetPanelState('u16')) == ('pd2u16')) {

	SetPanelState('u16', 'pd1u16','none','',500,'none','',500);

}
else
if ((GetPanelState('u16')) == ('pd3u16')) {

	SetPanelState('u16', 'pd2u16','none','',500,'none','',500);

}
else
if (((GetPanelState('u16')) == ('pd4u16')) && (((GetGlobalVariableValue('$Pnemonia')) == ('0')) && (((GetGlobalVariableValue('$Diarrhea')) == ('0')) && ((GetGlobalVariableValue('$Malaria')) == ('0'))))) {

	SetPanelState('u16', 'pd2u16','none','',500,'none','',500);

}
else
if ((GetPanelState('u16')) == ('pd4u16')) {

	SetPanelState('u16', 'pd3u16','none','',500,'none','',500);

}
else
if ((GetPanelState('u16')) == ('pd5u16')) {

	SetPanelState('u16', 'pd4u16','none','',500,'none','',500);

}

}

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u14 = document.getElementById('u14');

u14.style.cursor = 'pointer';
if (bIE) u14.attachEvent("onclick", Clicku14);
else u14.addEventListener("click", Clicku14, true);
function Clicku14(e)
{
windowEvent = e;


if ((GetPanelState('u16')) == ('pd1u16')) {

	SetPanelState('u16', 'pd0u16','none','',500,'none','',500);

}
else
if ((GetPanelState('u16')) == ('pd2u16')) {

	SetPanelState('u16', 'pd1u16','none','',500,'none','',500);

}
else
if ((GetPanelState('u16')) == ('pd3u16')) {

	SetPanelState('u16', 'pd2u16','none','',500,'none','',500);

}
else
if (((GetPanelState('u16')) == ('pd4u16')) && (((GetGlobalVariableValue('$Pnemonia')) == ('0')) && (((GetGlobalVariableValue('$Diarrhea')) == ('0')) && ((GetGlobalVariableValue('$Malaria')) == ('0'))))) {

	SetPanelState('u16', 'pd2u16','none','',500,'none','',500);

}
else
if ((GetPanelState('u16')) == ('pd4u16')) {

	SetPanelState('u16', 'pd3u16','none','',500,'none','',500);

}
else
if ((GetPanelState('u16')) == ('pd5u16')) {

	SetPanelState('u16', 'pd4u16','none','',500,'none','',500);

}

}

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u16 = document.getElementById('u16');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u110 = document.getElementById('u110');

u110.style.cursor = 'pointer';
if (bIE) u110.attachEvent("onclick", Clicku110);
else u110.addEventListener("click", Clicku110, true);
function Clicku110(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u110');
}

}

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u112 = document.getElementById('u112');

var u113 = document.getElementById('u113');

u113.style.cursor = 'pointer';
if (bIE) u113.attachEvent("onclick", Clicku113);
else u113.addEventListener("click", Clicku113, true);
function Clicku113(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u113');
}

}

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u115 = document.getElementById('u115');

u115.style.cursor = 'pointer';
if (bIE) u115.attachEvent("onclick", Clicku115);
else u115.addEventListener("click", Clicku115, true);
function Clicku115(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u115');
}

}

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u117 = document.getElementById('u117');

var u118 = document.getElementById('u118');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u41 = document.getElementById('u41');

u41.style.cursor = 'pointer';
if (bIE) u41.attachEvent("onclick", Clicku41);
else u41.addEventListener("click", Clicku41, true);
function Clicku41(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u41');
}

}

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u43 = document.getElementById('u43');

u43.style.cursor = 'pointer';
if (bIE) u43.attachEvent("onclick", Clicku43);
else u43.addEventListener("click", Clicku43, true);
function Clicku43(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u43');
}

}

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u45 = document.getElementById('u45');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u47 = document.getElementById('u47');

u47.style.cursor = 'pointer';
if (bIE) u47.attachEvent("onclick", Clicku47);
else u47.addEventListener("click", Clicku47, true);
function Clicku47(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u47');
SetGlobalVariableValue('$Ear', '1');

}

}

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u49 = document.getElementById('u49');

u49.style.cursor = 'pointer';
if (bIE) u49.attachEvent("onclick", Clicku49);
else u49.addEventListener("click", Clicku49, true);
function Clicku49(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u49');
SetGlobalVariableValue('$Ear', '0');

}

}

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u124 = document.getElementById('u124');

var u125 = document.getElementById('u125');

var u126 = document.getElementById('u126');

var u127 = document.getElementById('u127');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
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


if ((GetPanelState('u16')) == ('pd0u16')) {

	SetPanelState('u16', 'pd1u16','none','',500,'none','',500);

}
else
if ((GetPanelState('u16')) == ('pd1u16')) {

	SetPanelState('u16', 'pd2u16','none','',500,'none','',500);

}
else
if (((GetPanelState('u16')) == ('pd2u16')) && (((GetGlobalVariableValue('$Pnemonia')) == ('0')) && (((GetGlobalVariableValue('$Diarrhea')) == ('0')) && ((GetGlobalVariableValue('$Malaria')) == ('0'))))) {

	SetPanelState('u16', 'pd4u16','none','',500,'none','',500);

}
else
if ((GetPanelState('u16')) == ('pd2u16')) {

	SetPanelState('u16', 'pd3u16','none','',500,'none','',500);

}
else
if ((GetPanelState('u16')) == ('pd3u16')) {

	SetPanelState('u16', 'pd4u16','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('$Ear')) == ('0')) && ((GetPanelState('u16')) == ('pd4u16'))) {

	self.location.href="Community_Summary.html" + GetQuerystring();

}
else
if ((GetPanelState('u16')) == ('pd4u16')) {

	SetPanelState('u16', 'pd5u16','none','',500,'none','',500);

}
else
if ((GetPanelState('u16')) == ('pd5u16')) {

	self.location.href="Community_Summary.html" + GetQuerystring();

}

}

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u51 = document.getElementById('u51');

var u52 = document.getElementById('u52');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u55 = document.getElementById('u55');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u58 = document.getElementById('u58');

u58.style.cursor = 'pointer';
if (bIE) u58.attachEvent("onclick", Clicku58);
else u58.addEventListener("click", Clicku58, true);
function Clicku58(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u58');
}

}

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u36 = document.getElementById('u36');

u36.style.cursor = 'pointer';
if (bIE) u36.attachEvent("onclick", Clicku36);
else u36.addEventListener("click", Clicku36, true);
function Clicku36(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u16', 'pd5u16','none','',500,'none','',500);

}

}

var u130 = document.getElementById('u130');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u60 = document.getElementById('u60');

u60.style.cursor = 'pointer';
if (bIE) u60.attachEvent("onclick", Clicku60);
else u60.addEventListener("click", Clicku60, true);
function Clicku60(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u60');
}

}

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u62 = document.getElementById('u62');

var u63 = document.getElementById('u63');

var u64 = document.getElementById('u64');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u66 = document.getElementById('u66');

var u67 = document.getElementById('u67');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u70 = document.getElementById('u70');

u70.style.cursor = 'pointer';
if (bIE) u70.attachEvent("onclick", Clicku70);
else u70.addEventListener("click", Clicku70, true);
function Clicku70(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u70');
}

}

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u72 = document.getElementById('u72');

u72.style.cursor = 'pointer';
if (bIE) u72.attachEvent("onclick", Clicku72);
else u72.addEventListener("click", Clicku72, true);
function Clicku72(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u72');
}

}

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u74 = document.getElementById('u74');

var u75 = document.getElementById('u75');

var u76 = document.getElementById('u76');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u32 = document.getElementById('u32');

var u33 = document.getElementById('u33');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
if (window.OnLoad) OnLoad();