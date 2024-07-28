import React from 'react';

import { ConfigProvider } from 'antd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';

import Router from './router';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RecoilRoot>
				<ConfigProvider>
					<Router />
				</ConfigProvider>
			</RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default App;

