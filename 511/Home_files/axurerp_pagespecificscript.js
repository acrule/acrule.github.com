
var PageName = 'Home';
var PageId = 'a9279e7267944116913081f6d0608902'
var PageUrl = 'Home.html'
document.title = 'Home';
var PageNotes = 
{
"pageName":"Home",
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

}

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u71 = document.getElementById('u71');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u101 = document.getElementById('u101');

var u102 = document.getElementById('u102');

u102.style.cursor = 'pointer';
if (bIE) u102.attachEvent("onclick", Clicku102);
else u102.addEventListener("click", Clicku102, true);
function Clicku102(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u101', 'pd0u101','none','',500,'fade','',500);

}

}

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u104 = document.getElementById('u104');

u104.style.cursor = 'pointer';
if (bIE) u104.attachEvent("onclick", Clicku104);
else u104.addEventListener("click", Clicku104, true);
function Clicku104(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u101', 'pd1u101','none','',500,'fade','',500);

}

}

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u108 = document.getElementById('u108');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u80 = document.getElementById('u80');

var u81 = document.getElementById('u81');

u81.style.cursor = 'pointer';
if (bIE) u81.attachEvent("onclick", Clicku81);
else u81.addEventListener("click", Clicku81, true);
function Clicku81(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u80', 'pd0u80','none','',500,'fade','',500);

}

}

var u110 = document.getElementById('u110');

var u111 = document.getElementById('u111');

u111.style.cursor = 'pointer';
if (bIE) u111.attachEvent("onclick", Clicku111);
else u111.addEventListener("click", Clicku111, true);
function Clicku111(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u110', 'pd0u110','none','',500,'fade','',500);

}

}

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u85 = document.getElementById('u85');

u85.style.cursor = 'pointer';
if (bIE) u85.attachEvent("onclick", Clicku85);
else u85.addEventListener("click", Clicku85, true);
function Clicku85(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u80', 'pd7u80','none','',500,'fade','',500);

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

	SetPanelState('u80', 'pd6u80','none','',500,'fade','',500);

}

}

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u89 = document.getElementById('u89');

u89.style.cursor = 'pointer';
if (bIE) u89.attachEvent("onclick", Clicku89);
else u89.addEventListener("click", Clicku89, true);
function Clicku89(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u80', 'pd5u80','none','',500,'fade','',500);

}

}

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u119 = document.getElementById('u119');

u119.style.cursor = 'pointer';
if (bIE) u119.attachEvent("onclick", Clicku119);
else u119.addEventListener("click", Clicku119, true);
function Clicku119(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u110', 'pd1u110','none','',500,'fade','',500);

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

	SetPanelState('u80', 'pd4u80','none','',500,'fade','',500);

}

}

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u93 = document.getElementById('u93');

u93.style.cursor = 'pointer';
if (bIE) u93.attachEvent("onclick", Clicku93);
else u93.addEventListener("click", Clicku93, true);
function Clicku93(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u80', 'pd3u80','none','',500,'fade','',500);

}

}

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

	SetPanelState('u123', 'pd0u123','none','',500,'fade','',500);

}

}

var u97 = document.getElementById('u97');

u97.style.cursor = 'pointer';
if (bIE) u97.attachEvent("onclick", Clicku97);
else u97.addEventListener("click", Clicku97, true);
function Clicku97(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u80', 'pd1u80','none','',500,'fade','',500);

}

}

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u128 = document.getElementById('u128');

u128.style.cursor = 'pointer';
if (bIE) u128.attachEvent("onclick", Clicku128);
else u128.addEventListener("click", Clicku128, true);
function Clicku128(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u123', 'pd1u123','none','',500,'fade','',500);

}

}

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
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

	SetPanelState('u22', 'pd7u22','none','',500,'none','',500);

}

if ((GetPanelState('u1')) == ('pd0u1')) {

	SetPanelState('u39', 'pd7u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd1u1')) {

	SetPanelState('u39', 'pd15u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd2u1')) {

	SetPanelState('u39', 'pd31u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd3u1')) {

	SetPanelState('u39', 'pd23u39','none','',500,'fade','',500);

}

}

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u27 = document.getElementById('u27');

u27.style.cursor = 'pointer';
if (bIE) u27.attachEvent("onclick", Clicku27);
else u27.addEventListener("click", Clicku27, true);
function Clicku27(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u22', 'pd6u22','none','',500,'none','',500);

}

