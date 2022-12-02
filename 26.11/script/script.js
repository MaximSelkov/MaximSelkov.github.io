//ТАБ
let h5 = document.getElementById('h5');
let pp = document.querySelectorAll('.pp');
let btn = document.getElementsByClassName('btnTab');
let imageTab = document.getElementById('imageTab');
let lastImg = document.getElementById('lastImg');
let col_3 = document.getElementsByClassName('col-3');

function tabOne(){//содержимое вкладки 1 у таба
    let button = document.getElementById('btn');
    col_3[1].style.background = '#f6f7ff';
    col_3[2].style.background = 'white';
    col_3[3].style.background = 'white';
    col_3[4].style.background = 'white';
    h5.innerHTML = 'Вклады Лига Банка - это выгодная инвестиция в свое будущее';
    pp[0].innerHTML = 'Проценты по вкладам до 7%';
    pp[1].innerHTML = 'Разнообразные условия';
    pp[2].innerHTML = 'Возможность ежемесячной капитализации или вывод процентов на банковскую карту<br><br>';
    lastImg.setAttribute('src', 'image/svg/tick.svg');
    imageTab.setAttribute('src', 'image/content/tab-piggybank-tablet@1x.jpg');
    button.outerHTML = '<button class="btn btn-primary" style="width: 35%" id="btn">Узнать подробнее</button>';
}

function tabTwo(){//содержимое вкладки 2 у таба
    let button = document.getElementById('btn');
    col_3[1].style.background = 'white';
    col_3[2].style.background = '#f6f7ff';
    col_3[3].style.background = 'white';
    col_3[4].style.background = 'white';
    h5.innerHTML = 'Лига Банк выдает кредиты под любые цели';
    pp[0].innerHTML = 'Ипотечный кредит';
    pp[1].innerHTML = 'Автокредит';
    pp[2].innerHTML = 'Потребительский кредит<br><br>';
    lastImg.setAttribute('src', 'image/svg/tick.svg');
    imageTab.setAttribute('src', 'image/content/tab-car-tablet@1x.jpg');
    button.outerHTML = '<p id="btn">Рассчитайте ежемесячный платёж и ставку по кредиту, воспользовавшись нашим кредитным калькулятором</p>';
}

function tabThree(){//содержимое вкладки 3 у таба
    let button = document.getElementById('btn');
    col_3[1].style.background = 'white';
    col_3[2].style.background = 'white';
    col_3[3].style.background = '#f6f7ff';
    col_3[4].style.background = 'white';
    h5.innerHTML = 'Лига Страхования - застрахуем все что захотите';
    pp[0].innerHTML = 'Автомобильное страхование';
    pp[1].innerHTML = 'Страхование жизни и здоровья';
    pp[2].innerHTML = 'Страхование недвижимости<br><br>';
    lastImg.setAttribute('src', 'image/svg/tick.svg');
    imageTab.setAttribute('src', 'image/content/tab-padlock-desctop@1x.jpg');
    button.outerHTML = '<button class="btn btn-primary" style="width: 35%" id="btn">Узнать подробнее</button>';
}

function tabFour(){//содержимое вкладки 4 у таба
    let button = document.getElementById('btn');
    col_3[1].style.background = 'white';
    col_3[2].style.background = 'white';
    col_3[3].style.background = 'white';
    col_3[4].style.background = '#f6f7ff';
    h5.innerHTML = 'Лига Банк - это огромное количество онлайн-сервисов для вашего удобства';
    pp[0].innerHTML = 'Мобильный банк, который всегда под рукой';
    pp[1].innerHTML = 'Приложение Лига-проездной позволит вам оплачивать билеты по всему миру';
    pp[2].innerHTML = null;
    lastImg.setAttribute('src', '');
    imageTab.setAttribute('src', 'image/content/tab-phone-desctop@1x.jpg');
    button.outerHTML = '<button class="btn btn-primary" style="width: 35%" id="btn">Узнать подробнее</button>';
}

