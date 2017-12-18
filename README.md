# MovieDetails
Refactoring an existing React Project from [GUITARPLRC](https://github.com/GUITARPLRC/React-Movie)---[Live app ](https://www.chuckreynolds.tech/work/details?movie)

My React-Redux Live version [Here](https://reactreduxmovie.firebaseapp.com/) 


Attempt to produce a basic movie app using react/redux with limited assistance. Rather than go through a basic tutorial
and then branch off of it with additional features, I took another users project and attempted to refactor it and keep the 
client side representation as accurate as possible.

Apparent front end changes:
Search Bar is smaller and includes a button
lack of a Search list component. (currently it just directs to the first api result)
Genrelists scroll instead of using a button. 


Back end changes
Implemented Redux with a container/presenter Component approach.
Removed duplicate code for each of the genre lists. 
Hopefully made further imporvemnts easier to implement.
Constants.JS file that would isolate api keys 

Results
A sturdier application that can handle direct url links and a better structure for data tracking.



Todo