if ((GetPanelState('u1')) == ('pd0u1')) {

	SetPanelState('u39', 'pd6u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd1u1')) {

	SetPanelState('u39', 'pd14u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd2u1')) {

	SetPanelState('u39', 'pd30u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd3u1')) {

	SetPanelState('u39', 'pd22u39','none','',500,'fade','',500);

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

	SetPanelState('u22', 'pd5u22','none','',500,'none','',500);

}

if ((GetPanelState('u1')) == ('pd0u1')) {

	SetPanelState('u39', 'pd5u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd1u1')) {

	SetPanelState('u39', 'pd13u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd2u1')) {

	SetPanelState('u39', 'pd29u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd3u1')) {

	SetPanelState('u39', 'pd21u39','none','',500,'fade','',500);

}

}

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u131 = document.getElementById('u131');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u133 = document.getElementById('u133');

var u134 = document.getElementById('u134');

u134.style.cursor = 'pointer';
if (bIE) u134.attachEvent("onclick", Clicku134);
else u134.addEventListener("click", Clicku134, true);
function Clicku134(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u133', 'pd0u133','none','',500,'fade','',500);

}

}

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u136 = document.getElementById('u136');

u136.style.cursor = 'pointer';
if (bIE) u136.attachEvent("onclick", Clicku136);
else u136.addEventListener("click", Clicku136, true);
function Clicku136(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u133', 'pd1u133','none','',500,'fade','',500);

}

}

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u138 = document.getElementById('u138');

var u139 = document.getElementById('u139');

u139.style.cursor = 'pointer';
if (bIE) u139.attachEvent("onclick", Clicku139);
else u139.addEventListener("click", Clicku139, true);
function Clicku139(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u138', 'pd0u138','none','',500,'fade','',500);

}

}

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u141 = document.getElementById('u141');

u141.style.cursor = 'pointer';
if (bIE) u141.attachEvent("onclick", Clicku141);
else u141.addEventListener("click", Clicku141, true);
function Clicku141(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u138', 'pd9u138','none','',500,'fade','',500);

}

}

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u143 = document.getElementById('u143');

u143.style.cursor = 'pointer';
if (bIE) u143.attachEvent("onclick", Clicku143);
else u143.addEventListener("click", Clicku143, true);
function Clicku143(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u138', 'pd8u138','none','',500,'fade','',500);

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

	SetPanelState('u138', 'pd7u138','none','',500,'fade','',500);

}

}

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u147 = document.getElementById('u147');

u147.style.cursor = 'pointer';
if (bIE) u147.attachEvent("onclick", Clicku147);
else u147.addEventListener("click", Clicku147, true);
function Clicku147(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u138', 'pd6u138','none','',500,'fade','',500);

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

	SetPanelState('u138', 'pd5u138','none','',500,'fade','',500);

}

}

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

	SetPanelState('u138', 'pd4u138','none','',500,'fade','',500);

}

}

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u153 = document.getElementById('u153');

u153.style.cursor = 'pointer';
if (bIE) u153.attachEvent("onclick", Clicku153);
else u153.addEventListener("click", Clicku153, true);
function Clicku153(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u138', 'pd3u138','none','',500,'fade','',500);

}

}

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u155 = document.getElementById('u155');

u155.style.cursor = 'pointer';
if (bIE) u155.attachEvent("onclick", Clicku155);
else u155.addEventListener("click", Clicku155, true);
function Clicku155(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u138', 'pd2u138','none','',500,'fade','',500);

}

}

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u157 = document.getElementById('u157');

u157.style.cursor = 'pointer';
if (bIE) u157.attachEvent("onclick", Clicku157);
else u157.addEventListener("click", Clicku157, true);
function Clicku157(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u138', 'pd1u138','none','',500,'fade','',500);

}

}

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u160 = document.getElementById('u160');

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u162 = document.getElementById('u162');

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u164 = document.getElementById('u164');

var u165 = document.getElementById('u165');

u165.style.cursor = 'pointer';
if (bIE) u165.attachEvent("onclick", Clicku165);
else u165.addEventListener("click", Clicku165, true);
function Clicku165(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u164', 'pd0u164','none','',500,'fade','',500);

}

}

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u167 = document.getElementById('u167');

