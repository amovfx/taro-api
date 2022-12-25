// Original file: /Users/andrew/git/taro/tarorpc/taro.proto


export interface GenesisInfo {
  'genesis_point'?: (string);
  'name'?: (string);
  'meta'?: (Buffer | Uint8Array | string);
  'asset_id'?: (Buffer | Uint8Array | string);
  'output_index'?: (number);
  'genesis_bootstrap_info'?: (Buffer | Uint8Array | string);
  'version'?: (number);
}

export interface GenesisInfo__Output {
  'genesis_point': (string);
  'name': (string);
  'meta': (Buffer);
  'asset_id': (Buffer);
  'output_index': (number);
  'genesis_bootstrap_info': (Buffer);
  'version': (number);
}
