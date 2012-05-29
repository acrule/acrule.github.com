
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

var u231 = document.getElementById('u231');

var u232 = document.getElementById('u232');

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u71 = document.getElementById('u71');

u71.style.cursor = 'pointer';
if (bIE) u71.attachEvent("onclick", Clicku71);
else u71.addEventListener("click", Clicku71, true);
function Clicku71(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u62', 'pd2u62','none','',500,'fade','',500);

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

	SetPanelState('u84', 'pd1u84','none','',500,'fade','',500);

}

}

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u103 = document.getElementById('u103');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u105 = document.getElementById('u105');

var u106 = document.getElementById('u106');

u106.style.cursor = 'pointer';
if (bIE) u106.attachEvent("onclick", Clicku106);
else u106.addEventListener("click", Clicku106, true);
function Clicku106(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u105', 'pd0u105','none','',500,'fade','',500);

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

	SetPanelState('u105', 'pd1u105','none','',500,'fade','',500);

}

}

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u80 = document.getElementById('u80');

u80.style.cursor = 'pointer';
if (bIE) u80.attachEvent("onclick", Clicku80);
else u80.addEventListener("click", Clicku80, true);
function Clicku80(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u75', 'pd2u75','none','',500,'fade','',500);

}

}

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u110 = document.getElementById('u110');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u84 = document.getElementById('u84');

var u85 = document.getElementById('u85');

u85.style.cursor = 'pointer';
if (bIE) u85.attachEvent("onclick", Clicku85);
else u85.addEventListener("click", Clicku85, true);
function Clicku85(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u84', 'pd0u84','none','',500,'fade','',500);

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

	SetPanelState('u84', 'pd8u84','none','',500,'fade','',500);

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

	SetPanelState('u84', 'pd7u84','none','',500,'fade','',500);

}

}

var u118 = document.getElementById('u118');

var u119 = document.getElementById('u119');

u119.style.cursor = 'pointer';
if (bIE) u119.attachEvent("onclick", Clicku119);
else u119.addEventListener("click", Clicku119, true);
function Clicku119(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u118', 'pd0u118','none','',500,'fade','',500);

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

	SetPanelState('u84', 'pd6u84','none','',500,'fade','',500);

}

}

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u93 = document.getElementById('u93');

u93.style.cursor = 'pointer';
if (bIE) u93.attachEvent("onclick", Clicku93);
else u93.addEventListener("click", Clicku93, true);
function Clicku93(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u84', 'pd5u84','none','',500,'fade','',500);

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

	SetPanelState('u84', 'pd4u84','none','',500,'fade','',500);

}

}

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u97 = document.getElementById('u97');

u97.style.cursor = 'pointer';
if (bIE) u97.attachEvent("onclick", Clicku97);
else u97.addEventListener("click", Clicku97, true);
function Clicku97(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u84', 'pd3u84','none','',500,'fade','',500);

}

}

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u127 = document.getElementById('u127');

u127.style.cursor = 'pointer';
if (bIE) u127.attachEvent("onclick", Clicku127);
else u127.addEventListener("click", Clicku127, true);
function Clicku127(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u118', 'pd1u118','none','',500,'fade','',500);

}

}

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u129 = document.getElementById('u129');

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
gv_vAlignTable['u130'] = 'center';
var u131 = document.getElementById('u131');

var u132 = document.getElementById('u132');

u132.style.cursor = 'pointer';
if (bIE) u132.attachEvent("onclick", Clicku132);
else u132.addEventListener("click", Clicku132, true);
function Clicku132(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u131', 'pd0u131','none','',500,'fade','',500);

}

}

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u134 = document.getElementById('u134');

u134.style.cursor = 'pointer';
if (bIE) u134.attachEvent("onclick", Clicku134);
else u134.addEventListener("click", Clicku134, true);
function Clicku134(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u131', 'pd2u131','none','',500,'fade','',500);

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

	SetPanelState('u131', 'pd1u131','none','',500,'fade','',500);

}

}

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u138 = document.getElementById('u138');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
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

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u141 = document.getElementById('u141');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u143 = document.getElementById('u143');

var u144 = document.getElementById('u144');

u144.style.cursor = 'pointer';
if (bIE) u144.attachEvent("onclick", Clicku144);
else u144.addEventListener("click", Clicku144, true);
function Clicku144(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u143', 'pd0u143','none','',500,'fade','',500);

}

}

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u146 = document.getElementById('u146');

u146.style.cursor = 'pointer';
if (bIE) u146.attachEvent("onclick", Clicku146);
else u146.addEventListener("click", Clicku146, true);
function Clicku146(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u143', 'pd1u143','none','',500,'fade','',500);

}

}

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u148 = document.getElementById('u148');

