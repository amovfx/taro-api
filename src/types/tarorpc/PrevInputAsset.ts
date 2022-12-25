// Original file: protos/taro.proto

import type { Long } from '@grpc/proto-loader';

export interface PrevInputAsset {
  'anchor_point'?: (string);
  'asset_id'?: (Buffer | Uint8Array | string);
  'script_key'?: (Buffer | Uint8Array | string);
  'amount'?: (number | string | Long);
}

export interface PrevInputAsset__Output {
  'anchor_point': (string);
  'asset_id': (Buffer);
  'script_key': (Buffer);
  'amount': (string);
}
