/**
 * Created by Lychee on 2016/10/27.
 */
var $ = function(ele){return document.querySelector(ele)};
var $$ = function(ele){return document.querySelectorAll(ele)};

function toggle(ele,speed){
    if(ele.className.indexOf('hide') != -1){
        ele.removeClass('hide');
    }else{
        ele.className += ' hide';
    }
}
addHandler($('#banner-toggle'),'click', function(){
    return toggle($('#banner'));
});