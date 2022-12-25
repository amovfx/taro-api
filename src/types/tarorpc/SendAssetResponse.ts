// Original file: /Users/andrew/git/taro/tarorpc/taro.proto

import type { TaroTransfer as _tarorpc_TaroTransfer, TaroTransfer__Output as _tarorpc_TaroTransfer__Output } from '../tarorpc/TaroTransfer';
import type { Long } from '@grpc/proto-loader';

export interface SendAssetResponse {
  'transfer_txid'?: (Buffer | Uint8Array | string);
  'anchor_output_index'?: (number);
  'transfer_tx_bytes'?: (Buffer | Uint8Array | string);
  'taro_transfer'?: (_tarorpc_TaroTransfer | null);
  'total_fee_sats'?: (number | string | Long);
}

export interface SendAssetResponse__Output {
  'transfer_txid': (Buffer);
  'anchor_output_index': (number);
  'transfer_tx_bytes': (Buffer);
  'taro_transfer': (_tarorpc_TaroTransfer__Output | null);
  'total_fee_sats': (string);
}
