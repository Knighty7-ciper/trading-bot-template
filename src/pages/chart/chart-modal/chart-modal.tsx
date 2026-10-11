import { Suspense } from 'react';
import { observer } from 'mobx-react-lite';
import ChunkLoader from '@/components/loader/chunk-loader';
import { useDevice } from '@deriv-com/ui';
import ChartModalDesktop from './chart-modal-desktop';

export const ChartModal = observer(() => {
    const { isDesktop } = useDevice();
    return <Suspense fallback={<ChunkLoader message='' />}>{isDesktop && <ChartModalDesktop />}</Suspense>;
});

export default ChartModal;
