// // 存数据  切换背景 默认的
// // name：命名 data：数据
// function saveData(name, data) {
//     localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
// }

// // 取数据
// // name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
// function loadData(name, time) {
//     let d = JSON.parse(localStorage.getItem(name));
//     // 过期或有错误返回 0 否则返回数据
//     if (d) {
//         let t = Date.now() - d.time
//         if (t < (time * 60 * 1000) && t > -1) return d.data;
//     }
//     return 0;
// }

// // 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// // 读取背景
// try {
//     let data = loadData('blogbg', 1440)
//     if (data) changeBg(data, 1)
//     else localStorage.removeItem('blogbg');
// } catch (error) { localStorage.removeItem('blogbg'); }

// // 切换背景函数
// // 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// // 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
// function changeBg(s, flag) {
//     let bg = document.getElementById('web_bg')
//     if (s.charAt(0) == '#') {
//         bg.style.backgroundColor = s
//         bg.style.backgroundImage = 'none'
//     } else bg.style.backgroundImage = s
//     if (!flag) { saveData('blogbg', s) }
// }

// // 以下为2.0新增内容

// // 创建窗口
// var winbox = ''

// function createWinbox() {
//     let div = document.createElement('div')
//     document.body.appendChild(div)
//     winbox = WinBox({
//         id: 'changeBgBox',
//         index: 999,
//         title: "背景切换",
//         x: "center",
//         y: "center",
//         minwidth: '300px',
//         height: "60%",
//         background: 'var(--leonus-blue)',
//         onmaximize: () => { div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>` },
//         onrestore: () => { div.innerHTML = '' }
//     });
//     winResize();
//     window.addEventListener('resize', winResize)

//     // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
//     winbox.body.innerHTML = `
//     <div id="article-container" style="padding:10px;">
    
//     <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#b347f1;display:block;margin:0 auto;width:20%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>
//     <h2 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）</h2>
//     <div class="bgbox">
//     <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://blogresource.sqwdream.cloud/background/cell_phone_wallpape/girl1.jpeg)" class="pimgbox" onclick="changeBg('url(https\://blogresource.sqwdream.cloud/background/cell_phone_wallpape/girl1.jpeg)')"></a>
//     </div>
    
//     <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>
//     <div class="bgbox">
//     <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://blogresource.sqwdream.cloud/background/desktop_wallpaper/threebody.jpg)" class="imgbox" onclick="changeBg('url(https\://blogresource.sqwdream.cloud/background/desktop_wallpaper/threebody.jpg)')"></a>
//     <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://blogresource.sqwdream.cloud/background/desktop_wallpaper/distance.jpg)" class="imgbox" onclick="changeBg('url(https\://blogresource.sqwdream.cloud/background/desktop_wallpaper/distance.jpg)')"></a>
//     <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://blogresource.sqwdream.cloud/background/desktop_wallpaper/beautifulgirl.png)" class="imgbox" onclick="changeBg('url(https\://blogresource.sqwdream.cloud/background/desktop_wallpaper/beautifulgirl.png)')"></a>
//     <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://blogresource.sqwdream.cloud/background/desktop_wallpaper/girl1.jpg)" class="imgbox" onclick="changeBg('url(https\://blogresource.sqwdream.cloud/background/desktop_wallpaper/girl1.jpg)')"></a>
//     <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://blogresource.sqwdream.cloud/background/desktop_wallpaper/girl2.jpg)" class="imgbox" onclick="changeBg('url(https\://blogresource.sqwdream.cloud/background/desktop_wallpaper/girl2.jpg)')"></a>
//     <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://blogresource.sqwdream.cloud/background/desktop_wallpaper/green.jpg)" class="imgbox" onclick="changeBg('url(https\://blogresource.sqwdream.cloud/background/desktop_wallpaper/green.jpg)')"></a>
//     <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://blogresource.sqwdream.cloud/background/desktop_wallpaper/girl3.jpg)" class="imgbox" onclick="changeBg('url(https\://blogresource.sqwdream.cloud/background/desktop_wallpaper/girl3.jpg)')"></a>
//     <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://blogresource.sqwdream.cloud/background/desktop_wallpaper/men.png)" class="imgbox" onclick="changeBg('url(https\://blogresource.sqwdream.cloud/background/desktop_wallpaper/men.png)')"></a>
//     </div>
    
    
    
//     <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
//     <div class="bgbox">
//     <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
//     <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: radial-gradient(circle, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)" onclick="changeBg('radial-gradient(circle, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)')"></a>
//     </div>
    
