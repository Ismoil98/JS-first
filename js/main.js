alert('Xush kelibsiz!  😊' + '\n' + "Saytimiz foydalanuvchilari haqidagi so'rovnomada ishtirik etishingizni so'raymiz 😎" + '\n' + "(ma'lumotlaringiz sir saqlanishiga kafolat beramiz 😵)");
var firstName = prompt('Ismingiz:', 'Stiv');
var lastName = prompt('Familiyangiz:', 'Jobs');
var age = prompt('Yoshingiz', 19);
var educational = prompt("Qaysi ta'lim muassasasini tugatgansiz? (yoki o'qiysiz?)" + '\n' + "(OTM - oliy ta'lim muassasasi)" + '\n' + "(KHK - kasb hunar kolleji)" + '\n' + "(AL - akademik litsey)" + '\n' + "(Mak - maktab)", 'maktab');
var isMarried = prompt('Oilalimisiz?', "Yo'q");
var proffession = prompt("Kasbingiz:", "Tayinli ishim yo'q");
var sourse = prompt("Saytga qanday qurilma yordamida kirasiz?" + '\n' + "(Kampyuter)" + '\n' + "(Planshet)"  + '\n' + "(Mobil telefon)")
var joy = prompt("Hududingizni kiriting:" + '\n' + "(Toshkent shaxar)" + '\n' + "(Toshkent vil.)" + '\n' + "(Farg'ona vil.)" + '\n' + "(Andijon vil.)" + '\n' + "(Namangan vil.)" + '\n' + "(Sirdaryo vil.)" + '\n' + "(Jizzah vil.)" + '\n' + "(Samarqand vil.)" + '\n' + "(Surxondaryo vil.)"  + '\n' + "(Qashqadaryo vil.)"  + '\n' + "(Buxoro vil.)" + '\n' + "(Navoiy vil.)" + '\n' + "(Xorazm vil.)" + '\n' + "(Nukus shaxar)", "Toshkent shaxar");
var speed = prompt("Hududingizdagi internet tezligini 5 balli tizimda baholang:",'4')
var site = prompt("Saytimiz haqida fikringiz qanday?" + '\n' + "(Qoniqarli 😑)" + '\n' + "(Yaxshi 🤨)" + '\n' + "(Zo'r 😀)" + '\n' + "(Gap yo'q 😉)")


console.log("So'rovnoma:" + '\n' + " " + '\n' + 'Ismingiz: ' + firstName + '\n' + 'Familyangiz: ' + lastName + '\n' + "" + 'Yoshingiz: ' + age + '\n' + "O'qishni tugatgan muassasangiz: " + educational + '\n' + "Oilaviy holatingiz: " + isMarried + '\n' + "Kasbingiz: " + proffession + '\n' + 'Qurilma: ' + sourse + '\n' + 'Hudud: ' + joy + '\n' + 'Internet tezligi: ' + speed + '\n' + 'Sayt haqida fikringiz: ' + site + '\n' + " " + '\n' + "Be'etibor qoldirmaganingiz uchun rahmat 🤩");
