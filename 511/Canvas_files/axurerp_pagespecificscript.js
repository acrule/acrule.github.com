
var PageName = 'Canvas';
var PageId = 'dab213a19b134d8c888e3a417d7ebb6f'
var PageUrl = 'Canvas.html'
document.title = 'Canvas';
var PageNotes = 
{
"pageName":"Canvas",
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
  value = value.replace(/\[\[GenDay\]\]/g, '29');
  value = value.replace(/\[\[GenMonth\]\]/g, '5');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'May');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'Tuesday');
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

if (bIE) document.getElementById('u28').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u28'); });
else {
    document.getElementById('u28').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u28'); }, true);
    document.getElementById('u28').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u28'); }, true);
}

widgetIdToDragFunction['u28'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u28',widgetDragInfo.xDelta,widgetDragInfo.yDelta,'none',500);

}

}
widgetIdToDragDropFunction['u28'] = function() {
var e = windowEvent;

if (IsOver(GetWidgetRectangles('u28'), GetWidgetRectangles('u0'))) {

	MoveWidgetToLocationBeforeDrag('u28','none',500);

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

	SetPanelState('u70', 'pd1u70','none','',500,'none','',500);

	SetPanelVisibility('u7','hidden','fade',500);

}

}

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u83 = document.getElementById('u83');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
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

	SetPanelState('u70', 'pd2u70','none','',500,'none','',500);

	SetPanelVisibility('u7','','fade',500);

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

	SetPanelState('u70', 'pd0u70','none','',500,'none','',500);

	SetPanelVisibility('u28','hidden','fade',500);

}

}

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u90 = document.getElementById('u90');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u93 = document.getElementById('u93');

u93.style.cursor = 'pointer';
if (bIE) u93.attachEvent("onclick", Clicku93);
else u93.addEventListener("click", Clicku93, true);
function Clicku93(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u70', 'pd1u70','none','',500,'none','',500);

	SetPanelVisibility('u28','','fade',500);

}

}

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd8u7','none','',500,'none','',500);

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

	SetPanelState('u7', 'pd7u7','none','',500,'none','',500);

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

	SetPanelState('u7', 'pd6u7','none','',500,'none','',500);

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

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

	SetPanelState('u7', 'pd5u7','none','',500,'none','',500);

}

}

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u76 = document.getElementById('u76');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd0u7','none','',500,'none','',500);

}

if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}

}

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd3u7','none','',500,'none','',500);

}

if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

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

	SetPanelState('u7', 'pd2u7','none','',500,'none','',500);

}

if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

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

	SetPanelState('u7', 'pd1u7','none','',500,'none','',500);

}

if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}

}

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u28 = document.getElementById('u28');

var u29 = document.getElementById('u29');

u29.style.cursor = 'pointer';
if (bIE) u29.attachEvent("onclick", Clicku29);
else u29.addEventListener("click", Clicku29, true);
function Clicku29(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u28', 'pd0u28','none','',500,'none','',500);

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

	SetPanelState('u28', 'pd9u28','none','',500,'none','',500);

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

	SetPanelState('u28', 'pd8u28','none','',500,'none','',500);

}

}

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u35 = document.getElementById('u35');

u35.style.cursor = 'pointer';
if (bIE) u35.attachEvent("onclick", Clicku35);
else u35.addEventListener("click", Clicku35, true);
function Clicku35(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u28', 'pd7u28','none','',500,'none','',500);

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

	SetPanelState('u28', 'pd6u28','none','',500,'none','',500);

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

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

	SetPanelState('u28', 'pd5u28','none','',500,'none','',500);

}

}

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u41 = document.getElementById('u41');

u41.style.cursor = 'pointer';
if (bIE) u41.attachEvent("onclick", Clicku41);
else u41.addEventListener("click", Clicku41, true);
function Clicku41(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u28', 'pd0u28','none','',500,'none','',500);

}

