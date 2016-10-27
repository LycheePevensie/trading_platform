/**
 * Created by Lychee on 2016/10/27.
 */
//添加事件
function addHandler(ele,type,handler){
    if(ele.addEventListener){
        return ele.addEventListener(type,handler,false);
    }else if(ele.attachEvent){
        return ele.attachEvent('on'+type,handler);
    }else{
        return ele['on'+type]=handler;
    }
}
//判断类名
function hasClass(obj,cls){
    return obj.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
//添加类名
function addClass(obj,cls){
    if(!this.hasClass(obj,cls)){
        obj.className += ' ' + cls;
    }
}
//移除类名
function removeClass(obj,cls){
    if(this.hasClass(obj,cls)){
        var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
        obj.className = obj.className.replace(reg,'');
    }
}