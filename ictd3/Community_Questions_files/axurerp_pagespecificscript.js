
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
  value = value.replace(/\[\[GenDay\]\]/g, '27');
  value = value.replace(/\[\[GenMonth\]\]/g, '5');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'May');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'Monday');
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

	SetPanelState('u14', 'pd0u14','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$PatientSummaryLoad')) == ('2')) {

	SetPanelState('u14', 'pd1u14','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$PatientSummaryLoad')) == ('3')) {

	SetPanelState('u14', 'pd2u14','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$PatientSummaryLoad')) == ('4')) {

	SetPanelState('u14', 'pd3u14','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$PatientSummaryLoad')) == ('5')) {

	SetPanelState('u14', 'pd4u14','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$PatientSummaryLoad')) == ('6')) {

	SetPanelState('u14', 'pd5u14','none','',500,'none','',500);

}
else
if (true) {

	SetPanelState('u14', 'pd0u14','none','',500,'none','',500);

}

}

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u84 = document.getElementById('u84');

u84.style.cursor = 'pointer';
if (bIE) u84.attachEvent("onclick", Clicku84);
else u84.addEventListener("click", Clicku84, true);
function Clicku84(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u84');
}

}

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u86 = document.getElementById('u86');

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u86');
}

}

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u88 = document.getElementById('u88');

var u89 = document.getElementById('u89');

u89.style.cursor = 'pointer';
if (bIE) u89.attachEvent("onclick", Clicku89);
else u89.addEventListener("click", Clicku89, true);
function Clicku89(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u89');
}

}

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u91 = document.getElementById('u91');

u91.style.cursor = 'pointer';
if (bIE) u91.attachEvent("onclick", Clicku91);
else u91.addEventListener("click", Clicku91, true);
function Clicku91(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u91');
}

}

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u93 = document.getElementById('u93');

var u94 = document.getElementById('u94');

u94.style.cursor = 'pointer';
if (bIE) u94.attachEvent("onclick", Clicku94);
else u94.addEventListener("click", Clicku94, true);
function Clicku94(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u94');
}

}

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u96 = document.getElementById('u96');

u96.style.cursor = 'pointer';
if (bIE) u96.attachEvent("onclick", Clicku96);
else u96.addEventListener("click", Clicku96, true);
function Clicku96(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u96');
}

}

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u98 = document.getElementById('u98');

var u99 = document.getElementById('u99');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u18');
}

}

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u16');
}

}

var u20 = document.getElementById('u20');

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
SetGlobalVariableValue('$Measles', '1');

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
SetGlobalVariableValue('$Measles', '0');

}

}

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u105 = document.getElementById('u105');

var u106 = document.getElementById('u106');

var u107 = document.getElementById('u107');

var u108 = document.getElementById('u108');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u31 = document.getElementById('u31');

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", Clicku31);
else u31.addEventListener("click", Clicku31, true);
function Clicku31(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u31');
}

}

