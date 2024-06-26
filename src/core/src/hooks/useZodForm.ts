// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { UseFormProps } from "react-hook-form";
import type { TypeOf, ZodSchema } from "zod";

type UseZodFormProps<T extends ZodSchema> = {
	schema: T;
} & UseFormProps<TypeOf<T>>;

export const useZodForm = <T extends ZodSchema>({
	schema,
	...formConfig
}: UseZodFormProps<T>) =>
	useForm({
		...formConfig,
		resolver: zodResolver(schema),
	});