if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

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

	SetPanelState('u28', 'pd3u28','none','',500,'none','',500);

}

if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

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

	SetPanelState('u28', 'pd2u28','none','',500,'none','',500);

}

if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}

}

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u47 = document.getElementById('u47');

u47.style.cursor = 'pointer';
if (bIE) u47.attachEvent("onclick", Clicku47);
else u47.addEventListener("click", Clicku47, true);
function Clicku47(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u28', 'pd1u28','none','',500,'none','',500);

}

if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}

}

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u49 = document.getElementById('u49');

var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'top';
var u4 = document.getElementById('u4');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{
windowEvent = e;


if (true) {

	self.location.href="Start_1.html" + GetQuerystring();

}

}
gv_vAlignTable['u6'] = 'top';
var u7 = document.getElementById('u7');

var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd0u7','none','',500,'none','',500);

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

	SetPanelState('u49', 'pd0u49','none','',500,'none','',500);

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

	SetPanelState('u49', 'pd9u49','none','',500,'none','',500);

}

}

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u54 = document.getElementById('u54');

u54.style.cursor = 'pointer';
if (bIE) u54.attachEvent("onclick", Clicku54);
else u54.addEventListener("click", Clicku54, true);
function Clicku54(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u49', 'pd8u49','none','',500,'none','',500);

}

}

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u56 = document.getElementById('u56');

u56.style.cursor = 'pointer';
if (bIE) u56.attachEvent("onclick", Clicku56);
else u56.addEventListener("click", Clicku56, true);
function Clicku56(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u49', 'pd7u49','none','',500,'none','',500);

}

}

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u58 = document.getElementById('u58');

u58.style.cursor = 'pointer';
if (bIE) u58.attachEvent("onclick", Clicku58);
else u58.addEventListener("click", Clicku58, true);
function Clicku58(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u49', 'pd6u49','none','',500,'none','',500);

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}

}

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u60 = document.getElementById('u60');

u60.style.cursor = 'pointer';
if (bIE) u60.attachEvent("onclick", Clicku60);
else u60.addEventListener("click", Clicku60, true);
function Clicku60(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u49', 'pd5u49','none','',500,'none','',500);

}

}

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u62 = document.getElementById('u62');

u62.style.cursor = 'pointer';
if (bIE) u62.attachEvent("onclick", Clicku62);
else u62.addEventListener("click", Clicku62, true);
function Clicku62(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u49', 'pd0u49','none','',500,'none','',500);

}

if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}

}

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u64 = document.getElementById('u64');

u64.style.cursor = 'pointer';
if (bIE) u64.attachEvent("onclick", Clicku64);
else u64.addEventListener("click", Clicku64, true);
function Clicku64(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u49', 'pd3u49','none','',500,'none','',500);

}

if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

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

	SetPanelState('u49', 'pd2u49','none','',500,'none','',500);

}

if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}

}

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u68 = document.getElementById('u68');

u68.style.cursor = 'pointer';
if (bIE) u68.attachEvent("onclick", Clicku68);
else u68.addEventListener("click", Clicku68, true);
function Clicku68(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u49', 'pd1u49','none','',500,'none','',500);

}

if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}
else
if (false) {

}

}

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u70 = document.getElementById('u70');

var u71 = document.getElementById('u71');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
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

	SetPanelState('u70', 'pd2u70','none','',500,'none','',500);

	SetPanelVisibility('u49','hidden','fade',500);

}

}

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd9u7','none','',500,'none','',500);

}

}

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u79 = document.getElementById('u79');

u79.style.cursor = 'pointer';
if (bIE) u79.attachEvent("onclick", Clicku79);
else u79.addEventListener("click", Clicku79, true);
function Clicku79(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u70', 'pd3u70','none','',500,'none','',500);

	SetPanelVisibility('u49','','fade',500);

}

}

if (window.OnLoad) OnLoad();
