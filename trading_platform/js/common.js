/**
 * Created by Lychee on 2016/10/27.
 */
//����¼�
function addHandler(ele,type,handler){
    if(ele.addEventListener){
        return ele.addEventListener(type,handler,false);
    }else if(ele.attachEvent){
        return ele.attachEvent('on'+type,handler);
    }else{
        return ele['on'+type]=handler;
    }
}
//�ж�����
function hasClass(obj,cls){
    return obj.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
//�������
function addClass(obj,cls){
    if(!this.hasClass(obj,cls)){
        obj.className += ' ' + cls;
    }
}
//�Ƴ�����
function removeClass(obj,cls){
    if(this.hasClass(obj,cls)){
        var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
        obj.className = obj.className.replace(reg,'');
    }
}