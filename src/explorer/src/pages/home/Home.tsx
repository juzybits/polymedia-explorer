// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import clsx from "clsx";

import { Activity } from "~/components/Activity";
import { CurrentEpoch, OnTheNetwork } from "~/components/HomeMetrics";
import { PageLayout } from "~/components/Layout/PageLayout";
import { PolymediaCard } from "~/components/PolymediaCard";
import { ErrorBoundary } from "~/components/error-boundary/ErrorBoundary";
import { TopValidatorsCard } from "~/components/top-validators-card/TopValidatorsCard";
import { TabHeader } from "~/ui/Tabs";

// const ValidatorMap = lazy(() => import('../../components/validator-map'));

const TRANSACTIONS_LIMIT = 25;

function Home() {
	const isSuiTokenCardEnabled = false;
	return (
		<PageLayout
			gradient={{
				content: (
					<div
						data-testid="home-page"
						className={clsx("home-page-grid-container-top", isSuiTokenCardEnabled && "with-token")}
					>
						<div style={{ gridArea: "network" }} className="overflow-hidden">
							<OnTheNetwork />
						</div>
						<div style={{ gridArea: "epoch" }}>
							<CurrentEpoch />
						</div>
						{/*
						{isSuiTokenCardEnabled ? (
							<div style={{ gridArea: 'token' }}>
								<SuiTokenCard />
							</div>
						) : null}
						*/}
						{/* <div style={{ gridArea: "transactions" }}>
							<TransactionsCardGraph />
						</div> */}
						{/* <div style={{ gridArea: "accounts" }}>
							<AccountsCardGraph />
						</div> */}
						<div style={{ gridArea: "polymedia" }}>
							<PolymediaCard />
						</div>
					</div>
				),
				size: "lg",
			}}
			content={
				<div className="home-page-grid-container-bottom">
					<div style={{ gridArea: "activity" }}>
						<ErrorBoundary>
							<Activity initialLimit={TRANSACTIONS_LIMIT} disablePagination />
						</ErrorBoundary>
					</div>
					{/* <div style={{ gridArea: "packages" }}>
						<TopPackagesCard />
					</div> */}
					<div data-testid="validators-table" style={{ gridArea: "validators" }}
					>
						<TabHeader title="Validators">
							<ErrorBoundary>
								<TopValidatorsCard limit={10} showIcon />
							</ErrorBoundary>
						</TabHeader>
					</div>
					{/*
					<div
						style={{ gridArea: 'node-map' }}
						className="min-h-[320px] sm:min-h-[380px] lg:min-h-[460px] xl:min-h-[520px]"
					>
						<ErrorBoundary>
							<Suspense fallback={<Card height="full" />}>
								<ValidatorMap minHeight="100%" />
							</Suspense>
						</ErrorBoundary>
					</div>
					*/}
				</div>
			}
		/>
	);
}

export default Home;
