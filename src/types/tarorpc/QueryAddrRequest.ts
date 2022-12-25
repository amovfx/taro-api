// Original file: /Users/andrew/git/taro/tarorpc/taro.proto

import type { Long } from '@grpc/proto-loader';

export interface QueryAddrRequest {
  'created_after'?: (number | string | Long);
  'created_before'?: (number | string | Long);
  'limit'?: (number);
  'offset'?: (number);
}

export interface QueryAddrRequest__Output {
  'created_after': (string);
  'created_before': (string);
  'limit': (number);
  'offset': (number);
}
