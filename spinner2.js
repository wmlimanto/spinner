//refactor spinner1.js

let spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   \n'];

let delay = 100;

for (const turn of spinner) {
  setTimeout(() => {
    process.stdout.write(turn)
  }, delay += 200);
}