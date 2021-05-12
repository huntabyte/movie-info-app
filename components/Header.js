import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {
	BadgeCheckIcon,
	CollectionIcon,
	HomeIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from '@heroicons/react/outline';

function Header() {
	return (
		<header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
			<div className='flex flex-grow justify-evenly m-w-2xl'>
				<HeaderItem title='HOME' Icon={HomeIcon} />
				<HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
				<HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
				<HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
				<HeaderItem title='SEARCH' Icon={SearchIcon} />
				<HeaderItem title='ACCOUNT' Icon={UserIcon} />
			</div>
			<h1 className='font-bold text-4xl uppercase sm:mr-3 sm:mb-7 text-white'>
				box.office
			</h1>
		</header>
	);
}
export default Header;