var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{
windowEvent = e;


if ((GetPanelState('u14')) == ('pd1u14')) {

	SetPanelState('u14', 'pd0u14','none','',500,'none','',500);

}
else
if ((GetPanelState('u14')) == ('pd2u14')) {

	SetPanelState('u14', 'pd1u14','none','',500,'none','',500);

}
else
if ((GetPanelState('u14')) == ('pd3u14')) {

	SetPanelState('u14', 'pd2u14','none','',500,'none','',500);

}
else
if (((GetPanelState('u14')) == ('pd4u14')) && (((GetGlobalVariableValue('$Pnemonia')) == ('0')) && (((GetGlobalVariableValue('$Diarrhea')) == ('0')) && ((GetGlobalVariableValue('$Malaria')) == ('0'))))) {

	SetPanelState('u14', 'pd2u14','none','',500,'none','',500);

}
else
if ((GetPanelState('u14')) == ('pd4u14')) {

	SetPanelState('u14', 'pd3u14','none','',500,'none','',500);

}
else
if ((GetPanelState('u14')) == ('pd5u14')) {

	SetPanelState('u14', 'pd4u14','none','',500,'none','',500);

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


if ((GetPanelState('u14')) == ('pd1u14')) {

	SetPanelState('u14', 'pd0u14','none','',500,'none','',500);

}
else
if ((GetPanelState('u14')) == ('pd2u14')) {

	SetPanelState('u14', 'pd1u14','none','',500,'none','',500);

}
else
if ((GetPanelState('u14')) == ('pd3u14')) {

	SetPanelState('u14', 'pd2u14','none','',500,'none','',500);

}
else
if (((GetPanelState('u14')) == ('pd4u14')) && (((GetGlobalVariableValue('$Pnemonia')) == ('0')) && (((GetGlobalVariableValue('$Diarrhea')) == ('0')) && ((GetGlobalVariableValue('$Malaria')) == ('0'))))) {

	SetPanelState('u14', 'pd2u14','none','',500,'none','',500);

}
else
if ((GetPanelState('u14')) == ('pd4u14')) {

	SetPanelState('u14', 'pd3u14','none','',500,'none','',500);

}
else
if ((GetPanelState('u14')) == ('pd5u14')) {

	SetPanelState('u14', 'pd4u14','none','',500,'none','',500);

}

}

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u14 = document.getElementById('u14');

var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u37');
SetGlobalVariableValue('$Ear', '1');

}

}

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u39 = document.getElementById('u39');

u39.style.cursor = 'pointer';
if (bIE) u39.attachEvent("onclick", Clicku39);
else u39.addEventListener("click", Clicku39, true);
function Clicku39(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u39');
SetGlobalVariableValue('$Ear', '0');

}

}

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u111 = document.getElementById('u111');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u114 = document.getElementById('u114');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u116 = document.getElementById('u116');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u41 = document.getElementById('u41');

var u42 = document.getElementById('u42');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u45 = document.getElementById('u45');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u47 = document.getElementById('u47');

var u48 = document.getElementById('u48');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{
windowEvent = e;


if (true) {

	self.location.href="Community_Summary.html" + GetQuerystring();

}

}

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{
windowEvent = e;


if ((GetPanelState('u14')) == ('pd0u14')) {

	SetPanelState('u14', 'pd1u14','none','',500,'none','',500);

}
else
if ((GetPanelState('u14')) == ('pd1u14')) {

	SetPanelState('u14', 'pd2u14','none','',500,'none','',500);

}
else
if (((GetPanelState('u14')) == ('pd2u14')) && (((GetGlobalVariableValue('$Pnemonia')) == ('0')) && (((GetGlobalVariableValue('$Diarrhea')) == ('0')) && ((GetGlobalVariableValue('$Malaria')) == ('0'))))) {

	SetPanelState('u14', 'pd4u14','none','',500,'none','',500);

}
else
if ((GetPanelState('u14')) == ('pd2u14')) {

	SetPanelState('u14', 'pd3u14','none','',500,'none','',500);

}
else
if ((GetPanelState('u14')) == ('pd3u14')) {

	SetPanelState('u14', 'pd4u14','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('$Ear')) == ('0')) && ((GetPanelState('u14')) == ('pd4u14'))) {

	self.location.href="Community_Summary.html" + GetQuerystring();

}
else
if ((GetPanelState('u14')) == ('pd4u14')) {

	SetPanelState('u14', 'pd5u14','none','',500,'none','',500);

}
else
if ((GetPanelState('u14')) == ('pd5u14')) {

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


if ((GetPanelState('u14')) == ('pd0u14')) {

	SetPanelState('u14', 'pd1u14','none','',500,'none','',500);

}
else
if ((GetPanelState('u14')) == ('pd1u14')) {

	SetPanelState('u14', 'pd2u14','none','',500,'none','',500);

}
else
if (((GetPanelState('u14')) == ('pd2u14')) && (((GetGlobalVariableValue('$Pnemonia')) == ('0')) && (((GetGlobalVariableValue('$Diarrhea')) == ('0')) && ((GetGlobalVariableValue('$Malaria')) == ('0'))))) {

	SetPanelState('u14', 'pd4u14','none','',500,'none','',500);

}
else
if ((GetPanelState('u14')) == ('pd2u14')) {

	SetPanelState('u14', 'pd3u14','none','',500,'none','',500);

}
else
if ((GetPanelState('u14')) == ('pd3u14')) {

	SetPanelState('u14', 'pd4u14','none','',500,'none','',500);

}
else
if (((GetGlobalVariableValue('$Ear')) == ('0')) && ((GetPanelState('u14')) == ('pd4u14'))) {

	self.location.href="Community_Summary.html" + GetQuerystring();

}
else
if ((GetPanelState('u14')) == ('pd4u14')) {

	SetPanelState('u14', 'pd5u14','none','',500,'none','',500);

}
else
if ((GetPanelState('u14')) == ('pd5u14')) {

	self.location.href="Community_Summary.html" + GetQuerystring();

}

}

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
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

SetWidgetSelected('u51');
}

}

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u53 = document.getElementById('u53');

