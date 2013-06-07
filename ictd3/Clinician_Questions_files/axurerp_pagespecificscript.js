
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
  value = value.replace(/\[\[GenDay\]\]/g, '7');
  value = value.replace(/\[\[GenMonth\]\]/g, '6');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'June');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'Friday');
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

if (true) {

SetWidgetSelected('u224');
SetWidgetSelected('u229');
SetWidgetSelected('u236');
SetWidgetSelected('u67');
SetWidgetSelected('u116');
SetWidgetSelected('u149');
SetWidgetSelected('u166');
SetWidgetSelected('u158');
SetWidgetSelected('u199');
}

}

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
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

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'top';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
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

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u80 = document.getElementById('u80');

u80.style.cursor = 'pointer';
if (bIE) u80.attachEvent("onclick", Clicku80);
else u80.addEventListener("click", Clicku80, true);
function Clicku80(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u80');
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
}

}

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u118 = document.getElementById('u118');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
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
}

}

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u122 = document.getElementById('u122');

u122.style.cursor = 'pointer';
if (bIE) u122.attachEvent("onclick", Clicku122);
else u122.addEventListener("click", Clicku122, true);
function Clicku122(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u122');
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

SetWidgetSelected('u124');
}

}

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u126 = document.getElementById('u126');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u128 = document.getElementById('u128');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
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

u130.style.cursor = 'pointer';
if (bIE) u130.attachEvent("onclick", Clicku130);
else u130.addEventListener("click", Clicku130, true);
function Clicku130(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u130');
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

SetWidgetSelected('u132');
}

}

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u134 = document.getElementById('u134');

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u136 = document.getElementById('u136');

u136.style.cursor = 'pointer';
if (bIE) u136.attachEvent("onclick", Clicku136);
else u136.addEventListener("click", Clicku136, true);
function Clicku136(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u136');
}

}

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u138 = document.getElementById('u138');

u138.style.cursor = 'pointer';
if (bIE) u138.attachEvent("onclick", Clicku138);
else u138.addEventListener("click", Clicku138, true);
function Clicku138(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u138');
}

}

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
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

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u143 = document.getElementById('u143');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u147 = document.getElementById('u147');

u147.style.cursor = 'pointer';
if (bIE) u147.attachEvent("onclick", Clicku147);
else u147.addEventListener("click", Clicku147, true);
function Clicku147(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u147');
	SetPanelVisibility('u120','','none',500);

SetGlobalVariableValue('$Pnemonia', '1');

}

}

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u149 = document.getElementById('u149');

u149.style.cursor = 'pointer';
if (bIE) u149.attachEvent("onclick", Clicku149);
else u149.addEventListener("click", Clicku149, true);
function Clicku149(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u149');
	SetPanelVisibility('u120','hidden','none',500);

SetGlobalVariableValue('$Pnemonia', '0');

}

}

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u47 = document.getElementById('u47');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u49 = document.getElementById('u49');

u49.style.cursor = 'pointer';
if (bIE) u49.attachEvent("onclick", Clicku49);
else u49.addEventListener("click", Clicku49, true);
function Clicku49(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u49');
}

}

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u151 = document.getElementById('u151');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u154 = document.getElementById('u154');

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u158 = document.getElementById('u158');

u158.style.cursor = 'pointer';
if (bIE) u158.attachEvent("onclick", Clicku158);
else u158.addEventListener("click", Clicku158, true);
function Clicku158(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u158');
	SetPanelVisibility('u169','','none',500);

SetGlobalVariableValue('$Malaria', '1');

}

}

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u55 = document.getElementById('u55');

u55.style.cursor = 'pointer';
if (bIE) u55.attachEvent("onclick", Clicku55);
else u55.addEventListener("click", Clicku55, true);
function Clicku55(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u55');
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

SetWidgetSelected('u57');
}

}

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u59 = document.getElementById('u59');

var u160 = document.getElementById('u160');

u160.style.cursor = 'pointer';
if (bIE) u160.attachEvent("onclick", Clicku160);
else u160.addEventListener("click", Clicku160, true);
function Clicku160(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u160');
	SetPanelVisibility('u169','hidden','none',500);

SetGlobalVariableValue('$Malaria', '0');

}

}

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u162 = document.getElementById('u162');

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
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

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
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
SetGlobalVariableValue('$Ear', '1');

	SetPanelVisibility('u47','','none',500);

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
SetGlobalVariableValue('$Ear', '0');

	SetPanelVisibility('u47','hidden','none',500);

}

}

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u69 = document.getElementById('u69');

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u173 = document.getElementById('u173');

u173.style.cursor = 'pointer';
if (bIE) u173.attachEvent("onclick", Clicku173);
else u173.addEventListener("click", Clicku173, true);
function Clicku173(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u173');
}

}

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u175 = document.getElementById('u175');

u175.style.cursor = 'pointer';
if (bIE) u175.attachEvent("onclick", Clicku175);
else u175.addEventListener("click", Clicku175, true);
function Clicku175(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u175');
}

}

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u177 = document.getElementById('u177');

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
}

}

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
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
gv_vAlignTable['u183'] = 'top';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
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

u187.style.cursor = 'pointer';
if (bIE) u187.attachEvent("onclick", Clicku187);
else u187.addEventListener("click", Clicku187, true);
function Clicku187(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u187');
}

}

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u189 = document.getElementById('u189');

var u190 = document.getElementById('u190');

