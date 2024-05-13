import React from "react";
 
import { AreaChart, LineChart ,PieChart,BarChart} from "nr1";
 
import { Grid, GridItem } from "nr1";
 
const index = () => {
  return (
    <div className="heading">
        <h1>HY EVERYONE</h1>
        <AreaChart 
        accountId={4438267}
        query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI2N3xJTkZSQXxOQXw4NzkwNTM4Nzk4NjA4MTQzMDUw') TIMESERIES AUTO"
    fullWidth
        />
        <LineChart className="head-2"
        accountId={4438267}
        query="SELECT average(cpuPercent) AS `CPU used %` FROM SystemSample WHERE (entityGuid = 'NDQzODI2N3xJTkZSQXxOQXw4NzkwNTM4Nzk4NjA4MTQzMDUw') TIMESERIES AUTO"
        fullWidth
        />
       <PieChart 
        accountId={4438267}
        query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI2N3xJTkZSQXxOQXw4NzkwNTM4Nzk4NjA4MTQzMDUw') TIMESERIES AUTO"
        fullWidth
        />
        <BarChart 
        accountId={4438267}
        query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI2N3xJTkZSQXxOQXw4NzkwNTM4Nzk4NjA4MTQzMDUw') TIMESERIES AUTO"
        fullWidth
        />

    </div>
  );
};
 
export default index;