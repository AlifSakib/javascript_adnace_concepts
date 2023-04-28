const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Success");
  } else {
    reject("Jibon tai loss");
  }
});

// promise.then(console.log);
promise.then((res) => console.log(res)).catch((err) => console.log(err));

const promise1 = new Promise((resolve) => {
  setTimeout(resolve, 1000, "one");
});

const promise2 = new Promise((resolve) => {
  throw Error;
  setTimeout(resolve, 3000, "one");
});

Promise.all([promise1, promise2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("finally"));

const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/comments",
];

Promise.all(
  urls.map((url) =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("posts", data[0]);
        console.log("users", data[1]);
        console.log("comments", data[2]);
      })
      .catch((err) => console.log(err))
  )
);

const promise3 = new Promise((resolve) => {
  setTimeout(resolve, 1000, "one");
});

const promise4 = new Promise((resolve) => {
  throw Error;
  setTimeout(resolve, 3000, "one");
});

Promise.allSettled([promise1, promise2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
