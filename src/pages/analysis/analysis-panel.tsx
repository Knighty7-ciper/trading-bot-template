import React from 'react';
import './analysis-panel.scss';

type Opportunity = {
    market: string;
    contract: string;
    signal: string;
    confidence: string;
    tone: 'blue' | 'cyan' | 'violet';
    detail: string;
};

const opportunities: Opportunity[] = [
    { market: 'Volatility 100 (1s)', contract: 'Matches', signal: 'Watch', confidence: '68%', tone: 'blue', detail: 'Digit repetition setup forming from the last 20 ticks' },
    { market: 'Volatility 50 (1s)', contract: 'Differs', signal: 'Watch', confidence: '61%', tone: 'cyan', detail: 'Recent digits are spreading away from the current cluster' },
    { market: 'Volatility 25 (1s)', contract: 'Under 6', signal: 'Observe', confidence: '57%', tone: 'violet', detail: 'Lower digit cluster detected across the selected window' },
    { market: 'Volatility 75 (1s)', contract: 'Even', signal: 'Watch', confidence: '64%', tone: 'blue', detail: 'Parity balance is leaning below its rolling baseline' },
    { market: 'Volatility 10 (1s)', contract: 'Over 3', signal: 'Observe', confidence: '55%', tone: 'cyan', detail: 'Higher digits are appearing more often than the baseline' },
    { market: 'Step Index', contract: 'Rise / Fall', signal: 'Context', confidence: '52%', tone: 'violet', detail: 'Directional bias is building, but confirmation is still required' },
];

const AnalysisPanel = () => {
    const [symbol, setSymbol] = React.useState('Volatility 100 (1s) Index');
    const openBotBuilder = () => {
        window.location.hash = 'bot_builder';
    };
    const [timeframe, setTimeframe] = React.useState('5 minutes');
    const [activeLens, setActiveLens] = React.useState('All opportunities');

    return (
        <section className='analysis-panel' aria-labelledby='analysis-title'>
            <div className='analysis-panel__header'>
                <div>
                    <span className='analysis-panel__eyebrow'>LevisFX intelligence desk</span>
                    <h2 id='analysis-title'>Find the next setup</h2>
                    <p>One screen for market context, digit patterns, and ready-to-run bot ideas.</p>
                </div>
                <div className='analysis-panel__live-status'><i /> Live market lens <span>•</span> Demo view</div>
            </div>

            <div className='analysis-panel__controls'>
                <label><span>Market</span><select value={symbol} onChange={event => setSymbol(event.target.value)}><option>Volatility 100 (1s) Index</option><option>Volatility 50 (1s) Index</option><option>Volatility 25 (1s) Index</option><option>Step Index</option></select></label>
                <label><span>Window</span><select value={timeframe} onChange={event => setTimeframe(event.target.value)}><option>1 minute</option><option>5 minutes</option><option>15 minutes</option><option>1 hour</option></select></label>
                <div className='analysis-panel__lens'><span>Opportunity lens</span><div>{['All opportunities', 'Digits', 'Rise / Fall'].map(lens => <button type='button' className={activeLens === lens ? 'is-active' : ''} key={lens} onClick={() => setActiveLens(lens)} aria-pressed={activeLens === lens}>{lens}</button>)}</div></div>
            </div>

            <div className='analysis-panel__signal-bar'><span className='analysis-panel__signal-pulse' /><strong>Scanning {symbol}</strong><span>{timeframe} context</span><b>Last update just now</b></div>

            <div className='analysis-panel__grid'>
                <div className='analysis-panel__chart' aria-label='Market context visualization'>
                    <div className='analysis-panel__chart-grid' />
                    <div className='analysis-panel__wave analysis-panel__wave--one' /><div className='analysis-panel__wave analysis-panel__wave--two' />
                    <div className='analysis-panel__chart-label'><span>MARKET PRESSURE</span><strong>Neutral → building</strong><small>Pattern strength is informational, not a promise of outcome.</small></div>
                </div>
                <div className='analysis-panel__metrics'>
                    <article><span>Trend bias</span><strong className='is-blue'>Range-bound</strong><small>Price is moving inside a defined band</small></article>
                    <article><span>Momentum</span><strong className='is-cyan'>Cooling</strong><small>Wait for confirmation before running</small></article>
                    <article><span>Volatility</span><strong>Elevated</strong><small>Short windows may change quickly</small></article>
                    <div className='analysis-panel__note'><strong>Risk gate active</strong><span>LevisFX highlights conditions. You decide whether to run a bot and how much to stake.</span></div>
                </div>
            </div>

            <div className='analysis-panel__opportunities'>
                <div className='analysis-panel__section-title'><div><span className='analysis-panel__eyebrow'>Pattern scanner</span><h3>Bot opportunities</h3></div><button type='button' className='analysis-panel__refresh'>Refresh scan</button></div>
                <div className='analysis-opportunity-grid'>{opportunities.map(item => <article className='analysis-opportunity' key={`${item.market}-${item.contract}`}><div className='analysis-opportunity__top'><span className={`analysis-opportunity__icon analysis-opportunity__icon--${item.tone}`} /> <span>{item.market}</span><em>{item.signal}</em></div><h4>{item.contract}</h4><p>{item.detail}</p><div className='analysis-opportunity__bottom'><span>Pattern score <strong>{item.confidence}</strong></span><button type='button' onClick={openBotBuilder}>Configure bot</button></div></article>)}</div>
            </div>
        </section>
    );
};

export default AnalysisPanel;