u53.style.cursor = 'pointer';
if (bIE) u53.attachEvent("onclick", Clicku53);
else u53.addEventListener("click", Clicku53, true);
function Clicku53(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u53');
}

}

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u55 = document.getElementById('u55');

var u56 = document.getElementById('u56');

var u57 = document.getElementById('u57');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u61 = document.getElementById('u61');

u61.style.cursor = 'pointer';
if (bIE) u61.attachEvent("onclick", Clicku61);
else u61.addEventListener("click", Clicku61, true);
function Clicku61(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u61');
	SetPanelVisibility('u45','','none',500);

SetGlobalVariableValue('$Pnemonia', '1');

}

}

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u63 = document.getElementById('u63');

u63.style.cursor = 'pointer';
if (bIE) u63.attachEvent("onclick", Clicku63);
else u63.addEventListener("click", Clicku63, true);
function Clicku63(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u63');
	SetPanelVisibility('u45','hidden','none',500);

SetGlobalVariableValue('$Pnemonia', '0');

}

}

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u65 = document.getElementById('u65');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u67 = document.getElementById('u67');

u67.style.cursor = 'pointer';
if (bIE) u67.attachEvent("onclick", Clicku67);
else u67.addEventListener("click", Clicku67, true);
function Clicku67(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u67');
SetGlobalVariableValue('$Diarrhea', '1');

}

}

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u69 = document.getElementById('u69');

u69.style.cursor = 'pointer';
if (bIE) u69.attachEvent("onclick", Clicku69);
else u69.addEventListener("click", Clicku69, true);
function Clicku69(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u69');
SetGlobalVariableValue('$Diarrhea', '0');

}

}

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u71 = document.getElementById('u71');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u73 = document.getElementById('u73');

u73.style.cursor = 'pointer';
if (bIE) u73.attachEvent("onclick", Clicku73);
else u73.addEventListener("click", Clicku73, true);
function Clicku73(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u73');
	SetPanelVisibility('u48','','none',500);

SetGlobalVariableValue('$Malaria', '1');

}

}

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u75 = document.getElementById('u75');

u75.style.cursor = 'pointer';
if (bIE) u75.attachEvent("onclick", Clicku75);
else u75.addEventListener("click", Clicku75, true);
function Clicku75(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u75');
	SetPanelVisibility('u48','hidden','none',500);

SetGlobalVariableValue('$Malaria', '0');

}

}

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u77 = document.getElementById('u77');

var u78 = document.getElementById('u78');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u33 = document.getElementById('u33');

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u33');
}

}

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u35 = document.getElementById('u35');

if (window.OnLoad) OnLoad();
