// pending => resolve / reject

const myPromise = new Promise((resolve,reject) => {
  let x = 0;
  if (x == 0) {
    resolve("OK");
  } else {
    reject("Error");
  }
  // setTimeout(()=> {
  //   resolve("success");
  // }, 3000)
})

myPromise.then((value) => {
  console.log(value)
})