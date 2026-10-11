import { useEffect, useState } from 'react';
import { CONNECTION_STATUS } from '@/external/bot-skeleton/services/api/observables/connection-status-stream';
import { useApiBase } from '@/hooks/useApiBase';
import useNavigatorOnline from './useNavigatorOnline';

type TStatus = 'blinking' | 'offline' | 'online';

const useNetworkStatus = () => {
    const [status, setStatus] = useState<TStatus>('online');
    const networkStatus = useNavigatorOnline();
    const { connectionStatus } = useApiBase();

    useEffect(() => {
        if (!networkStatus) setStatus('offline');
        else if (connectionStatus !== CONNECTION_STATUS.OPENED) setStatus('blinking');
        else setStatus('online');
    }, [networkStatus, connectionStatus]);

    return status;
};

export default useNetworkStatus;