u190.style.cursor = 'pointer';
if (bIE) u190.attachEvent("onclick", Clicku190);
else u190.addEventListener("click", Clicku190, true);
function Clicku190(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u190');
}

}

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u192 = document.getElementById('u192');

u192.style.cursor = 'pointer';
if (bIE) u192.attachEvent("onclick", Clicku192);
else u192.addEventListener("click", Clicku192, true);
function Clicku192(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u192');
}

}

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u194 = document.getElementById('u194');

var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u197 = document.getElementById('u197');

u197.style.cursor = 'pointer';
if (bIE) u197.attachEvent("onclick", Clicku197);
else u197.addEventListener("click", Clicku197, true);
function Clicku197(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u197');
}

}

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'center';
var u199 = document.getElementById('u199');

u199.style.cursor = 'pointer';
if (bIE) u199.attachEvent("onclick", Clicku199);
else u199.addEventListener("click", Clicku199, true);
function Clicku199(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u199');
}

}

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

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u98 = document.getElementById('u98');

u98.style.cursor = 'pointer';
if (bIE) u98.attachEvent("onclick", Clicku98);
else u98.addEventListener("click", Clicku98, true);
function Clicku98(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u98');
}

}

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
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
var u104 = document.getElementById('u104');

u104.style.cursor = 'pointer';
if (bIE) u104.attachEvent("onclick", Clicku104);
else u104.addEventListener("click", Clicku104, true);
function Clicku104(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u104');
}

}

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
gv_vAlignTable['u17'] = 'top';
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
var u110 = document.getElementById('u110');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u114 = document.getElementById('u114');

u114.style.cursor = 'pointer';
if (bIE) u114.attachEvent("onclick", Clicku114);
else u114.addEventListener("click", Clicku114, true);
function Clicku114(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u114');
SetGlobalVariableValue('$Diarrhea', '1');

	SetPanelVisibility('u72','','none',500);

}

}

var u250 = document.getElementById('u250');

var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'top';
var u116 = document.getElementById('u116');

u116.style.cursor = 'pointer';
if (bIE) u116.attachEvent("onclick", Clicku116);
else u116.addEventListener("click", Clicku116, true);
function Clicku116(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u116');
SetGlobalVariableValue('$Diarrhea', '0');

	SetPanelVisibility('u72','hidden','none',500);

}

}

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'top';
var u254 = document.getElementById('u254');

var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u20');
}

}

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'center';
var u201 = document.getElementById('u201');

var u202 = document.getElementById('u202');

var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u208 = document.getElementById('u208');

u208.style.cursor = 'pointer';
if (bIE) u208.attachEvent("onclick", Clicku208);
else u208.addEventListener("click", Clicku208, true);
function Clicku208(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u208');
}

}

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u120 = document.getElementById('u120');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
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

u210.style.cursor = 'pointer';
if (bIE) u210.attachEvent("onclick", Clicku210);
else u210.addEventListener("click", Clicku210, true);
function Clicku210(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u210');
}

}

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u212 = document.getElementById('u212');

var u213 = document.getElementById('u213');

u213.style.cursor = 'pointer';
if (bIE) u213.attachEvent("onclick", Clicku213);
else u213.addEventListener("click", Clicku213, true);
function Clicku213(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u213');
}

}

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

SetWidgetSelected('u215');
}

}

var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'center';
var u217 = document.getElementById('u217');

var u218 = document.getElementById('u218');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u40 = document.getElementById('u40');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u42 = document.getElementById('u42');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u224 = document.getElementById('u224');

u224.style.cursor = 'pointer';
if (bIE) u224.attachEvent("onclick", Clicku224);
else u224.addEventListener("click", Clicku224, true);
function Clicku224(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u224');
}

}

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u226 = document.getElementById('u226');

u226.style.cursor = 'pointer';
if (bIE) u226.attachEvent("onclick", Clicku226);
else u226.addEventListener("click", Clicku226, true);
function Clicku226(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u226');
}

}

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u228 = document.getElementById('u228');

var u229 = document.getElementById('u229');

u229.style.cursor = 'pointer';
if (bIE) u229.attachEvent("onclick", Clicku229);
else u229.addEventListener("click", Clicku229, true);
function Clicku229(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u229');
}

}

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
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

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u231 = document.getElementById('u231');

u231.style.cursor = 'pointer';
if (bIE) u231.attachEvent("onclick", Clicku231);
else u231.addEventListener("click", Clicku231, true);
function Clicku231(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u231');
}

}

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u233 = document.getElementById('u233');

var u234 = document.getElementById('u234');

u234.style.cursor = 'pointer';
if (bIE) u234.attachEvent("onclick", Clicku234);
else u234.addEventListener("click", Clicku234, true);
function Clicku234(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u234');
}

}

var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'center';
var u236 = document.getElementById('u236');

u236.style.cursor = 'pointer';
if (bIE) u236.attachEvent("onclick", Clicku236);
else u236.addEventListener("click", Clicku236, true);
function Clicku236(e)
{
windowEvent = e;


if (true) {

SetWidgetSelected('u236');
}

}

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'center';
var u238 = document.getElementById('u238');

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u61 = document.getElementById('u61');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'top';
var u241 = document.getElementById('u241');

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'top';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u247 = document.getElementById('u247');

var u248 = document.getElementById('u248');

var u249 = document.getElementById('u249');

if (window.OnLoad) OnLoad();
