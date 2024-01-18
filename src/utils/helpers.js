import { format, parseISO } from "date-fns";

/**
 * Formats a Vietnamese phone number by adding spaces between digits.
 * If the phoneNumber is falsy, it returns a string with three sets of three underscores.
 * @param {number|string} phoneNumber - The phone number to be formatted.
 * @returns {string} The formatted phone number.
 */
export function formatVietnamesePhoneNumber(phoneNumber) {
  if (!phoneNumber) {
    return "___ ___ ___";
  }

  const phone = phoneNumber.toString();
  return phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
}

/**
 * Formats a number as Vietnamese currency.
 * @param {number} value - The value to be formatted.
 * @returns {string} The formatted currency value.
 */
export function formatVietnameseCurrency(value) {
  if (value != 0 && !value) {
    return "___ ___ ___";
  }

  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
}

/**
 * Formats a date and time string into a specific format.
 * @param {string} dateStr - The date and time string to format.
 * @returns {string} The formatted date and time string.
 */
export function formatDateTime(dateStr) {
  return format(parseISO(dateStr), "MMM d, yyyy h:mm a");
}

/**
 * Formats a date string into the format "MMM d, yyyy".
 * @param {string} dateStr - The date string to be formatted.
 * @returns {string} The formatted date string.
 */
export function formatDate(dateStr) {
  return format(parseISO(dateStr), "MMM d, yyyy");
}

/**
 * Converts a string to title case.
 *
 * @param {string} value - The string to be converted.
 * @returns {string} - The converted string in title case.
 */
export function toTitleCase(value) {
  var i, j, str, lowers, uppers;
  str = value.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });

  // Certain minor words should be left lowercase unless
  // they are the first or last words in the string
  lowers = [
    "A",
    "An",
    "The",
    "And",
    "But",
    "Or",
    "For",
    "Nor",
    "As",
    "At",
    "By",
    "For",
    "From",
    "In",
    "Into",
    "Near",
    "Of",
    "On",
    "Onto",
    "To",
    "With",
  ];
  for (i = 0, j = lowers.length; i < j; i++)
    str = str.replace(
      new RegExp("\\s" + lowers[i] + "\\s", "g"),
      function (txt) {
        return txt.toLowerCase();
      }
    );

  // Certain words such as initialisms or acronyms should be left uppercase
  uppers = ["Id", "Tv"];
  for (i = 0, j = uppers.length; i < j; i++)
    str = str.replace(
      new RegExp("\\b" + uppers[i] + "\\b", "g"),
      uppers[i].toUpperCase()
    );

  return str;
}

/**
 * Generates a password from the given email.
 *
 * @param {string} email - The email address.
 * @returns {string} - The generated password.
 */
export function generatePasswordFromEmail(email) {
  const emailParts = email.split("@");
  return emailParts[0].toString().padEnd(8, "0");
}

/**
 * Returns the complete image URL by concatenating the base URL with the provided path.
 * @param {string} path - The path of the image.
 * @returns {string} - The complete image URL.
 */
export function getImageUrl(path) {
  return import.meta.env.VITE_IMAGE_BASE_URL + path;
}

/**
 * Converts an object to an array by mapping its values.
 *
 * @param {Object} obj - The object to be converted.
 * @returns {Array} - The array containing the values of the object.
 */
export function objectToArray(obj) {
  const cloned = { ...obj };
  const keys = Object.keys(cloned);

  return keys.map((key) => cloned[key]);
}

/**
 * Builds options array from an object.
 * @param {Object} object - The input object.
 * @returns {Array} - The options array.
 */
export function buildOptions(object) {
  return objectToArray(object).map((o) => {
    return { value: o.en, label: o.vi };
  });
}

/**
 * Builds tag options based on the provided object.
 * Each tag option consists of a type, value, and label.
 * The type is selected from a predefined list of colors.
 * The value and label are extracted from the object's properties.
 * The tag options are returned as an object with lowercase keys.
 *
 * @param {Object} object - The object containing the properties to build tag options from.
 * @returns {Object} - The tag options object with lowercase keys.
 */
export function buildTagOptions(object) {
  const AVAILABLE_COLORS = ["grey", "blue", "green", "silver", "indigo", "red"];
  const length = AVAILABLE_COLORS.length;
  let idx = 0;
  let tagObj = {};

  Object.keys(object).forEach((k) => {
    const word = object[k];
    const tag = {
      type: AVAILABLE_COLORS[idx++ % length],
      value: word.en,
      label: word.vi,
    };

    tagObj[k.toString().toLowerCase()] = tag;
  });

  return tagObj;
}

/**
 * Returns the error message from the given error object.
 * If the error object has a response with a data property containing a message,
 * that message is returned. Otherwise, a default error message is returned.
 * @param {Error} error - The error object.
 * @returns {string} - The error message.
 */
export function getErrorMessage(error) {
  const errMsg =
    error?.response?.data?.message || error?.response?.data?.errors;
  return errMsg || "Có lỗi xảy ra, vui lòng thử lại.";
}
