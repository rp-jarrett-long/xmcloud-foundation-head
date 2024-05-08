/**
 * Removes one or many styles from a string of styles -
 * particularly useful for removing styles from the Sitecore rendering parameters
 * so they can either be used as a setting or placed somewhere else in the component.
 * @param styles the string of styles to remove from.
 * @param style a string, RegExp, or function to determine the style to be removed.
 * @returns an array containing the new styles string and the removed styles, or false if the style was not found.
 */
export const popStyles = (
  styles: string,
  ...style: (string | RegExp | ((s: string) => boolean))[]
): [string, ...(string | false)[]] => {
  if (!styles) {
    return ['', false];
  }
  const removedStyles: (string | false)[] = [];
  style.forEach((s) => {
    if (s instanceof RegExp) {
      const match = styles.match(s);
      if (match) {
        styles = styles.replace(s, '');
        removedStyles.push(match[0]);
      } else {
        removedStyles.push(false);
      }
    } else if (typeof s === 'string') {
      if (styles.includes(s)) {
        styles = styles.replace(s, '');
        removedStyles.push(s);
      } else {
        removedStyles.push(false);
      }
    } else if (typeof s === 'function') {
      const match = styles.split(' ').find(s);
      if (match) {
        styles = styles.replace(match, '');
        removedStyles.push(match);
      } else {
        removedStyles.push(false);
      }
    }
  });
  return [styles.trimStart().trimEnd().replace(/\s+/g, ' '), ...removedStyles];
};

export const commonStyles = {
  colSpans: RegExp(/col-([^\s]+)/g),
};
