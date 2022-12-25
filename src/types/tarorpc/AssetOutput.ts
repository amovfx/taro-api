// Original file: protos/taro.proto

import type { Long } from '@grpc/proto-loader';

export interface AssetOutput {
  'anchor_point'?: (string);
  'asset_id'?: (Buffer | Uint8Array | string);
  'script_key'?: (Buffer | Uint8Array | string);
  'amount'?: (number | string | Long);
  'new_proof_blob'?: (Buffer | Uint8Array | string);
  'split_commit_proof'?: (Buffer | Uint8Array | string);
}

export interface AssetOutput__Output {
  'anchor_point': (string);
  'asset_id': (Buffer);
  'script_key': (Buffer);
  'amount': (string);
  'new_proof_blob': (Buffer);
  'split_commit_proof': (Buffer);
}
