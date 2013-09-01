bitstarter
==========

Node_js_sample

How to generate new RSA-new Key and add it to Heroku:
First:
ssh-keygen -t rsa -C "giordano.scalzo[at]gmail.com" -f  ~/.ssh/id_rsa_heroku

then added to my machine:

ssh-add ~/.ssh/id_rsa_heroku

and, finally, to Heroku

heroku keys:add ~/.ssh/id_rsa_heroku.pub

After that,

git push heroku master


two sample websites:

http://mysterious-savannah-7174.herokuapp.com/

http://frozen-caverns-5064.herokuapp.com/
