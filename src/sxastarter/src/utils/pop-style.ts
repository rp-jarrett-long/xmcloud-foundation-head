/**
 * Removes one or many styles from a string of styles -
 * particularly useful for removing styles from the Sitecore rendering parameters
 * so they can either be used as a setting or placed somewhere else in the component.
 * @param styles the string of styles to remove from.
 * @param style the style or styles to remove.
 * @returns an array containing the new styles string and the removed styles, or false if the style was not found.
 */
export const popStyles = (
  styles: string,
  ...style: (string | RegExp)[]
): [string, ...(string | false)[]] => {
  if (!styles) {
    return ['', false];
  }
  const removedStyles: (string | false)[] = [];
  style.forEach((s) => {
    if (s instanceof RegExp) {
      const match = styles.match(s);
      if (match) {
        styles = styles.replace(s, '').trimEnd().replaceAll('  ', ' ');
        removedStyles.push(match[0]);
      } else {
        removedStyles.push(false);
      }
    } else {
      if (styles.includes(s)) {
        styles = styles.replace(s, '').trimEnd().replaceAll('  ', ' ');
        removedStyles.push(s);
      } else {
        removedStyles.push(false);
      }
    }
  });
  return [styles, ...removedStyles];
};

export const commonStyles = {
  colSpans: RegExp(/col-(.+) /g),
};
