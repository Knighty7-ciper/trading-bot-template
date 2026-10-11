import brandConfig from '@/../brand.config.json';

export default function ChunkLoader({ message }: { message: string }) {
    return (
        <main className='app-root branded-loader' aria-live='polite' aria-busy='true'>
            <div className='branded-loader__glow' aria-hidden='true' />
            <div className='branded-loader__content'>
                <div className='branded-loader__brand'>
                    <span className='branded-loader__mark' aria-hidden='true'>
                        L
                    </span>
                    <span className='branded-loader__wordmark'>{brandConfig.platform.name || 'LevisFX'}</span>
                </div>
                <div className='branded-loader__track' aria-hidden='true'>
                    <span className='branded-loader__bar' />
                </div>
                <p className='load-message'>{message}</p>
                <span className='branded-loader__hint'>Preparing your trading workspace</span>
            </div>
        </main>
    );
}
