import { FrontPageContract } from '@/types/DataContracts/FrontPageContract';
import { apiGet } from '@/Helpers/FetchApiHelper';
import { Title } from '@mantine/core';
import { AlbumCards } from '@/components/AlbumCard/AlbumCard';
import HighlightedSongsCarousel from '@/components/Frontpage/HighlightedSongsCarousel';

const fetchData = async () => {
	return await apiGet<FrontPageContract>('/api/frontpage');
};

export default async function Page() {
	const frontPage = await fetchData();

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<Title order={2} mb="xs">
				Highlighted PVs
			</Title>
			<HighlightedSongsCarousel songs={frontPage.newSongs} />
			<Title mt="md" mb="xs" order={2}>
				Random popular albums
			</Title>
			<AlbumCards albums={frontPage.topAlbums} />
			<Title mt="md" mb="xs" order={2}>
				Recent or upcoming albums
			</Title>
			<AlbumCards albums={frontPage.newAlbums} />
		</div>
	);
}

