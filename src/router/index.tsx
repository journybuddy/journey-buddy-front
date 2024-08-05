import MainPage from 'src/domain/MainPage/MainPage';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { RouteChangeTracker } from 'src/components';
import Layout  from 'src/layouts/Layout';
import Community from 'src/domain/Community/Community';
import MyPage from 'src/domain/MyPage/MyPage';
import Plan from 'src/domain/Plan/Plan';

export default function Router() {
	return (
		<BrowserRouter>
			<RouteChangeTracker />
			<Routes>
				<Route path="" element={<Layout />}>
					{/* Add your routes here */}
					<Route path="" element={<MainPage />}/>
					<Route path="/community" element={<Community/>}/>
					<Route path="/my-page" element={<MyPage/>}/>
					<Route path='/plan' element={<Plan/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
