# Nekflekz
A Frontend Netflix clone project.
I decided on this clone as I thought it was a nice way to learn the following tools used:

## Tools
- React Compound Components design pattern
- Styled Components
- Google Firebase for data hydration and auth
- Fuse for live-search
- React router (used before, but trying to get more familiar with)

## Learning and Learning
This was my first time getting my hands dirty with Compound Component design pattern (as well as using Styled Components).
I found it as a big relief that I didn't have to throw in props after props into my functional components (or use other verbose methods like HOC's/render props) for reusability.

## What it can do
### Basic overview:
- Home page
- Sign in/ Sign up page (utilizing firebase)
- Profile component to click on your profile (the user is actually hard-coded in as an object.
- Browse page (w/ a video player*)

## Running this locally
Clone/download file, npm install (or yarn install) to install all the dependencies
npm start!

### What I can do now
- update the profile picker component:
  - currently this profile picker is hardcoded (as a user object, with hardcoded user name)
  - Need to use signed up user info (getting it back from firebase)
  - the video is also from my own file. Connect to an api? (TMDB?)
  - set up a favorite icon for users to favorite (or like) some movies

## Next Challenge
- incorporate more unique UI features
- Redux for state management (although at the moment having global state isn't all that necessary as useContext hook is enough,for now).
- Build my own unique movie website! 
