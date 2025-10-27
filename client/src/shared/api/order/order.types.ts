export type CompanyType = {
  company_id: number;
  company_name: string;
  marketplace?: MarketplaceType[];
};
export type MarketplaceType = {
  marketplace_id: number;
  marketplace_name: string;
  shops: ShopsType[];
};

export type ShopsType = {
  awaiting_order_count: number;
  shop_id: number;
  shop_name: string;
};
