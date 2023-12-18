# diy_ideas

This is a simple SPA using React for the front-end site and SoftUni practice server for the back-end site - only for educational purpose - project defense.

Installation:

1️⃣ Before starting the installation process, ensure that the following prerequisites are met - Node.js and npm are installed for the front-end and the back-end.


2️⃣ Clone the repository: https://github.com/donidiv/diy_ideas.git


3️⃣ For the server:

   🔘 npm install - install all packages dependencies;

   🔘 node server.js - start the server;


4️⃣ For the client:

   🔘 npm install - install all packages dependencies;

   🔘 npm run dev - runs in development mode;

   🔘 http://localhost:5173 to open in the browser.


Application`s structure and endpoints with methods:

1️⃣ Public part(for each user includes guests):

Home page (with information about the application) ➡ "/" (GET);

All ideas (list of ideas (projects)) ➡ "/ideas" (GET);

All users (list of users) ➡ "/users" (GET);

Details page for each idea ➡ "/ideas/:ideaId" (GET);

Details page for each user ➡ "/users/:userId" (GET);

Login page ➡ "/users/login" (POST for signing up);

Register page ➡ "/users/register" (POST for signing in);

404 page - NOT FOUND


2️⃣ Private part (for each users after successful login):

Create page ➡ "/ideas" (POST);

Idea details page - options: 

    > write a comment (for regular user - NOT for owner or guest) ➡ "/comments"(POST) and show all comments for current idea ➡ "comments"(GET);

    > editing - Edit page (for owner) ➡ "/ideas/:ideaId" (PUT);

    > deleting - (for owner) ➡ "/ideas/:ideaId" (DELETE);    

(logout ➡ "/users/logout" (GET));
