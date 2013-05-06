
var PageName = 'Clinician Questions';
var PageId = '4746a2ee3b3e415d87892bc18187afaf'
var PageUrl = 'Clinician_Questions.html'
document.title = 'Clinician Questions';
var PageNotes = 
{
"pageName":"Clinician Questions",
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

if ((GetGlobalVariableValue('$ClinicalSummaryLoad')) == ('1')) {

	SetPanelState('u16', 'pd0u16','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$ClinicalSummaryLoad')) == ('2')) {

	SetPanelState('u16', 'pd1u16','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$ClinicalSummaryLoad')) == ('3')) {

	SetPanelState('u16', 'pd2u16','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$ClinicalSummaryLoad')) == ('4')) {

	SetPanelState('u16', 'pd3u16','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$ClinicalSummaryLoad')) == ('5')) {

	SetPanelState('u16', 'pd4u16','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$ClinicalSummaryLoad')) == ('6')) {

	SetPanelState('u16', 'pd5u16','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('$ClinicalSummaryLoad')) == ('7')) {

	SetPanelState('u16', 'pd6u16','none','',500,'none','',500);

}

}

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u71 = document.getElementById('u71');

u71.style.cursor = 'pointer';
if (bIE) u71.attachEvent("onclick", Clicku71);
else u71.addEventListener("click", Clicku71, true);
function Clicku71(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u16', 'pd5u16','none','',500,'none','',500);

}

}

var u100 = document.getElementById('u100');

u100.style.cursor = 'pointer';
if (bIE) u100.attachEvent("onclick", Clicku100);
else u100.addEventListener("click", Clicku100, true);
function Clicku100(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u100');
}

}

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u102 = document.getElementById('u102');

u102.style.cursor = 'pointer';
if (bIE) u102.attachEvent("onclick", Clicku102);
else u102.addEventListener("click", Clicku102, true);
function Clicku102(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u102');
}

}

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u104 = document.getElementById('u104');

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
var u80 = document.getElementById('u80');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u110 = document.getElementById('u110');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
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

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u88 = document.getElementById('u88');

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u88');
}

}

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u119 = document.getElementById('u119');

u119.style.cursor = 'pointer';
if (bIE) u119.attachEvent("onclick", Clicku119);
else u119.addEventListener("click", Clicku119, true);
function Clicku119(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u119');
}

}

var u90 = document.getElementById('u90');

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", Clicku90);
else u90.addEventListener("click", Clicku90, true);
function Clicku90(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u90');
}

}

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u92 = document.getElementById('u92');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u123 = document.getElementById('u123');

var u124 = document.getElementById('u124');

u124.style.cursor = 'pointer';
if (bIE) u124.attachEvent("onclick", Clicku124);
else u124.addEventListener("click", Clicku124, true);
function Clicku124(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u16', 'pd4u16','none','',500,'none','',500);

}

}

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u126 = document.getElementById('u126');

u126.style.cursor = 'pointer';
if (bIE) u126.attachEvent("onclick", Clicku126);
else u126.addEventListener("click", Clicku126, true);
function Clicku126(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u16', 'pd4u16','none','',500,'none','',500);

}

}

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u129 = document.getElementById('u129');

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

u26.style.cursor = 'pointer';
if (bIE) u26.attachEvent("onclick", Clicku26);
else u26.addEventListener("click", Clicku26, true);
function Clicku26(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u26');
}

}

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u28 = document.getElementById('u28');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u131 = document.getElementById('u131');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u133 = document.getElementById('u133');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u135 = document.getElementById('u135');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
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

u139.style.cursor = 'pointer';
if (bIE) u139.attachEvent("onclick", Clicku139);
else u139.addEventListener("click", Clicku139, true);
function Clicku139(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u139');
}

}

var u34 = document.getElementById('u34');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u36 = document.getElementById('u36');

u36.style.cursor = 'pointer';
if (bIE) u36.attachEvent("onclick", Clicku36);
else u36.addEventListener("click", Clicku36, true);
function Clicku36(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u36');
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

SetWidgetSelected('u38');
}

}

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u141 = document.getElementById('u141');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u143 = document.getElementById('u143');

u143.style.cursor = 'pointer';
if (bIE) u143.attachEvent("onclick", Clicku143);
else u143.addEventListener("click", Clicku143, true);
function Clicku143(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u143');
}

}

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u145 = document.getElementById('u145');

u145.style.cursor = 'pointer';
if (bIE) u145.attachEvent("onclick", Clicku145);
else u145.addEventListener("click", Clicku145, true);
function Clicku145(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u145');
}

}

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u147 = document.getElementById('u147');

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u149 = document.getElementById('u149');

u149.style.cursor = 'pointer';
if (bIE) u149.attachEvent("onclick", Clicku149);
else u149.addEventListener("click", Clicku149, true);
function Clicku149(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u16', 'pd3u16','none','',500,'none','',500);

}

}

var u44 = document.getElementById('u44');