u167.style.cursor = 'pointer';
if (bIE) u167.attachEvent("onclick", Clicku167);
else u167.addEventListener("click", Clicku167, true);
function Clicku167(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u164', 'pd4u164','none','',500,'fade','',500);

}

}

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u169 = document.getElementById('u169');

u169.style.cursor = 'pointer';
if (bIE) u169.attachEvent("onclick", Clicku169);
else u169.addEventListener("click", Clicku169, true);
function Clicku169(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u164', 'pd3u164','none','',500,'fade','',500);

}

}

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'center';
var u171 = document.getElementById('u171');

u171.style.cursor = 'pointer';
if (bIE) u171.attachEvent("onclick", Clicku171);
else u171.addEventListener("click", Clicku171, true);
function Clicku171(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u164', 'pd2u164','none','',500,'fade','',500);

}

}

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u173 = document.getElementById('u173');

u173.style.cursor = 'pointer';
if (bIE) u173.attachEvent("onclick", Clicku173);
else u173.addEventListener("click", Clicku173, true);
function Clicku173(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u164', 'pd1u164','none','',500,'fade','',500);

}

}

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u178 = document.getElementById('u178');

var u179 = document.getElementById('u179');

u179.style.cursor = 'pointer';
if (bIE) u179.attachEvent("onclick", Clicku179);
else u179.addEventListener("click", Clicku179, true);
function Clicku179(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u178', 'pd0u178','none','',500,'fade','',500);

}

}

var u72 = document.getElementById('u72');

u72.style.cursor = 'pointer';
if (bIE) u72.attachEvent("onclick", Clicku72);
else u72.addEventListener("click", Clicku72, true);
function Clicku72(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u71', 'pd0u71','none','',500,'fade','',500);

}

}

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u74 = document.getElementById('u74');

u74.style.cursor = 'pointer';
if (bIE) u74.attachEvent("onclick", Clicku74);
else u74.addEventListener("click", Clicku74, true);
function Clicku74(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u71', 'pd3u71','none','',500,'fade','',500);

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

	SetPanelState('u71', 'pd2u71','none','',500,'fade','',500);

}

}

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u78 = document.getElementById('u78');

u78.style.cursor = 'pointer';
if (bIE) u78.attachEvent("onclick", Clicku78);
else u78.addEventListener("click", Clicku78, true);
function Clicku78(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u71', 'pd1u71','none','',500,'fade','',500);

}

}

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u181 = document.getElementById('u181');

u181.style.cursor = 'pointer';
if (bIE) u181.attachEvent("onclick", Clicku181);
else u181.addEventListener("click", Clicku181, true);
function Clicku181(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u178', 'pd2u178','none','',500,'fade','',500);

}

}

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u183 = document.getElementById('u183');

u183.style.cursor = 'pointer';
if (bIE) u183.attachEvent("onclick", Clicku183);
else u183.addEventListener("click", Clicku183, true);
function Clicku183(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u178', 'pd1u178','none','',500,'fade','',500);

}

}

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'top';
var u186 = document.getElementById('u186');

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u188 = document.getElementById('u188');

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u83 = document.getElementById('u83');

u83.style.cursor = 'pointer';
if (bIE) u83.attachEvent("onclick", Clicku83);
else u83.addEventListener("click", Clicku83, true);
function Clicku83(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u80', 'pd8u80','none','',500,'fade','',500);

}

}

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u214 = document.getElementById('u214');

var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u190 = document.getElementById('u190');

var u191 = document.getElementById('u191');

u191.style.cursor = 'pointer';
if (bIE) u191.attachEvent("onclick", Clicku191);
else u191.addEventListener("click", Clicku191, true);
function Clicku191(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u190', 'pd0u190','none','',500,'fade','',500);

}

}

var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'center';
var u193 = document.getElementById('u193');

u193.style.cursor = 'pointer';
if (bIE) u193.attachEvent("onclick", Clicku193);
else u193.addEventListener("click", Clicku193, true);
function Clicku193(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u190', 'pd9u190','none','',500,'fade','',500);

}

}

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u195 = document.getElementById('u195');

u195.style.cursor = 'pointer';
if (bIE) u195.attachEvent("onclick", Clicku195);
else u195.addEventListener("click", Clicku195, true);
function Clicku195(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u190', 'pd8u190','none','',500,'fade','',500);

}

}

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u197 = document.getElementById('u197');

