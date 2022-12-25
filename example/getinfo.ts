import { AssetType } from "../src/types/tarorpc/AssetType";
import { TaroApi } from "./../src";
import { readFileSync } from "fs";

const taro = TaroApi.create({
  socket: "127.0.0.1:10029",
  macaroon: readFileSync(
    "/Users/andrew/.polar/networks/6/volumes/taro/alice/data/regtest/admin.macaroon"
  ).toString("hex"),
  cert: readFileSync(
    "/Users/andrew/.polar/networks/6/volumes/taro/alice/tls.cert"
  ).toString("hex"),
});

(async () => {
  const info = await taro.getInfo();
  console.log(info);
})();