u44.style.cursor = 'pointer';
if (bIE) u44.attachEvent("onclick", Clicku44);
else u44.addEventListener("click", Clicku44, true);
function Clicku44(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u44');
}

}

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
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

	SetPanelState('u16', 'pd6u16','none','',500,'none','',500);

}

}

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u151 = document.getElementById('u151');

u151.style.cursor = 'pointer';
if (bIE) u151.attachEvent("onclick", Clicku151);
else u151.addEventListener("click", Clicku151, true);
function Clicku151(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u16', 'pd3u16','none','',500,'none','',500);

}

}

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u154 = document.getElementById('u154');

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u156 = document.getElementById('u156');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u159 = document.getElementById('u159');

u159.style.cursor = 'pointer';
if (bIE) u159.attachEvent("onclick", Clicku159);
else u159.addEventListener("click", Clicku159, true);
function Clicku159(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u159');
}

}

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u55 = document.getElementById('u55');

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u161 = document.getElementById('u161');

u161.style.cursor = 'pointer';
if (bIE) u161.attachEvent("onclick", Clicku161);
else u161.addEventListener("click", Clicku161, true);
function Clicku161(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u161');
}

}

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u163 = document.getElementById('u163');

var u164 = document.getElementById('u164');

u164.style.cursor = 'pointer';
if (bIE) u164.attachEvent("onclick", Clicku164);
else u164.addEventListener("click", Clicku164, true);
function Clicku164(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u164');
}

}

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u166 = document.getElementById('u166');

u166.style.cursor = 'pointer';
if (bIE) u166.attachEvent("onclick", Clicku166);
else u166.addEventListener("click", Clicku166, true);
function Clicku166(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u166');
}

}

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u168 = document.getElementById('u168');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u170 = document.getElementById('u170');

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u172 = document.getElementById('u172');

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u174 = document.getElementById('u174');

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u178 = document.getElementById('u178');

u178.style.cursor = 'pointer';
if (bIE) u178.attachEvent("onclick", Clicku178);
else u178.addEventListener("click", Clicku178, true);
function Clicku178(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u178');
}

}

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u73 = document.getElementById('u73');

u73.style.cursor = 'pointer';
if (bIE) u73.attachEvent("onclick", Clicku73);
else u73.addEventListener("click", Clicku73, true);
function Clicku73(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u16', 'pd5u16','none','',500,'none','',500);

}

}

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u76 = document.getElementById('u76');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u78 = document.getElementById('u78');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u180 = document.getElementById('u180');

u180.style.cursor = 'pointer';
if (bIE) u180.attachEvent("onclick", Clicku180);
else u180.addEventListener("click", Clicku180, true);
function Clicku180(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u180');
}

}

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u182 = document.getElementById('u182');

var u183 = document.getElementById('u183');

u183.style.cursor = 'pointer';
if (bIE) u183.attachEvent("onclick", Clicku183);
else u183.addEventListener("click", Clicku183, true);
function Clicku183(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u183');
}

}

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u185 = document.getElementById('u185');

u185.style.cursor = 'pointer';
if (bIE) u185.attachEvent("onclick", Clicku185);
else u185.addEventListener("click", Clicku185, true);
function Clicku185(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u185');
}

}

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u187 = document.getElementById('u187');

var u188 = document.getElementById('u188');

u188.style.cursor = 'pointer';
if (bIE) u188.attachEvent("onclick", Clicku188);
else u188.addEventListener("click", Clicku188, true);
function Clicku188(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u16', 'pd2u16','none','',500,'none','',500);

}

}

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u82 = document.getElementById('u82');

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u82');
}

}

var u190 = document.getElementById('u190');

u190.style.cursor = 'pointer';
if (bIE) u190.attachEvent("onclick", Clicku190);
else u190.addEventListener("click", Clicku190, true);
function Clicku190(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u16', 'pd2u16','none','',500,'none','',500);

}

}

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u193 = document.getElementById('u193');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u195 = document.getElementById('u195');

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u198 = document.getElementById('u198');

