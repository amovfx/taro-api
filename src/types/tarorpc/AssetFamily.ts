// Original file: /Users/andrew/git/taro/tarorpc/taro.proto


export interface AssetFamily {
  'raw_family_key'?: (Buffer | Uint8Array | string);
  'tweaked_family_key'?: (Buffer | Uint8Array | string);
  'asset_id_sig'?: (Buffer | Uint8Array | string);
}

export interface AssetFamily__Output {
  'raw_family_key': (Buffer);
  'tweaked_family_key': (Buffer);
  'asset_id_sig': (Buffer);
}
