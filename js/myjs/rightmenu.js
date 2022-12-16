// // 初始化函数
// let rm = {};

// //禁止图片拖拽
// rm.stopdragimg=$("img");
// rm.stopdragimg.on("dragstart",function(){return false;});

// // 显示菜单
// rm.showRightMenu = function(isTrue, x=0, y=0){
//     let $rightMenu = $('#rightMenu');
//     $rightMenu.css('top',x+'px').css('left',y+'px');
//     if(isTrue){
//         $rightMenu.show();
//         stopMaskScroll()
//     }else{
//         $rightMenu.hide();
//     }
// }

// // 隐藏菜单
// rm.hideRightMenu = function(){
//   rm.showRightMenu(false);
//   $('#rightmenu-mask').attr('style','display: none');
// }

// // 尺寸
// let rmWidth = $('#rightMenu').width();
// let rmHeight = $('#rightMenu').height();

// // 重新定义尺寸
// rm.reloadrmSize = function(){
//   rmWidth = $('#rightMenu').width();
//   rmHeight = $('#rightMenu').height();
// }

// // 获取点击的href
// let domhref = '';
// let domImgSrc = '';
// let globalEvent = null;

// // 监听右键初始化
// window.oncontextmenu = function(event){
//   if(document.body.clientWidth > 768){
//     let pageX = event.clientX + 10;	//加10是为了防止显示时鼠标遮在菜单上
//     let pageY = event.clientY;
//     // console.log(event);

//     //其他额外菜单
//     let $rightMenuOther = $('.rightMenuOther');
//     let $rightMenuPlugin = $('.rightMenuPlugin');
//     let $rightMenuCopyText = $('#menu-copytext');
//     let $rightMenuPasteText = $('#menu-pastetext');
//     let $rightMenuCommentText = $('#menu-commenttext');
//     let $rightMenuNewWindow = $('#menu-newwindow');
//     let $rightMenuCopyLink = $('#menu-copylink');
//     let $rightMenuCopyImg = $('#menu-copyimg');
//     let $rightMenuDownloadImg = $('#menu-downloadimg');
//     let $rightMenuSearch = $('#menu-search');
//     let $rightMenuSearchBaidu = $('#menu-searchBaidu');
//     let $rightMenuMusicToggle = $('#menu-music-toggle');
//     let $rightMenuMusicBack = $('#menu-music-back');
//     let $rightMenuMusicForward = $('#menu-music-forward');
//     let $rightMenuMusicPlaylist = $('#menu-music-playlist');
//     let $rightMenuMusicCopyMusicName = $('#menu-music-copyMusicName');
//     let href = event.target.href;
//     let imgsrc = event.target.currentSrc;

//     // 判断模式 扩展模式为有事件
//     let pluginMode = false;
//     $rightMenuOther.show();
//     globalEvent = event;

//     // 检查是否需要复制 是否有选中文本
//     if(selectTextNow && window.getSelection()){
//       pluginMode = true;
//       $rightMenuCopyText.show();
//       $rightMenuCommentText.show();
//       $rightMenuSearch.show();
//       $rightMenuSearchBaidu.show(); 
//     }else{
//       $rightMenuCopyText.hide();
//       $rightMenuCommentText.hide();
//       $rightMenuSearchBaidu.hide();
//       $rightMenuSearch.hide();
//     }

//     //检查是否右键点击了链接a标签
//     if(href){
//       pluginMode = true;
//       $rightMenuNewWindow.show();
//       $rightMenuCopyLink.show();
//       domhref = href;
//     }else{
//       $rightMenuNewWindow.hide();
//       $rightMenuCopyLink.hide();
//     }

//     //检查是否需要复制图片
//     if(imgsrc){
//       pluginMode = true;
//       $rightMenuCopyImg.show();
//       $rightMenuDownloadImg.show();
//       domImgSrc = imgsrc;
//     }else{
//       $rightMenuCopyImg.hide();
//       $rightMenuDownloadImg.hide();
//     }

