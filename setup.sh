#!/bin/sh

###################################################
#                                                 #
#   Simple setup script to install dependencies   #
#                                                 #
###################################################

# Install Python Requirements
python3 -m pip install -r requirements.txt

# If you want to customize this project, un-comment below command to install dependencies
# Or, if using NPM instead of Yarn, use that command instead
# sudo npm install
# yarn

# To simply use the project as-is, only `serve` is required
yarn global add serve
#sudo npm install -g serve