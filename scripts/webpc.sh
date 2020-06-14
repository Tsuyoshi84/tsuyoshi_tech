#!/bin/bash

for file in app/assets/images/*.jpg
do
  yarn webpc -f "$file"
done