//     // 判断是否为输入框
//     if (event.target.tagName.toLowerCase() === 'input' || event.target.tagName.toLowerCase() === 'textarea') {
//       console.log('这是一个输入框')
//       pluginMode = true;
//       $rightMenuPasteText.show();
//     }else{
//       $rightMenuPasteText.hide();
//     }

//     //判断是否是音乐
//     if (event.target.nodeName == "METING-JS") {
//       console.log('这是一个音乐');
//       pluginMode = true;
//       $rightMenuMusicToggle.show();
//       $rightMenuMusicBack.show();
//       $rightMenuMusicForward.show();
//       $rightMenuMusicPlaylist.show();
//       $rightMenuMusicCopyMusicName.show();
//     }else {
//       $rightMenuMusicToggle.hide();
//       $rightMenuMusicBack.hide();
//       $rightMenuMusicForward.hide();
//       $rightMenuMusicPlaylist.hide();
//       $rightMenuMusicCopyMusicName.hide()
//     }

//     // 如果不是扩展模式则隐藏扩展模块
//     if (pluginMode){
//       $rightMenuOther.hide();
//       $rightMenuPlugin.show();
//     }else{
//       $rightMenuPlugin.hide()
//     }

//     rm.reloadrmSize()

//      // 鼠标默认显示在鼠标右下方，当鼠标靠右或考下时，将菜单显示在鼠标左方\上方
//     if(pageX + rmWidth > window.innerWidth){
//       pageX -= rmWidth+10;
//     }
//     if(pageY + rmHeight > window.innerHeight){
//         pageY -= pageY + rmHeight - window.innerHeight;
//     }
    
//     rm.showRightMenu(true, pageY, pageX);
//     $('#rightmenu-mask').attr('style','display: flex');
//     return false;
//   }
// };

// // 下载图片状态
// rm.downloadimging = false;

// // 复制图片到剪贴板
// rm.writeClipImg = function (imgsrc) {
//   console.log('按下复制');
//   rm.hideRightMenu();
//   btf.snackbarShow('正在下载中，请稍后',false,10000)
//   if(rm.downloadimging == false){
//     rm.downloadimging = true;
//     setTimeout(function(){
//       copyImage(imgsrc);
//       btf.snackbarShow('复制成功！图片已添加盲水印，请遵守版权协议');
//       rm.downloadimging = false;
//     },"10000")
//   }
// }

// function imageToBlob(imageURL) {
//   const img = new Image;
//   const c = document.createElement("canvas");
//   const ctx = c.getContext("2d");
//   img.crossOrigin = "";
//   img.src = imageURL;
//   return new Promise(resolve => {
//     img.onload = function () {
//       c.width = this.naturalWidth;
//       c.height = this.naturalHeight;
//       ctx.drawImage(this, 0, 0);
//       c.toBlob((blob) => {
//         // here the image is a blob
//         resolve(blob)
//       }, "image/png", 0.75);
//     };
//   })
// }

// async function copyImage(imageURL){
//   const blob = await imageToBlob(imageURL)
//   const item = new ClipboardItem({ "image/png": blob });
//   navigator.clipboard.write([item]);
// }

// rm.switchDarkMode = function() {
//   navFn.switchDarkMode();
//   rm.hideRightMenu();
//   heo.darkModeStatus();
// }

// rm.copyUrl = function(id) {
//     $("body").after("<input id='copyVal'></input>");
//     var text = id;
//     var input = document.getElementById("copyVal");
//     input.value = text;
//     input.select();
//     input.setSelectionRange(0, input.value.length);   
//     document.execCommand("copy");
//     $("#copyVal").remove();
// }

// function stopMaskScroll(){
//   if (document.getElementById("rightmenu-mask")){
//     let xscroll = document.getElementById("rightmenu-mask");
//   xscroll.addEventListener("mousewheel", function (e) {
//     //阻止浏览器默认方法
//     rm.hideRightMenu();
//     // e.preventDefault();
//    }, false);
//   }
//   if (document.getElementById("rightMenu")){
//     let xscroll = document.getElementById("rightMenu");
//   xscroll.addEventListener("mousewheel", function (e) {
//     //阻止浏览器默认方法
//     rm.hideRightMenu();
//     // e.preventDefault();
//     }, false);
//   }
// }

