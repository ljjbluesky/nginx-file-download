#!/bin/bash

################################################################################
# editable variables

######################################################################
############### !! DO NOT EDIT THE STATEMENTS BELOW !! ###############
base_path=$(cd `dirname $0`; pwd)

cd ${base_path}

docker build -t localhost/nfd .

exit 0
