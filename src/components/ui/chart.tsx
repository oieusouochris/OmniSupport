import * as React from "react"

// Note: Recharts is used directly in components. This file can serve as a central
// point for chart configuration or custom chart components if needed in the future.

// Example of a wrapper component if we wanted to standardize charts
const ChartContainer: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <div className={className}>
        {children}
    </div>
);

export { ChartContainer };
