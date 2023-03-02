/**
 *
 * @param {(string | undefined | null)[]} names
 */
const classNames = (names) => names.filter((name) => !!name).join(" ");

export default classNames;