//Элементы управления калькулятора
let valueCredit = document.getElementById('valueCredit');
let range1 = document.getElementById('range1');
let range2 = document.getElementById('range2');
let range1Procent = document.getElementById('range1Procent');
let yearOfCredit = document.getElementById('yearOfCredit');
let stoimost = document.getElementById('stoimost');
let vznos = document.getElementById('vznos');

function creditTarget(target){
    let ipoteka = document.getElementById('ipoteka');
    let auto = document.getElementById('auto');
    let credit = document.getElementById('credit');
    let textBlock = document.getElementById('textBlock');
    
    if (target.options[target.selectedIndex].value==1){
        ipoteka.style.display = 'block';
        textBlock.style.display = 'block';
        valueCredit.innerHTML = 'Сумма ипотеки';

        auto.style.display = 'none';
        credit.style.display = 'none';
    }
    if (target.options[target.selectedIndex].value==2){
        auto.style.display = 'block';
        textBlock.style.display = 'block';
        valueCredit.innerHTML = 'Сумма автокредита';

        ipoteka.style.display = 'none';
        credit.style.display = 'none';
    }
    if (target.options[target.selectedIndex].value==3){
        credit.style.display = 'block';
        textBlock.style.display = 'block';
        valueCredit.innerHTML = 'Сумма кредита';

        ipoteka.style.display = 'none';
        auto.style.display = 'none';
    }
}

function range1Change(){
    capitaclChecked();
    range1Procent.innerHTML = range1.value + '%';
    vznos.value = (stoimost.value / 100)*range1.value;
    calculateCredit();
}

function range2Change(){
    capitaclChecked();
    range1Procent.innerHTML = range1.value + '%';
    vznos.value = (stoimost.value / 100)*range1.value;
    yearOfCredit.value = range2.value;
    calculateCredit();
}

function calcMinus(){
    capitaclChecked();
    if (stoimost.value>1200000){
        stoimost.value = parseInt(stoimost.value) - 200000;
        vznos.value = (stoimost.value / 100)*range1.value;
        calculateCredit();
    }
    else{
        alert('Вы не можете сделать сумму меньше минимальной!');
    }
}

function calcPlus(){
    capitaclChecked();
    if (stoimost.value<25000000){
        stoimost.value = parseInt(stoimost.value) + 200000;
        vznos.value = (stoimost.value / 100)*range1.value;
        calculateCredit();
    }
    else{
        alert('Вы не можете сделать сумму больше максимальной!');
    }
}

let sum = document.getElementById('sum');
let stavka = document.getElementById('stavka');
let dohod = document.getElementById('dohod');
let n_dohod = document.getElementById('n_dohod');

function capitaclChecked(){
    let capital = document.getElementById('flexCheckDefault');
    let capitalValue = 524000;
    console.log(capital.checked);
    if(capital.checked == true){
        sum.innerHTML = stoimost.value - vznos.value - capitalValue + ' рублей';
    }
    else{
        sum.innerHTML = stoimost.value - vznos.value + ' рублей';
    }
    if(sum.innerHTML =='NaN рублей'){
        sum.innerHTML = '0 рублей';
    }
}
function calculateCredit(){
    capitaclChecked();
    if (range1.value<20){
        stavka.innerHTML = 9.4 + ' %';
    }
    else{
        stavka.innerHTML = 8.5 + ' %';
    }
    let sumValue = sum.innerHTML.split(' ');
    let stavkaValue = stavka.innerHTML.split(' ');
    let i = stavkaValue[0]/100/12;
    dohod.innerHTML = Math.round(sumValue[0]*(i*Math.pow(1+i,range2.value*12))/(Math.pow(1+i,range2.value*12)-1)) + ' рублей';
    dohodValue = dohod.innerHTML.split(' ');
    n_dohod.innerHTML = Math.round(dohodValue[0]/(45/100)) + ' рублей';
}

function textBlockClear(){
    sum.innerHTML = '';
    stavka.innerHTML = '';
    dohod.innerHTML = '';
    n_dohod.innerHTML = '';
}
  