# Portfolio Analysis Dashboard

A **React-based dashboard** for analyzing investment portfolios. This dashboard provides visual insights into portfolio performance using interactive charts and tables.

---

## Features

- **Equity Curve Line Chart**: Displays the portfolio's NAV over time.  
- **Drawdown Curve**: Highlights drawdowns to help assess the risk and volatility of the portfolio.  
- **Trailing Returns Table**: Shows returns over various periods (monthly, quarterly, yearly) for deeper analysis.  
- **Date Range Selection**: Filter charts and tables by selecting start and end dates.  
- **Responsive UI**: Built with Material-UI for a clean, modern, and responsive interface.  

---

## Technologies & Packages Used

- **React** – Frontend framework  
- **Material-UI (MUI)** – For UI components and responsive design  
- **React Date Picker** – For selecting date ranges  
- **Day.js** – For date manipulation and localization  
- **Apache ECharts** – For interactive and performant charting  

---

## Live Demo

[Live Demo](https://portfolio-analysis-alpha.vercel.app/)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/zaidansari42/portfolio-analysis.git
cd portfolio-analysis
```

Install dependencies:

```bash
npm install
```

Start the development server:
```bash
npm start
```
The app should now be running on http://localhost:3000.

Project Structure
```bash
src/
├── components/        # React components (charts, tables, date pickers)
├── assets/            # Images and static assets
├── data/              # Portfolio/NAV data
├── utils/             # Helper functions (date formatting, calculations)
├── App.js             # Main App component
└── index.js           # Entry point
```

How It Works
```
Data Formatting: Portfolio NAV and drawdown data are formatted and calculated on the client side.

Charts: Apache ECharts renders the equity curve and drawdown curve dynamically based on selected date range.

Date Filters: Users can pick start and end dates using the Material-UI date pickers. Charts and tables update in real-time.

Trailing Returns: Calculated from NAV values and displayed in a Material-UI table for easy analysis.
```

Usage
```
Select a date range to filter portfolio data.

Observe equity curve and drawdown for performance trends.

Review trailing returns to understand period-specific performance.
```

Contributing
```
Contributions are welcome! You can:

Report bugs via GitHub issues.

Suggest improvements or new features.
```

License
```
This project is licensed under the MIT License.
```
