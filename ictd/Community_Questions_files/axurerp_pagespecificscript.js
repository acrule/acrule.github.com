
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
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&PasswordEntered=' + encodeURIComponent($PasswordEntered) + '&PatientSummaryLoad=' + encodeURIComponent($PatientSummaryLoad) + '&ClinicalSummaryLoad=' + encodeURIComponent($ClinicalSummaryLoad) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PasswordEntered\]\]/g, $PasswordEntered);
  value = value.replace(/\[\[PatientSummaryLoad\]\]/g, $PatientSummaryLoad);
  value = value.replace(/\[\[ClinicalSummaryLoad\]\]/g, $ClinicalSummaryLoad);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '6');
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

}

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u38 = document.getElementById('u38');

u38.style.cursor = 'pointer';
if (bIE) u38.attachEvent("onclick", Clicku38);
else u38.addEventListener("click", Clicku38, true);
function Clicku38(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u38');
}

}

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u81 = document.getElementById('u81');

u81.style.cursor = 'pointer';
if (bIE) u81.attachEvent("onclick", Clicku81);
else u81.addEventListener("click", Clicku81, true);
function Clicku81(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u81');
	SetPanelVisibility('u70','hidden','fade',500);

}

}

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u83 = document.getElementById('u83');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u85 = document.getElementById('u85');

u85.style.cursor = 'pointer';
if (bIE) u85.attachEvent("onclick", Clicku85);
else u85.addEventListener("click", Clicku85, true);
function Clicku85(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u16', 'pd4u16','none','',500,'none','',500);

}

}

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u87 = document.getElementById('u87');

u87.style.cursor = 'pointer';
if (bIE) u87.attachEvent("onclick", Clicku87);
else u87.addEventListener("click", Clicku87, true);
function Clicku87(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u16', 'pd4u16','none','',500,'none','',500);

}

}

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');

var u90 = document.getElementById('u90');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u92 = document.getElementById('u92');

var u93 = document.getElementById('u93');

u93.style.cursor = 'pointer';
if (bIE) u93.attachEvent("onclick", Clicku93);
else u93.addEventListener("click", Clicku93, true);
function Clicku93(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u93');
	SetPanelVisibility('u90','','fade',500);

}

}

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u95 = document.getElementById('u95');

u95.style.cursor = 'pointer';
if (bIE) u95.attachEvent("onclick", Clicku95);
else u95.addEventListener("click", Clicku95, true);
function Clicku95(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u95');
	SetPanelVisibility('u90','hidden','fade',500);

}

}

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u97 = document.getElementById('u97');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u99 = document.getElementById('u99');

u99.style.cursor = 'pointer';
if (bIE) u99.attachEvent("onclick", Clicku99);
else u99.addEventListener("click", Clicku99, true);
function Clicku99(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u16', 'pd3u16','none','',500,'none','',500);

}

}

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u18 = document.getElementById('u18');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');

u21.style.cursor = 'pointer';
if (bIE) u21.attachEvent("onclick", Clicku21);
else u21.addEventListener("click", Clicku21, true);
function Clicku21(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u21');
	SetPanelVisibility('u18','','fade',500);

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


if (true) {

SetWidgetSelected('u23');
	SetPanelVisibility('u18','hidden','fade',500);

}

}

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u25 = document.getElementById('u25');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u27 = document.getElementById('u27');

u27.style.cursor = 'pointer';
if (bIE) u27.attachEvent("onclick", Clicku27);
else u27.addEventListener("click", Clicku27, true);
function Clicku27(e)
{
windowEvent = e;


if (true) {

	self.location.href="Community_Summary.html" + GetQuerystring();

}

}

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u29 = document.getElementById('u29');

u29.style.cursor = 'pointer';
if (bIE) u29.attachEvent("onclick", Clicku29);
else u29.addEventListener("click", Clicku29, true);
function Clicku29(e)
{
windowEvent = e;


if (true) {

	self.location.href="Community_Summary.html" + GetQuerystring();

}

}

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u101 = document.getElementById('u101');

