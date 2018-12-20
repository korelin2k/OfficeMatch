# OfficeMatch (SoulMatch)
(class assignment)

What was initially destined to be a match game with the crew from the office diverted to a "soul match" with the cast from the good place (and your peers!).

![Soul Match!](/docs/images/soulmate.PNG "Soul Match")

### Where can I try it?
Try it out on Heroku now - [Soul Match](https://office-match.herokuapp.com/).

### What items did I try outside of the assignment?
1. TypeScript - Getting more comfortable with it each and every assignment. Spent a good hour learning chaining promises + error handling + TypeScript, especially when you consider a promise can return multiple "types" depending on error condition.
2. Mongo - added a MongoDB "element" within Heroku. Very simple! Ended up trying the mongodb npm package, and that worked out pretty well. I'll jump over and try out mongoose next time. Heroku also integrated the secrets that come back from the element for the application... SO NICE!
3. Unit testing - didn't do as much as the previous assignments though. Ended up using mocha/chai again, but based on a recommendation, I'll try out jest next time.
4. Postman - You'll see a file in /src/test that contains the four test cases I had for the APIs:
   - Get Profile (individual)
   - Get All Profiles
   - Add Profile
   - Find Match
5. I have other API / functionality ready to go but no real use with this assignment (just need to add the routes):
   - Update Profile
   - Delete Profile

### Can I run this locally?
Of course! Some small setup steps first though:
1. MongoDB database setup
2. Setup .env file with the MONGODB_URI that has the connection string.
3. Run "npm run watch-ts" - this will compile the typescript and drop the javascript in /build. Jump to this directory and copy the .env file to this folder. Run "node seed.js" to properly seed the MongoDB with the good place characters.