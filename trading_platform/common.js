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

}
//�������
function addClass(){

}
//�Ƴ�����
function removeClass(){

}