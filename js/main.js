$(function () {
    const navBarBtn = $('.nav-bar__toggle-btn')
    const inputBox = $('.header__search-inputBox')
    const searchBtn = $('.header__search')
    const sideBar = $('.nav-bar')
    const closeSideBarWidth = 60
    const openSideBarWidth = 220
    const container = $('.container')
    const contactContainer = $('.contact-container')
    const mainSliderDots = $('.main-slider-dots')
    const mainSliderItemText = $('.main-slider__item-text')
    const mobileBreakPoint = 361
    const tabletBreakPoint = 769

    function closeNav() {
        sideBar.addClass('closeNav')
        navBarBtn.append('<div class="nav-bar__toggle-btn-text">Menu</div>')
        resizePage('plus')

    }

    function openNav() {
        sideBar.removeClass('closeNav')
        $('.nav-bar__toggle-btn-text').remove()
        resizePage('minus')

    }

    function toggleNav() {
        if (sideBar.hasClass('closeNav')) {
            openNav()
        } else {
            closeNav()
        }
    }

    function displaySearchInput() {
        inputBox.css('opacity', '1')
    }

    searchBtn.click(() => displaySearchInput())

    navBarBtn.click(() => toggleNav())

    function resizePage(type) {
        if ($(window).width() <= mobileBreakPoint) {
            return;
        }

        const sideBarWidth = openSideBarWidth - closeSideBarWidth
        const mainSliderItemTextMargin = parseInt(mainSliderItemText.css('margin-left'))

        if (type === "minus") {

            if ($(window).width() <= tabletBreakPoint) {
                container.animate({marginRight: `30`})
                contactContainer.animate({marginRight: `30`})
                return;
            }

            let newMargin = parseInt(container.css('margin-right')) - sideBarWidth
            let newContactContainerMargin = parseInt(contactContainer.css('margin-right')) - sideBarWidth

            container.animate({marginRight: `${newMargin}`})
            contactContainer.animate({marginRight: `${newContactContainerMargin}`})
            mainSliderDots.animate({marginLeft: 0})
            mainSliderItemText.animate({marginLeft: mainSliderItemTextMargin - 120})
        }

        if (type === "plus") {

            if ($(window).width() <= tabletBreakPoint) {
                container.animate({marginRight: `84`})
                contactContainer.animate({marginRight: `30`})
                return;
            }

            let newMargin = parseInt(container.css('margin-right')) + sideBarWidth
            let newContactContainerMargin = parseInt(contactContainer.css('margin-right')) + sideBarWidth

            container.animate({marginRight: `${newMargin}`})
            contactContainer.animate({marginRight: `${newContactContainerMargin}`})
            mainSliderDots.animate({marginLeft: sideBarWidth})
            mainSliderItemText.animate({marginLeft: mainSliderItemTextMargin + 120})
        }

        return;
    }

    function initialize() {
        navBarBtn.append('<div class="nav-bar__toggle-btn-text">Menu</div>')
    }

    initialize()

    function initContactSlider() {
        $('.contact__top').slick({
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: '<img class="contact__slider-rightArrow" src="./img/arrowRightWhite.png" alt="arrowRight"/>',
            prevArrow: '<img class="contact__slider-leftArrow" src="./img/arrowLeftWhite.png" alt="arrowLeft"/>',
        })
    }

    /////////// SLICK INIT ///////////////////
    $(window).resize(() => {
        if ($(window).width() <= mobileBreakPoint) {
            initContactSlider()
        }
    })

    if ($(window).width() <= mobileBreakPoint) {
        initContactSlider()
    }


    $('.main-slider').slick({
        arrows: false,
        dots: true,
        dotsClass: 'main-slider-dots'
    })

    $('.news__slider').slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: mobileBreakPoint,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
        ],
        nextArrow: '<img class="news__slider-rightArrow" src="./img/arrowRight.png" alt="arrowRight"/>',
        prevArrow: '<img class="news__slider-leftArrow" src="./img/arrowLeft.png" alt="arrowLeft"/>',
    })

    $('.footer__slider').slick({
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: mobileBreakPoint,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
        ],
        nextArrow: '<img class="footer__slider-rightArrow" src="./img/arrowRight.png" alt="arrowRight"/>',
        prevArrow: '<img class="footer__slider-leftArrow" src="./img/arrowLeft.png" alt="arrowLeft"/>',
    })
});
