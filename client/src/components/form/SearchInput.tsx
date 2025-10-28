import { FC } from 'react';

import { LoadingOutlined, SearchOutlined } from '@ant-design/icons';
import { Input, type InputProps } from 'antd';

import { useUncontrolled } from '@shared/hooks/useUncontrolled';

import { getLoadingIndicatorSize } from './form-fields/shared/utils/getLoadingIndicatorSize';

type SearchInputProps = {
  value?: string;
  onChange?: (value: string) => void;
  isLoading?: boolean;
  InputProps?: InputProps;
  placeholder: string;
  onPressEnter?: () => void;
};

export const SearchInput: FC<SearchInputProps> = ({
  value,
  onChange,
  isLoading,
  InputProps,
  placeholder,
  onPressEnter,
}) => {
  const [val, setVal] = useUncontrolled({
    value,
    onChange,
    defaultValue: '',
  });

  const loadingIndicatorSize = getLoadingIndicatorSize(InputProps?.size);

  return (
    <Input
      {...InputProps}
      allowClear
      placeholder={placeholder}
      value={val}
      prefix={<SearchOutlined />}
      suffix={
        isLoading === true ? (
          <LoadingOutlined style={{ fontSize: loadingIndicatorSize }} className="text-gray-400" spin />
        ) : (
          <span />
        )
      }
      onChange={({ target }) => {
        setVal(target.value);
      }}
      onPressEnter={onPressEnter}
    />
  );
};
