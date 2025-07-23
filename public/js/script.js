const btnMenu = document.querySelector('#btn-menu')
const aside = document.querySelector('#aside')

const friendsParent = document.querySelector('#friends');
const searchFriendInput = document.querySelector('#search-friend-input')
let searchInputValue;

btnMenu.addEventListener('click', event => {
    let btn = event.target.closest('#btn-menu')
    if (btn){
        btn.classList.toggle('active')
        if(btn.classList.contains('active')){
            aside.classList.add('active')
        }else{
           aside.classList.remove('active') 
        }
    }
})
// ===========================SLIDER TOP======================================
var swiperTop = new Swiper(".mySwiper-top", {
  effect: "fade", // 👈 اضافه کن برای fade
  fadeEffect: {
    crossFade: true, // 👈 باعث میشه اسلایدها روون‌تر عوض بشن
  },
  loop: true, // 👈 فعال کردن loop
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000, // 👈 هر 3 ثانیه یک‌بار تصویر عوض میشه
    disableOnInteraction: false, // 👈 وقتی کاربر اسلاید رو لمس کنه autoplay ادامه پیدا کنه
  },
  speed: 800, // 👈 سرعت ترنزیشن (ms)
});
const mySliderTopBtnsWish = document.querySelectorAll('.mySlider-top__btn-wish')
mySliderTopBtnsWish.forEach(btn => {
    btn.addEventListener('click', ()=> {
        btn.classList.toggle('active')
    })
})
// ===========================FRIENDS SECTION======================================
const friends = [
  {id: '1',username: "jamal" ,imgSrc: "./public/images/1.jpg", status: "playing"},
  {id: '2',username: "arash" ,imgSrc: "./public/images/10.jpg", status: "join"},
  {id: '3',username: "ali", imgSrc: "./public/images/11.jpg", status: "offline"},
  {id: '4',username: "kamal" ,imgSrc: "./public/images/12.jpg", status: "playing"},
  {id: '5',username: "erfan" ,imgSrc: "./public/images/13.jpg", status: "join"},
  {id: '6',username: "zahra" ,imgSrc: "./public/images/14.jpg", status: "offline"},
  {id: '7',username: "saeed" ,imgSrc: "./public/images/15.png", status: "playing"},
  {id: '8',username: "davar" ,imgSrc: "./public/images/2.jpg", status: "join"},
  {id: '9',username: "dara" ,imgSrc: "./public/images/3.jpg", status: "offline"},
  {id: '10',username: "masood" , imgSrc: "./public/images/4.jpg", status: "playing"},
]
searchFriendInput.addEventListener('keyup', event=> {
  let fragmentElement = document.createDocumentFragment();
  friendsParent.innerHTML = ''
  searchInputValue = event.target.value.toLowerCase()
  friends.forEach(friend => {
    if(friend.username.toLowerCase().includes(searchInputValue)){
      fragmentElement.appendChild(createFriendElement(friend.id,friend.username,friend.imgSrc,friend.status))
    }
  })
  friendsParent.appendChild(fragmentElement)
  
})
function resetInput(input){
  input.value = '';
}
function createFriendElement(id,username,imgSrc,status){
  let newDiv = document.createElement('div')
  newDiv.className = 'friend flex gap-3 items-center'
  newDiv.innerHTML = `
    <img class="size-12 rounded-sm" src="${imgSrc}" alt="">
    <div class="text-sm grow flex flex-col gap-1">
        <span class="friend__username truncate block w-35">${username}</span>
        <div class="flex gap-1">
            <button class="friend__btn-join py-1 px-2 rounded-sm cursor-pointer focus:ring-1 focus:ring-blue-200 bg-blue-400 text-white text-xs">join</button>
            <button class="friend__btn-playing py-1 px-2 rounded-sm cursor-pointer focus:ring-1 focus:ring-gray-100 bg-gray-100 text-gray-800 text-xs">playing</button>
            <button class="friend__btn-offline py-1 px-2 rounded-sm cursor-pointer focus:ring-1 focus:ring-gray-400 bg-gray-700 text-white text-xs">offline</button>
        </div>
    </div>
  `
  if(status === 'join'){
    newDiv.querySelector('.friend__btn-playing').style.display = 'none'
    newDiv.querySelector('.friend__btn-offline').style.display = 'none'
  }
  if(status === 'playing'){
    newDiv.querySelector('.friend__btn-join').style.display = 'none'
    newDiv.querySelector('.friend__btn-offline').style.display = 'none'
  }
  if(status === 'offline'){
    newDiv.querySelector('.friend__btn-playing').style.display = 'none'
    newDiv.querySelector('.friend__btn-join').style.display = 'none'
  }
  return newDiv
 
}
window.onload= function(){
  let fragmentElement = document.createDocumentFragment();
  resetInput(searchFriendInput)
  friendsParent.innerHTML = ''
  friends.forEach(friend => {
    fragmentElement.appendChild(createFriendElement(friend.id,friend.username,friend.imgSrc,friend.status))
  })
  friendsParent.appendChild(fragmentElement)
}


document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.mySwiper-trending', {
        // تنظیمات پایه
        direction: 'horizontal',
        loop: true,
        centeredSlides: false,
        slidesPerView: 'auto',
        spaceBetween: 20,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // 👈 توقف هنگام هاور روی اسلایدر
        },
        
        // تنظیمات ریسپانسیو
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1600: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        },
        
        // دکمه‌های ناوبری
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
