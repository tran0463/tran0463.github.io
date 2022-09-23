# READ ME

## Minh's Portfolio

## Creation:

First, I started with the html, using my mockup as a reference. I built the header first, and then moved on to the general structure of the main content, filling any images with placeholder text. Once I was done creating all the content, I made images and put them into the images folder and referenced them. Most of them have a srcset attribute so they should be responsive if I used it properly. The last thing was styling, and then validating it. Throughout the whole process, I was also checking the WAVE extension on my browser, as well as checking a third party site for performance metrics [^1].

## Sources and Reference:

W3, MDN, and Stack Overflow were all useful sources to refer to, especially for syntax. The fonts used were Proxima Nova, Neuzeit Grotesk, and FIT, all of which can be found on Adobe Fonts [^2]. I created the superimposed images myself. I'm not sure how to attribute the mockup photos for the midterm and final for mtm6201, which were given to the class by the professor.

## Challenges

I started css with desktop first like a fool. Once I moved on to mobile styling, I realized I had problems that could easily be solved if I had started with mobile first since there were desktop styles that didn't need to be applied to the mobile style, but were applied anyway since I didn't have any rulesets for those styles on mobile. Basically, I build the site from the top down, instead of ground up, and it cost some time to troubleshoot what was interfering with my mobile style. Had I started earlier, I might've implemented some animations, ARIA roles, or schemas. Next time, I will definitely start with mobile first, as it has (marginally) less code, and causes less problems than starting with desktop first.

[^1]: [gmetrix](https://gtmetrix.com)
[^2]: [Adobe Fonts](https://fonts.adobe.com/)