// rm.rightmenuCopyText = function(txt){
//   if (navigator.clipboard) {
//     navigator.clipboard.writeText(txt);
//   }
//   rm.hideRightMenu();
// }

// rm.copyPageUrl = function(){
//   var url = window.location.href;
//   rm.copyUrl(url);
//   btf.snackbarShow('复制本页链接地址成功',false,2000);
//   rm.hideRightMenu();
// }

// rm.sharePage = function(){
//   var content = window.location.href;
//   rm.copyUrl(url);
//   btf.snackbarShow('复制本页链接地址成功',false,2000);
//   rm.hideRightMenu();
// }

// // 复制当前选中文本
// var selectTextNow = '';
// document.onmouseup = document.ondbclick= selceText;
// function selceText(){
//     var txt;
//     if(document.selection){
//         txt = document.selection.createRange().text;
//     }else{
//         txt = window.getSelection()+'';
//     }
//     if(txt){
//       selectTextNow = txt;
//       // console.log(selectTextNow);
//     }else{
//       selectTextNow = '';
//     }
// }

// // 读取剪切板
// rm.readClipboard = function(){
//   if (navigator.clipboard) {
//     navigator.clipboard.readText().then(clipText => rm.insertAtCaret(globalEvent.target, clipText) );
//   }
// }

// // 粘贴文本到焦点
// rm.insertAtCaret = function(elemt, value){
//   const startPos = elemt.selectionStart,
//   endPos = elemt.selectionEnd;
//   if (document.selection) {
//     elemt.focus();
//     var sel = document.selection.createRange();
//     sel.text = value;
//     elemt.focus();
//   } else {
//     if (startPos || startPos == '0') {
//       var scrollTop = elemt.scrollTop;
//       elemt.value = elemt.value.substring(0, startPos) + value + elemt.value.substring(endPos, elemt.value.length);
//       elemt.focus();
//       elemt.selectionStart = startPos + value.length;
//       elemt.selectionEnd = startPos + value.length;
//       elemt.scrollTop = scrollTop;
//     } else {
//       elemt.value += value;
//       elemt.focus();
//     }
//   }
// }

// //粘贴文本
// rm.pasteText = function(){
//   const result = rm.readClipboard() || '';
//   rm.hideRightMenu();
// }

// //引用到评论
// rm.rightMenuCommentText = function(txt){
//   rm.hideRightMenu();
//   var input = document.getElementsByClassName('el-textarea__inner')[0];
//   let evt = document.createEvent('HTMLEvents');
//   evt.initEvent('input', true, true);
//   let inputValue = replaceAll(txt,'\n','\n> ')
//   input.value = '> ' + inputValue + '\n\n';
//   input.dispatchEvent(evt);
//   var domTop = document.querySelector("#post-comment").offsetTop;
//   window.scrollTo(0,domTop - 80);
//   input.focus();
//   input.setSelectionRange(-1,-1);
//   if (document.getElementById("comment-tips")) {
//     document.getElementById("comment-tips").classList.add("show");
//   }
// }

// //替换所有内容
// function replaceAll(string, search, replace) {
//   return string.split(search).join(replace);
// }

// // 百度搜索
// rm.searchBaidu = function(){
//   btf.snackbarShow('即将跳转到百度搜索',false,2000);
//   setTimeout(function(){
//     window.open('https://www.baidu.com/s?wd=' + selectTextNow);
//   }, "2000");
//   rm.hideRightMenu();
// }

// //分享链接
// rm.copyLink = function(){
//   rm.rightmenuCopyText(domhref);
//   btf.snackbarShow('已复制链接地址');
// }