var u149 = document.getElementById('u149');

u149.style.cursor = 'pointer';
if (bIE) u149.attachEvent("onclick", Clicku149);
else u149.addEventListener("click", Clicku149, true);
function Clicku149(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u148', 'pd0u148','none','',500,'fade','',500);

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

	SetPanelState('u148', 'pd9u148','none','',500,'fade','',500);

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

	SetPanelState('u148', 'pd8u148','none','',500,'fade','',500);

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

	SetPanelState('u148', 'pd7u148','none','',500,'fade','',500);

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

	SetPanelState('u148', 'pd6u148','none','',500,'fade','',500);

}

}

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
var u159 = document.getElementById('u159');

u159.style.cursor = 'pointer';
if (bIE) u159.attachEvent("onclick", Clicku159);
else u159.addEventListener("click", Clicku159, true);
function Clicku159(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u148', 'pd5u148','none','',500,'fade','',500);

}

}

var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u235 = document.getElementById('u235');

u235.style.cursor = 'pointer';
if (bIE) u235.attachEvent("onclick", Clicku235);
else u235.addEventListener("click", Clicku235, true);
function Clicku235(e)
{
windowEvent = e;


if (true) {

	self.location.href="Start_1.html" + GetQuerystring();

}

}
gv_vAlignTable['u235'] = 'top';
var u54 = document.getElementById('u54');

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

	SetPanelState('u148', 'pd4u148','none','',500,'fade','',500);

}

}

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u163 = document.getElementById('u163');

u163.style.cursor = 'pointer';
if (bIE) u163.attachEvent("onclick", Clicku163);
else u163.addEventListener("click", Clicku163, true);
function Clicku163(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u148', 'pd3u148','none','',500,'fade','',500);

}

}

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u165 = document.getElementById('u165');

u165.style.cursor = 'pointer';
if (bIE) u165.attachEvent("onclick", Clicku165);
else u165.addEventListener("click", Clicku165, true);
function Clicku165(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u148', 'pd2u148','none','',500,'fade','',500);

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

	SetPanelState('u148', 'pd1u148','none','',500,'fade','',500);

}

}

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u169 = document.getElementById('u169');

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'center';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u172 = document.getElementById('u172');

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u174 = document.getElementById('u174');

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u176 = document.getElementById('u176');

var u177 = document.getElementById('u177');

u177.style.cursor = 'pointer';
if (bIE) u177.attachEvent("onclick", Clicku177);
else u177.addEventListener("click", Clicku177, true);
function Clicku177(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u176', 'pd0u176','none','',500,'fade','',500);

}

}

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u179 = document.getElementById('u179');

u179.style.cursor = 'pointer';
if (bIE) u179.attachEvent("onclick", Clicku179);
else u179.addEventListener("click", Clicku179, true);
function Clicku179(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u176', 'pd4u176','none','',500,'fade','',500);

}

}

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

	SetPanelState('u62', 'pd1u62','none','',500,'fade','',500);

}

}

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u75 = document.getElementById('u75');

var u76 = document.getElementById('u76');

u76.style.cursor = 'pointer';
if (bIE) u76.attachEvent("onclick", Clicku76);
else u76.addEventListener("click", Clicku76, true);
function Clicku76(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u75', 'pd0u75','none','',500,'fade','',500);

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

	SetPanelState('u75', 'pd3u75','none','',500,'fade','',500);

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

	SetPanelState('u176', 'pd3u176','none','',500,'fade','',500);

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

	SetPanelState('u176', 'pd2u176','none','',500,'fade','',500);

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

	SetPanelState('u176', 'pd1u176','none','',500,'fade','',500);

}

}

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u187 = document.getElementById('u187');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u82 = document.getElementById('u82');

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u75', 'pd1u75','none','',500,'fade','',500);

}

}

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u190 = document.getElementById('u190');

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u193 = document.getElementById('u193');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u196 = document.getElementById('u196');

var u197 = document.getElementById('u197');

u197.style.cursor = 'pointer';
if (bIE) u197.attachEvent("onclick", Clicku197);
else u197.addEventListener("click", Clicku197, true);
function Clicku197(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u196', 'pd0u196','none','',500,'fade','',500);

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

	SetPanelState('u196', 'pd2u196','none','',500,'fade','',500);

}

}

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u99 = document.getElementById('u99');

u99.style.cursor = 'pointer';
if (bIE) u99.attachEvent("onclick", Clicku99);
else u99.addEventListener("click", Clicku99, true);
function Clicku99(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u84', 'pd2u84','none','',500,'fade','',500);

}

}

var u0 = document.getElementById('u0');

