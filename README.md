# My React app using the Rick and Morty Api
===========================================

## Features added

###Home Page 
1. Added a form for users to enter a personal username (no password)
2. A button that takes you to the CARDS pages

![Screen Shot 2022-05-21 at 9 57 04 AM](https://user-images.githubusercontent.com/92553207/169703309-9713bcd2-3b92-4903-b907-d1baea63eac2.png)

###Cards Page

####Header
1. A form in the header to filter through the current *20* characters on the page
 
![Screen Shot 2022-05-21 at 9 56 55 AM](https://user-images.githubusercontent.com/92553207/169703318-f3ea6e1e-c9d3-4cb0-964b-2e3440809c13.png)

2. The logo links back to the Home Page
 
![Screen Shot 2022-05-21 at 9 57 12 AM](https://user-images.githubusercontent.com/92553207/169703486-48b6224d-742f-4645-b2bf-d754cfac9f2f.png)


####Cards
1. The first 20 characters from the API call results
2. A *MORE* button to get another 20 characters
3. Your username gets saved in local storage

![Screen Shot 2022-05-21 at 9 57 17 AM](https://user-images.githubusercontent.com/92553207/169703430-b76f5e50-0088-467c-8c46-9cf4bfabab5c.png)


###Profile Page

####Header
1. A back button

![Screen Shot 2022-05-21 at 10 02 30 AM](https://user-images.githubusercontent.com/92553207/169703406-d3e0b115-c80c-4599-b352-480e73adff70.png)

####Card Profile

1. The Character's Name
2. A card with more characters details
3. A *show more* button that displays more details

![Screen Shot 2022-05-21 at 10 05 10 AM](https://user-images.githubusercontent.com/92553207/169703439-dda6a6c4-2bf1-4584-b4c5-b40d3f7ea57b.png)

4. A *hide* button to hide the extra details
> The *next* and *last* buttons to switch character profiles. It works but needs a conditional to take you back when the character profile id doesn't exist

![Screen Shot 2022-05-21 at 10 05 21 AM](https://user-images.githubusercontent.com/92553207/169703373-0a3d9f72-77cb-4ed1-8c14-36621fed898c.png)

5. A back button which send you back to the Cards pages

![Screen Shot 2022-05-21 at 10 02 30 AM](https://user-images.githubusercontent.com/92553207/169703465-d8c7a889-2904-49ad-abb7-3a84febdd001.png)




## Current Glitches -- see The Features branch

####Main problem 

1. I didnt expect to go where it is now, so my components have gotten out of control.. for example, I'll have two components doing the same thing which leads to constantly creating a newer component to keep with with all thes changes

###Card Page

1. The api call on the NEW CARDS doesn't properly populate
2. The filter ONLY filters the current characters
3. 
###Profile Page

1. For the characters that aren't in the first twenty, on page reload the cards disappear

## Things I would like to do 

1. Link the search filter to the entire results date
2. Outline the cards a different color based on gender
3. Add some kind of hover animation on the Cards page (maybe a slight scale)
4. Add media queries
