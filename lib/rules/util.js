module.exports = {
    isTzCall: isTzCall,
    isParse: isParse,
    containsTimeZone: containsTimeZone
};

const moment = require('moment');
const momentTz = require('moment-timezone');

function isTzCall(node) {
    return node.callee.type === "MemberExpression"
        && node.callee.property.type === "Identifier"
        && node.callee.object.name === "moment"
        && node.callee.property.name === "tz";
}

/**
 * Detect if this is a parse of a string into a moment
 * @param node
 * @return {boolean}
 */
function isParse(node) {
    // noinspection JSAnnotator
    return isTzCall(node)
        ? node.arguments.length > 1
        : node.arguments.length > 0;
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
