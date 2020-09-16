/**
 * Truncate long strings
 */
export const truncateString = (str, num = 11) => {
  if (str.length > num) {
    return `${str.slice(0, num)}...`;
  }

  return str;
};

/**
 * Capitalize the first character in a string
 */
export const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Capitalize the first character in a every word in a string
 */
export const titleCase = (str) => {
  const splitStr = str.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your
    // for does that for you Assign it back to the array
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
};

/**
 * Slugify string
 */
export const slugify = text =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '_') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '_') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text

/**
 * Check for empty JS objects
 *
 * Because Object.keys(new Date()).length === 0;
 * we have to do some additional check
 */
export const objectIsEmpty = obj => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};
