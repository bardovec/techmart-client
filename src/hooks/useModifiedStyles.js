import { makeStyles } from '@material-ui/core';

/**
 * An useStyles extension that allows adding custom styling to common components
 * @param {object} defaults - default component styles
 * @param {object} customs - custom styles (should resemble "defaults" structure)
 * @param props - props for useStyles
 * @return {object} as useStyles
 */
export const useModifiedStyles = (defaults, customs, props) => {
  const defaultsCopy = { ...defaults };
  const customsCopy = { ...customs };

  const merge = (defs, mods) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, val] of Object.entries(defs)) {
      if (val !== null && typeof val === 'object') {
        if (mods[key] === undefined) {
          // eslint-disable-next-line no-param-reassign
          mods[key] = new val.__proto__.constructor();
        }
        merge(val, mods[key]);
      } else {
        // eslint-disable-next-line no-param-reassign
        mods[key] = val;
      }
    }

    return mods;
  };

  const styles = merge(customsCopy, defaultsCopy);
  return makeStyles(styles)(props);
};
