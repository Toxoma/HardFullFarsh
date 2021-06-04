let week = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

let today = new Intl.DateTimeFormat('ru-RU', { weekday: 'long' }).format(new Date());

for (let item in week) {
   let x = week[item];
   if (week[item] === "суббота" || week[item] === "воскресенье") {
      x = x.toUpperCase();
   }
   if (week[item] === today) {
      x = x.bold();
   }
   console.log(x);
}