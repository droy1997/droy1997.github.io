/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

document.addEventListener("DOMContentLoaded", function(){
		
    el_autohide = document.querySelector('#mainNav');

    if(el_autohide){
        
        var last_scroll_top = 0;
        window.addEventListener('scroll', function() {
               let scroll_top = window.scrollY;
            if (scroll_top == 0) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.remove('scrolled-up');
            }
            else if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;

        }); 
        // window.addEventListener

    }
    // if
    
}); 


(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      let mast = select('#mainNav .navbar-brand', false)
      // let btnprim = select('#header .btn-primary', false)
      let otherlink = select('#header .other-thing', false)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
          mast.addEventListener(type, listener)
          // btnprim.addEventListener(type, listener)
          otherlink.addEventListener(type, listener)
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    on('click', '#mainNav .nav-link', function(e) {
      let section = select(this.hash)
      if (section) {
        e.preventDefault()
  
        let navbar = select('#mainNav')
        let header = select('#header')
        let sections = select('section', true)
        let navlinks = select('#mainNav .nav-link', true)
  
        navlinks.forEach((item) => {
          item.classList.remove('active')
        })
  
        this.classList.add('active')
  
        const collapse = document.querySelector(".navbar-collapse")
        if (collapse.classList.contains('show')) {
            collapse.classList.remove('show')
        }
  
        if (this.hash == '#header') {
          header.classList.remove("masthead-hide")
          sections.forEach((item) => {
            item.classList.remove('section-show')
          })
          return;
        }
  
        if (!header.classList.contains('header')) {
          header.classList.add("masthead-hide")
          setTimeout(function() {
            sections.forEach((item) => {
              item.classList.remove('section-show')
            })
            section.classList.add('section-show')
  
          }, 350);
        } else {
          sections.forEach((item) => {
            item.classList.remove('section-show')
          })
          section.classList.add('section-show')
        }
  
        scrollto(this.hash)
      }
    }, true)
  
    /**
     * Activate/show sections on load with hash links
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        let initial_nav = select(window.location.hash)
  
        if (initial_nav) {
          let header = select('#header')
          let navlinks = select('#mainNav .nav-link', true)
  
          header.classList.add('header')
  
          navlinks.forEach((item) => {
            if (item.getAttribute('href') == window.location.hash) {
              item.classList.add('active')
            } else {
              item.classList.remove('active')
            }
          })
  
          setTimeout(function() {
            initial_nav.classList.add('section-show')
          }, 350);
  
          scrollto(window.location.hash)
        }
      }
    });
  
    /**
     * Skills animation
     */
    let skilsContent = select('.skills-content');
    if (skilsContent) {
      new Waypoint({
        element: skilsContent,
        offset: '80%',
        handler: function(direction) {
          let progress = select('.progress .progress-bar', true);
          progress.forEach((el) => {
            el.style.width = el.getAttribute('aria-valuenow') + '%'
          });
        }
      })
    }
  
  })()