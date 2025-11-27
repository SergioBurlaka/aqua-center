import { ReactNode } from 'react';

export type NavigationItemType = {
  order: number;
  menuItemProps: {
    label: string;
    key: string;
    icon: ReactNode;
  };
};
