#!/usr/bin/env bash

pushd $(dirname $0) >/dev/null

cargo +nightly build --target wasm32-unknown-unknown --release

wasm-bindgen \
  ./target/wasm32-unknown-unknown/release/physics.wasm \
  --browser \
  --no-typescript \
  --out-dir ./js/

popd >/dev/null
