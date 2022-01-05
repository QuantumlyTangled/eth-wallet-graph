import { ApolloClient, InMemoryCache } from '@apollo/client';
import type { Query as EthEIP721Query } from '@subgraphs/eip721';
import type { Query as EthEIP1155Query } from '@subgraphs/eip1155';
import type { Query as NonStandardNFTsQuery } from '@subgraphs/non-standard-nfts';
import type { Query as PlyEIP721Query } from '@subgraphs/eip721-matic';
import type { Query as PlyEIP1155Query } from '@subgraphs/eip1155-matic';
import { baseLink } from './links';

export const client = new ApolloClient({
	link: baseLink,
	cache: new InMemoryCache(),
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'no-cache'
		},
		query: {
			fetchPolicy: 'no-cache'
		}
	}
});

export type EthEIP721Response<K extends keyof Omit<EthEIP721Query, '__typename'>> = Record<K, Omit<EthEIP721Query[K], '__typename'>>;
export type EthEIP1155Response<K extends keyof Omit<EthEIP1155Query, '__typename'>> = Record<K, Omit<EthEIP1155Query[K], '__typename'>>;
export type EthNonStandardNFTsResponse<K extends keyof Omit<NonStandardNFTsQuery, '__typename'>> = Record<
	K,
	Omit<NonStandardNFTsQuery[K], '__typename'>
>;
export type PlyEIP721Response<K extends keyof Omit<PlyEIP721Query, '__typename'>> = Record<K, Omit<PlyEIP721Query[K], '__typename'>>;
export type PlyEIP1155Response<K extends keyof Omit<PlyEIP1155Query, '__typename'>> = Record<K, Omit<PlyEIP1155Query[K], '__typename'>>;
export type FtmEIP721Response<K extends keyof Omit<PlyEIP721Query, '__typename'>> = Record<K, Omit<PlyEIP721Query[K], '__typename'>>;
export type FtmEIP1155Response<K extends keyof Omit<PlyEIP1155Query, '__typename'>> = Record<K, Omit<PlyEIP1155Query[K], '__typename'>>;
export type AvaxEIP721Response<K extends keyof Omit<PlyEIP721Query, '__typename'>> = Record<K, Omit<PlyEIP721Query[K], '__typename'>>;
export type AvaxEIP1155Response<K extends keyof Omit<PlyEIP1155Query, '__typename'>> = Record<K, Omit<PlyEIP1155Query[K], '__typename'>>;
export type OptEIP721Response<K extends keyof Omit<PlyEIP721Query, '__typename'>> = Record<K, Omit<PlyEIP721Query[K], '__typename'>>;
export type OptEIP1155Response<K extends keyof Omit<PlyEIP1155Query, '__typename'>> = Record<K, Omit<PlyEIP1155Query[K], '__typename'>>;
export type ArbEIP721Response<K extends keyof Omit<PlyEIP721Query, '__typename'>> = Record<K, Omit<PlyEIP721Query[K], '__typename'>>;
export type ArbEIP1155Response<K extends keyof Omit<PlyEIP1155Query, '__typename'>> = Record<K, Omit<PlyEIP1155Query[K], '__typename'>>;
export type BobaEIP721Response<K extends keyof Omit<PlyEIP721Query, '__typename'>> = Record<K, Omit<PlyEIP721Query[K], '__typename'>>;
export type BobaEIP1155Response<K extends keyof Omit<PlyEIP1155Query, '__typename'>> = Record<K, Omit<PlyEIP1155Query[K], '__typename'>>;

// Default/standard types
export type EIP721Response<K extends keyof Omit<PlyEIP721Query, '__typename'>> = Record<K, Omit<PlyEIP721Query[K], '__typename'>>;
export type EIP1155Response<K extends keyof Omit<PlyEIP1155Query, '__typename'>> = Record<K, Omit<PlyEIP1155Query[K], '__typename'>>;
