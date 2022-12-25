// Original file: protos/taro.proto

import type { GenesisInfo as _tarorpc_GenesisInfo, GenesisInfo__Output as _tarorpc_GenesisInfo__Output } from '../tarorpc/GenesisInfo';
import type { AssetType as _tarorpc_AssetType } from '../tarorpc/AssetType';
import type { AssetFamily as _tarorpc_AssetFamily, AssetFamily__Output as _tarorpc_AssetFamily__Output } from '../tarorpc/AssetFamily';
import type { AnchorInfo as _tarorpc_AnchorInfo, AnchorInfo__Output as _tarorpc_AnchorInfo__Output } from '../tarorpc/AnchorInfo';
import type { Long } from '@grpc/proto-loader';

export interface Asset {
  'version'?: (number);
  'asset_genesis'?: (_tarorpc_GenesisInfo | null);
  'asset_type'?: (_tarorpc_AssetType | keyof typeof _tarorpc_AssetType);
  'amount'?: (number | string | Long);
  'lock_time'?: (number);
  'relative_lock_time'?: (number);
  'script_version'?: (number);
  'script_key'?: (Buffer | Uint8Array | string);
  'asset_family'?: (_tarorpc_AssetFamily | null);
  'chain_anchor'?: (_tarorpc_AnchorInfo | null);
}

export interface Asset__Output {
  'version': (number);
  'asset_genesis': (_tarorpc_GenesisInfo__Output | null);
  'asset_type': (keyof typeof _tarorpc_AssetType);
  'amount': (string);
  'lock_time': (number);
  'relative_lock_time': (number);
  'script_version': (number);
  'script_key': (Buffer);
  'asset_family': (_tarorpc_AssetFamily__Output | null);
  'chain_anchor': (_tarorpc_AnchorInfo__Output | null);
}
