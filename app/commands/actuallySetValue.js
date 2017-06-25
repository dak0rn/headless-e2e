/**
 * Sets the value of an input identified by the given selector.
 *
 * @param {string} selector Input selector
 * @param {string} value Value to set
 * @return {object} Browser instance
 */
exports.command = function(selector, value) {
    this.execute(`document.querySelector('${selector}').value = '${value}';`);
    return this;
};
