// Original file: protos/taro.proto


export interface ExportProofRequest {
  'asset_id'?: (Buffer | Uint8Array | string);
  'script_key'?: (Buffer | Uint8Array | string);
}

export interface ExportProofRequest__Output {
  'asset_id': (Buffer);
  'script_key': (Buffer);
}
