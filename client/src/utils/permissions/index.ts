import { FrontendPermissionsIdsType } from '@shared/types';

const Frontend_Permissions_Ids: FrontendPermissionsIdsType[] = [
  {
    route_name: '/orders',
    ids: {
      download_report: [55],
      awaiting_import_csv_button: [1],
      order_import_txt_button: [34, 36],
      add_manual_order_button: [33, 36],
      export_labels_button: [26],
      end_of_the_day_form_button: [27],
      order_details_window: [45],
      order_tab_new: [2],
      order_tab_awaiting: [3],
      order_tab_received: [8],
      order_tab_print_late: [9],
      order_tab_shipped: [7],
      order_tab_canceled: [10],
      all_order_tab: [11, 12, 16, 17, 15, 18],
      support_create_label: [135],
    },
  },
  {
    route_name: '/orders/details',
    ids: {
      order_details_edit_button: [35],
      order_details_barcode_button: [50, 45],
      order_details_change_status_button: [46, 45],
      order_details_change_status_to_received_button: [],
      order_details_change_status_to_return_button: [],
      order_details_change_status_to_print_late_button: [],
      order_details_change_status_to_shipped_button: [],
      order_details_change_status_to_cancel_button: [],
      order_details_edit_item_quantity: [47, 45],
      order_details_create_order_declaration_auto: [41, 45],
      order_details_create_order_declaration_button: [39, 45],
      order_details_update_order_declaration_button: [40],
      order_details_delete_order_declaration_button: [42, 45],
      order_details_labels_button: [25],
      order_details_labels_void_button: [24, 25],
      order_details_labels_custom_declaration_button: [44, 25, 45],
      order_details_internal: [20, 45],
      order_details_create_label_button: [23],
      order_details_create_label_button_without_scales_validation: [135],
      order_details_chat_send_message_button: [29, 45],
      order_details_chat_messages_list: [31, 45],
      is_final_shipping_label: [156],
    },
  },
  {
    route_name: '/upc-info',
    ids: {
      'upc-info_open_page_icon': [51],
      'upc-info_auto_create_declaration': [41],
      'upc-info_internal': [20, 45],
      'upc-info_scan_page_view_search_area': [51],
      'upc-info_print_barcode_button': [50],
      'upc-info_problem_button': [49],
      'upc-info_timer': [52],
    },
  },
  {
    route_name: '/work-log',
    ids: {
      'work-log': [105],
      'order-log': [106],
    },
  },
  {
    route_name: '/settings',
    ids: {
      'settings-page': [74, 59, 78, 64, 103, 109],
    },
  },
  {
    route_name: '/settings/shipping-rules',
    ids: {
      'shipping-rules-page': [74],
      'shipping-rules_add_rule_button': [72],
      'shipping-rules_edit_rule_button': [74],
    },
  },
  {
    route_name: '/settings/customs-declaration-rules',
    ids: {
      'customs-declaration-rules_page': [59],
      'customs-declaration-rules_add_rule_button': [60],
      'customs-declaration-rules_edit_rule_button': [61],
    },
  },
  {
    route_name: '/settings/permissions/users',
    ids: {
      permissions_users_page: [78],
      permissions_users_add_user_button: [77],
      permissions_users_edit_user_button: [78],
      permissions_users_delete_user_button: [79],
    },
  },
  {
    route_name: '/settings/permissions/roles',
    ids: {
      permissions_roles_page: [64],
    },
  },
  {
    route_name: '/settings/permissions/versions',
    ids: {
      versions_page: [103],
    },
  },
  {
    route_name: '/settings/permissions/shops',
    ids: {
      shops_page: [109],
    },
  },
];

export const isPermitted = (route_name: string, id_name: string, backend_ids_list: number[]) => {
  const RouteObject = Frontend_Permissions_Ids.find((o) => o.route_name === route_name);
  const ids: number[] =
    RouteObject && (RouteObject.ids as Record<string, number[]>)[id_name]
      ? (RouteObject.ids as Record<string, number[]>)[id_name]
      : [];
  let match = false;

  for (const f_id of ids) {
    if (backend_ids_list.some((b_id) => Number(b_id) === Number(f_id))) {
      match = true;
    }
  }

  if (ids.length === 0) {
    match = true;
  }
  return match;
};
