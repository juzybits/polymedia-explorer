// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { type ComponentProps, forwardRef } from "react";

import { LinkWithQuery, type LinkProps } from "./LinkWithQuery";

export type ButtonOrLinkProps = Omit<Partial<LinkProps> & ComponentProps<"a"> & ComponentProps<"button">, "ref">;

export const ButtonOrLink = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonOrLinkProps>(
	({ href, to, ...props }, ref: any) => {
		// External link:
		if (href) {
			return (
				<a ref={ref} target="_blank" rel="noreferrer noopener" href={href} {...props} />
			);
		}

		// Internal router link:
		if (to) {
			return <LinkWithQuery to={to} ref={ref} {...props} />;
		}

		// We set the default type to be "button" to avoid accidentally submitting forms.

		return <button {...props} type={props.type || "button"} ref={ref} />;
	},
);
