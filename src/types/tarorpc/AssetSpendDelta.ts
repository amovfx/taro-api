// Original file: /Users/andrew/git/taro/tarorpc/taro.proto

import type { Long } from '@grpc/proto-loader';

export interface AssetSpendDelta {
  'asset_id'?: (Buffer | Uint8Array | string);
  'old_script_key'?: (Buffer | Uint8Array | string);
  'new_script_key'?: (Buffer | Uint8Array | string);
  'new_amt'?: (number | string | Long);
}

export interface AssetSpendDelta__Output {
  'asset_id': (Buffer);
  'old_script_key': (Buffer);
  'new_script_key': (Buffer);
  'new_amt': (string);
}
