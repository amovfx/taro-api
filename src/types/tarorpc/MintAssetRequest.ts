// Original file: protos/taro.proto

import type { AssetType as _tarorpc_AssetType } from '../tarorpc/AssetType';
import type { Long } from '@grpc/proto-loader';

export interface MintAssetRequest {
  'asset_type'?: (_tarorpc_AssetType | keyof typeof _tarorpc_AssetType);
  'name'?: (string);
  'meta_data'?: (Buffer | Uint8Array | string);
  'amount'?: (number | string | Long);
  'enable_emission'?: (boolean);
  'skip_batch'?: (boolean);
}

export interface MintAssetRequest__Output {
  'asset_type': (keyof typeof _tarorpc_AssetType);
  'name': (string);
  'meta_data': (Buffer);
  'amount': (string);
  'enable_emission': (boolean);
  'skip_batch': (boolean);
}
