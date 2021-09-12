const menu = document.querySelector('.menu');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2')
const bar3 = document.querySelector('.bar3');
const contact_card = document.querySelector('.contact_container')

menu.addEventListener('mouseover', () => {
    bar1.classList.add('animated_bar')
    bar3.classList.add('animated_bar')
})
menu.addEventListener('mouseout', () => {
    bar1.classList.remove('animated_bar')
    bar3.classList.remove('animated_bar')
})
menu.addEventListener('click', () => {
    bar1.classList.toggle('rotation1')
    bar2.classList.toggle('rotation2')
    bar3.classList.toggle('rotation3')
    contact_card.classList.toggle('show_contact')
    menu.classList.toggle('stick_menu')
})

window.onload = function() { onLoadAnimate() };
function onLoadAnimate() {
    const hero_title = document.querySelector('.big_title')
    const hero_sub = document.querySelector('.sub_title')
    const hero_button = document.querySelector('.home_page_button')
    console.log(hero_title)
    hero_title.classList.toggle('horizontal_animate');
    hero_sub.classList.toggle('vertical_animate');
    hero_button.classList.toggle('fade_in')
}

const g_b_t = document.querySelector('.gallary_big_title')
const g_s_t = document.querySelector('.gallary_sub_title')
const q_1 = document.querySelector('.quote_1_slogan')
const a_m_t = document.querySelector('.about_me_title')
const a_m_s_t = document.querySelector('.about_me_sub_title')
const r_w_b_t = document.querySelector('.recent_big_title')
const r_w_s_t = document.querySelector('.recent_sub_title')
const ig_b_t = document.querySelector('.ig_big_title')
const ig_s_t = document.querySelector('.ig_sub_title')
const s_b_t = document.querySelector('.service_big_title')
var array = [g_b_t,g_s_t,q_1,a_m_t,a_m_s_t,r_w_b_t,r_w_s_t,ig_b_t,ig_s_t,s_b_t]
var length = array.length;

const g_b = document.querySelector('.gallary_page_button')
const a_m_b = document.querySelector('.about_me_page_button')
const r_w_b = document.querySelector('.recent_work_page_button')
var b_array = [g_b,a_m_b,r_w_b]
var bLength = b_array.length;

const screen_bot = window.innerHeight;

document.addEventListener('scroll', () => {
    for( var j = 0; j<bLength; j++){
        const bTop = b_array[j].getBoundingClientRect().top;
        if( bTop <= screen_bot){
            b_array[j].classList.remove('initial_pos_b')
            b_array[j].classList.add('fade_in')
        } else {
            b_array[j].classList.add('initial_pos_b')
            b_array[j].classList.remove('fade_in')
        }
    }
    for( var i = 0; i<length; i++) {
        const top = array[i].getBoundingClientRect().top;
        if( top <= screen_bot ){
            array[i].classList.remove('initial_pos')
            array[i].classList.add('vertical_animate')
        } else {
            array[i].classList.add('initial_pos')
            array[i].classList.remove('vertical_animate')
        }
    }
})


