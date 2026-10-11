import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks/useStore';
import './dashboard.scss';

const bots = [
    { name: 'Rise & Fall Starter', type: 'Conservative', description: 'A measured setup for learning the core bot flow.', metric: 'Low intensity' },
    { name: 'Momentum Pulse', type: 'Momentum', description: 'A prebuilt momentum strategy for fast-moving markets.', metric: 'Medium intensity' },
    { name: 'Volatility Guard', type: 'Risk-managed', description: 'Uses volatility context before entering a trade.', metric: 'Risk-aware' },
];

const Dashboard = observer(() => {
    const { ui } = useStore();
    const { isAuthorized } = ui;

    const openBuilder = () => {
        window.location.hash = 'bot_builder';
    };

    return (
        <main className='levis-dashboard'>
            <section className='levis-dashboard__hero'>
                <div>
                    <span className='levis-dashboard__eyebrow'>LEVISFX / BOT DESK</span>
                    <h1>Run a strategy without starting from zero.</h1>
                    <p>Choose a configured bot, review the market context, and open it in Bot Builder when you are ready.</p>
                </div>
                <div className='levis-dashboard__connection'>
                    <span className={isAuthorized ? 'is-connected' : ''} />
                    {isAuthorized ? 'Deriv account connected' : 'Connect Deriv to run bots'}
                </div>
            </section>

            <section className='levis-dashboard__section' aria-labelledby='featured-bots-title'>
                <div className='levis-dashboard__section-heading'>
                    <div>
                        <span className='levis-dashboard__eyebrow'>CURATED STRATEGIES</span>
                        <h2 id='featured-bots-title'>Featured bots</h2>
                    </div>
                    <button type='button' className='levis-dashboard__outline-button' onClick={openBuilder}>Build your own</button>
                </div>
                <div className='levis-dashboard__grid'>
                    {bots.map(bot => (
                        <article className='levis-bot-card' key={bot.name}>
                            <div className='levis-bot-card__topline'><span className='levis-bot-card__dot' /><span>{bot.type}</span></div>
                            <h3>{bot.name}</h3>
                            <p>{bot.description}</p>
                            <div className='levis-bot-card__footer'><span>{bot.metric}</span><button type='button' onClick={openBuilder}>Open bot</button></div>
                        </article>
                    ))}
                </div>
            </section>

            <section className='levis-dashboard__steps' aria-label='How LevisFX works'>
                {['Choose a configured bot', 'Review live analysis', 'Run it from your account'].map((step, index) => (
                    <div className='levis-step' key={step}><strong>0{index + 1}</strong><span>{step}</span></div>
                ))}
            </section>
        </main>
    );
});

export default Dashboard;
