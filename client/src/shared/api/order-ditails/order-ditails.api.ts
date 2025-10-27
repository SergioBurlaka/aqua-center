import { apiClient, headersMultiPartFormData } from '../../lib';
import { CreateLabelDto } from '../upc-info/upcInfo.dtos';
import {
  AutoCreateOrderDeclarationManualProps,
  BarcodeLabelDto,
  ChatOrderMessageDto,
  ContriesDto,
  ConveyorLineScannedPhotoDto,
  CreateChatOrderMessageProps,
  DeleteOrderDeclarationProps,
  DeliveryPackageType,
  DeliveryServiceConfirmationType,
  DeliveryServiceTypes,
  HarmonizationCodesDto,
  LabelDeclarationsDto,
  ListLabelsDto,
  OrderDitailsDto,
  OrderIdProps,
  ProblemListDto,
  RateCarrierAutoDto,
  RateCarrierDto,
  UpdateOrderItemDeclarationProps,
} from './order-ditails.dtos';
import {
  AddOrderItemTagType,
  BarcodeLabelProps,
  CostInternalProps,
  CreateLabelProps,
  DeliveryPackagesProps,
  EditOrderItemStatusType,
  EditOrderType,
  GetDeclarationProps,
  OrderDitailsProps,
  RateCarrierAutoProps,
  RateCarrierProps,
  RemoveOrderItemTagType,
  uploadReturnLabelsFileType,
  VoidLabelProps,
} from './order-ditails.types';

export const OrderDitailsApi = {
  async getOrderDetail(params: OrderDitailsProps) {
    return apiClient.post<{ data: OrderDitailsDto }>('/order/detail', { ...params });
  },

  async editOrder(params: EditOrderType) {
    return apiClient.post('/order/edit', { ...params });
  },

  async getCountries() {
    return apiClient.get<{ data: ContriesDto[] }>('/manual/countries');
  },

  async addOrderItemTag(params: AddOrderItemTagType) {
    return apiClient.post('/order-item-tag/add', { ...params });
  },

  async removeOrderItemTag(params: RemoveOrderItemTagType) {
    return apiClient.delete('/order-item-tag/remove', { data: { ...params } });
  },

  async editOrderItemStatus(params: EditOrderItemStatusType) {
    return apiClient.post('/order-item/edit-order-item-status', { ...params });
  },

  async getProblemList() {
    return apiClient.get<{ data: ProblemListDto }>('/problem/list');
  },

  async updateOrderItemDeclaration(params: UpdateOrderItemDeclarationProps) {
    return apiClient.post('/order/update-order-item-declaration', { ...params });
  },

  async getHarmonizationCodes() {
    return apiClient.get<{ data: HarmonizationCodesDto }>('/manual/hs-codes');
  },

  async autoCreateOrderDeclarationManual(params: AutoCreateOrderDeclarationManualProps) {
    return apiClient.post('/order/auto-create-order-declaration-manual', { ...params });
  },

  async deleteOrderDeclaration(params: DeleteOrderDeclarationProps) {
    return apiClient.delete('/order/delete-order-declaration', { data: { ...params } });
  },

  async getListLabels(params: OrderIdProps) {
    return apiClient.post<{ data: ListLabelsDto }>('/delivery/list-label', { ...params });
  },
  async getConveyorLineScannedPhotos(params: OrderIdProps) {
    return apiClient.post<{ data: ConveyorLineScannedPhotoDto[] }>('/conveyor_line/conveyor-line-scanned-photos', {
      ...params,
    });
  },

  async getDeclaration(params: GetDeclarationProps) {
    return apiClient.post<{ data: LabelDeclarationsDto }>('/order/get-label-declaration', { ...params });
  },

  async voidLabel(params: VoidLabelProps) {
    return apiClient.post('/delivery/void-label', { ...params });
  },

  async uploadReturnLabels(params: uploadReturnLabelsFileType) {
    return apiClient.post('/delivery/return/upload-label', { ...params }, { headers: headersMultiPartFormData });
  },

  async getChatOrderMessage(params: OrderIdProps) {
    return apiClient.post<{ data: ChatOrderMessageDto[] }>('/order/chat-order-message', { ...params });
  },

  async createOrderMessage(params: CreateChatOrderMessageProps) {
    return apiClient.post('/order/create-order-message', { ...params });
  },

  async getDeliveryPackages(params: DeliveryPackagesProps) {
    return apiClient.post<{ data: DeliveryPackageType[] }>('/manual/delivery-packages', { ...params });
  },

  async getRateCarrierAuto(params: RateCarrierAutoProps) {
    return apiClient.post<{ data: RateCarrierAutoDto }>('/dim-weight/rate-carrier-auto', { ...params });
  },

  async getDeliveryServiceTypes() {
    return apiClient.get<{ data: DeliveryServiceTypes }>('/manual/delivery-service-types');
  },

  async getRateCarrier(params: RateCarrierProps) {
    return apiClient.post<{ data: RateCarrierDto }>('/dim-weight/rate-carrier', { ...params });
  },

  async getDeliveryServiceConfirmationTypes() {
    return apiClient.get<{ data: DeliveryServiceConfirmationType }>('/manual/delivery-service-confirmation-types');
  },

  async createLabel(params: CreateLabelProps) {
    return apiClient.post<{ data: CreateLabelDto[] }>('/delivery/create-label', { ...params });
  },
  async costInternal(params: CostInternalProps) {
    return apiClient.post('/delivery/cost/internal', { ...params });
  },
  async getBarcodeLabel(params: BarcodeLabelProps) {
    return apiClient.post<{ data: BarcodeLabelDto }>('/delivery/create-storage-number-label', { ...params });
  },
};
