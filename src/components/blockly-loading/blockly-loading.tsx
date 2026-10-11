import { observer } from 'mobx-react-lite';
import ChunkLoader from '@/components/loader/chunk-loader';
import { useStore } from '@/hooks/useStore';
import { localize } from '@deriv-com/translations';

const BlocklyLoading = observer(() => {
    const { blockly_store } = useStore();
    const { is_loading } = blockly_store;

    return (
        <>
            {is_loading && (
                <div className='bot__loading' data-testid='blockly-loader'>
                    <ChunkLoader message={localize('Loading Blockly...')} />
                </div>
            )}
        </>
    );
});

export default BlocklyLoading;
