// Original file: protos/taro.proto

import type { Long } from '@grpc/proto-loader';

export interface AssetFamilyBalance {
  'family_key'?: (Buffer | Uint8Array | string);
  'balance'?: (number | string | Long);
}

export interface AssetFamilyBalance__Output {
  'family_key': (Buffer);
  'balance': (string);
}
