exports.before = function(browser) {
    browser.url(browser.launchUrl).waitForElementVisible('body', 500);
};

exports['Page title'] = function(browser) {
    const header = 'h1';

    browser.expect.element(header).to.be.present;
    browser.expect.element(header).text.to.equal('Example Domain');

    browser.end();
};

exports['Background color'] = function(browser) {
    browser.expect.element('body').to.have.css('background-color', '#f0f0f2');

    browser.end();
};
