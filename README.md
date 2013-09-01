bitstarter
==========

#Get Node_js_sample from github

1. fork to your github account, 

2. clone to your reposotory and change a name to bitstarter
 
  git clone https://github.com/username/Node_js_sample.git

3. Configure remotes
 
  cd bitstarter

  git remote add upstream https://github.com/username/bitstarter.git

  git fetch upstream

#Configure heroku
1. Check you heroku accounts, keys (also refer to https://github.com/ddollar/heroku-accounts)

 heroku accounts
 
 heroku keys(if there is mulitple keys for one account, run $ heroku keys:remove adam@workstation.local)

2. login your heroku account
  heroku login

2. How to generate new RSA-new Key and add it to Heroku:

  First:
  ssh-keygen -t rsa -C "giordano.scalzo[at]gmail.com" -f  ~/.ssh/id_rsa_heroku

  then added to my machine:

  ssh-add ~/.ssh/id_rsa_heroku
  
  -Potential problem: "Could not open a connection to your authentication agent." when using ssh-add (ref: https://coderwall.com/p/rdi_wq)
  
  -Reason: ssh-add don't know how to talk with the authentication agent.
  
  -Solution: 
   1. ssh-agent 
   2. eval $(ssh-agent)
  

  and, finally, to Heroku

  heroku keys:add ~/.ssh/id_rsa_heroku.pub

3. Create a site in heroku
  heroku create

  two sample websites:
  (main)
  http://mysterious-savannah-7174.herokuapp.com/

  http://frozen-caverns-5064.herokuapp.com/
  
#Push your code to heroku

4. push your github project(where?? brach or master) to heroku(Push commits : git push origin master)
  git push heroku master

#update your github code and update and then deploy to heroku again
1. edit your web.js file using emacs/vim/nano

2. add to github

 git add web.js
 
3. commit your updated file to github(branch??)

 git commit -m "Updated web.js"
 
4. redepoly

 git push heroku master(if it is ok, you can push commits to your github reposotory: git push origin master)
 



