// Original file: protos/taro.proto

import type { Long } from '@grpc/proto-loader';

export interface GetInfoResponse {
  'version'?: (string);
  'lndversion'?: (string);
  'network'?: (string);
  'assets'?: (number | string | Long);
}

export interface GetInfoResponse__Output {
  'version': (string);
  'lndversion': (string);
  'network': (string);
  'assets': (string);
}
