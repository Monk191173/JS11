'use strict';

if (confirm('Змінимо налаштування відображення сторінки ?')) {

    document.querySelector("body").style.backgroundColor =
        prompt("Задайте фон для сторінки red, blue або yellow") || 'white';

    document.querySelector("body").style.fontFamily =
        prompt("Задайте шрифт для сторінки arial, monospace або sans-serif") || 'Times New Roman';

    document.getElementsByTagName("h1")[0].style.textAlign =
        prompt("Де має бути заголовок сторінки left, center або right") || '';

    let p = document.getElementsByTagName("p")[0];
    p.style.backgroundColor = prompt("Фон для улюблених сайтів green, purple або yellow") || 'white';

    p.style.color = prompt("Колір тексту для улюблених сайтів black, red або magenta") || 'black';
    let links = document.getElementsByTagName("a");
    let color = prompt("Колір для лінків на улюблені сайти black, red або magenta") || 'blue';
    for (let i = 0; i < links.length; i++)
        links[i].style.color = color;

    let div = document.querySelector('div');
    div.style.color = prompt("Задайте колір для решти тексту red, blue або yellow") || 'black';
    div.style.fontSize = prompt("Задайте розмір для решти тексту 12, 18 або 20") + 'px' || '16px';
    div.style.fontWeight = prompt("Задайте товщину для решти тексту bold, bolder або normal") || 'normal';

    if (confirm('Змінимо тип маркера для списка ?')) {
        let ul = document.querySelector('ul');
        let ol = document.createElement('ol');
        ol.innerHTML = ul.innerHTML;
        ul.replaceWith(ol);
    }

    for (let i = 0; i < links.length; i++) {
        let sites = prompt(`Введіть улюблений сайт (${i + 1}й з ${links.length}) [напр. football24.ua]:`)
        links[i].href = 'http://' + sites;
        links[i].innerText = sites;
        links[i].target = '_blank';
    }
}