u0.style.cursor = 'pointer';
if (bIE) u0.attachEvent("onclick", Clicku0);
else u0.addEventListener("click", Clicku0, true);
function Clicku0(e)
{
windowEvent = e;


if (true) {

	self.location.href="Video.html" + GetQuerystring();

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
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u113 = document.getElementById('u113');

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u116 = document.getElementById('u116');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
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

	SetPanelState('u196', 'pd1u196','none','',500,'fade','',500);

}

}

var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'center';
var u203 = document.getElementById('u203');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u206 = document.getElementById('u206');

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u208 = document.getElementById('u208');

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u121 = document.getElementById('u121');

u121.style.cursor = 'pointer';
if (bIE) u121.attachEvent("onclick", Clicku121);
else u121.addEventListener("click", Clicku121, true);
function Clicku121(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u118', 'pd4u118','none','',500,'fade','',500);

}

}

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u123 = document.getElementById('u123');

u123.style.cursor = 'pointer';
if (bIE) u123.attachEvent("onclick", Clicku123);
else u123.addEventListener("click", Clicku123, true);
function Clicku123(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u118', 'pd3u118','none','',500,'fade','',500);

}

}

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u125 = document.getElementById('u125');

u125.style.cursor = 'pointer';
if (bIE) u125.attachEvent("onclick", Clicku125);
else u125.addEventListener("click", Clicku125, true);
function Clicku125(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u118', 'pd2u118','none','',500,'fade','',500);

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

var u211 = document.getElementById('u211');

u211.style.cursor = 'pointer';
if (bIE) u211.attachEvent("onclick", Clicku211);
else u211.addEventListener("click", Clicku211, true);
function Clicku211(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u210', 'pd0u210','none','',500,'fade','',500);

}

}

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u213 = document.getElementById('u213');

u213.style.cursor = 'pointer';
if (bIE) u213.attachEvent("onclick", Clicku213);
else u213.addEventListener("click", Clicku213, true);
function Clicku213(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u210', 'pd9u210','none','',500,'fade','',500);

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

	SetPanelState('u210', 'pd8u210','none','',500,'fade','',500);

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

	SetPanelState('u210', 'pd7u210','none','',500,'fade','',500);

}

}

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'center';
var u219 = document.getElementById('u219');

u219.style.cursor = 'pointer';
if (bIE) u219.attachEvent("onclick", Clicku219);
else u219.addEventListener("click", Clicku219, true);
function Clicku219(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u210', 'pd6u210','none','',500,'fade','',500);

}

}

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

var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'center';
var u221 = document.getElementById('u221');

u221.style.cursor = 'pointer';
if (bIE) u221.attachEvent("onclick", Clicku221);
else u221.addEventListener("click", Clicku221, true);
function Clicku221(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u210', 'pd5u210','none','',500,'fade','',500);

}

}

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'center';
var u223 = document.getElementById('u223');

u223.style.cursor = 'pointer';
if (bIE) u223.attachEvent("onclick", Clicku223);
else u223.addEventListener("click", Clicku223, true);
function Clicku223(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u210', 'pd4u210','none','',500,'fade','',500);

}

}

var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'center';
var u225 = document.getElementById('u225');

u225.style.cursor = 'pointer';
if (bIE) u225.attachEvent("onclick", Clicku225);
else u225.addEventListener("click", Clicku225, true);
function Clicku225(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u210', 'pd3u210','none','',500,'fade','',500);

}

}

var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'center';
var u227 = document.getElementById('u227');

u227.style.cursor = 'pointer';
if (bIE) u227.attachEvent("onclick", Clicku227);
else u227.addEventListener("click", Clicku227, true);
function Clicku227(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u210', 'pd2u210','none','',500,'fade','',500);

}

}

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'center';
var u229 = document.getElementById('u229');

u229.style.cursor = 'pointer';
if (bIE) u229.attachEvent("onclick", Clicku229);
else u229.addEventListener("click", Clicku229, true);
function Clicku229(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u210', 'pd1u210','none','',500,'fade','',500);

}

}

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
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u57 = document.getElementById('u57');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u59 = document.getElementById('u59');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u62 = document.getElementById('u62');

var u63 = document.getElementById('u63');

u63.style.cursor = 'pointer';
if (bIE) u63.attachEvent("onclick", Clicku63);
else u63.addEventListener("click", Clicku63, true);
function Clicku63(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u62', 'pd0u62','none','',500,'fade','',500);

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

	SetPanelState('u62', 'pd5u62','none','',500,'fade','',500);

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

	SetPanelState('u62', 'pd4u62','none','',500,'fade','',500);

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

	SetPanelState('u62', 'pd3u62','none','',500,'fade','',500);

}

}

if (window.OnLoad) OnLoad();
