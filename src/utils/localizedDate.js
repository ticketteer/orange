const format = require('date-fns/format')
const locales = require('../../config/i18n')

/**
 * Output a formatted date with a given locale
 * @param {string} date - Coming from the GraphQL query
 * @param {string} locale - Via the Context API
 * @returns {string}
 */

const localizedDate = (date, locale) => format(date, locales[locale].dateFormat)

module.exports = localizedDate
