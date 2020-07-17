import { ITHeader as THeader } from "components/table/interfaces";

export type ITHeader<T extends object> = Array<THeader<T>>;
