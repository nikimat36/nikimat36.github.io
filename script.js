    // ======= INTRO RESPONSE ON CURSOR MOVE ========
    var box1 = document.querySelector(".box1");
    var astro_man = document.querySelector(".reflection");
    var intro_h = document.querySelector(".intro-h");

    box1.addEventListener("mousemove", (e) => {
        astro_man.style.setProperty('--x', 43 -(-e.offsetX /100)* -1 + "%");
        intro_h.style.setProperty('--a', (e.offsetX /20) + "px");
        intro_h.style.setProperty('--b', (e.offsetY /20) + "px");
    });


    // ======= SMOOTH SCROLL ========
    function smoothScroll(target, duration){
        var target = document.querySelector(target);    //target element: next-previous chapter
        var targetPosition = target.getBoundingClientRect().top;    //elements relative position to the screen
        var startPosition = window.pageYOffset; //relative to the window
        var distance = targetPosition;
        var startTime = null;

        function animation(currentTime){
            if(startTime === null){
                startTime = currentTime;
            }
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if(timeElapsed < duration){
                requestAnimationFrame(animation);
            }
        }
        
            //gizma.com/easing
            function ease(t,b,c,d){
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t* (t - 2) -1) + b;
            }
            //requestAnimationFrame(Loop);

            requestAnimationFrame(animation);
            
        }

        var section1 = document.querySelector('.section1');
        var section2 = document.querySelector('.section2');
        var section3 = document.querySelector('.section3');
        var section4 = document.querySelector('.section4');
        var section5 = document.querySelector('.section5');
        var box1 = document.querySelector('.box1');
        var box2 = document.querySelector('.box2');
        var box3 = document.querySelector('.box3');
        var box4 = document.querySelector('.box4');
        var box5 = document.querySelector('.box5');
        var pro6 = document.querySelector('.pro6');


        // ====== DETECTING SCROLL =======
        box1.addEventListener('wheel', function(){
            smoothScroll('.section2', 1000);
        });

        box2.addEventListener('wheel', function(){
            if (event.wheelDelta > 0) {
                smoothScroll('.section1', 1000);
            }else{
                smoothScroll('.section3', 1000);
            }
        });

        box3.addEventListener('wheel', function(){
                if (event.wheelDelta > 0) {
                    smoothScroll('.section2', 1000);
                }else{
                    smoothScroll('.section4', 1000);
                }
        });


        box4.addEventListener('wheel', function(){
                if (event.wheelDelta > 0) {
                        smoothScroll('.section3', 1000);
                }else{
                        smoothScroll('.section5', 1000);
                }
            });

        box5.addEventListener('wheel', function(){
            //console.log(window.pageYOffset); 3098
            if (event.wheelDelta > 0) {
                smoothScroll('.section4', 1000);
            }else{
                smoothScroll('.section5', 1000);
            }
        });

        // ====== TBA =======
        function tba(){
            alert("Sorry, I forgot to upload project to Github. I will fix it as soon as possible.");
        }

        // ======= COPY LINK =======
        function copyMail() {
            var email = document.getElementById("linke");
            email.select();
            email.setSelectionRange(0, 99999);
            document.execCommand("copy");
            alert("Link Copied."+ email.value);
          }  
          
          function copyGH() {
            var github = document.getElementById("linkg");
            github.select();
            github.setSelectionRange(0, 99999);
            document.execCommand("copy");
            alert("Link Copied." + github.value);
          }   

          function copyLin() {
            var linkedin = document.getElementById("linkl");
            linkedin.select();
            linkedin.setSelectionRange(0, 99999);
            document.execCommand("copy");
            alert("Link Copied." + linkedin.value);
          }   


          function myFunction() {
            var copyText = document.getElementById("myInput");
            copyText.select();
            copyText.setSelectionRange(0, 99999)
            document.execCommand("copy");
            alert("Copied the text: " + copyText.value);
          }

        // ====== DETECTING ARROW KEY PRESS =======

        document.onkeydown = checkKey;

        function checkKey(e) {

            e = e || window.event;

            if (e.keyCode == '38') {    // up arrow
                console.log("up");
            }
            else if (e.keyCode == '40') {   // down arrow
                console.log("down");
            }
        }
