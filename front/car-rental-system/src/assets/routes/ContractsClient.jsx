import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const ContractsClient = () => {
  const cars = [
    {
      licenseplate: "a1653d4d",
      model: "Golf",
      startDate: "2021-10-01",
      endDate: "2021-10-05",
      dailyPrice: 50,
      totalPrice: 250,
    },
    {
      licenseplate: "b2343d5e",
      model: "Corolla",
      startDate: "2021-10-02",
      endDate: "2021-10-07",
      dailyPrice: 65,
      totalPrice: 325,
    },
    {
      licenseplate: "c2343d6f",
      model: "Civic",
      startDate: "2021-10-03",
      endDate: "2021-10-09",
      dailyPrice: 80,
      totalPrice: 560,
    },
  ];

  return (
    <>
      <h1
        style={{
          color: "black",
          margin: "30px",
        }}
      >
        Contracts
      </h1>
      <div className="card">
        <TabView>
          <TabPanel header="ONGOING CONTRACTS" style={{ color: "green" }}>
            <DataTable value={cars}>
              <Column field="licenseplate" header="License Plate"></Column>
              <Column field="model" header="Model"></Column>
              <Column field="startDate" header="Start Date"></Column>
              <Column field="endDate" header="End Date"></Column>
              <Column field="dailyPrice" header="Daily Price ($)"></Column>
              <Column field="totalPrice" header="Total Price ($)"></Column>
            </DataTable>
          </TabPanel>
          <TabPanel header="PAST CONTRACTS" style={{ color: "red" }}>
            <DataTable value={cars}>
              <Column field="licenseplate" header="License Plate"></Column>
              <Column field="model" header="Model"></Column>
              <Column field="startDate" header="Start Date"></Column>
              <Column field="endDate" header="End Date"></Column>
              <Column field="dailyPrice" header="Daily Price ($)"></Column>
              <Column field="totalPrice" header="Total Price ($)"></Column>
            </DataTable>
          </TabPanel>
        </TabView>
      </div>
    </>
  );
};

export default ContractsClient;
