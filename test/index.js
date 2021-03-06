import React from "react";
import assert from "assert";
import ReactDomServer from "react-dom/server";
import latex from "./../src/latex";
import bracketString from "./strings/bracketString";

class Test extends React.Component {
    render() {
        return (
            React.createElement(latex, null,
               "What is $\\sqrt{8}$?"
            )
        );
    }
}

class TestBrackets extends React.Component {
    render() {
        return (
            React.createElement(latex, null,
               "What is $\\sqrt{8}$?"
            )
        );
    }
}


describe("react-latex", () => {
    it("Should have katex class", () => {
        const testString = ReactDomServer.renderToStaticMarkup(<Test />);
        assert.notEqual(-1, testString.indexOf("<span class=\"katex-mathml\">"));
    });

    // it("Should render string with brackets properly", () => {
    //     const testStringWithBrackets = ReactDomServer.renderToStaticMarkup(<TestBrackets />).trim();
    //     assert.equal(bracketString, testStringWithBrackets);
    // });
});
