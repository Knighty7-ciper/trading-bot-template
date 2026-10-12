import brandConfig from '@/../brand.config.json';

export default function ChunkLoader({ message }: { message: string }) {
    const platformName = brandConfig.platform.name || 'LevisFX';

    return (
        <main className='app-root branded-loader' aria-live='polite' aria-busy='true'>
            <div className='branded-loader__noise' aria-hidden='true' />
            <div className='branded-loader__glow' aria-hidden='true' />
            <div className='branded-loader__content'>
                <div className='branded-loader__eyebrow'>
                    <span className='branded-loader__pulse' aria-hidden='true' />
                    Private trading workspace
                </div>
                <div className='branded-loader__brand'>
                    <span className='branded-loader__mark' aria-hidden='true'>
                        L<span>FX</span>
                    </span>
                    <div>
                        <span className='branded-loader__wordmark'>{platformName}</span>
                        <span className='branded-loader__tagline'>Trade with clarity</span>
                    </div>
                </div>
                <div className='branded-loader__status-card'>
                    <div className='branded-loader__status-heading'>
                        <span>Getting your workspace ready</span>
                        <span className='branded-loader__status-dot' aria-hidden='true' />
                    </div>
                    <div className='branded-loader__track' aria-hidden='true'>
                        <span className='branded-loader__bar' />
                    </div>
                    <p className='load-message'>{message}</p>
                    <span className='branded-loader__hint'>Connecting market data and bot tools</span>
                </div>
                <p className='branded-loader__security'>Your session stays protected while we connect.</p>
            </div>
        </main>
    );
}
