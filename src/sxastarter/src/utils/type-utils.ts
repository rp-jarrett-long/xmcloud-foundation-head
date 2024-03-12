import {
  ALIGNMENT_TYPES,
  BOOLEAN_TYPES,
  BORDER_TYPES,
  DENSITY_TYPES,
  SHAPE_TYPES,
  SIZE_TYPES,
  STATUS_TYPES,
  VARIANT_TYPES,
} from '../common/types';

export type Expand<T> = T extends unknown ? { [K in keyof T]: Expand<T[K]> } : never;

/**
 * VariantUnion is a union of all the possible variants that a component can have.
 */
export function variant<U>(variantOptions: Record<Extract<VARIANT_TYPES, U>, string[]>): {
  variant: Record<Extract<VARIANT_TYPES, U>, string[]>;
} {
  return {
    variant: variantOptions,
  };
}

/**
 * SizeUnion is a union of all the possible sizes that a component can have.
 */
export function size<U>(sizeOptions: Record<Extract<SIZE_TYPES, U>, string[]>): {
  size: Record<Extract<SIZE_TYPES, U>, string[]>;
} {
  return {
    size: sizeOptions,
  };
}

/**
 * InverseOptions is a union of all the possible inverse options that a component can have.
 */
export function isInverse<U>(isInverseOptions: Record<Extract<BOOLEAN_TYPES, U>, string[]>): {
  isInverse: Record<Extract<BOOLEAN_TYPES, U>, string[]>;
} {
  return {
    isInverse: isInverseOptions,
  };
}

/**
 * ValidOptions is a union of all the possible valid options that a component can have.
 */
export function isValid<U>(isValidOptions: Record<Extract<BOOLEAN_TYPES, U>, string[]>): {
  isValid: Record<Extract<BOOLEAN_TYPES, U>, string[]>;
} {
  return {
    isValid: isValidOptions,
  };
}

/**
 * BorderOptions is a union of all the possible border options that a component can have.
 */
export function border<U>(borderOptions: Record<Extract<BORDER_TYPES, U>, string[]>): {
  border: Record<Extract<BORDER_TYPES, U>, string[]>;
} {
  return {
    border: borderOptions,
  };
}

/**
 * DensityOptions is a union of all the possible density options that a component can have.
 */
export function density<U>(densityOptions: Record<Extract<DENSITY_TYPES, U>, string[]>): {
  density: Record<Extract<DENSITY_TYPES, U>, string[]>;
} {
  return {
    density: densityOptions,
  };
}

/**
 * AlignmentOptions is a union of all the possible alignment options that a component can have.
 */
export function alignment<U>(alignmentOptions: Record<Extract<ALIGNMENT_TYPES, U>, string[]>): {
  alignment: Record<Extract<ALIGNMENT_TYPES, U>, string[]>;
} {
  return {
    alignment: alignmentOptions,
  };
}

export function shape<U>(shapeOptions: Record<Extract<SHAPE_TYPES, U>, string[]>): {
  shape: Record<Extract<SHAPE_TYPES, U>, string[]>;
} {
  return {
    shape: shapeOptions,
  };
}

export function status<U>(statusOptions: Record<Extract<STATUS_TYPES, U>, string[]>): {
  status: Record<Extract<STATUS_TYPES, U>, string[]>;
} {
  return {
    status: statusOptions,
  };
}
