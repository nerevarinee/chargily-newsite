// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";

function Dashboard() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    balance: 2450.75,
    joinDate: "January 2024"
  });

  const [stats, setStats] = useState([
    { label: "Total Transactions", value: "156", change: "+12%", trend: "up" },
    { label: "Monthly Spending", value: "DZD 3,240", change: "-8%", trend: "down" },
    { label: "Active Vouchers", value: "3", change: "+1", trend: "up" },
    { label: "Rewards Points", value: "890", change: "+45", trend: "up" }
  ]);

  const [recentTransactions, setRecentTransactions] = useState([
    { id: 1, type: "Top-up", amount: -100, date: "2024-06-01", status: "completed", description: "Djezzy Mobile Credit" },
    { id: 2, type: "Payment", amount: -250, date: "2024-05-30", status: "completed", description: "Online Purchase" },
    { id: 3, type: "Voucher", amount: +50, date: "2024-05-29", status: "completed", description: "Cashback Reward" },
    { id: 4, type: "Transfer", amount: -500, date: "2024-05-28", status: "pending", description: "Bank Transfer" },
    { id: 5, type: "Top-up", amount: -200, date: "2024-05-27", status: "completed", description: "Ooredoo Credit" }
  ]);

  const [quickActions] = useState([
    { title: "Top-up Mobile", icon: "📱", path: "/topup", color: "#4F46E5" },
    { title: "Send Payment", icon: "💸", path: "/payments", color: "#059669" },
    { title: "Buy Vouchers", icon: "🎫", path: "/vouchers", color: "#DC2626" },
    { title: "View Rewards", icon: "🎁", path: "/credit-rewards", color: "#7C3AED" }
  ]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-DZ', {
      style: 'currency',
      currency: 'DZD',
      minimumFractionDigits: 2
    }).format(Math.abs(amount));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#059669';
      case 'pending': return '#D97706';
      case 'failed': return '#DC2626';
      default: return '#6B7280';
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header">
          <div className="welcome-section">
            <h1>Welcome back, {user.name}!</h1>
            <p>Here's what's happening with your account today.</p>
          </div>
          <div className="header-actions">
            <button className="notification-btn">
              🔔
              <span className="notification-badge">3</span>
            </button>
            <div className="user-avatar">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
        </div>

        {/* Balance Card */}
        <div className="balance-card">
          <div className="balance-content">
            <div className="balance-info">
              <p className="balance-label">Available Balance</p>
              <h2 className="balance-amount">{formatCurrency(user.balance)}</h2>
              <p className="balance-note">Updated just now</p>
            </div>
            <div className="balance-actions">
              <button className="balance-btn primary">Add Money</button>
              <button className="balance-btn secondary">Send Money</button>
            </div>
          </div>
          <div className="balance-visual">
            <div className="balance-chart">
              <div className="chart-bar" style={{ height: '60%' }}></div>
              <div className="chart-bar" style={{ height: '80%' }}></div>
              <div className="chart-bar" style={{ height: '45%' }}></div>
              <div className="chart-bar" style={{ height: '90%' }}></div>
              <div className="chart-bar" style={{ height: '70%' }}></div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-header">
                <h3 className="stat-value">{stat.value}</h3>
                <span className={`stat-change ${stat.trend}`}>
                  {stat.trend === 'up' ? '↗️' : '↘️'} {stat.change}
                </span>
              </div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="quick-actions-section">
          <h2>Quick Actions</h2>
          <div className="quick-actions-grid">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="quick-action-card"
                onClick={() => window.location.href = action.path}
                style={{ '--accent-color': action.color }}
              >
                <div className="action-icon">{action.icon}</div>
                <span className="action-title">{action.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="transactions-section">
          <div className="section-header">
            <h2>Recent Transactions</h2>
            <button className="view-all-btn">View All</button>
          </div>
          
          <div className="transactions-list">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="transaction-item">
                <div className="transaction-icon">
                  {transaction.type === 'Top-up' && '📱'}
                  {transaction.type === 'Payment' && '💳'}
                  {transaction.type === 'Voucher' && '🎫'}
                  {transaction.type === 'Transfer' && '🏦'}
                </div>
                
                <div className="transaction-details">
                  <h4 className="transaction-description">{transaction.description}</h4>
                  <p className="transaction-date">{transaction.date}</p>
                </div>
                
                <div className="transaction-right">
                  <span className={`transaction-amount ${transaction.amount > 0 ? 'positive' : 'negative'}`}>
                    {transaction.amount > 0 ? '+' : ''}{formatCurrency(transaction.amount)}
                  </span>
                  <span 
                    className="transaction-status"
                    style={{ color: getStatusColor(transaction.status) }}
                  >
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div className="dashboard-footer">
          <div className="feature-cards">
            <div className="feature-card">
              <h3>🎯 Goals</h3>
              <p>Set and track your financial goals</p>
              <button className="feature-btn">Set Goal</button>
            </div>
            
            <div className="feature-card">
              <h3>📊 Analytics</h3>
              <p>View detailed spending analytics</p>
              <button className="feature-btn">View Reports</button>
            </div>
            
            <div className="feature-card">
              <h3>🔒 Security</h3>
              <p>Manage your account security</p>
              <button className="feature-btn">Security Settings</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;