u197.style.cursor = 'pointer';
if (bIE) u197.attachEvent("onclick", Clicku197);
else u197.addEventListener("click", Clicku197, true);
function Clicku197(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u190', 'pd7u190','none','',500,'fade','',500);

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

	SetPanelState('u190', 'pd6u190','none','',500,'fade','',500);

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

	SetPanelState('u80', 'pd2u80','none','',500,'fade','',500);

}

}

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u99 = document.getElementById('u99');

var u0 = document.getElementById('u0');

u0.style.cursor = 'pointer';
if (bIE) u0.attachEvent("onclick", Clicku0);
else u0.addEventListener("click", Clicku0, true);
function Clicku0(e)
{
windowEvent = e;


if (true) {

	self.location.href="video.html" + GetQuerystring();

}

}
gv_vAlignTable['u0'] = 'top';
var u1 = document.getElementById('u1');

var u2 = document.getElementById('u2');

u2.style.cursor = 'pointer';
if (bIE) u2.attachEvent("onclick", Clicku2);
else u2.addEventListener("click", Clicku2, true);
function Clicku2(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1', 'pd0u1','none','',500,'none','',500);

}

}

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

	SetPanelState('u1', 'pd9u1','none','',500,'none','',500);

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


if (true) {

	SetPanelState('u1', 'pd8u1','none','',500,'none','',500);

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

	SetPanelState('u1', 'pd7u1','none','',500,'none','',500);

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


if (true) {

	SetPanelState('u1', 'pd6u1','none','',500,'none','',500);

}
else
if ((GetPanelState('u22')) == ('pd0u22')) {

	SetPanelState('u39', 'pd1u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd1u22')) {

	SetPanelState('u39', 'pd11u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd2u22')) {

	SetPanelState('u39', 'pd21u39','none','',500,'fade','',500);

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


if (true) {

	SetPanelState('u1', 'pd5u1','none','',500,'none','',500);

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


if (true) {

	SetPanelState('u1', 'pd0u1','none','',500,'none','',500);

}

if ((GetPanelState('u22')) == ('pd0u22')) {

	SetPanelState('u39', 'pd0u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd1u22')) {

	SetPanelState('u39', 'pd1u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd2u22')) {

	SetPanelState('u39', 'pd2u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd3u22')) {

	SetPanelState('u39', 'pd3u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd4u22')) {

	SetPanelState('u39', 'pd4u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd5u22')) {

	SetPanelState('u39', 'pd5u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd6u22')) {

	SetPanelState('u39', 'pd6u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd7u22')) {

	SetPanelState('u39', 'pd7u39','none','',500,'fade','',500);

}

}

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1', 'pd3u1','none','',500,'none','',500);

}

if ((GetPanelState('u22')) == ('pd0u22')) {

	SetPanelState('u39', 'pd16u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd1u22')) {

	SetPanelState('u39', 'pd17u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd2u22')) {

	SetPanelState('u39', 'pd18u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd3u22')) {

	SetPanelState('u39', 'pd19u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd4u22')) {

	SetPanelState('u39', 'pd20u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd5u22')) {

	SetPanelState('u39', 'pd5u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd6u22')) {

	SetPanelState('u39', 'pd22u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd7u22')) {

	SetPanelState('u39', 'pd23u39','none','',500,'fade','',500);

}

}

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

	SetPanelState('u1', 'pd2u1','none','',500,'none','',500);

}

if ((GetPanelState('u22')) == ('pd0u22')) {

	SetPanelState('u39', 'pd24u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd1u22')) {

	SetPanelState('u39', 'pd25u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd2u22')) {

	SetPanelState('u39', 'pd26u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd3u22')) {

	SetPanelState('u39', 'pd27u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd4u22')) {

	SetPanelState('u39', 'pd28u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd5u22')) {

	SetPanelState('u39', 'pd29u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd6u22')) {

	SetPanelState('u39', 'pd30u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd7u22')) {

	SetPanelState('u39', 'pd31u39','none','',500,'fade','',500);

}

}

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u113 = document.getElementById('u113');

