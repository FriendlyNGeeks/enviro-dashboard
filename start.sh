#!/bin/sh

###################################################
#                                                 #
#      Simple startup script to run project       #
#                                                 #
###################################################


# Start Gunicorn Backend
gunicorn --workers=2 -b :8080 app:app &

# Start Frontend UI
yarn serve -s build -p 8081


##################################################################
#                                                                #
#   If using NPM to install serve, comment above command and     #
#   make sure to install serve first:                            #
#                                                                #
#            `sudo npm install -g serve`                         #
#                                                                #
#   Then un-comment below command...                             #
#                                                                #                                                             
##################################################################

# Using serve via NPM global install
#serve -s build -p 8081