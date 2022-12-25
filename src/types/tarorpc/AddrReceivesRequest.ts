// Original file: protos/taro.proto

import type { AddrEventStatus as _tarorpc_AddrEventStatus } from '../tarorpc/AddrEventStatus';

export interface AddrReceivesRequest {
  'filter_addr'?: (string);
  'filter_status'?: (_tarorpc_AddrEventStatus | keyof typeof _tarorpc_AddrEventStatus);
}

export interface AddrReceivesRequest__Output {
  'filter_addr': (string);
  'filter_status': (keyof typeof _tarorpc_AddrEventStatus);
}
