// const mouse1 = document.createElement('div');
// const mouse2 = document.createElement('div');

// document.addEventListener('mousemove', (e) => {
//     mouse1.className = 'mouse1';
//     mouse2.className = 'mouse2';

//     mouse1.style.transition = 'transform 0.1s';
//     mouse2.style.transition = 'transform 1s';

//     document.body.appendChild(mouse1);
//     document.body.appendChild(mouse2);
//     mouse1.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//     mouse2.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
// });

// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// function createSpider() {
//     document.body.style.overflowX = 'hidden';
//     const spider = document.createElement('img');
//     const div = document.createElement('div');

//     spider.src = 'https://raw.githubusercontent.com/MehediHasanNabil/chrome-extension/main/images/spider.png';
//     spider.classList.add('spider');
//     div.classList.add('yarn');

//     console.log(spider)

//     let position = randomNumber(0, window.innerWidth);
//     spider.style.left = `${position}px`;
//     div.style.left = `${position + 155}px`;
//     document.body.appendChild(spider);
//     document.body.appendChild(div);
//     setInterval(() => {
//         spider.remove();
//         div.remove();
//     }, 4800)
// }

// setInterval(() => {
//     createSpider();
// }, 30000);