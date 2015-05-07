Orion - Mikamai custom distribution
=====

Orion is an open source framework built on meteor that makes complex as well as simple apps possible with minimal effort. It’s built, modified, used, and supported by an active community of people around the world.

This is **not an official distribution**   
We packaged a vanilla Orion installation with some custom amde packages.  
Specifically we added:  

- a filesystem module tha do not rely on `orionFiles` collection
- a file attribute that writes the file name, instead of an object  
- an S3 filesystem adapter that adds `AWS_S3_PATH` configuration for S3 path inside the bucket

## Getting Started

Please refer to [Orion project page](https://github.com/orionjs/orion) for more informations.

