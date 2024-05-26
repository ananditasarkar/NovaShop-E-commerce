import React from "react";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import UserMenu from "../../components/Layout/UserMenu";


const Dashboard = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            dfg
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
