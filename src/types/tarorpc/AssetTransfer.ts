// Original file: /Users/andrew/git/taro/tarorpc/taro.proto

import type { AssetSpendDelta as _tarorpc_AssetSpendDelta, AssetSpendDelta__Output as _tarorpc_AssetSpendDelta__Output } from '../tarorpc/AssetSpendDelta';
import type { Long } from '@grpc/proto-loader';

export interface AssetTransfer {
  'transfer_timestamp'?: (number | string | Long);
  'old_anchor_point'?: (string);
  'new_anchor_point'?: (string);
  'taro_root'?: (Buffer | Uint8Array | string);
  'anchor_tx_hash'?: (Buffer | Uint8Array | string);
  'asset_spend_deltas'?: (_tarorpc_AssetSpendDelta)[];
}

export interface AssetTransfer__Output {
  'transfer_timestamp': (string);
  'old_anchor_point': (string);
  'new_anchor_point': (string);
  'taro_root': (Buffer);
  'anchor_tx_hash': (Buffer);
  'asset_spend_deltas': (_tarorpc_AssetSpendDelta__Output)[];
}
