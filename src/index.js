
import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './ErrorPage';
import { GuestList } from './GuestList';
import './index.css';
import { Navigation } from './Navigation';
import { Pictures } from './Pictures';
import { Registry } from './Registry';
import reportWebVitals from './reportWebVitals';
import { Reservations } from './Rsvp';
import { Story } from './Story';
import { Success } from './Success';
import { sendToVercelAnalytics } from './vitals';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigation />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/rsvp',
				element: <Reservations />,
			},
			{
				path: '/story',
				element: <Story />,
			},
			{
				path: '/gifts',
				element: <Registry />,
			},
			{
				path: '/eventpics',
				element: <Pictures/>
			},{
				path: '/success',
				element: <Success/>
			}
		],
	},
	{path: '/coming',
	element: <GuestList/>
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
		<Analytics/>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(sendToVercelAnalytics);
