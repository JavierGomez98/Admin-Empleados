/**
 * Name format without special characters
 * @param {string} value 
 * @returns Name
 */
export const formatName = (value) => {
    return value.replace(/[^A-Z]/ig, '').replaceAll('Ñ', '')
}

/**
 * Convert Date Js to DateTime SQL
 * @param {Date} jsDate 
 * @returns DateTime SQL
 */
export const dateJsToDateTimeMySQL = (jsDate) => {
    return `${jsDate.toISOString().split('T')[0]} ${jsDate.toTimeString().split(' ')[0]}`
}

/**
 * Subtract months from a date
 * @param {Object} date 
 * @param {number} months 
 * @returns Date
 */
export const lessMonthDate = (date, months) => {
    return date.setMonth(date.getMonth() - months)
}

/**
 * Convert DateTime SQL to Date Js
 * @param {DateTime} sqlDate 
 * @returns Date
 */
export const sqlToJsDate = (sqlDate) => {
    return new Date(sqlDate)
}