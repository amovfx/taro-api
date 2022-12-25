// Original file: /Users/andrew/git/taro/tarorpc/taro.proto


export interface ListBalancesRequest {
  'asset_id'?: (boolean);
  'fam_key'?: (boolean);
  'asset_filter'?: (Buffer | Uint8Array | string);
  'family_key_filter'?: (Buffer | Uint8Array | string);
  'group_by'?: "asset_id"|"fam_key";
}

export interface ListBalancesRequest__Output {
  'asset_id'?: (boolean);
  'fam_key'?: (boolean);
  'asset_filter': (Buffer);
  'family_key_filter': (Buffer);
  'group_by': "asset_id"|"fam_key";
}