// function addRightMenuClickEvent(){
//   // 添加点击事件
//   $('#menu-backward').on('click',function(){window.history.back();rm.hideRightMenu();});
//   $('#menu-forward').on('click',function(){window.history.forward();rm.hideRightMenu();});
//   $('#menu-refresh').on('click',function(){window.location.reload();});
//   $('#menu-top').on('click',function(){btf.scrollToDest(0, 500);rm.hideRightMenu();});
//   $('.menu-link').on('click',rm.hideRightMenu);
//   $('#menu-darkmode').on('click',rm.switchDarkMode);
//   $('#menu-home').on('click',function(){window.location.href = window.location.origin;});
//   $('#menu-randomPost').on('click',function(){toRandomPost()});
//   $('#menu-commentBarrage').on('click',heo.switchCommentBarrage);
//   $('#rightmenu-mask').on('click',rm.hideRightMenu);
//   $('#rightmenu-mask').contextmenu(function(){
//     rm.hideRightMenu();
//     return false;
//   });
//   $('#menu-translate').on('click',function(){
//       rm.hideRightMenu();
//       translateInitialization();
//   });
//   $('#menu-copy').on('click', rm.copyPageUrl);
//   $('#menu-pastetext').on('click',rm.pasteText);
//   $('#menu-copytext').on('click',function(){rm.rightmenuCopyText(selectTextNow);btf.snackbarShow('复制成功，复制和转载请标注本文地址');});
//   $('#menu-commenttext').on('click',function(){rm.rightMenuCommentText(selectTextNow);});
//   $('#menu-newwindow').on('click',function(){window.open(domhref);rm.hideRightMenu();});
//   $('#menu-copylink').on('click',rm.copyLink);
//   $('#menu-downloadimg').on('click',function(){heo.downloadImage(domImgSrc,'zhheo');});
//   $('#menu-copyimg').on('click',function(){rm.writeClipImg(domImgSrc);});
//   $('#menu-searchBaidu').on('click',rm.searchBaidu);
//   //音乐
//   $('#menu-music-toggle').on('click',heo.musicToggle);
//   $('#menu-music-back').on('click',heo.musicSkipBack);
//   $('#menu-music-forward').on('click',heo.musicSkipForward);
//   $('#menu-music-copyMusicName').on('click',function(){rm.rightmenuCopyText(heo.musicGetName());btf.snackbarShow('复制歌曲名称成功',false,3000);});
// }


console.log(
  "Codes uses GPL Licence"
)
function setMask(){//设置遮罩层
  if(document.getElementsByClassName("rmMask")[0]!=undefined){
      return document.getElementsByClassName("rmMask")[0];
  }
  mask = document.createElement('div');
  mask.className = "rmMask";
  mask.style.width = window.innerWidth + 'px';
  mask.style.height = window.innerHeight + 'px';
  mask.style.background = '#fff';
  mask.style.opacity = '.0';
  mask.style.position = 'fixed';
  mask.style.top = '0';
  mask.style.left = '0';
  mask.style.zIndex = 998;
  document.body.appendChild(mask);
  document.getElementById("rightMenu").style.zIndex=19198;
  return mask;
}

