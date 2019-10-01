// initial set up
// currently doing nothing in web page

// test if in browser or node
// cf. https://stackoverflow.com/questions/17575790/environment-detection-node-js-or-browser
var isNode=new Function("try {return this===global;}catch(e){ return false;}");

// common variables for both environments

//if (isNode()) {
var chai=require('chai'),
    chaidom = require('chai-dom'),
    fs=require('fs'),
    // fs = require('fs'),
    // request = require('request'),
    // cheerio=require('cheerio'),
    // path = require('path'),
    // hwc = require('html-word-count');
    jsdom = require("jsdom");
const { JSDOM } = jsdom;

var testhtml = `<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <table>
      <tr>
        <td class="PM">Some Name</td>
        <td class="PM">Second Name</td>
        <td class="PM">Third Name</td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </body>
</html>
`;

// declare jquery and window-related vars
var window, jq,
    q= require('jquery'),
    lm = require('../Part2/link-ministers.js');

var assert=chai.assert,
    expect=chai.expect;
chai.use(chaidom);

//////////////////////////////////////
///
///   tests start here
///
//////////////////////////////////////


describe('Part 2: Javascript in the Browser', function() {
  describe('Unit Tests', function() {

    beforeEach (function (done) {
      window = new JSDOM(testhtml).window;
      jq = q(window);
      global.window = window;
      global.document = window.document;
      done();
    });
    
    it('function addLink(node, "Some Name", "https://en.Wikipedia.org/wiki/Some Name") should return the original node with a new <a> tag inside', function() {
      let td = jq('td')[0],
          t  = "Some Name",
          u  = "https://en.wikipedia.org/wiki/" + t;
      lm.addLink(td,t,u);
      expect(td,
             'element has contains no a tag with href ' + u)
        .to.have.descendant('a').with.attr('href').equal(u);
      expect(td,
             'element has no a tag with text ' + t)
        .to.have.descendant('a').with.text(t);
      expect(td.textcontent).to.be.undefined;
      // console.log(td.outerHTML);
      // assert.equal(lm.addLink(td,t,u).outerHTML,
      //              jq('<td class="PM"><a href="https://en.wikipedia.org/wiki/Some Name">Some Name</a></td>')[0].outerHTML );
          });
    it('function wikify("Elijah Harper") should return "https://en.wikipedia.org/wiki/Elijah_Harper" (Elijah Harper & Elijah_Harper both accepted)',
       function() {
      expect((lm.wikify("Elijah Harper" ) == "https://en.wikipedia.org/wiki/Elijah Harper" ||
                   lm.wikify("Elijah Harper" ) == "https://en.wikipedia.org/wiki/Elijah_Harper"),
                  "wikify should turn 'Elijah Harper' into either https://en.wikipedia.org/wiki/Elijah Harper" +
                    " or https://en.wikipedia.org/wiki/Elijah_Harper").to.be.true;
    });
    it('function linkifyClass should linkify all elements of a given class', function() {
      lm.linkifyClass("PM");
      for(var i = 0; i < jq('td.PM').length; i++) {
        let el = jq('td.PM')[i]; 
        expect(el,
               'this test will fail if a td element does not have a child "a" node')
          .to.contain('a');
        expect(el.textcontent,
               'this test will fail if the td element contains text outside of its child node')
          .to.be.undefined;
      }
      for(var i = 0; i < jq('td.PM a').length; i++) {
        let el = jq('td.PM a')[i];
        expect(el,
               'this test will fail if an <a> element \in the table does not have a Wikipedia href')
          .to.have.attr('href').with.string("https://en.wikipedia.org/wiki/");
      }
    });

  });

  describe('Integration tests: does the page load as expected?', function() {
    let indexHtml = fs.readFileSync("Part2/index.html", "utf-8");
    beforeEach (function (done) {
      window = new JSDOM(indexHtml).window;
      jq = q(window);
      global.window = window;
      global.document = window.document;
      done();
    });

    it('Check to see whether index.html is still set up correctly. Running updatePage() in index.html should perform the correct updates.', function() {
      lm.updatePage();
      for(var i = 0; i < jq('td.PM').length; i++) {
        let el = jq('td.PM')[i]; 
        expect(el,
               'this test will fail if a td element does not have a child "a" node')
          .to.contain('a');
        expect(el.textcontent,
               'this test will fail if the td element contains text outside of its child node')
          .to.be.undefined;
      }
      for(var i = 0; i < jq('td.PM a').length; i++) {
        let el = jq('td.PM a')[i];
        expect(el,
               'this test will fail if an <a> element \in the table does not have a Wikipedia href')
          .to.have.attr('href').with.string("https://en.wikipedia.org/wiki/");
      }
    });

  });

});
