import type { InputProps } from 'antd';

export const getLoadingIndicatorSize = (size: InputProps['size'] = 'middle'): number =>
  ({
    small: 14,
    middle: 16,
    large: 20,
  })[size];
