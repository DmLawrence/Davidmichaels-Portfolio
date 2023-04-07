//Like button function
const like = document.querySelectorAll('.vote img');

like.forEach(like => {
  like.addEventListener('click', function(){
   if ( like.src.indexOf('like.png') === -1){
      like.src = `resources/like.png`
    } else {
      like.src = `resources/like-black.png`
    }
  });
});

//Favorite button function
const fav = document.querySelectorAll('.favorite img');

fav.forEach(fav => {
  fav.addEventListener('click', function(){
   if (fav.src.indexOf('fav.png') === -1){
      fav.src = `resources/fav.png`;
    } else {
      fav.src = `resources/fav-black.png`;
    }
  });
});

//Makes gallery images full screen
const imgs = document.querySelectorAll('.gallery-img img');
const fullPage = document.querySelector('#fullpage');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';
    scrollDisable();
  });
});

const closeFullscreen = () => {
  fullPage.style.display='none';
  scrollEnable();
}

const scrollDisable = () => {
    // To get the scroll position of current webpage
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,

    // if scroll happens, set it to the previous value
    window.onscroll = function() {
    window.scrollTo(LeftScroll, TopScroll);
            };
    }

const scrollEnable = () => {
window.onscroll = function() {};
}