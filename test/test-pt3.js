'use strict';

const fs=require('fs'), gitConfig = require('git-config'), hwc=require('html-word-count');

var chai=require('chai'),
    expect=chai.expect;
chai.use(require('chai-fs'));

// var githubid;

// gitConfig(function (err, config) {
//   if (err) return done(err);
//   if (config.github.user) {githubid = config.github.user;}
  
// });

describe('Reflection Checks (not required unless you are attempting an "A" grade!)', function() {
  it('Reflection file should exist', function() {
    //let r = `Reflection/${githubid}.md`;
    let r = `Reflection/reflection.md`;
    expect(r, `I can't find the file ${r}`).to.be.a.file();
  });
  it('The total word count for your reflection should be at least 625', function() {
    //let content=fs.readFileSync(`Reflection/${githubid}.md`, 'utf-8');
    let content=fs.readFileSync(`Reflection/reflection.md``, 'utf-8');
    expect(hwc(content), "").to.be.at.least(625);
  });
});
