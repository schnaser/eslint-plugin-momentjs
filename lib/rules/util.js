module.exports = {
    isTzCall: function(node) {
        return node.callee.type === "MemberExpression"
            && node.callee.property.type === "Identifier"
            && node.callee.object.name === "moment"
            && node.callee.property.name === "tz";
    },

    /**
     * Detect if this is a parse of a string into a moment
     * @param node
     * @return {boolean}
     */
    isParse: function(node) {
        // noinspection JSAnnotator
        return node.arguments.length >= 1 && !isNewNowMoment(node);
    },

    containsTimeZone: containsTimeZone
};

const moment = require('moment');
const momentTz = require('moment-timezone');

/**
 * Detect calls like moment.tz(myTimeZone) where the developer wants to create a new "now" moment
 * @param node the node being parsed
 * @return {boolean} whether the node has any call or property that looks like a time zone
 */
function isNewNowMoment(node) {
    // noinspection JSAnnotator
    if (node.arguments.length !== 1) {
        // Only consider moment.tz(myTimeZone) to be valid. Call to moment.tz() implicitly fails.
        return false;
    }
    // noinspection JSAnnotator
    const constructorArg = node.arguments[0];
    return containsTimeZone(constructorArg);
}

/**
 * Recursive function that searches from the given node for anything that resembles a time zone
 * @param node the node being parsed
 * @return {boolean} whether the node has any call or property that looks like a time zone
 */
function containsTimeZone(node) {
    if (!node) {
        return false;
    }
    // Heavy-handed way to parse through the argument call structure. Match if we encounter any symbol matching the regex
    // Don't do anything special to detect what kind of child it is; if the property (e.g. callee) isn't present, we'll return false anyway

    const isTimeZoneLiteral = (node.type === "Literal" && moment.tz.names().indexOf(node.value) !== -1);
    const isTimeZoneVariable = !isTimeZoneLiteral && node.name && node.name.match(/zone|tz/i);

    return isTimeZoneLiteral
        || isTimeZoneVariable
        || containsTimeZone(node.object)
        || containsTimeZone(node.property)
        || containsTimeZone(node.callee);
}
