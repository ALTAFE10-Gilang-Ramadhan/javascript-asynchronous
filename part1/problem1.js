function jajanBoba(uang, callback) {
  let hargaBoba = 5000;
  let hargaSeblak = 8000;
  let sisa = uang - hargaBoba;
  let sisa1 = sisa - hargaSeblak;

  if (uang < hargaBoba) {
    setTimeout(() => {
      console.log(`Maaf uang kamu belum cukup untuk membeli Boba \nSisa uang kamu sebesar ${uang}`);
    }, 5000);
  } else {
    setTimeout(() => {
      console.log(`kamu jajan boba dengan harga Rp. ${hargaBoba} \nsisa uang kamu Rp. ${sisa}`);
    }, 5000);
  }
  if (sisa < hargaSeblak) {
    setTimeout(() => {
      console.log(`Maaf uang kamu belum cukup untuk membeli Seblak \nSisa uang kamu sebesar ${sisa}`);
    }, 9000);
  } else {
    setTimeout(() => {
      callback(`sisa uang kamu sebesar Rp. ${sisa1}`);
    }, 9000);
  }
}

function jajanSeblak(uang) {
  let hargaSeblak = 8000;
  if (uang < hargaSeblak) {
    setTimeout(() => {
      console.log(`Maaf uang kamu belum cukup untuk membeli Seblak \nSisa uang kamu sebesar ${uang}`);
    }, 9000);
  } else {
    setTimeout(() => {
      console.log(`kamu jajan seblak dengan harga Rp. ${hargaSeblak} \n` + uang);
    }, 9000);
  }
}

jajanBoba(20000, jajanSeblak);
jajanBoba(10000, jajanSeblak);
