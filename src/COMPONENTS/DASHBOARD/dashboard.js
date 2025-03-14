import React from "react";
import { Container, Row, Col, Card, ProgressBar, Button } from "react-bootstrap";
import { FiBell } from "react-icons/fi";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";

const data = {
  balance: 14822,
  netWorth: 278378,
  income: 24050,
  spendings: 9228,
  expenses: [
    { category: "Housing", amount: 3452 },
    { category: "Personal", amount: 45581 },
    { category: "Transportation", amount: 2190 },
  ],
  assets: [
    { name: "Gold", value: 15700 },
    { name: "Stock", value: 22500 },
    { name: "Warehouse", value: 120000 },
    { name: "Land", value: 135000 },
  ],
};

const Dashboard = () => {
  const date = "Sunday,February 5, 2023";
  return (
    <Container fluid className="bg-dark text-light min-vh-100 p-4">
      <Row className="mb-3 align-items-center">
        <Col md={3}>
          <h2>Personal Finance Tracker</h2>
          <h4 className="text-success">Available Balance: ${data.balance}</h4>
        </Col>
        <Col md={3} className="text-end">


          <section >
            <Button variant="primary" className="me-2">Dashboard</Button>
            <Button variant="secondary">Spreadsheet</Button>
          </section>

        </Col>
        <Col md={3} className="text-end">
          <span>{date}</span>
        </Col>
        <Col md={3} className="text-end">
          <FiBell size={24} />
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Row className="g-4">
            <Col md={4}>
              <Card className="bg-danger text-white text-center p-3 rounded-4" >
                <h5>Total Net Worth</h5>
                <h3>${data.netWorth}</h3>
              </Card>
              <Card className="bg-secondary m-2 text-white text-center p-3 rounded-4">
                <h5>Total Net Worth</h5>
                <h3>${data.netWorth}</h3>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="bg-secondary m-2 text-white text-center p-3 rounded-4">
                <h5>Spendings</h5>
                <h3>${data.spendings}</h3>
              </Card>
              <Card className="bg-secondary text-white text-center p-3 m-2 rounded-4">
                <h5>Income</h5>
                <h3>${data.income}</h3>
              </Card>
            </Col>
            <Col md={4}>
            <Card className="bg-secondary text-white text-center p-3 m-2 rounded-4">
                <h5>Income</h5>
                <h3>${data.income}</h3>
                <p>This should be poplulated with the correct data unless you are dealing with backend to populate the data.
                This should be poplulated with the correct data unless you are dealing with backend to populate the data.
                  
                </p>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={6}>
              <h5>Income & Expenses</h5>
              <BarChart width={300} height={200} data={data.expenses}>
                <XAxis dataKey="category" />
                <YAxis tickInterval={5000} domain={[0, 50000]} />

                <Tooltip />
                <Bar dataKey="amount" fill="#82ca9d" />
              </BarChart>
            </Col>
            <Col md={6}>
              <h5>Assets</h5>
              <PieChart width={300} height={200}>
                <Pie data={data.assets} dataKey="value" outerRadius={80}>
                  {data.assets.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"][index % 4]} />
                  ))}
                </Pie>
              </PieChart>
            </Col>
          </Row>
        </Col>


        <Col md={4}>
          <Row className="mt-4">
            <Col md={12} className="m-4">
              <Card className="bg-secondary text-white p-3 rounded-4">
                <h5>Income Goal</h5>
                <ProgressBar now={61} variant="success" label="61%" />
              </Card>
            </Col>
            <Col md={12} className="m-4">
              <Card className="bg-warning text-dark p-3 rounded-4">
                <h5>Notifications</h5>
                <p>3 Bills are past due. Pay soon to avoid late fees.</p>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
