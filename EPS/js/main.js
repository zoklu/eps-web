let label1 = document.getElementById('label1');
let label2 = document.getElementById('label2');
let label3 = document.getElementById('label3');
let label4 = document.getElementById('label4');
let label5 = document.getElementById('label5');
let desc = document.getElementById('desc');

function selectLabel1()
{
    clearClassList();
    clearDescription();
    label1.classList.add('active-pic');
    desc.innerHTML = " A termék teljes mértékben bio termék vagy a termék részben bio termék. A csomagolás mentesen, gyorsan lebomló vagy újrahasznosítható csomagolásban vehető.";
    desc.style.color = '#017F2D';
}

function selectLabel2()
{
    clearClassList();
    clearDescription();
    label2.classList.add('active-pic');
    desc.innerHTML = "Rövid idő alatt lebomló, nem számottevő vagy közepes környezet terheléssel bíró termék. Visszaváltható , nem számottevően környezet terhelő vagy közepes idő alatt lebomló csomagolás.";
    desc.style.color = '#017F71';
}

function selectLabel3()
{
    clearClassList();
    clearDescription();
    label3.classList.add('active-pic');
    desc.innerHTML = "Környezet terhelő, közép távoú idő alatt lebomló és kis mértékben egészségre ártalmas termék vagy csomagolás.";
    desc.style.color = '#1A276B';
}

function selectLabel4()
{
    clearClassList();
    clearDescription();
    label4.classList.add('active-pic');
    desc.innerHTML = "Környezet terhelő, hosszabb távon lebomló és egészségre nagyobb mértékben ártalmas termék vagy csomagolás.";
    desc.style.color = '#755F23';
}

function selectLabel5()
{
    clearClassList();
    clearDescription();
    label5.classList.add('active-pic');
    desc.innerHTML = "Magas környezet terheléssel bíró, bomlási időtől függetlenül ártalmas az egészségre és a környezetre a csomagolás vagy a termék.";
    desc.style.color = '#6B1A1B';
}

function clearClassList()
{
    label1.classList.remove('active-pic');
    label2.classList.remove('active-pic');
    label3.classList.remove('active-pic');
    label4.classList.remove('active-pic');
    label5.classList.remove('active-pic');
}

function clearDescription()
{
    desc.innerHTML = "";
}