import { type FC, type UIEvent, useCallback } from 'react';

import { Select, type SelectProps } from 'antd';

type InfiniteSelectProps = {
  scrollOffset?: number;
  onLoadMore: () => void;
  SelectProps?: Omit<SelectProps, 'onPopupScroll'>;
};

export const InfiniteSelect: FC<InfiniteSelectProps> = ({ scrollOffset = 50, onLoadMore, SelectProps }) => {
  const handleScroll: SelectProps['onPopupScroll'] = useCallback(
    (event: UIEvent<HTMLDivElement>) => {
      const listNode = event.currentTarget;

      if (listNode.scrollTop + listNode.clientHeight + scrollOffset >= listNode.scrollHeight) {
        onLoadMore();
      }
    },
    [onLoadMore, scrollOffset],
  );

  return <Select {...SelectProps} onPopupScroll={handleScroll} />;
};
