/**
 * Created by Lychee on 2016/10/27.
 */
var $ = function(ele){return document.querySelector(ele)};
var $$ = function(ele){return document.querySelectorAll(ele)};
//display:none实现显示隐藏
//切换隐藏显示状态
function toggle(ele,speed){
    if(hasClass(ele,'hide')){
        removeClass(ele,'hide');
    }else{
        addClass(ele,'hide');
    }
}
//全部隐藏
function hideall(ele,speed){
    if(!hasClass(ele,'hide')){
        addClass(ele,'hide');
    }
}
//全部显示
function showall(ele,speed){
    if(hasClass(ele,'hide')){
        removeClass(ele,'hide');
    }
}

//渐进切换
function toggleSlow(ele,itarget){
    clearInterval(ele.otimer);
    ele.otimer = setInterval(function(){
        var speed = itarget-ele.offsetHeight>0 ? 5 : -5;
        if(ele.offsetHeight == itarget){
            clearInterval(ele.otimer);
        }else{
            ele.style.height = ele.offsetHeight + speed + 'px';
        }
    },30)
}

//箭头全上
function angleAllUp(ele){
    if(hasClass(ele,'icon-chevron-down')){
        removeClass(ele,'icon-chevron-down');
        addClass(ele,'icon-chevron-up');
    }
}
//箭头全下
function angleAllDown(ele){
    if(hasClass(ele,'icon-chevron-up')){
        removeClass(ele,'icon-chevron-up');
        addClass(ele,'icon-chevron-down');
    }
}
//箭头切换状态
function angleToggle(ele){
    if(hasClass(ele,'icon-chevron-down')){
        removeClass(ele,'icon-chevron-down');
        addClass(ele,'icon-chevron-up');
    }else if(hasClass(ele,'icon-chevron-up')){
        removeClass(ele,'icon-chevron-up');
        addClass(ele,'icon-chevron-down');
    }
}

//点击切换图片栏banner隐藏情况,切换侧边栏的隐藏情况

//方法一：
//function toggleEvent(){
//    addHandler($('#banner-toggle'),'click',function(){
//        return toggle($('#banner'));
//    });
//    addHandler($('.bets-toggle1'),'click',function(){
//        return toggle($('.bets-inner1'));
//    });
//    addHandler($('.bets-toggle2'),'click',function(){
//        return toggle($('.bets-inner2'));
//    });
//    addHandler($('.bets-toggle3'),'click',function(){
//        return toggle($('.bets-inner3'));
//    });
//}

//方法二
//闭包整死我了…………哭…………

function toggleEvent() {
    addHandler($('#banner-toggle'), 'click', function () {
        return (function(){
            toggle($('#banner'));
            angleToggle($('#banner-toggle'));
        })();
    });
    //侧边栏三个单独隐藏
    for(var i=0;i<$$('.bets-toggle').length;i++) {
        (function (m) {
            addHandler($$('.bets-toggle')[m], 'click', function () {
                return (function(){
                    var itarget = $$('.bets-toggle')[m].nextElementSibling.offsetHeight>0 ? 0 : 50;
                    toggleSlow($$('.bets-toggle')[m].nextElementSibling,itarget);
                    //return toggle($$('.bets-inner')[m]);
                    angleToggle($$('.icon-angle')[m]);
                })();
            });
        })(i);
    }
    //侧边栏三个一起隐藏
    addHandler($('.btn-up'),'click',function(){
        for(var i=0;i<$$('.bets-inner').length;i++){
            (function(m){
                toggleSlow($$('.bets-inner')[m],0);
                angleAllUp($$('.icon-angle')[m]);
            })(i);
        }
    });
    //侧边栏三个一起显示
    addHandler($('.btn-down'),'click',function(){
        for(var i=0;i<$$('.bets-inner').length;i++){
            (function(m){
                toggleSlow($$('.bets-inner')[m],50);
                angleAllDown($$('.icon-angle')[m]);
            })(i);
        }
    });
}

//调用切换隐藏情况函数
toggleEvent();
