function gowhere1(formname)
{
 var url;
 if (formname.myselectvalue.value == "0")
 {
  url = "http://www.baidu.com/baidu";
  document.search_form1.tn.value = "baidu";
  formname.method = "get";
 }
 if (formname.myselectvalue.value == "1")
 {
  url = "http://mp3.baidu.com/m";
  document.search_form1.tn.value = "baidump3";
  document.search_form1.ct.value = "134217728";
  document.search_form1.lm.value = "-1";
 }

 if (formname.myselectvalue.value == "4")
 {
  document.search_form1.tn.value = "news";
  document.search_form1.cl.value = "2";
  document.search_form1.rn.value = "20";
  url = "http://news.baidu.com/ns";
 }
 if (formname.myselectvalue.value == "5")
 {
  document.search_form1.tn.value = "baiduiamge";
  document.search_form1.ct.value = "201326592";
  document.search_form1.cl.value = "2";
  document.search_form1.lm.value = "-1";
  url = "http://image.baidu.com/i";
}
if (formname.myselectvalue.value == "6")
 {
  url = "http://post.baidu.com/f";
  document.search_form1.tn.value = "baiduPostSearch";
  document.search_form1.ct.value = "352321536";
  document.search_form1.rn.value = "10";
  document.search_form1.lm.value = "65536";
 }

  formname.action = url;
 return true;
}