//     <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
//     <div class="bgbox">
//     <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg('#7D9D9C')"></a> 
//     </div>
// `;
// }

// // 适应窗口大小
// function winResize() {
//     var offsetWid = document.documentElement.clientWidth;
//     if (offsetWid <= 768) {
//         winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
//     } else {
//         winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
//     }
// }

// // 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
// function toggleWinbox() {
//     if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
//     else createWinbox();
// }
if(localStorage.getItem("blur")=="false"){
    var blur=0;
    }else{
        var blur=1;
    
    }
    if(localStorage.getItem("yjjs")=="true"){
        var yjjs=1;
    }else{
        var yjjs=0;
        
    }

if(!blur){
    document.getElementById("settingStyle").innerText=`
    *{
        -webkit-backdrop-filter: none!important;
        backdrop-filter: none!important;
        -webkit-filter: none!important;
        filter: none!important;
    }`}
    else{
        document.getElementById("settingStyle").innerText=''
    }
function setBlur(){
    blur=!blur;
    localStorage.setItem("blur",blur);
    if(!blur){
    document.getElementById("settingStyle").innerText=`
    *{
        -webkit-backdrop-filter: none!important;
        backdrop-filter: none!important;
        -webkit-filter: none!important;
        filter: none!important;
    }`}
    else{
        document.getElementById("settingStyle").innerText=''
    }
}

function fullScreen() {
    if (document.fullscreenElement) document.exitFullscreen()
    else document.documentElement.requestFullscreen();
}
// if(yjjs){
//     document.getElementById("yjjs").innerText=`
//     *:not(#web_bg){
//         transform:translateZ(0);
//         backface-visibility: hidden
//     }`}
//     else{
//         document.getElementById("yjjs").innerText=``
//     }
function yjjs1(){
    yjjs=!yjjs;
    localStorage.setItem("yjjs",yjjs)
    // if(yjjs){
    // document.getElementById("yjjs").innerText=`
    // *:not(#web_bg){
    //     transform:translateZ(0);
    //     backface-visibility: hidden
    // }`}
    // else{
    //     document.getElementById("yjjs").innerText=``
    // }
}
// if(localStorage.getItem("theme")=="acrylic"){
//     document.getElementById("css").href=""
// }
// switchTheme=function(){
//     if(document.getElementById("css").href==window.location.protocol+"//"+window.location.host+"/css/mycss/PopupWindow.css"){
//         document.getElementById("css").href=""
//         localStorage.setItem("theme","acrylic");
//     }else{
//         document.getElementById("css").href="/css/mycss/PopupWindow.css"
//         localStorage.setItem("theme","simple");
//     }
// }
setColor=function(c){
    document.getElementById("themeColor").innerText=`:root{--sqw-theme:var(--sqw-${c})!important}`;
    localStorage.setItem("themeColor",c);

}

if(localStorage.getItem("themeColor")==undefined){
    localStorage.setItem("themeColor","pink");
}

setColor(localStorage.getItem("themeColor"));



if(localStorage.getItem("hideRightside")==undefined){
    localStorage.setItem("hideRightside","0");
}

if(localStorage.getItem("hideRightside")=="1"){
    $("#rightside").toggle()
}
function toggleRightside(){
    $("#rightside").toggle();
    localStorage.setItem("hideRightside",Math.abs(Number(localStorage.getItem("hideRightside"))-1))
}
if(localStorage.getItem("font")==undefined){
    localStorage.setItem("font","汉仪唐美人")
}
setFont(localStorage.getItem("font"))
// 存数据
// name：命名 data：数据
function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (t < (time * 60 * 1000) && t > -1) return d.data;
    }
    return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
    let bg = document.getElementById('web_bg')
    if (s.charAt(0) == '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'
    } else bg.style.backgroundImage = s
    if (!flag) { saveData('blogbg', s) }
}

// function changeBgColor(s, flag) {
//     let bg = document.getElementById('web_bg')
//     if (s.charAt(0) == '#') {
//         bg.style.backgroundColor = s
//         bg.style.backgroundImage = 'none'
//     } else bg.style.backgroundImage = s
//     if (!flag) { saveData('blogbg', s) }
// }
function setFont(n){
    localStorage.setItem("font",n)
    if(n=="main"){
        document.body.style.fontFamily="-apple-system, IBM Plex Mono ,monosapce,'微软雅黑', sans-serif"
    }
    else{
        document.body.style.fontFamily="var(--global-font),-apple-system, IBM Plex Mono ,monosapce,'微软雅黑', sans-serif"
        document.documentElement.style.setProperty('--global-font', n)
    }
}
// 以下为2.0新增内容

