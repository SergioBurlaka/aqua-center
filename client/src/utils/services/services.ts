import { DeliveryServiceType, DeliveryServiceTypes } from '@shared/api/order-ditails/order-ditails.dtos';

export const getAllServicesOptions = (
  obj: DeliveryServiceTypes | undefined,
): {
  label: string;
  value: number;
  id: number;
}[] => {
  const services: DeliveryServiceType[] = [];

  for (const service in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, service)) {
      obj[service].map((v) => {
        return services.push({
          delivery_service_type_name: `${service} ${v.delivery_service_type_name}`,
          delivery_service_type_id: v.delivery_service_type_id,
          delivery_service_id: v.delivery_service_id,
        });
      });
    }
  }

  return services?.map((service) => ({
    label: service.delivery_service_type_name,
    value: service.delivery_service_type_id,
    id: service.delivery_service_id,
  }));
};

export const getServicesOptions = (obj: DeliveryServiceTypes | undefined, ship_service_level: string) => {
  const services = getAllServicesOptions(obj);

  return services.filter((item) =>
    ship_service_level === 'Expedited'
      ? item.value === 5 || item.value === 31 || item.value === 6 || item.value === 12 || item.value === 16
      : true,
  );
};
