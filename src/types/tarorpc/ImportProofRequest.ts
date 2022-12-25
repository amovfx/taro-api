// Original file: protos/taro.proto


export interface ImportProofRequest {
  'proof_file'?: (Buffer | Uint8Array | string);
  'genesis_point'?: (string);
}

export interface ImportProofRequest__Output {
  'proof_file': (Buffer);
  'genesis_point': (string);
}
