import React from 'react';
import './analysis-panel.scss';

type Indicator = { label: string; value: string; tone: 'positive' | 'neutral' | 'negative' };

const indicators: Indicator[] = [
    { label: 'Trend', value: 'Waiting for market data', tone: 'neutral' },
    { label: 'Momentum', value: 'Connect a symbol', tone: 'neutral' },
    { label: 'Volatility', value: 'Not calculated', tone: 'neutral' },
];

const AnalysisPanel = () => {
    const [symbol, setSymbol] = React.useState('Volatility 100 (1s) Index');
    const [timeframe, setTimeframe] = React.useState('5 minutes');
    const [enabled, setEnabled] = React.useState<string[]>(['Trend', 'Momentum']);

    const toggleIndicator = (name: string) => {
        setEnabled(current => (current.includes(name) ? current.filter(item => item !== name) : [...current, name]));
    };

    return (
        <section className='analysis-panel' aria-labelledby='analysis-title'>
            <div className='analysis-panel__header'>
                <div>
                    <span className='analysis-panel__eyebrow'>LevisFX market desk</span>
                    <h2 id='analysis-title'>Binary options analysis</h2>
                    <p>Read the market before you build or run a strategy.</p>
                </div>
                <span className='analysis-panel__status'><i /> Data connection required</span>
            </div>

            <div className='analysis-panel__controls'>
                <label>
                    <span>Market</span>
                    <select value={symbol} onChange={event => setSymbol(event.target.value)}>
                        <option>Volatility 100 (1s) Index</option>
                        <option>Volatility 50 (1s) Index</option>
                        <option>Volatility 25 (1s) Index</option>
                        <option>Step Index</option>
                    </select>
                </label>
                <label>
                    <span>Timeframe</span>
                    <select value={timeframe} onChange={event => setTimeframe(event.target.value)}>
                        <option>1 minute</option>
                        <option>5 minutes</option>
                        <option>15 minutes</option>
                        <option>1 hour</option>
                    </select>
                </label>
                <div className='analysis-panel__indicator-picker' aria-label='Indicators'>
                    <span>Indicators</span>
                    <div>
                        {['Trend', 'Momentum', 'Volatility'].map(name => (
                            <button
                                type='button'
                                className={enabled.includes(name) ? 'is-active' : ''}
                                key={name}
                                onClick={() => toggleIndicator(name)}
                                aria-pressed={enabled.includes(name)}
                            >
                                {name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className='analysis-panel__grid'>
                <div className='analysis-panel__chart' aria-label='Market analysis chart placeholder'>
                    <div className='analysis-panel__chart-grid' />
                    <div className='analysis-panel__chart-copy'>
                        <strong>{symbol}</strong>
                        <span>{timeframe} view</span>
                        <p>Open the chart stream to calculate live candles, trend, and momentum.</p>
                    </div>
                </div>
                <div className='analysis-panel__metrics'>
                    {indicators.map(indicator => (
                        <article className='analysis-metric' key={indicator.label}>
                            <span>{indicator.label}</span>
                            <strong className={`analysis-metric__value analysis-metric__value--${indicator.tone}`}>
                                {indicator.value}
                            </strong>
                            <small>Updates when market data is available</small>
                        </article>
                    ))}
                    <div className='analysis-panel__note'>
                        <strong>Risk check</strong>
                        <span>Analysis is educational and never guarantees a trade outcome.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AnalysisPanel;
