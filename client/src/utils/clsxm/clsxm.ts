import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

export const clsxm = (...classes: classNames.ArgumentArray): string => twMerge(classNames(...classes));