u113.style.cursor = 'pointer';
if (bIE) u113.attachEvent("onclick", Clicku113);
else u113.addEventListener("click", Clicku113, true);
function Clicku113(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u110', 'pd4u110','none','',500,'fade','',500);

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

	SetPanelState('u110', 'pd3u110','none','',500,'fade','',500);

}

}

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u117 = document.getElementById('u117');

u117.style.cursor = 'pointer';
if (bIE) u117.attachEvent("onclick", Clicku117);
else u117.addEventListener("click", Clicku117, true);
function Clicku117(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u110', 'pd2u110','none','',500,'fade','',500);

}

}

var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1', 'pd1u1','none','',500,'none','',500);

}

if ((GetPanelState('u22')) == ('pd0u22')) {

	SetPanelState('u39', 'pd8u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd1u22')) {

	SetPanelState('u39', 'pd9u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd2u22')) {

	SetPanelState('u39', 'pd10u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd3u22')) {

	SetPanelState('u39', 'pd11u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd4u22')) {

	SetPanelState('u39', 'pd12u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd5u22')) {

	SetPanelState('u39', 'pd13u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd6u22')) {

	SetPanelState('u39', 'pd14u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u22')) == ('pd7u22')) {

	SetPanelState('u39', 'pd15u39','none','',500,'fade','',500);

}

}

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');

u23.style.cursor = 'pointer';
if (bIE) u23.attachEvent("onclick", Clicku23);
else u23.addEventListener("click", Clicku23, true);
function Clicku23(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u22', 'pd0u22','none','',500,'none','',500);

}

if ((GetPanelState('u1')) == ('pd0u1')) {

	SetPanelState('u39', 'pd0u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd1u1')) {

	SetPanelState('u39', 'pd8u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd2u1')) {

	SetPanelState('u39', 'pd24u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd3u1')) {

	SetPanelState('u39', 'pd16u39','none','',500,'fade','',500);

}

}

var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'center';
var u201 = document.getElementById('u201');

u201.style.cursor = 'pointer';
if (bIE) u201.attachEvent("onclick", Clicku201);
else u201.addEventListener("click", Clicku201, true);
function Clicku201(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u190', 'pd5u190','none','',500,'fade','',500);

}

}

var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'center';
var u203 = document.getElementById('u203');

u203.style.cursor = 'pointer';
if (bIE) u203.attachEvent("onclick", Clicku203);
else u203.addEventListener("click", Clicku203, true);
function Clicku203(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u190', 'pd4u190','none','',500,'fade','',500);

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

	SetPanelState('u190', 'pd3u190','none','',500,'fade','',500);

}

}

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'center';
var u207 = document.getElementById('u207');

u207.style.cursor = 'pointer';
if (bIE) u207.attachEvent("onclick", Clicku207);
else u207.addEventListener("click", Clicku207, true);
function Clicku207(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u190', 'pd2u190','none','',500,'fade','',500);

}

}

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'center';
var u209 = document.getElementById('u209');

u209.style.cursor = 'pointer';
if (bIE) u209.attachEvent("onclick", Clicku209);
else u209.addEventListener("click", Clicku209, true);
function Clicku209(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u190', 'pd1u190','none','',500,'fade','',500);

}

}

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u121 = document.getElementById('u121');

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

	SetPanelState('u123', 'pd2u123','none','',500,'fade','',500);

}

}

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u31 = document.getElementById('u31');

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", Clicku31);
else u31.addEventListener("click", Clicku31, true);
function Clicku31(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u22', 'pd4u22','none','',500,'none','',500);

}

if ((GetPanelState('u1')) == ('pd0u1')) {

	SetPanelState('u39', 'pd4u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd1u1')) {

	SetPanelState('u39', 'pd12u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd2u1')) {

	SetPanelState('u39', 'pd28u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd3u1')) {

	SetPanelState('u39', 'pd20u39','none','',500,'fade','',500);

}

}

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

	SetPanelState('u22', 'pd3u22','none','',500,'none','',500);

}

if ((GetPanelState('u1')) == ('pd0u1')) {

	SetPanelState('u39', 'pd3u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd1u1')) {

	SetPanelState('u39', 'pd11u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd2u1')) {

	SetPanelState('u39', 'pd27u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd3u1')) {

	SetPanelState('u39', 'pd19u39','none','',500,'fade','',500);

}

}

var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u35 = document.getElementById('u35');

