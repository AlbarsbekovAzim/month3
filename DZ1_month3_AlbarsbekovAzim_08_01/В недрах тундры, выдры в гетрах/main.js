let str1=document.getElementById('string-1').innerText
let str2=document.getElementById('string-2').innerText
let str3=document.getElementById('string-3').innerText
let str4=document.getElementById('string-4').innerText
let str5=document.getElementById('string-5').innerText
let str6=document.getElementById('string-6').innerText
let strAll=[str1, str2, str3, str4, str5, str6]
const strTr1=strAll.filter(s1 => s1=="В недрах тундры, выдры в гетрах")
const strTr2=strAll.filter(s2 => s2=="Тырят в вёдра ядра кедров!")
const strTr3=strAll.filter(s3 => s3=="Выдрав с выдры в тундре гетры")
const strTr4=strAll.filter(s4 => s4=="Вытру выдрой ядра кедров")
const strTr5=strAll.filter(s5 => s5=="Вытру гетрой выдре морду")
const strTr6=strAll.filter(s6 => s6=="Ядра в вёдра, выдру в тундру!")
const strTrue=strTr1+"\n"+strTr2+"\n"+strTr3+"\n"+strTr4+"\n"+strTr5+"\n"+strTr6
console.log(strTrue)
console.log(strAll)
