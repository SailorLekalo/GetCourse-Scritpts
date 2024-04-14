// ==UserScript==
// @name         GetcourseDeleteRassilky
// @namespace    http://tampermonkey.net/
// @description  Скрипт, позволяющий быстро удалять рассылки: по одной, или целыми страницами.
// @author       SailorLekalo
// @match        *://ВАШ ДОМЕН.getcourse.ru/pl/notifications/control/mailings*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=getcourse.ru
// ==/UserScript==

window.removeRassilka = function(rass,self,i){
    self.innerHTML += '<iframe name="theFrame'+i+'" width="30" height="20""></iframe>';
    var handle = window.open(rass,'theFrame'+i).blur();
    console.log(self);
}
window.removeAll = function(){
    var buts = document.getElementsByName("delete_user_button")
    for(var i = 0; i < buts.length; i++) {
        buts[i].click();
    }
}

document.getElementById('w2-filters').innerHTML += '<a class="btn btn-danger btn-sm" name="delete_all" onclick=removeAll()>DELALL</a>'
var matches = document.querySelectorAll('#w2-container table tbody tr');
for(var i = 0; i < matches.length; i++) {
    var mailid = ($(matches[i]).attr('data-key'));
    matches[i].innerHTML += '<a class="btn btn-danger btn-sm" name="delete_user_button" onclick=removeRassilka('+"'/notifications/control/mailings/delete/id/"  + mailid + "',this.parentElement,"+i+")>DEL</a>";
}
