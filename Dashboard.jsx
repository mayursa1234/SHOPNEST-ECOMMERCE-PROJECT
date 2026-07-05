import Navbar from "../components/Navbar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>Dashboard</h1>

        <div className="cards">
          <div className="card">
            <h2>Products</h2>
            <p>25</p>
          </div>

          <div className="card">
            <h2>Orders</h2>
            <p>10</p>
          </div>

          <div className="card">
            <h2>Revenue</h2>
            <p>₹15,000</p>
          </div>

          <div className="card">
            <h2>Customers</h2>
            <p>18</p>
          </div>
        </div>

        <div className="recent-orders">
          <h2>Recent Orders</h2>

          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#1001</td>
                <td>Milk</td>
                <td>20</td>
                <td>Delivered</td>
              </tr>

              <tr>
                <td>#1002</td>
                <td>Paneer</td>
                <td>10</td>
                <td>Pending</td>
              </tr>

              <tr>
                <td>#1003</td>
                <td>Butter</td>
                <td>5</td>
                <td>Delivered</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;