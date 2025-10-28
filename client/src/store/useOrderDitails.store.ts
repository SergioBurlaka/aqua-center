import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { UnitsOfMeasureDimention, UnitsOfMeasureWeight } from '@shared/constants/order-ditails/OrderDitails';

export type UnitsOfMeasureDimentionType = {
  unitsOfMeasureDimention: UnitsOfMeasureDimention;
  setUnitsOfMeasureDimention: (unitsOfMeasureDimention: UnitsOfMeasureDimention) => void;
};

export const useUnitsOfMeasureDimentionStore = create<UnitsOfMeasureDimentionType>()(
  devtools(
    persist(
      (set) => ({
        unitsOfMeasureDimention: UnitsOfMeasureDimention.INCHES,
        setUnitsOfMeasureDimention: (unitsOfMeasureDimention) => {
          set({ unitsOfMeasureDimention });
        },
      }),
      { name: 'UnitsOfMeasureDimention' },
    ),
  ),
);

export type UnitsOfMeasureWeightType = {
  unitsOfMeasureWeight: UnitsOfMeasureWeight;
  setUnitsOfMeasureWeight: (unitsOfMeasureWeight: UnitsOfMeasureWeight) => void;
};
export const useUnitsOfMeasureWeightStore = create<UnitsOfMeasureWeightType>()(
  devtools(
    persist(
      (set) => ({
        unitsOfMeasureWeight: UnitsOfMeasureWeight.POUNDS_AND_OUNCES,
        setUnitsOfMeasureWeight: (unitsOfMeasureWeight) => {
          set({ unitsOfMeasureWeight });
        },
      }),
      { name: 'UnitsOfMeasureWeight' },
    ),
  ),
);
