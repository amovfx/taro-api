#!/bin/bash

PROTO_DIR=./protos
TARO_PROTO_FILE=~/git/taro/tarorpc/taro.proto
if [ -z "$1" ]; then
    echo "No argument supplied using ~/git/taro/tarorpc/taro.proto"
    if [ -f "$TARO_PROTO_FILE" ]; then
        echo "Setting $TARO_PROTO_FILE to ~/git/taro/tarorpc/taro.proto"
    else
        echo "File $TARO_PROTO_FILE does not exist. Please specify taro.proto path."
        exit 1
    fi

else
    if [ -f "$1" ]; then
        echo "Setting $1 to TARO_PROTO_FILE."
    else
        echo "File $1 does not exist."
        exit 1
    fi
    TARO_PROTO_FILE=$1
fi

cp ~/git/taro/tarorpc/taro.proto $PROTO_DIR/taro.proto
echo "Copied $TARO_PROTO_FILE to $PROTO_DIR/taro.proto"
echo "Generating Javascript Code"
yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --keepCase --outDir=./src/types $PROTO_DIR/taro.proto