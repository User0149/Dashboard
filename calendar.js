var today = new Date();

document.getElementById("date").innerHTML=`Today is ${today.toLocaleDateString("en-GB" ,{
  weekday: "long",
  month: "long",
  day: "numeric",
})}.`;