function insertAtCursor(myField, myValue) {

  //IE 浏览器
  if (document.selection) {
      myField.focus();
      sel = document.selection.createRange();
      sel.text = myValue;
      sel.select();
  }

  //FireFox、Chrome等
  else if (myField.selectionStart || myField.selectionStart == '0') {
      var startPos = myField.selectionStart;
      var endPos = myField.selectionEnd;

      // 保存滚动条
      var restoreTop = myField.scrollTop;
      myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);

      if (restoreTop > 0) {
          myField.scrollTop = restoreTop;
      }

      myField.focus();
      myField.selectionStart = startPos + myValue.length;
      myField.selectionEnd = startPos + myValue.length;
  } else {
      myField.value += myValue;
      myField.focus();
  }
}
let rmf = {};
rmf.showRightMenu = function (isTrue, x = 0, y = 0) {
  let $rightMenu = $('#rightMenu');
  $rightMenu.css('top', x + 'px').css('left', y + 'px');

  if (isTrue) {
      $rightMenu.show();
  } else {
      $rightMenu.hide();
  }
}
rmf.switchDarkMode = function () {
  const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
  if (nowMode === 'light') {
      activateDarkMode()
      saveToLocal.set('theme', 'dark', 2)
      GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
  } else {
      activateLightMode()
      saveToLocal.set('theme', 'light', 2)
      GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
  }
  // handle some cases
  typeof utterancesTheme === 'function' && utterancesTheme()
  typeof FB === 'object' && window.loadFBComment()
  window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)
};
rmf.yinyong=function(){
  var e = document.getElementsByClassName("el-textarea__inner")[0],
      t = document.createEvent("HTMLEvents");
  t.initEvent("input", !0, !0), e.value = d.value = "> "+getSelection().toString()+"\n\n", e.dispatchEvent(t);
  console.log(getSelection().toString());
  document.getElementsByClassName("el-textarea__inner")[0].value="> "+getSelection().toString()+"\n\n";
  Snackbar.show({
      text: '为保证最佳评论阅读体验，建议不要删除空行',
      pos: 'top-center',
      showAction: false,
  })
}
rmf.copyWordsLink = function () {
  let url = window.location.href
  let txa = document.createElement("textarea");
  txa.value = url;
  document.body.appendChild(txa)
  txa.select();
  document.execCommand("Copy");
  document.body.removeChild(txa);
  Snackbar.show({
      text: '链接复制成功！快去分享吧！',
      pos: 'top-right',
      showAction: false
  });
}
rmf.switchReadMode = function () {
  const $body = document.body
  $body.classList.add('read-mode')
  const newEle = document.createElement('button')
  newEle.type = 'button'
  newEle.className = 'fas fa-sign-out-alt exit-readmode'
  $body.appendChild(newEle)

  function clickFn() {
      $body.classList.remove('read-mode')
      newEle.remove()
      newEle.removeEventListener('click', clickFn)
  }

  newEle.addEventListener('click', clickFn)
}

//复制选中文字
rmf.copySelect = function () {
  document.execCommand('Copy', false, null);
  //这里可以写点东西提示一下 已复制
}

