#!/usr/bin/env bash
cd /home/user/Documents/Mashup/js_complete/executionengine
alias mvn='mvn  --quiet'
mvn test -l compile.log
