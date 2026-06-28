import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">V</div>
          <div>
            <h4>VERTEX</h4>
            <small>Analytics</small>
          </div>
        </div>

        <nav className="sidebar-nav">
          <a className="active">Dashboard</a>

          <div className="nav-section">DFS</div>
          <a>⚾ MLB</a>
          <a>🏒 NHL</a>
          <a>⚽ Soccer</a>
          <a>🏀 NBA</a>
          <a>🏈 NFL</a>

          <div className="nav-section">Analytics</div>
          <a>📊 DFS Tracker</a>
          <a>💰 Bankroll</a>
          <a>📈 Markets</a>

          <div className="nav-section">Admin</div>
          <a>📘 Docs</a>
          <a>🧰 Registry</a>
          <a>🗺 Roadmap</a>
        </nav>
      </aside>

      <main className="main-content">
        <header className="dashboard-header">
          <div>
            <h1>Good evening, Chris</h1>
            <p>Welcome to Vertex Analytics</p>
          </div>
          <button className="btn btn-outline-info">Settings</button>
        </header>

        <section className="hero-card">
          <h2>VERTEX</h2>
          <h4>Analytics Platform</h4>
          <p>Data • Models • Decisions</p>
        </section>

        <section className="stats-grid">
          <StatCard number="3" label="Production Systems" />
          <StatCard number="8" label="Sports Covered" />
          <StatCard number="20+" label="Models & Tools" />
          <StatCard number="24/7" label="Launch Access" />
        </section>

        <section className="dashboard-grid">
          <div className="panel large-panel">
            <h3>Production Systems</h3>

            <div className="tool-grid">
              <ToolCard sport="⚾" title="MLB" subtitle="Builder • Trimmer • Models" />
              <ToolCard sport="🏒" title="NHL" subtitle="Optimizer • Showdown • Trimmer" />
              <ToolCard sport="⚽" title="Soccer" subtitle="Ratings • Builder • Trimmer" />
            </div>
          </div>

          <div className="panel">
            <h3>Quick Launch</h3>
            <button className="launch-btn">⚾ Build MLB Lineups</button>
            <button className="launch-btn">🏒 Build NHL Lineups</button>
            <button className="launch-btn">⚽ Build Soccer Lineups</button>
            <button className="launch-btn">📊 Open DFS Tracker</button>
          </div>

          <div className="panel">
            <h3>Recent Activity</h3>
            <Activity text="MLB Builder / Trimmer updated" time="v2026.06" />
            <Activity text="Soccer Ratings Model refreshed" time="v2026.06" />
            <Activity text="NHL module added to roadmap" time="Today" />
            <Activity text="Vertex brand identity created" time="Today" />
          </div>

          <div className="panel">
            <h3>Vertex v1.0 Progress</h3>
            <div className="progress mb-3">
              <div className="progress-bar bg-success" style={{ width: "43%" }}>
                43%
              </div>
            </div>
            <p className="muted">
              Foundation, branding, dashboard, and first DFS modules.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="stat-card">
      <h2>{number}</h2>
      <p>{label}</p>
    </div>
  );
}

function ToolCard({ sport, title, subtitle }) {
  return (
    <div className="tool-card">
      <div className="tool-icon">{sport}</div>
      <h4>{title}</h4>
      <span>READY</span>
      <p>{subtitle}</p>
    </div>
  );
}

function Activity({ text, time }) {
  return (
    <div className="activity-item">
      <span>{text}</span>
      <small>{time}</small>
    </div>
  );
}

export default App;