u35.style.cursor = 'pointer';
if (bIE) u35.attachEvent("onclick", Clicku35);
else u35.addEventListener("click", Clicku35, true);
function Clicku35(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u22', 'pd2u22','none','',500,'none','',500);

}

if ((GetPanelState('u1')) == ('pd0u1')) {

	SetPanelState('u39', 'pd2u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd1u1')) {

	SetPanelState('u39', 'pd10u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd2u1')) {

	SetPanelState('u39', 'pd26u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd3u1')) {

	SetPanelState('u39', 'pd18u39','none','',500,'fade','',500);

}

}

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u22', 'pd1u22','none','',500,'none','',500);

}

if ((GetPanelState('u1')) == ('pd0u1')) {

	SetPanelState('u39', 'pd1u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd1u1')) {

	SetPanelState('u39', 'pd9u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd2u1')) {

	SetPanelState('u39', 'pd25u39','none','',500,'fade','',500);

}
else
if ((GetPanelState('u1')) == ('pd3u1')) {

	SetPanelState('u39', 'pd17u39','none','',500,'fade','',500);

}

}

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u39 = document.getElementById('u39');

var u40 = document.getElementById('u40');

var u41 = document.getElementById('u41');

u41.style.cursor = 'pointer';
if (bIE) u41.attachEvent("onclick", Clicku41);
else u41.addEventListener("click", Clicku41, true);
function Clicku41(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u40', 'pd0u40','none','',500,'fade','',500);

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

	SetPanelState('u40', 'pd2u40','none','',500,'fade','',500);

}

}

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u45 = document.getElementById('u45');

u45.style.cursor = 'pointer';
if (bIE) u45.attachEvent("onclick", Clicku45);
else u45.addEventListener("click", Clicku45, true);
function Clicku45(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u40', 'pd1u40','none','',500,'fade','',500);

}

}

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u47 = document.getElementById('u47');

var u48 = document.getElementById('u48');

u48.style.cursor = 'pointer';
if (bIE) u48.attachEvent("onclick", Clicku48);
else u48.addEventListener("click", Clicku48, true);
function Clicku48(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u47', 'pd0u47','none','',500,'fade','',500);

}

}

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u211 = document.getElementById('u211');

u211.style.cursor = 'pointer';
if (bIE) u211.attachEvent("onclick", Clicku211);
else u211.addEventListener("click", Clicku211, true);
function Clicku211(e)
{
windowEvent = e;


if ((GetWidgetVisibility('u213')) == (true)) {

SetWidgetRichText('u212', '<p style="text-align:center;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Mute Images</span></p>');

	SetPanelVisibility('u213','toggle','none',500);

}
else
if (true) {

SetWidgetRichText('u212', '<p style="text-align:center;"><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">Show Images</span></p>');

	SetPanelVisibility('u213','toggle','none',500);

}

}

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u213 = document.getElementById('u213');

var u50 = document.getElementById('u50');

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", Clicku50);
else u50.addEventListener("click", Clicku50, true);
function Clicku50(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u47', 'pd2u47','none','',500,'fade','',500);

}

}

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u52 = document.getElementById('u52');

u52.style.cursor = 'pointer';
if (bIE) u52.attachEvent("onclick", Clicku52);
else u52.addEventListener("click", Clicku52, true);
function Clicku52(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u47', 'pd1u47','none','',500,'fade','',500);

}

}

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u55 = document.getElementById('u55');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u58 = document.getElementById('u58');

var u59 = document.getElementById('u59');

u59.style.cursor = 'pointer';
if (bIE) u59.attachEvent("onclick", Clicku59);
else u59.addEventListener("click", Clicku59, true);
function Clicku59(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u58', 'pd0u58','none','',500,'fade','',500);

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

	SetPanelState('u58', 'pd5u58','none','',500,'fade','',500);

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

	SetPanelState('u58', 'pd4u58','none','',500,'fade','',500);

}

}

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u65 = document.getElementById('u65');

u65.style.cursor = 'pointer';
if (bIE) u65.attachEvent("onclick", Clicku65);
else u65.addEventListener("click", Clicku65, true);
function Clicku65(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u58', 'pd3u58','none','',500,'fade','',500);

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

	SetPanelState('u58', 'pd2u58','none','',500,'fade','',500);

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

	SetPanelState('u58', 'pd1u58','none','',500,'fade','',500);

}

}

if (window.OnLoad) OnLoad();
