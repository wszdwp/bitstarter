bitstarter
==========

Get Node_js_sample from github
1. fork to your github account, 

2. clone to your reposotory and change a name to bitstarter
git clone https://github.com/username/Node_js_sample.git
# Clones your fork of the repository into the current directory in terminal

3. Configure remotes
cd bitstarter
# Changes the active directory in the prompt to the newly cloned "Spoon-Knife" directory

git remote add upstream https://github.com/username/bitstarter.git
# Assigns the original repository to a remote called "upstream"

git fetch upstream
# Pulls in changes not present in your local repository, without modifying your files


Push your code to heroku
1. login your heroku account
heroku login

2. How to generate new RSA-new Key and add it to Heroku:
First:
ssh-keygen -t rsa -C "giordano.scalzo[at]gmail.com" -f  ~/.ssh/id_rsa_heroku

then added to my machine:

ssh-add ~/.ssh/id_rsa_heroku

and, finally, to Heroku

heroku keys:add ~/.ssh/id_rsa_heroku.pub

3. Create a site in heroku
heroku create

two sample websites:
(main)
http://mysterious-savannah-7174.herokuapp.com/

http://frozen-caverns-5064.herokuapp.com/

4. push your github project(where??) to heroku(Push commits : git push origin master)
git push heroku master