u101.style.cursor = 'pointer';
if (bIE) u101.attachEvent("onclick", Clicku101);
else u101.addEventListener("click", Clicku101, true);
function Clicku101(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u16', 'pd3u16','none','',500,'none','',500);

}

}

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u106 = document.getElementById('u106');

u106.style.cursor = 'pointer';
if (bIE) u106.attachEvent("onclick", Clicku106);
else u106.addEventListener("click", Clicku106, true);
function Clicku106(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u106');
}

}

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
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
gv_vAlignTable['u30'] = 'center';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
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
if ((GetPanelState('u16')) == ('pd2u16')) {

	SetPanelState('u16', 'pd3u16','none','',500,'none','',500);

}
else
if ((GetPanelState('u16')) == ('pd3u16')) {

	SetPanelState('u16', 'pd4u16','none','',500,'none','',500);

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

var u111 = document.getElementById('u111');

u111.style.cursor = 'pointer';
if (bIE) u111.attachEvent("onclick", Clicku111);
else u111.addEventListener("click", Clicku111, true);
function Clicku111(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u111');
}

}

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
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

var u116 = document.getElementById('u116');

u116.style.cursor = 'pointer';
if (bIE) u116.attachEvent("onclick", Clicku116);
else u116.addEventListener("click", Clicku116, true);
function Clicku116(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u116');
}

}

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u118 = document.getElementById('u118');

u118.style.cursor = 'pointer';
if (bIE) u118.attachEvent("onclick", Clicku118);
else u118.addEventListener("click", Clicku118, true);
function Clicku118(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u118');
}

}

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u40 = document.getElementById('u40');

u40.style.cursor = 'pointer';
if (bIE) u40.attachEvent("onclick", Clicku40);
else u40.addEventListener("click", Clicku40, true);
function Clicku40(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u40');
}

}

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u42 = document.getElementById('u42');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u44 = document.getElementById('u44');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u46 = document.getElementById('u46');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u48 = document.getElementById('u48');

u48.style.cursor = 'pointer';
if (bIE) u48.attachEvent("onclick", Clicku48);
else u48.addEventListener("click", Clicku48, true);
function Clicku48(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u48');
	SetPanelVisibility('u44','','fade',500);

}

}

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u120 = document.getElementById('u120');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u122 = document.getElementById('u122');

u122.style.cursor = 'pointer';
if (bIE) u122.attachEvent("onclick", Clicku122);
else u122.addEventListener("click", Clicku122, true);
function Clicku122(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u16', 'pd2u16','none','',500,'none','',500);

}

}

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u124 = document.getElementById('u124');

u124.style.cursor = 'pointer';
if (bIE) u124.attachEvent("onclick", Clicku124);
else u124.addEventListener("click", Clicku124, true);
function Clicku124(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u16', 'pd2u16','none','',500,'none','',500);

}

}

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
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
if ((GetPanelState('u16')) == ('pd2u16')) {

	SetPanelState('u16', 'pd3u16','none','',500,'none','',500);

}
else
if ((GetPanelState('u16')) == ('pd3u16')) {

	SetPanelState('u16', 'pd4u16','none','',500,'none','',500);

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

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", Clicku50);
else u50.addEventListener("click", Clicku50, true);
function Clicku50(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u50');
	SetPanelVisibility('u44','hidden','fade',500);

}

}

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u52 = document.getElementById('u52');

var u53 = document.getElementById('u53');

u53.style.cursor = 'pointer';
if (bIE) u53.attachEvent("onclick", Clicku53);
else u53.addEventListener("click", Clicku53, true);
function Clicku53(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u53');
	SetPanelVisibility('u44','','fade',500);

}

}

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u55 = document.getElementById('u55');

u55.style.cursor = 'pointer';
if (bIE) u55.attachEvent("onclick", Clicku55);
else u55.addEventListener("click", Clicku55, true);
function Clicku55(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u55');
	SetPanelVisibility('u44','hidden','fade',500);

}

}

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u57 = document.getElementById('u57');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u59 = document.getElementById('u59');