// 创建窗口
var winbox = ''

var isMax=false;
function createWinbox() {
    
    div = document.createElement('div')
    document.body.appendChild(div)
    winbox = WinBox({
        id: 'changeBgBox',
        index: 999,
        title: "博客设置",
        x: "center",
        y: "center",
        minwidth: '300px',
        height: "60%",
        background: '#49b1f5',
        onmaximize: () => {
            isMax=true;
            div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>`
        },
        onrestore: () => {
            isMax=false;
            div.innerHTML = ''
        },
    });
    document.getElementsByClassName("wb-close")[0].onclick=function(){
        sessionStorage.setItem("settingWindow","close");
    }
    winResize();
    window.addEventListener('resize', winResize)

    // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
    winbox.body.innerHTML = `
    <div class="settings" style="display: block;">
    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#b347f1;display:block;margin:0 auto;width:20%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>
    <p></p>
    <h2 class="content-head">性能设置</h2>
    <p></p>
    <div class="content" style="display:flex"><input type="checkbox" id="blur" onclick="setBlur()">
        <div class="content-text">禁用模糊效果</div>
    </div>
    <div class="content" style="display:flex"><input type="checkbox" id="yjjs" onclick="yjjs1()" value="onrightMenurightMenu">
        <div class="content-text">硬件加速</div>
    </div>
    <p></p>
    <h2 class="content-head">主题设置</h2>
    <p></p>
    <div class="content" style="display:flex">
        <input type="checkbox" id="hideAside" onclick="toggleRightside()">
        <div class="content-text">隐藏侧边栏</div>
        <div class="content" style="display:flex"><input type="checkbox"  onclick="fullScreen()">
        <div class="content-text">全屏</div>
        </div>
    </div>
    <h3 class="content-head">&nbsp;&nbsp;主题色</h3>
    <p></p>
    <div class="content" style="display:flex"><input type="radio" id="red" name="colors" value=" "
            onclick="setColor('red')"><input type="radio" id="orange" name="colors" value=" "
            onclick="setColor('orange')"><input type="radio" id="yellow" name="colors" value=" "
            onclick="setColor('yellow')"><input type="radio" id="green" name="colors" value=" "
            onclick="setColor('green')"><input type="radio" id="blue" name="colors" value=" "
            onclick="setColor('blue')"><input type="radio" id="heoblue" name="colors" value=" "
            onclick="setColor('heoblue')"><input type="radio" id="darkblue" name="colors" value=" "
            onclick="setColor('darkblue')"><input type="radio" id="purple" name="colors" value=" "
            onclick="setColor('purple')"><input type="radio" id="pink" name="colors" value=" "
            onclick="setColor('pink')" checked="checked"><input type="radio" id="black" name="colors" value=" "
            onclick="setColor('black')"><input type="radio" id="blackgray" name="colors" value=" "
            onclick="setColor('blackgray')"></div>
    <p></p>
    <p></p>
    <p></p>
    <h2 class="content-head">字体设置</h2>
    <p id="swfs">
    <a class="swf" href="javascript:;" rel="noopener external nofollow" style="font-family:'汉仪唐美人'!important;color:black" onclick="setFont('汉仪唐美人')">汉仪唐美人</a>
    <a class="swf" href="javascript:;" rel="noopener external nofollow" style="font-family:'甜甜圈海报'!important;color:black" onclick="setFont('甜甜圈海报')">甜甜圈海报</a>
    <a class="swf" href="javascript:;" rel="noopener external nofollow" style="font-family:'优设好身体'!important;color:black" onclick="setFont('优设好身体')">优设好身体</a>
    <a class="swf" href="javascript:;" rel="noopener external nofollow" style="font-family:'霞鹜文楷'!important;color:black" onclick="setFont('霞鹜文楷')">霞鹜文楷</a>
    <a class="swf" href="javascript:;" rel="noopener external nofollow" style="font-family:-apple-system, IBM Plex Mono ,monosapce,'微软雅黑', sans-serif;!important;color:black" onclick="setFont('main')">系统默认</a> <br>
    </p>
</div>
    <h2 style="margin-left:15px">背景设置</h2>
    <div id="article-container" style="padding:30px; padding-top:0px">
    <h3 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）</h3>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://blogresource.sqwdream.cloud/background/cell_phone_wallpaper/鼬神1.jpeg)" class="pimgbox" onclick="changeBg('url(https://blogresource.sqwdream.cloud/background/cell_phone_wallpaper/鼬神1.jpeg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://blogresource.sqwdream.cloud/background/cell_phone_wallpaper/鬼刀公主.jpg)" class="pimgbox" onclick="changeBg('url(https://blogresource.sqwdream.cloud/background/cell_phone_wallpaper/鬼刀公主.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://blogresource.sqwdream.cloud/background/cell_phone_wallpaper/哆啦A梦.jpg)" class="pimgbox" onclick="changeBg('url(https://blogresource.sqwdream.cloud/background/cell_phone_wallpaper/哆啦A梦.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://blogresource.sqwdream.cloud/background/cell_phone_wallpaper/卡通恐龙.jpg)" class="pimgbox" onclick="changeBg('url(https://blogresource.sqwdream.cloud/background/cell_phone_wallpaper/卡通恐龙.jpg)')"></a>   
    </div>
    <h3 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h3>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://blogresource.sqwdream.cloud/background/desktop_wallpaper/threebody.jpg)" class="imgbox" onclick="changeBg('url(https\://blogresource.sqwdream.cloud/background/desktop_wallpaper/threebody.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://blogresource.sqwdream.cloud/background/desktop_wallpaper/distance.jpg)" class="imgbox" onclick="changeBg('url(https\://blogresource.sqwdream.cloud/background/desktop_wallpaper/distance.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://blogresource.sqwdream.cloud/background/desktop_wallpaper/beautifulgirl.png)" class="imgbox" onclick="changeBg('url(https\://blogresource.sqwdream.cloud/background/desktop_wallpaper/beautifulgirl.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://blogresource.sqwdream.cloud/background/desktop_wallpaper/girl1.jpg)" class="imgbox" onclick="changeBg('url(https\://blogresource.sqwdream.cloud/background/desktop_wallpaper/girl1.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://blogresource.sqwdream.cloud/background/desktop_wallpaper/girl2.jpg)" class="imgbox" onclick="changeBg('url(https\://blogresource.sqwdream.cloud/background/desktop_wallpaper/girl2.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://blogresource.sqwdream.cloud/background/desktop_wallpaper/green.jpg)" class="imgbox" onclick="changeBg('url(https\://blogresource.sqwdream.cloud/background/desktop_wallpaper/green.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://blogresource.sqwdream.cloud/background/desktop_wallpaper/girl3.jpg)" class="imgbox" onclick="changeBg('url(https\://blogresource.sqwdream.cloud/background/desktop_wallpaper/girl3.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://blogresource.sqwdream.cloud/background/desktop_wallpaper/men.png)" class="imgbox" onclick="changeBg('url(https\://blogresource.sqwdream.cloud/background/desktop_wallpaper/men.png)')"></a>
    </div>
    <h3 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h3>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(90deg, #ffd7e4 0%, #c8f1ff 100%)" onclick="changeBg('linear-gradient(90deg, #ffd7e4 0%, #c8f1ff 100%)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(45deg, #e5737b, #c6999e, #96b9c2, #00d6e8)" onclick="changeBg('linear-gradient(45deg, #e5737b, #c6999e, #96b9c2, #00d6e8)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: radial-gradient(circle, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)" onclick="changeBg('radial-gradient(circle, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)')"></a>
    </div>
    <h3 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h3>
    <div class="bgbox">
    <input type="color" id="colors" href="javascript:;" rel="noopener external nofollow" class="box" autocomplete="on" value="#513d3d" oninput="changeBg(value)">
    </div>

`;
$("#"+localStorage.getItem("themeColor")).attr("checked", true);
if(localStorage.getItem("blur")=="false"){
    document.getElementById("blur").checked=true;
}
if(localStorage.getItem("yjjs")=="true"){
    document.getElementById("yjjs").checked=true;
}
if(localStorage.getItem("hideRightside")=="1"){
    document.getElementById("hideAside").checked=true;
}
// document.getElementsByClassName("reSettings")[0].onclick=function(){
//     localStorage.clear()
//     window.location.reload()
// }
}

function winResize() {
    if(!isMax){
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
        winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
    } else {
        winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }}
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
    if (document.querySelector('#changeBgBox')) {winbox.toggleClass('hide');sessionStorage.setItem("settingWindow","close");}
    else {createWinbox();sessionStorage.setItem("settingWindow","open");}
}
if(sessionStorage.getItem("settingWindow")=="open"){
    createWinbox();
    
}

