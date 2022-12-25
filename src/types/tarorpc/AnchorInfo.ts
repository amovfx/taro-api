// Original file: /Users/andrew/git/taro/tarorpc/taro.proto


export interface AnchorInfo {
  'anchor_tx'?: (Buffer | Uint8Array | string);
  'anchor_txid'?: (Buffer | Uint8Array | string);
  'anchor_block_hash'?: (Buffer | Uint8Array | string);
  'anchor_outpoint'?: (string);
  'internal_key'?: (Buffer | Uint8Array | string);
}

export interface AnchorInfo__Output {
  'anchor_tx': (Buffer);
  'anchor_txid': (Buffer);
  'anchor_block_hash': (Buffer);
  'anchor_outpoint': (string);
  'internal_key': (Buffer);
}
