// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { SUI_FRAMEWORK_ADDRESS, SUI_SYSTEM_ADDRESS } from "@mysten/sui/utils";

import { useNetwork } from "~/context";
import { Network } from "~/utils/api/DefaultRpcClient";

const DEFAULT_RECOGNIZED_PACKAGES = [SUI_FRAMEWORK_ADDRESS, SUI_SYSTEM_ADDRESS];

export function useRecognizedPackages() {
	const [network] = useNetwork();

	/* Note: remove leading zeros, otherwise coins won't get recognized. */

	if (network === String(Network.MAINNET)) {
		return [
			...DEFAULT_RECOGNIZED_PACKAGES,
			/* AFSUI */ "0xf325ce1300e8dac124071d3152c5c5ee6174914f8bc2161e88329cf579246efc",
			/* AXOL */ "0xae00e078a46616bf6e1e6fb673d18dcd2aa31319a07c9bc92f6063363f597b4e",
			/* BLUB */ "0xfa7ac3951fdca92c5200d468d31a365eb03b2be9936fde615e69f0c1274ad3a0",
			/* BLUE */ "0xe1b45a0e641b9955a20aa0ad1c1f4ad86aad8afb07296d4085e349a50e90bdca",
			/* BUCK */ "0xce7ff77a83ea0cb6fd39bd8748e2ec89a3f41e8efdc3f4eb123e0ca37b184db2",
			/* BURRY */ "0x6db9a7bb22829898fd281879778a175120ebfc77eafc1f8ee341654cfc3f8dc2",
			/* BUT */ "0xbc858cb910b9914bee64fff0f9b38855355a040c49155a17b265d9086d256545",
			/* CETUS */ "0x6864a6f921804860930db6ddbe2e16acdf8504495ea7481637a1c8b9a8fe54b",
			/* COIN */ "wsol 0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8",
			/* DEEP */ "0xdeeb7a4662eec9f2f3def03fb937a663dddaa2e215b8078a284d026b7946c270",
			/* ETH (Sui Bridge) */ "0xd0e89b2af5e4910726fbcd8b8dd37bb79b29e5f83f7491bca830e94f7f226d29",
			/* FUD */ "0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1",
			/* HASUI */ "0xbde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d",
			/* HHS */ "0x996374e9df45796fe8112663a37272af4d33e7531c67d21aaa5cc93b3d1ded5c",
			/* HSUI */ "0x8c47c0bde84b7056520a44f46c56383e714cc9b6a55e919d8736a34ec7ccb533",
			/* KIMCHI */ "0xb6baa75577e4bbffba70207651824606e51d38ae23aa94fb9fb700e0ecf50064",
			/* KOTO */ "0xa99166e802527eeb5439cbda12b0a02851bf2305d3c96a592b1440014fcb8975",
			/* LOFI */ "0xf22da9a24ad027cccb5f2d496cbe91de953d363513db08a3a734d361c7c17503",
			/* MINE */ "0x9cde6fd22c9518820644dd1350ac1595bb23751033d247465ff3c7572d9a7049",
			/* NAVX */ "0xa99b8952d4f7d947ea77fe0ecdcc9e5fc0bcab2841d6e2a5aa00c3044e5544b5",
			/* NS */ "0x5145494a5f5100e645e4b0aa950fa6b68f614e8c59e17bc5ded3495123a79178",
			/* OCEAN */ "0xa8816d3a6e3136e86bc2873b1f94a15cadc8af2703c075f2d546c2ae367f4df9",
			/* SCA */ "0x7016aae72cfc67f2fadf55769c0a7dd54291a583b63051a5ed71081cce836ac6",
			/* SCB */ "0x9a5502414b5d51d01c8b5641db7436d789fa15a245694b24aa37c25c2a6ce001",
			/* SEND */ "0xb45fcfcc2cc07ce0702cc2d229621e046c906ef14d9b25e8e4d25f6e8763fef7",
			/* SPAM */ "0x30a644c3485ee9b604f52165668895092191fcaf5489a846afa7fc11cdb9b24a",
			/* SSWP */ "0x361dd589b98e8fcda9a7ee53b85efabef3569d00416640d2faa516e3801d7ffc",
			/* SUDENG */ "0x8993129d72e733985f7f1a00396cbd055bad6f817fee36576ce483c8bbb8b87b",
			/* SUIA */ "0x1d58e26e85fbf9ee8596872686da75544342487f95b1773be3c9a49ab1061b19",
			/* TABLE */ "0x93c5b75322b5f9fc194e16d869b30a1db8d1f1826b2371c776c21c3d6a375b10",
			/* TARDI */ "0x4cf08813756dfa7519cb480a1a1a3472b5b4ec067592a8bee0f826808d218158",
			/* TURBOS */ "0x5d1f47ea69bb0de31c313d7acf89b890dbb8991ea8e03c6c355171f84bb1ba4a",
			/* USDC (Bridged) */ "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf",
			/* USDC */ "0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7",
			/* USDT (cUSDTe) */ "0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690",
			/* USDT (sbUSDT) */ "0x375f70cf2ae4c00bf37117d0c85a2c71545e6ee05c4a5c7d282cd66a4504b068",
			/* USDT (wUSDT) */ "0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c",
			/* ZUKI */ "0x8d84e98518cab8bd2941cfb23fa78ad0538ed07ba8887e451f0b93380d479908",
		];
	}

	if (network === String(Network.TESTNET)) {
		return [
			...DEFAULT_RECOGNIZED_PACKAGES,
			"0x1fe2bdb8d9dba5bb2f8f1d987fcb9ab53d0f38b8a42445ebed736d6708ca59d6", // FUD
		];
	}

	return DEFAULT_RECOGNIZED_PACKAGES;
}
