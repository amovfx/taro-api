#!/bin/bash

PROTO_DIR=./protos


cp ~/git/taro/tarorpc/taro.proto $PROTO_DIR/taro.proto

#Generate Javascript code

yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --keepCase --outDir=./src/types $PROTO_DIR/taro.proto