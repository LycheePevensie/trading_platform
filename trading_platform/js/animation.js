/**
 * Created by Lychee on 2016/10/27.
 */
var $ = function(ele){return document.querySelector(ele)};
var $$ = function(ele){return document.querySelectorAll(ele)};
//display:noneʵ����ʾ����
//�л�������ʾ״̬
function toggle(ele,speed){
    if(hasClass(ele,'hide')){
        removeClass(ele,'hide');
    }else{
        addClass(ele,'hide');
    }
}
//ȫ������
function hideall(ele,speed){
    if(!hasClass(ele,'hide')){
        addClass(ele,'hide');
    }
}
//ȫ����ʾ
function showall(ele,speed){
    if(hasClass(ele,'hide')){
        removeClass(ele,'hide');
    }
}

//�����л�
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

//��ͷȫ��
function angleAllUp(ele){
    if(hasClass(ele,'icon-chevron-down')){
        removeClass(ele,'icon-chevron-down');
        addClass(ele,'icon-chevron-up');
    }
}
//��ͷȫ��
function angleAllDown(ele){
    if(hasClass(ele,'icon-chevron-up')){
        removeClass(ele,'icon-chevron-up');
        addClass(ele,'icon-chevron-down');
    }
}
//��ͷ�л�״̬
function angleToggle(ele){
    if(hasClass(ele,'icon-chevron-down')){
        removeClass(ele,'icon-chevron-down');
        addClass(ele,'icon-chevron-up');
    }else if(hasClass(ele,'icon-chevron-up')){
        removeClass(ele,'icon-chevron-up');
        addClass(ele,'icon-chevron-down');
    }
}

//����л�ͼƬ��banner�������,�л���������������

//����һ��
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

//������
//�հ��������ˡ��������ޡ�������

function toggleEvent() {
    addHandler($('#banner-toggle'), 'click', function () {
        return (function(){
            toggle($('#banner'));
            angleToggle($('#banner-toggle'));
        })();
    });
    //�����������������
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
    //���������һ������
    addHandler($('.btn-up'),'click',function(){
        for(var i=0;i<$$('.bets-inner').length;i++){
            (function(m){
                toggleSlow($$('.bets-inner')[m],0);
                angleAllUp($$('.icon-angle')[m]);
            })(i);
        }
    });
    //���������һ����ʾ
    addHandler($('.btn-down'),'click',function(){
        for(var i=0;i<$$('.bets-inner').length;i++){
            (function(m){
                toggleSlow($$('.bets-inner')[m],50);
                angleAllDown($$('.icon-angle')[m]);
            })(i);
        }
    });
}

//�����л������������
toggleEvent();
