// Original file: /Users/andrew/git/taro/tarorpc/taro.proto

import type { Addr as _tarorpc_Addr, Addr__Output as _tarorpc_Addr__Output } from '../tarorpc/Addr';
import type { AddrEventStatus as _tarorpc_AddrEventStatus } from '../tarorpc/AddrEventStatus';
import type { Long } from '@grpc/proto-loader';

export interface AddrEvent {
  'creation_time_unix_seconds'?: (number | string | Long);
  'addr'?: (_tarorpc_Addr | null);
  'status'?: (_tarorpc_AddrEventStatus | keyof typeof _tarorpc_AddrEventStatus);
  'outpoint'?: (string);
  'utxo_amt_sat'?: (number | string | Long);
  'taproot_sibling'?: (Buffer | Uint8Array | string);
  'confirmation_height'?: (number);
  'has_proof'?: (boolean);
}

export interface AddrEvent__Output {
  'creation_time_unix_seconds': (string);
  'addr': (_tarorpc_Addr__Output | null);
  'status': (keyof typeof _tarorpc_AddrEventStatus);
  'outpoint': (string);
  'utxo_amt_sat': (string);
  'taproot_sibling': (Buffer);
  'confirmation_height': (number);
  'has_proof': (boolean);
}
