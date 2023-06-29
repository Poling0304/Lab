/*	
	npm initinstall.js
    author: George Tsang

	Demonstrates the creation of package.json file.

    To test this app, one should
        1.  open integrated terminal
        2.  delete package.json in current project (if exists)
        3.  enter "npm init"
        4.  enter necessary information as per guideline described via below URL
        5.  open newly created package.json file and examine content
        6.  return to integrated terminal and enter "npm install --save <module name>" for each "required" module
        7.  notice the newly created package-lock.json file
        8.  enter "npm install --save <module name>" for any module that is not "required"
        9.  re-examine package.json and verify entries under "dependencies"
        10. verify the creation of node_modules folder containing installed modules

    Framework: N/A

    npm: fs

    References:

        https://docs.npmjs.com/files/package.json
        https://docs.npmjs.com/files/package-lock.json

*/

const express = require("express");
const exphbs = require('express-handlebars');
const fs = require("fs");

console.log(`Hello world`);

