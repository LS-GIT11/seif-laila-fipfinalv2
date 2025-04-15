# FINAL INTEGRATED PROJECT (FIP)
Rebrand of Dr.Nut. FIP Term 2. My last repo was not doing it for me.

## seif-laila-fipfinalv2
 Rebrand & Marketing Campaign for old, discontinued beverage. Rebranded DR.NUT into energy nut flavoured coffee, advertised to students and teens. This part of FIP: "A fully functional responsive website with some dynamic content (HTML/CSS/JS/Image files, etc,). This will need to be maintained using Git for version control and uploaded to GitHub by you. Include the web-ready assets via the GitHub link as part of your submission for this course." 

### Also found in sources.txt file

There were videos and mdn pages I used to complete this assignment. I had a failed attempted which made me not so happy (and cry) so I am trying to finish this as fast as I can without Ai, and with just self-teaching some functions I wanted in my design.
My pages are not perfect, but I tried.

---

hamburger menu:
https://www.youtube.com/watch?v=flItyHiDm7E&t=1s
followed his video, step by step. I did fix alignment that was needed and needed padding
did also try https://www.youtube.com/watch?v=aNDqzlAKmZc... but it did not really work out for me when i tried to follow along.
added my list (my nav) and using spans created the actual icon using css (honesly I think the guy in the video could have just used divs now thinking about it like when we create basic boxes in class-builds, but either way does the same ig?) HTML was simple. Went to css, made the bars and translateY to move them up and down to create three bars. Then, added basic css just to make it look pretty. Javascript was easy too from what the video outlined (documented hamburger menu and list, added eventListsner to toggle so kinda like turning on and off using the class active... this part was outlined in both videos including the one I did not like. Simple to understand and did like doing it this way).

importing my hero video:
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video
I literally just looked up "how to import video in html" and looked for the first mdn link because img tag was not working. I was not so happy because of that until I found this link.

carousel:
Robert's in-class build done together
Looking through the class build we did together... documented arrows and carousel using querySelector. Then used translateX(-100%) on right arrow click to slide carousel left (basically so it can go off screen). After transition ends, first slide moves to the end, position reset to make the loop smooth. On my left arrow click, last slide moves to the front before sliding. Set transform to translateX(-100%) first, then changed it to translateX(0) so it slides to the right. Used transitionend to wait before resetting styles.

text boxes in contact page:
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input
https://www.freecodecamp.org/news/html-textarea-how-to-add-text-box-to-your-website/
mainly looked it up as a reminder and for extra stuff I could have added

Additional code:
https://developer.mozilla.org/en-US/docs/Web/CSS/z-index
I was tweaking out why my hamburger menu links stopped working when toggle on and the menu displays... i tried looking up "why menu links are not working though connected in html" then came across this thread: https://forum.freecodecamp.org/t/nav-links-are-not-working/521580/4... they mention "raising z-index" and thought was something in the way? looked it up and tried it out. wonderful find. kinda remined me of raising layer in adobe suite software if something was not letting me click it? 