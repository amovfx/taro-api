// Original file: /Users/andrew/git/taro/tarorpc/taro.proto

import type { AssetBalance as _tarorpc_AssetBalance, AssetBalance__Output as _tarorpc_AssetBalance__Output } from '../tarorpc/AssetBalance';
import type { AssetFamilyBalance as _tarorpc_AssetFamilyBalance, AssetFamilyBalance__Output as _tarorpc_AssetFamilyBalance__Output } from '../tarorpc/AssetFamilyBalance';

export interface ListBalancesResponse {
  'asset_balances'?: ({[key: string]: _tarorpc_AssetBalance});
  'asset_family_balances'?: ({[key: string]: _tarorpc_AssetFamilyBalance});
}

export interface ListBalancesResponse__Output {
  'asset_balances': ({[key: string]: _tarorpc_AssetBalance__Output});
  'asset_family_balances': ({[key: string]: _tarorpc_AssetFamilyBalance__Output});
}
