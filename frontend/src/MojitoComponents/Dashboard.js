import React from 'react';
import { Link as PageLink } from 'react-router-dom';
import Transaction from './Transaction';
import '../styles/Dashboard.css'
import { PieChart, Pie, Tooltip } from 'recharts';
import BudgetItem from '../MojitoComponents/BudgetItem';

const Dashboard = () => {
  const data = [
    {name: "Facebook", value: 200000},
    {name: "Instagram", value: 30000},
    {name: "Yup", value: 250000}
  ]

  return <div className='dashboard main_content'>
    <div className='overview_bar'>
      <h2>Welcome</h2>
    </div>

    <div className="col-8" style={{float: "left"}}>
      <div className="row">
        <PageLink className='widget_header' to='/budget'>
              <div className='widget_panel your_budget top_widget_panel'>
                <h3>Your Budget</h3>

                <div className="budget_left">
                  <h4 className="amount_remaining">2000</h4>  
                </div>

                <div className="budget_right">
                  <BudgetItem />
                  <BudgetItem />
                  <BudgetItem />
                  <BudgetItem />
                  <BudgetItem />
                  <BudgetItem />
                </div>
        
              </div>
        </PageLink>
      </div>

      <div className="row">
        <div className="col-6">
          <PageLink className='widget_header' to='/expenses'>
              <div className='widget_panel' style={{margin: "1em"}}>
                  <h3>Expenses</h3>
                  <PieChart width={300} height={300}>
                    <Pie
                      dataKey="value"
                      isAnimationActive={false}
                      data={data}
                      cx={210}
                      cy={140}
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    />
                    <Tooltip />
                  </PieChart>
              </div>
          </PageLink>
        </div>

        <div className="col-6">
          <PageLink className='widget_header' to='/income'>
                <div className='widget_panel top_widget_panel' style={{margin: "1em"}}>
                    <h3>Income</h3>
                    <PieChart width={300} height={300}>
                      <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data}
                        cx={210}
                        cy={140}
                        outerRadius={80}
                        fill="#8884d8"
                        label
                      />
                      <Tooltip />
                    </PieChart>
                </div>
            </PageLink>
        </div>
      </div>
    </div>

    <div className="col-4" style={{float: "left"}}>
        <PageLink className='widget_header' to= '/transaction_history'>
              <div className='widget_panel transaction_history'>
                <h3>Transaction History</h3>
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
              </div>
        </PageLink>
    </div>
  </div>;
};

export default Dashboard;
