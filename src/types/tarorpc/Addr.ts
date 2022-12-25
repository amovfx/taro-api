// Original file: protos/taro.proto

import type { AssetType as _tarorpc_AssetType } from '../tarorpc/AssetType';
import type { Long } from '@grpc/proto-loader';

export interface Addr {
  'encoded'?: (string);
  'asset_id'?: (Buffer | Uint8Array | string);
  'asset_type'?: (_tarorpc_AssetType | keyof typeof _tarorpc_AssetType);
  'amount'?: (number | string | Long);
  'family_key'?: (Buffer | Uint8Array | string);
  'script_key'?: (Buffer | Uint8Array | string);
  'internal_key'?: (Buffer | Uint8Array | string);
  'taproot_output_key'?: (Buffer | Uint8Array | string);
}

export interface Addr__Output {
  'encoded': (string);
  'asset_id': (Buffer);
  'asset_type': (keyof typeof _tarorpc_AssetType);
  'amount': (string);
  'family_key': (Buffer);
  'script_key': (Buffer);
  'internal_key': (Buffer);
  'taproot_output_key': (Buffer);
}
