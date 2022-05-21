# My React app using the Rick and Morty Api
===========================================

## Features added

###Home Page 
1. Added a form for users to enter a personal username (no password)
2. A button that takes you to the CARDS pages

###Cards Page

####Header
1. A form in the header to filter through the current *20* characters on the page
2. The logo links back to the Home Page
####Cards
1. The first 20 characters from the API call results
2. A *MORE* button to get another 20 characters


###Profile Page

####Header
1. A back button
2. 
####Card Profile

1. The Character's Name
2. A card with more characters details
3. A *show more* button that displays more details
4. A *hide* button to hide the extra details
> The *next* and *last* buttons are not yet functional (any help on how to actually do that is appreciated)


## Current Glitches (help needed)

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
