import { z } from 'zod';

// Schema for a single permission entry
export const permissionSchema = z.object({
  name: z.string(),
});

// Schema for the full permissions object
export const permissionsSchema = z.record(
  z.string().regex(/^\d+$/), // keys must be numeric strings
  permissionSchema,
);

// ✅ TypeScript types
export type Permission = z.infer<typeof permissionSchema>;
export type Permissions = z.infer<typeof permissionsSchema>;

export const ordersIdsSchema = z.object({
  download_report: z.array(z.number()),
  awaiting_import_csv_button: z.array(z.number()),
  order_import_txt_button: z.array(z.number()),
  add_manual_order_button: z.array(z.number()),
  export_labels_button: z.array(z.number()),
  end_of_the_day_form_button: z.array(z.number()),
  order_details_window: z.array(z.number()),
  order_tab_new: z.array(z.number()),
  order_tab_awaiting: z.array(z.number()),
  order_tab_received: z.array(z.number()),
  order_tab_print_late: z.array(z.number()),
  order_tab_shipped: z.array(z.number()),
  order_tab_canceled: z.array(z.number()),
  all_order_tab: z.array(z.number()),
  support_create_label: z.array(z.number()),
});

export const orderDetailsIdsSchema = z.object({
  order_details_edit_button: z.array(z.number()),
  order_details_barcode_button: z.array(z.number()),
  order_details_change_status_button: z.array(z.number()),
  order_details_change_status_to_received_button: z.array(z.number()),
  order_details_change_status_to_return_button: z.array(z.number()),
  order_details_change_status_to_print_late_button: z.array(z.number()),
  order_details_change_status_to_shipped_button: z.array(z.number()),
  order_details_change_status_to_cancel_button: z.array(z.number()),
  order_details_edit_item_quantity: z.array(z.number()),
  order_details_create_order_declaration_auto: z.array(z.number()),
  order_details_create_order_declaration_button: z.array(z.number()),
  order_details_update_order_declaration_button: z.array(z.number()),
  order_details_delete_order_declaration_button: z.array(z.number()),
  order_details_labels_button: z.array(z.number()),
  order_details_labels_void_button: z.array(z.number()),
  order_details_labels_custom_declaration_button: z.array(z.number()),
  order_details_internal: z.array(z.number()),
  order_details_create_label_button: z.array(z.number()),
  order_details_create_label_button_without_scales_validation: z.array(z.number()),
  order_details_chat_send_message_button: z.array(z.number()),
  order_details_chat_messages_list: z.array(z.number()),
  is_final_shipping_label: z.array(z.number()),
});

export const upcInfoIdsSchema = z.object({
  'upc-info_open_page_icon': z.array(z.number()),
  'upc-info_auto_create_declaration': z.array(z.number()),
  'upc-info_internal': z.array(z.number()),
  'upc-info_scan_page_view_search_area': z.array(z.number()),
  'upc-info_print_barcode_button': z.array(z.number()),
  'upc-info_problem_button': z.array(z.number()),
  'upc-info_timer': z.array(z.number()),
});

export const workLogIdsSchema = z.object({
  'work-log': z.array(z.number()),
  'order-log': z.array(z.number()),
});

export const settingsIdsSchema = z.object({
  'settings-page': z.array(z.number()),
});

export const shippingRulesIdsSchema = z.object({
  'shipping-rules-page': z.array(z.number()),
  'shipping-rules_add_rule_button': z.array(z.number()),
  'shipping-rules_edit_rule_button': z.array(z.number()),
});

export const customsDeclarationRulesIdsSchema = z.object({
  'customs-declaration-rules_page': z.array(z.number()),
  'customs-declaration-rules_add_rule_button': z.array(z.number()),
  'customs-declaration-rules_edit_rule_button': z.array(z.number()),
});

export const permissionsUsersIdsSchema = z.object({
  permissions_users_page: z.array(z.number()),
  permissions_users_add_user_button: z.array(z.number()),
  permissions_users_edit_user_button: z.array(z.number()),
  permissions_users_delete_user_button: z.array(z.number()),
});

export const permissionsRolesIdsSchema = z.object({
  permissions_roles_page: z.array(z.number()),
});

export const versionsIdsSchema = z.object({
  versions_page: z.array(z.number()),
});

export const shopsIdsSchema = z.object({
  shops_page: z.array(z.number()),
});

// ---- Main schema as discriminated union ----
export const FrontendPermissionsIdsSchema = z.discriminatedUnion('route_name', [
  z.object({ route_name: z.literal('/orders'), ids: ordersIdsSchema }),
  z.object({ route_name: z.literal('/orders/details'), ids: orderDetailsIdsSchema }),
  z.object({ route_name: z.literal('/upc-info'), ids: upcInfoIdsSchema }),
  z.object({ route_name: z.literal('/work-log'), ids: workLogIdsSchema }),
  z.object({ route_name: z.literal('/settings'), ids: settingsIdsSchema }),
  z.object({ route_name: z.literal('/settings/shipping-rules'), ids: shippingRulesIdsSchema }),
  z.object({ route_name: z.literal('/settings/customs-declaration-rules'), ids: customsDeclarationRulesIdsSchema }),
  z.object({ route_name: z.literal('/settings/permissions/users'), ids: permissionsUsersIdsSchema }),
  z.object({ route_name: z.literal('/settings/permissions/roles'), ids: permissionsRolesIdsSchema }),
  z.object({ route_name: z.literal('/settings/permissions/versions'), ids: versionsIdsSchema }),
  z.object({ route_name: z.literal('/settings/permissions/shops'), ids: shopsIdsSchema }),
]);

// ---- TypeScript types ----
export type OrdersIds = z.infer<typeof ordersIdsSchema>;
export type OrderDetailsIds = z.infer<typeof orderDetailsIdsSchema>;
export type UpcInfoIds = z.infer<typeof upcInfoIdsSchema>;
export type WorkLogIds = z.infer<typeof workLogIdsSchema>;
export type SettingsIds = z.infer<typeof settingsIdsSchema>;
export type ShippingRulesIds = z.infer<typeof shippingRulesIdsSchema>;
export type CustomsDeclarationRulesIds = z.infer<typeof customsDeclarationRulesIdsSchema>;
export type PermissionsUsersIds = z.infer<typeof permissionsUsersIdsSchema>;
export type PermissionsRolesIds = z.infer<typeof permissionsRolesIdsSchema>;
export type VersionsIds = z.infer<typeof versionsIdsSchema>;
export type ShopsIds = z.infer<typeof shopsIdsSchema>;

export type FrontendPermissionsIdsType = z.infer<typeof FrontendPermissionsIdsSchema>;
