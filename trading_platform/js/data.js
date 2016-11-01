/**
 * Created by Lychee on 2016/10/31.
 */
var data = {
    'matchName':'OMG VS PPP',
    'time':'2016-11-16',
    'league':'LPL',
    'homeWinBackOdds':1.9,
    'homeWinBackVol':100,
    'awayWinBackOdds':1.9,
    'awayWinBackVol':100,
    'drawBackOdds':1.88,
    'drawBackVol':1089,
    'homeWinLayOdds':1.9,
    'homeWinLayVol':100,
    'awayWinLayOdds':1.9,
    'awayWinLayVol':100,
    'drawLayOdds':1.88,
    'drawLayVol':1089
};
var $ = function(ele){return document.querySelector(ele)};
var $$ = function(ele){return document.querySelectorAll(ele)};

//传递数据
function transportData(data){
    var str;
    str = `<ul class="markets">
                    <li class="market">
                        <div class="header">
                            <span><i></i></span>
                            <div class="clock">${data.time}</div>
                            <h2>${data.matchName}</h2>
                            <i><img src="./img/timing.png"></i>
                        </div>
                        <div class="label">
                            <ul>
                                <li class="lay">Lay</li>
                                <li class="back">Back</li>
                            </ul>
                        </div>
                        <div class="runners">
                            <ul>
                                <li>
                                    <h4>${data.matchName.slice(0,data.matchName.indexOf('V'))}</h4>
                                    <div class="prices">
                                        <ol class="lay">
                                            <li><span>${data.homeWinLayOdds}</span><span>$${data.homeWinLayVol}</span></li>
                                            <li><span>2</span><span>$6</span></li>
                                            <li><span>3</span><span>$6</span></li>
                                        </ol>
                                        <ol class="back">
                                            <li><span>${data.homeWinBackOdds}</span><span>$${data.homeWinBackVol}</span></li>
                                            <li><span>5</span><span>$6</span></li>
                                            <li><span>6</span><span>$6</span></li>
                                        </ol>
                                    </div>
                                </li>
                                <li>
                                    <h4>${data.matchName.slice(data.matchName.indexOf('S')+1)}</h4>
                                    <div class="prices">
                                        <ol class="lay">
                                            <li><span>${data.awayWinLayOdds}</span><span>$${data.awayWinLayVol}</span></li>
                                            <li><span>2</span><span>$6</span></li>
                                            <li><span>3</span><span>$6</span></li>
                                        </ol>
                                        <ol class="back">
                                            <li><span>${data.awayWinBackOdds}</span><span>$${data.awayWinBackVol}</span></li>
                                            <li><span>5</span><span>$6</span></li>
                                            <li><span>6</span><span>$6</span></li>
                                        </ol>
                                    </div>
                                </li>
                                <li>
                                    <h4>Draw(${data.matchName.slice(0,3)}/${data.matchName.substr(data.matchName.indexOf('S')+2,3)})</h4>
                                    <div class="prices">
                                        <ol class="lay">
                                            <li><span>${data.drawLayOdds}</span><span>$${data.drawLayVol}</span></li>
                                            <li><span>2</span><span>$6</span></li>
                                            <li><span>3</span><span>$6</span></li>
                                        </ol>
                                        <ol class="back">
                                            <li><span>${data.drawBackOdds}</span><span>$${data.drawBackVol}</span></li>
                                            <li><span>5</span><span>$6</span></li>
                                            <li><span>6</span><span>$6</span></li>
                                        </ol>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>`;
    $('#event_markets').innerHTML += str;
}
 transportData(data);