u198.style.cursor = 'pointer';
if (bIE) u198.attachEvent("onclick", Clicku198);
else u198.addEventListener("click", Clicku198, true);
function Clicku198(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u198');
}

}

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
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
gv_vAlignTable['u99'] = 'top';
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

	self.location.href="Clinician_Summary.html" + GetQuerystring();

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

	SetPanelState('u16', 'pd6u16','none','',500,'none','',500);

}
else
if ((GetPanelState('u16')) == ('pd6u16')) {

	self.location.href="Clinician_Summary.html" + GetQuerystring();

}

}

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
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

	SetPanelState('u16', 'pd6u16','none','',500,'none','',500);

}
else
if ((GetPanelState('u16')) == ('pd6u16')) {

	self.location.href="Clinician_Summary.html" + GetQuerystring();

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


if ((GetPanelState('u16')) == ('pd0u16')) {

}
else
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
else
if ((GetPanelState('u16')) == ('pd6u16')) {

	SetPanelState('u16', 'pd5u16','none','',500,'none','',500);

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


if ((GetPanelState('u16')) == ('pd0u16')) {

}
else
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
else
if ((GetPanelState('u16')) == ('pd6u16')) {

	SetPanelState('u16', 'pd5u16','none','',500,'none','',500);

}

}

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u16 = document.getElementById('u16');

var u17 = document.getElementById('u17');

u17.style.cursor = 'pointer';
if (bIE) u17.attachEvent("onclick", Clicku17);
else u17.addEventListener("click", Clicku17, true);
function Clicku17(e)
{
windowEvent = e;


if (true) {

	self.location.href="Clinician_Summary.html" + GetQuerystring();

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

	self.location.href="Clinician_Summary.html" + GetQuerystring();

}

}

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u112 = document.getElementById('u112');

u112.style.cursor = 'pointer';
if (bIE) u112.attachEvent("onclick", Clicku112);
else u112.addEventListener("click", Clicku112, true);
function Clicku112(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u112');
}

}

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u114 = document.getElementById('u114');

u114.style.cursor = 'pointer';
if (bIE) u114.attachEvent("onclick", Clicku114);
else u114.addEventListener("click", Clicku114, true);
function Clicku114(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u114');
}

}

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u116 = document.getElementById('u116');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u200 = document.getElementById('u200');

u200.style.cursor = 'pointer';
if (bIE) u200.attachEvent("onclick", Clicku200);
else u200.addEventListener("click", Clicku200, true);
function Clicku200(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u200');
}

}

var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u202 = document.getElementById('u202');

var u203 = document.getElementById('u203');

u203.style.cursor = 'pointer';
if (bIE) u203.attachEvent("onclick", Clicku203);
else u203.addEventListener("click", Clicku203, true);
function Clicku203(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u203');
}

}

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u205 = document.getElementById('u205');

u205.style.cursor = 'pointer';
if (bIE) u205.attachEvent("onclick", Clicku205);
else u205.addEventListener("click", Clicku205, true);
function Clicku205(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u205');
}

}

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'center';
var u207 = document.getElementById('u207');

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u209 = document.getElementById('u209');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u121 = document.getElementById('u121');

u121.style.cursor = 'pointer';
if (bIE) u121.attachEvent("onclick", Clicku121);
else u121.addEventListener("click", Clicku121, true);
function Clicku121(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u121');
}

}

var u30 = document.getElementById('u30');

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", Clicku30);
else u30.addEventListener("click", Clicku30, true);
function Clicku30(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u30');
}

}

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
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
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u211 = document.getElementById('u211');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u213 = document.getElementById('u213');

var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'center';
var u215 = document.getElementById('u215');

u215.style.cursor = 'pointer';
if (bIE) u215.attachEvent("onclick", Clicku215);
else u215.addEventListener("click", Clicku215, true);
function Clicku215(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u16', 'pd1u16','none','',500,'none','',500);

}

}

var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'center';
var u217 = document.getElementById('u217');

u217.style.cursor = 'pointer';
if (bIE) u217.attachEvent("onclick", Clicku217);
else u217.addEventListener("click", Clicku217, true);
function Clicku217(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u16', 'pd1u16','none','',500,'none','',500);

}

}

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'center';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u40 = document.getElementById('u40');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u42 = document.getElementById('u42');

u42.style.cursor = 'pointer';
if (bIE) u42.attachEvent("onclick", Clicku42);
else u42.addEventListener("click", Clicku42, true);
function Clicku42(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u42');
}

}

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u220 = document.getElementById('u220');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u222 = document.getElementById('u222');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'center';
var u224 = document.getElementById('u224');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u226 = document.getElementById('u226');

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u228 = document.getElementById('u228');

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'center';
var u50 = document.getElementById('u50');

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", Clicku50);
else u50.addEventListener("click", Clicku50, true);
function Clicku50(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u16', 'pd6u16','none','',500,'none','',500);

}

}

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u53 = document.getElementById('u53');

var u230 = document.getElementById('u230');

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'center';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u57 = document.getElementById('u57');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u59 = document.getElementById('u59');

u59.style.cursor = 'pointer';
if (bIE) u59.attachEvent("onclick", Clicku59);
else u59.addEventListener("click", Clicku59, true);
function Clicku59(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u59');
}

}

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

SetWidgetSelected('u61');
}

}

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u63 = document.getElementById('u63');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u65 = document.getElementById('u65');

u65.style.cursor = 'pointer';
if (bIE) u65.attachEvent("onclick", Clicku65);
else u65.addEventListener("click", Clicku65, true);
function Clicku65(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u65');
}

}

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u67 = document.getElementById('u67');

u67.style.cursor = 'pointer';
if (bIE) u67.attachEvent("onclick", Clicku67);
else u67.addEventListener("click", Clicku67, true);
function Clicku67(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u67');
}

}

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u69 = document.getElementById('u69');

if (window.OnLoad) OnLoad();
