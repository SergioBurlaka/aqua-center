import { useCredentialsStore } from "@store/credentials.store"
import { type FC } from "react"

const DashboardModule: FC = () => {
  const { worker } = useCredentialsStore();
  console.log(worker);
  return (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1>Dashboard</h1>
      <p>{worker?.name}</p>
      <p>{worker?.email}</p>
      <p>{worker?.role}</p>
      <p>{worker?.brigadeId}</p>
    </div>
  );
};

export default DashboardModule;
