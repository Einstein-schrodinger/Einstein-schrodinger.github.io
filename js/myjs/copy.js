// // document.oncopy = function () {
// //     Snackbar.show({
// //         text: '复制成功,如转载请注明出处！',
// //         pos: 'top-right',
// //         onActionClick: function (element) {
// //             window.open("/license")
// //         },
// //         actionText: "查看博客声明",
// //     });
// // };
// // document.onkeydown = function (event) {
// //     event = (event || window.event);
// //     if (event.keyCode == 123) {
// //         Snackbar.show({
// //             text: '已打开开发者模式，扒源请谨记MIT协议！',
// //             pos: 'top-right',
// //             onActionClick: function (element) {
// //                 window.open("/license")
// //             },
// //             actionText: "查看博客声明",
// //         });
// //     }
// // }
// let TT=null;function debounce(e,t){null!==TT&&clearTimeout(TT),TT=setTimeout(e,t)}document.addEventListener("copy",(function(){debounce((function(){new Vue({data:function(){this.$notify({title:"哎嘿！复制成功🍬",message:"若要转载最好保留原文链接哦，给你一个大大的赞！",position:"top-left",offset:50,showClose:!0,type:"success",duration:5e3})}})}),500)})),document.onkeydown=function(e){(123==e.keyCode||e.ctrlKey&&e.shiftKey&&(74===e.keyCode||73===e.keyCode||67===e.keyCode)||e.ctrlKey&&85===e.keyCode)&&debounce((function(){new Vue({data:function(){this.$notify({title:"你已被发现😜",message:"小伙子，扒源记住要遵循GPL协议！",position:"top-left",offset:50,showClose:!0,type:"warning",duration:5e3})}})}),500)};