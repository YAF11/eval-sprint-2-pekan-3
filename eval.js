//soal nomor 1
function romawi(angka) {
  switch (angka) {
    case 1:
      return "I";
    case 2:
      return "II";
    case 3:
      return "III";
    case 4:
      return "IV";
    case 5:
      return "V";
    case 6:
      return "VI";
    case 7:
      return "VII";
    case 8:
      return "VIII";
    case 9:
      return "IX";
    case 10:
      return "X";

    default:
      return "Tidak ada";
  }
}

console.log(romawi(10));
console.log(romawi(8));
console.log(romawi(4));

//soal nomor 2
function negativePositive(angka) {
  let negative = [];
  let positive = [];
  for (let index in angka) {
    if (angka[index] < 0) {
      negative.push(angka[index]);
    } else {
      positive.push(angka[index]);
    }
  }
  return [negative, positive];
}

console.log(negativePositive([-1, 4, 9, 0, -6, -7, 10, 100, -99, -10000]));

//soal nomor 3
const data = {
  "Aqidah Islam": 100,
  Matematika: 75.5,
  Fisika: 87,
  Kimia: 90,
  "Bahasa Arab": 90.8,
  "Bahasa Inggris": 80,
};

function rataRata() {
  let total = 0;
  for (let index in data) {
    total += data[index];
  }
  return total / Object.keys(data).length;
}

console.log(rataRata(data));

//soal nomor 4
let bookShelf = [];

function addData(title, genre, author) {
  bookShelf.unshift({
    id: +new Date(),
    title,
    genre,
    author,
    isBorrow: false,
  });
}

function showAllBookShelf() {
  return bookShelf;
}

function updateBookShelf(id, title, genre, author, isBorrow){
  for(let index in bookShelf){
    if(bookShelf[index].id == id){
        if(title){
            bookShelf[index].title = title
        }
        if(genre){
            bookShelf[index].genre = genre
        }
        if(author){
            bookShelf[index].author = author
        }
        if(isBorrow){
            bookShelf[index].isBorrow = !bookShelf[index].isBorrow
        }
    }
  }  
}

function deleteBookShelf(id){
    for(let index in bookShelf){
        if(bookShelf[index].id == id){
            bookShelf.splice(index,1)
        }
    }
}


