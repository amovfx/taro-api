// Original file: /Users/andrew/git/taro/tarorpc/taro.proto


export interface ProofFile {
  'raw_proof'?: (Buffer | Uint8Array | string);
  'genesis_point'?: (string);
}

export interface ProofFile__Output {
  'raw_proof': (Buffer);
  'genesis_point': (string);
}
