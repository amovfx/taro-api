// Original file: /Users/andrew/git/taro/tarorpc/taro.proto

import type { Long } from '@grpc/proto-loader';

export interface NewAddrRequest {
  'genesis_bootstrap_info'?: (Buffer | Uint8Array | string);
  'fam_key'?: (Buffer | Uint8Array | string);
  'amt'?: (number | string | Long);
}

export interface NewAddrRequest__Output {
  'genesis_bootstrap_info': (Buffer);
  'fam_key': (Buffer);
  'amt': (string);
}
