import { CompanyType } from '@shared/api/order/order.types';

export const getFlatListOfshops = (shopsData: CompanyType[]) => {
  const shops_1 = shopsData?.map((company) => company.marketplace?.flat());
  const shops_2 = shops_1?.flat();
  const shops_3 = shops_2?.map((item) => item?.shops);
  return shops_3?.flat();
};
