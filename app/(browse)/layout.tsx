import { Suspense } from 'react';
import { Navbar } from './_components/navbar';

const constBrowseLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Navbar />
			<div className="flex h-full pt-20">
				<Suspense></Suspense>
				{children}
			</div>
		</>
	);
};

export default constBrowseLayout;