//回到顶部
rmf.scrollToTop = function () {
  document.getElementsByClassName("menus_items")[1].setAttribute("style","");
  document.getElementById("name-container").setAttribute("style","display:none");
  btf.scrollToDest(0, 500);
}
rmf.translate = function () {
  document.getElementById("translateLink").click();
}
rmf.searchinThisPage=()=>{
  document.getElementsByClassName("local-search-box--input")[0].value=window.getSelection().toString()
  document.getElementsByClassName("search")[0].click()
  var evt = document.createEvent("HTMLEvents");evt.initEvent("input", false, false);document.getElementsByClassName("local-search-box--input")[0].dispatchEvent(evt);
  // try{document.body.removeChild(mask);}catch(err){}
}
rmf.downloadImage=function(imgsrc, name) { //下载图片地址和图片名
  btf.snackbarShow('正在下载中，请稍后',false,10000)
  setTimeout(function(){
      let image = new Image();
      // 解决跨域 Canvas 污染问题
      image.setAttribute("crossOrigin", "anonymous");
      image.onload = function() {
          let canvas = document.createElement("canvas");
          canvas.width = image.width;
          canvas.height = image.height;
          let context = canvas.getContext("2d");
          context.drawImage(image, 0, 0, image.width, image.height);
          let url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
          let a = document.createElement("a"); // 生成一个a元素
          let event = new MouseEvent("click"); // 创建一个单击事件
          a.download = name || "photo"; // 设置图片名称
          a.href = url; // 将生成的URL设置为a.href属性
          a.dispatchEvent(event); // 触发a的单击事件
      };
      image.src = imgsrc;
      btf.snackbarShow('图片已添加盲水印，请遵守版权协议');
      rm.downloadimging = false;
  }, "10000");
}
document.body.addEventListener('touchmove', function(e){
  
}, { passive: false });
function popupMenu() {
  //window.oncontextmenu=function(){return false;}
  window.oncontextmenu = function (event) {
      if(event.ctrlKey)return true;
      
      $('.rightMenu-group.hide').hide();
      if (document.getSelection().toString()) {
          $('#menu-text').show();
      }
      if (document.getElementById('post')) {
          $('#menu-post').show();
      } else {
          if (document.getElementById('page')) {
              $('#menu-post').show();
          }
      }
      var el = window.document.body;
      el = event.target;
      var a=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/
      if (a.test(window.getSelection().toString())&&el.tagName!="A"){
          $('#menu-too').show()
      }
      if (el.tagName == 'A') {
          $('#menu-to').show()
          rmf.open = function () {
              if(el.href.indexOf("http://")==-1&&el.href.indexOf("https://")==-1||el.href.indexOf("yisous.xyz")!=-1){
                  pjax.loadUrl(el.href)
              }
              else{
                  location.href = el.href
              }
          }
          rmf.openWithNewTab = function () {
              window.open(el.href);
              // window.location.reload();
          }
          rmf.copyLink = function () {
              let url = el.href
              let txa = document.createElement("textarea");
              txa.value = url;
              document.body.appendChild(txa)
              txa.select();
              document.execCommand("Copy");
              document.body.removeChild(txa);
          }
      }
      if (el.tagName == 'IMG') {
          $('#menu-img').show()
          rmf.openWithNewTab = function () {
              window.open(el.src);
              // window.location.reload();
          }
          rmf.click = function () {
              el.click()
          }
          rmf.copyLink = function () {
              let url = el.src
              let txa = document.createElement("textarea");
              txa.value = url;
              document.body.appendChild(txa)
              txa.select();
              document.execCommand("Copy");
              document.body.removeChild(txa);
          }
          rmf.saveAs=function(){
              var url = el.src;
              var filename = url.split("/")[-1];
              rmf.downloadImage(url, filename);
          }
      } else if (el.tagName == "TEXTAREA" || el.tagName == "INPUT") {
          $('#menu-paste').show();
          // rmf.paste=function(){
          //     input.addEventListener('paste', async event => {
          //         event.preventDefault();
          //         const text = await navigator.clipboard.readText();
          //         el.value+=text;
          //       });
          // }
          rmf.paste = function () {
              navigator.permissions
                  .query({
                      name: 'clipboard-read'
                  })
                  .then(result => {
                      if (result.state == 'granted' || result.state == 'prompt') {
                          //读取剪贴板
                          navigator.clipboard.readText().then(text => {
                              console.log(text)
                              insertAtCursor(el, text)
                          })
                      } else {
                          Snackbar.show({
                              text: '请允许读取剪贴板！',
                              pos: 'top-center',
                              showAction: false,
                          })
                      }
                  })
          }
      }
      let pageX = event.clientX + 10;
      let pageY = event.clientY;
      let rmWidth = $('#rightMenu').width();
      let rmHeight = $('#rightMenu').height();
      if (pageX + rmWidth > window.innerWidth) {
          pageX -= rmWidth + 10;
      }
      if (pageY + rmHeight > window.innerHeight) {
          pageY -= pageY + rmHeight - window.innerHeight;
      }
      mask=setMask();
      window.onscroll=()=>{
          rmf.showRightMenu(false);
          window.onscroll=()=>{}
          document.body.removeChild(mask);
      }
      $(".rightMenu-item").click(()=>{
          document.body.removeChild(mask);
      })
      $(window).resize(()=>{
          rmf.showRightMenu(false);
          document.body.removeChild(mask);
      })
      mask.onclick=()=>{
          document.body.removeChild(mask);
      }
      rmf.showRightMenu(true, pageY, pageX);
      return false;
  };

  window.addEventListener('click', function () {
      rmf.showRightMenu(false);
  });
}
if (!(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
  popupMenu()
}
const box = document.documentElement

function addLongtabListener(target, callback) {
  let timer = 0 // 初始化timer

  target.ontouchstart = () => {
      timer = 0 // 重置timer
      timer = setTimeout(() => {
          callback();
          timer = 0
      }, 380) // 超时器能成功执行，说明是长按
  }

  target.ontouchmove = () => {
      clearTimeout(timer) // 如果来到这里，说明是滑动
      timer = 0
  }

  target.ontouchend = () => { // 到这里如果timer有值，说明此触摸时间不足380ms，是点击
      if (timer) {
          clearTimeout(timer)
      }
  }
}

addLongtabListener(box, popupMenu)