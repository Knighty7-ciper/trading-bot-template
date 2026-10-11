import brandConfig from '@/../brand.config.json';
import { Loader } from '@deriv-com/ui';

export default function ChunkLoader({ message }: { message: string }) {
    return (
        <main className='app-root branded-loader' aria-live='polite' aria-busy='true'>
            <div className='branded-loader__glow' aria-hidden='true' />
            <div className='branded-loader__content'>
                <div className='branded-loader__brand'>
                    <span className='branded-loader__mark' aria-hidden='true'>L</span>
                    <span>{brandConfig.platform.name || 'LevisFX'}</span>
                </div>
                <Loader isFullScreen={false} />
                <p className='load-message'>{message}</p>
                <span className='branded-loader__hint'>Preparing your trading workspace</span>
            </div>
        </main>
    );
}
