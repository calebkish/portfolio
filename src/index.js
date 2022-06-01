const titles = [
  'professional <code>$HOME</code> renovator',
  'yak shaving enthusiast',
  'post-premature optimizer'
];

const titleEl = document.getElementById('title');

let currTitleIndex = 0;

titleEl.innerHTML = titles[currTitleIndex];

titleEl.addEventListener('click', () => {
  titleEl.classList.add('active');
  currTitleIndex = (currTitleIndex + 1) % titles.length;
  titleEl.innerHTML = titles[currTitleIndex];
  setTimeout(() => {
    titleEl.classList.remove('active');
  }, 200);
});
