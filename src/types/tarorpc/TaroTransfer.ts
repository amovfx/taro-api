// Original file: /Users/andrew/git/taro/tarorpc/taro.proto

import type { PrevInputAsset as _tarorpc_PrevInputAsset, PrevInputAsset__Output as _tarorpc_PrevInputAsset__Output } from '../tarorpc/PrevInputAsset';
import type { AssetOutput as _tarorpc_AssetOutput, AssetOutput__Output as _tarorpc_AssetOutput__Output } from '../tarorpc/AssetOutput';

export interface TaroTransfer {
  'old_taro_root'?: (Buffer | Uint8Array | string);
  'new_taro_root'?: (Buffer | Uint8Array | string);
  'prev_inputs'?: (_tarorpc_PrevInputAsset)[];
  'new_outputs'?: (_tarorpc_AssetOutput)[];
}

export interface TaroTransfer__Output {
  'old_taro_root': (Buffer);
  'new_taro_root': (Buffer);
  'prev_inputs': (_tarorpc_PrevInputAsset__Output)[];
  'new_outputs': (_tarorpc_AssetOutput__Output)[];
}