u59.style.cursor = 'pointer';
if (bIE) u59.attachEvent("onclick", Clicku59);
else u59.addEventListener("click", Clicku59, true);
function Clicku59(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u16', 'pd5u16','none','',500,'none','',500);

}

}

var u36 = document.getElementById('u36');

var u130 = document.getElementById('u130');

u130.style.cursor = 'pointer';
if (bIE) u130.attachEvent("onclick", Clicku130);
else u130.addEventListener("click", Clicku130, true);
function Clicku130(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u16', 'pd1u16','none','',500,'none','',500);

}

}

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u132 = document.getElementById('u132');

u132.style.cursor = 'pointer';
if (bIE) u132.attachEvent("onclick", Clicku132);
else u132.addEventListener("click", Clicku132, true);
function Clicku132(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u16', 'pd1u16','none','',500,'none','',500);

}

}

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u135 = document.getElementById('u135');

u135.style.cursor = 'pointer';
if (bIE) u135.attachEvent("onclick", Clicku135);
else u135.addEventListener("click", Clicku135, true);
function Clicku135(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u135');
}

}

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u137 = document.getElementById('u137');

u137.style.cursor = 'pointer';
if (bIE) u137.attachEvent("onclick", Clicku137);
else u137.addEventListener("click", Clicku137, true);
function Clicku137(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u137');
}

}

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u139 = document.getElementById('u139');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u61 = document.getElementById('u61');

u61.style.cursor = 'pointer';
if (bIE) u61.attachEvent("onclick", Clicku61);
else u61.addEventListener("click", Clicku61, true);
function Clicku61(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u16', 'pd5u16','none','',500,'none','',500);

}

}

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u64 = document.getElementById('u64');

u64.style.cursor = 'pointer';
if (bIE) u64.attachEvent("onclick", Clicku64);
else u64.addEventListener("click", Clicku64, true);
function Clicku64(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u64');
}

}

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u66 = document.getElementById('u66');

u66.style.cursor = 'pointer';
if (bIE) u66.attachEvent("onclick", Clicku66);
else u66.addEventListener("click", Clicku66, true);
function Clicku66(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u66');
}

}

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u68 = document.getElementById('u68');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u140 = document.getElementById('u140');

var u141 = document.getElementById('u141');

var u142 = document.getElementById('u142');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u144 = document.getElementById('u144');

var u70 = document.getElementById('u70');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u72 = document.getElementById('u72');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u74 = document.getElementById('u74');

u74.style.cursor = 'pointer';
if (bIE) u74.attachEvent("onclick", Clicku74);
else u74.addEventListener("click", Clicku74, true);
function Clicku74(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u74');
	SetPanelVisibility('u70','','fade',500);

}

}

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u76 = document.getElementById('u76');

u76.style.cursor = 'pointer';
if (bIE) u76.attachEvent("onclick", Clicku76);
else u76.addEventListener("click", Clicku76, true);
function Clicku76(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u76');
	SetPanelVisibility('u70','hidden','fade',500);

}

}

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u78 = document.getElementById('u78');

var u79 = document.getElementById('u79');

u79.style.cursor = 'pointer';
if (bIE) u79.attachEvent("onclick", Clicku79);
else u79.addEventListener("click", Clicku79, true);
function Clicku79(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u79');
	SetPanelVisibility('u70','','fade',500);

}

}

var u32 = document.getElementById('u32');

u32.style.cursor = 'pointer';
if (bIE) u32.attachEvent("onclick", Clicku32);
else u32.addEventListener("click", Clicku32, true);
function Clicku32(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u32');
}

}

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u34 = document.getElementById('u34');

u34.style.cursor = 'pointer';
if (bIE) u34.attachEvent("onclick", Clicku34);
else u34.addEventListener("click", Clicku34, true);
function Clicku34(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u34');
}

}

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
if (window.OnLoad) OnLoad();
