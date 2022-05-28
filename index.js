// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {};

firstUser.name = "Monica";
firstUser.gender = "Female";
firstUser.age = 17;
firstUser.email = "monica@dingdong.com";

let firstUserColor = new Set();
firstUserColor.add("Yellow");
firstUserColor.add("Pink");
firstUserColor.add("White");
firstUserColor.add("Purple");
firstUser.favoriteColor = firstUserColor;

firstUser.isHavePet = "Yes";

let firstUserEducation = [];

firstUserEducation.push({
  name: "SD 01",
  City: "Jakarta",
  graduate: 2016,
});
firstUserEducation.push({
  name: "SMP 02",
  City: "Jakarta",
  graduate: 2019,
});
firstUserEducation.push({
  name: "SMA 03",
  City: "Tangerang",
});

firstUser.education = firstUserEducation;

let firstUserFavResto = new Set();
firstUserFavResto.add("Bento");
firstUserFavResto.add("Sushi");
firstUserFavResto.add("Pancake");
firstUserFavResto.add("Eggy");
firstUserFavResto.add("Tempura");
firstUserFavResto.add("Bento");
firstUserFavResto.add("Eggy");
firstUserFavResto.add("Padang");
firstUserFavResto.add("Tteok");
firstUserFavResto.add("Sushi");
firstUserFavResto.add("Sushi");
firstUser.favoriteRestaurant = firstUserFavResto;

const secondUser = {};

secondUser.name = "Wendy";
secondUser.gender = "Male";
secondUser.age = 23;
secondUser.email = "wendy@dingdong.com";

let secUserColor = new Set();
secUserColor.add("Blue");
secUserColor.add("Black");
secUserColor.add("Grey");

secondUser.favoriteColor = secUserColor;
secondUser.isHavePet = "No";

let secUserEducation = [];
secUserEducation.push({
  name: "SD 02",
  city: "Jakarta",
  graduate: 2010,
});
secUserEducation.push({
  name: "SSMP 03",
  city: "Bogor",
  graduate: 2013,
});
secUserEducation.push({
  name: "SMA 01",
  city: "Surabaya",
  graduate: 2016,
});
secUserEducation.push({
  name: "Universitas Maju",
  city: "Tangerang",
});
secondUser.education = secUserEducation;

let secUserFavResto = new Set();
secUserFavResto.add("Tempura");
secUserFavResto.add("Bento");
secUserFavResto.add("Sushi");
secUserFavResto.add("Pancake");
secUserFavResto.add("Padang");
secUserFavResto.add("Katsu");
secUserFavResto.add("Geprek");
secUserFavResto.add("Pancake");
secUserFavResto.add("Eggy");

secondUser.favoriteRestaurant = secUserFavResto;

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};

// users.push(firstUser);
// console.log(users);
