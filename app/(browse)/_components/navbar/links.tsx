import { Actions } from './actions';

export const Links = () => {
	return (
		<div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
			<Actions link={`/`} span={'Home'} />
			<Actions link={`/over-ons`} span={'Over ons'} />
			<Actions link={`/contact`} span={'Contact'} />
		</div>
	);
};
