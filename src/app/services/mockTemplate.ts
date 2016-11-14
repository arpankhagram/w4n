// export const TableData: any =
export default [{
 "username": "test12",
 "dashboards": [{
   "dashboard-id": "1",
   "dashboardname": "Dashbaoard-1",
   "reports": [{
     "graphreports": [{
       "name": "Total Traffic FreeMemoryPct",
       "id": "1",
       "type": "TOPN",
       "graphtype": "bar",
       "position": "left",
       "order": "1",
       "filterexpression": "",
       "interval": "1 hour",
       "granularity": "minute",
       "dimension": "ip",
       "metric": "FreeMemoryPct",
       "aggregation": "Average",
       "ip": [
         "10.87.25.241",
         "172.30.97.242",
         "10.64.144.3",
         "10.123.96.12",
         "10.86.205.241"
       ],
       "FreeMemoryPct": [
         5508.4469135802465,
         2495.276485788114,
         3466.730158730159,
         5444.56038647343,
         4436.191214470285
       ]
     }, {
       "name": "Total Traffic Bytes",
       "id": "2",
       "type": "TOPN",
       "graphtype": "bar",
       "position": "right",
       "order": "1",
       "filterexpression": "",
       "interval": "1 hour",
       "granularity": "minute",
       "dimension": "ip",
       "metric": "IN_BYTES",
       "aggregation": "SUM",
       "ip": [
         "10.87.25.241",
         "172.30.97.242",
         "10.64.144.3",
         "10.123.96.12",
         "10.86.205.241"
       ],
       "IN_BYTES": [
         55080,
         45950,
         30660,
         24440,
         34360
       ]
     },{
       "name": "Total Traffic Pie",
       "id": "2",
       "type": "Pie",
       "graphtype": "pie",
       "position": "right",
       "order": "1",
       "filterexpression": "",
       "interval": "1 hour",
       "granularity": "minute",
       "dimension": "ip",
       "metric": "metric_value",
       "aggregation": "",
       "result": [ {        
         "metric_value": 102148867,
                 "ip": "10.83.216.66"      
       },        {        
         "metric_value": 101531227,
                 "ip": "10.83.197.242"      
       },        {        
         "metric_value": 101465250,
                 "ip": "10.80.120.66"      
       },        {        
         "metric_value": 101438748,
                 "ip": "172.23.7.153"      
       },        {        
         "metric_value": 100962000,
                 "ip": "172.23.7.154"      
       }    ]
     }, {
       "name": "Total Traffic Line",
       "id": "2",
       "type": "TOPN",
       "graphtype": "line",
       "position": "right",
       "order": "1",
       "filterexpression": "",
       "interval": "1 hour",
       "granularity": "minute",
       "dimension": "ip",
       "metric": "IN_BYTES",
       "aggregation": "SUM",
       "ip": [
         "10.87.25.241",
         "172.30.97.242",
         "10.64.144.3",
         "10.123.96.12",
         "10.86.205.241",
         "10.87.25.241",
         "172.30.97.242",
         "10.64.144.3",
         "10.123.96.12",
         "10.86.205.241"
       ],
       "IN_BYTES": [
         55080,
         54950,
         54660,
         54440,
         54360,
         30080,
         33950,
         20660,
         11440,
         12360
       ]
     },{
       "name": "Device Availability",
       "id": "3",
       "type": "Graph",
       "graphtype": "gauge",
       "position": "right",
       "order": "1",
       "filterexpression": "'Device'=='5678'",
       "interval": "1 hour",
       "granularity": "",
       "dimension": "",
       "metric": "Availability",
       "aggregation": "Average",
       "Availability": [
         99.99
       ]
     }],
     "tableReports": [{
       "name": "Interface Error Report",
       "id": "1",
       "type": "TABLE",
       "position": "right",
       "filterexpression": "'device'=='6578'",
       "attributes": [{
         "name": "Id",
         "nodeproperty": "id",
         "defaultvalue": "asdas",
         "sort": "asc",
         "order": 1,
         "values": [
           1,
           2,
           3,
           4,
           5
         ]
       }, {
         "name": "model",
         "nodeproperty": "model",
         "defaultvalue": "7",
         "sort": "asc",
         "order": 2,
         "values": [
           "abc",
           "def",
           "xyz",
           "pqr",
           "ijk"
         ]
       }, {
         "name": "vendor",
         "nodeproperty": "vendor",
         "defaultvalue": "VENDOR6",
         "sort": "desc",
         "order": 3,
         "values": [
           "123",
           "456",
           "789",
           "910",
           "112"
         ]
       }]
     }]
   }]
 },{
     "dashboard-id": "2",
     "dashboardname": "Dashbaoard-2",
     "reports": [{
       "graphreports": [{
         "name": "Total Traffic FreeMemoryPct2",
         "id": "1",
         "type": "TOPN",
         "graphtype": "bar",
         "position": "left",
         "order": "1",
         "filterexpression": "",
         "interval": "1 hour",
         "granularity": "minute",
         "dimension": "ip",
         "metric": "FreeMemoryPct",
         "aggregation": "Average",
         "ip": [
           "10.87.25.241",
           "172.30.97.242",
           "10.64.144.3",
           "10.123.96.12",
           "10.86.205.241"
         ],
         "FreeMemoryPct": [
           12.4469135802465,
           24.276485788114,
           34.730158730159,
           54.56038647343,
           44.191214470285
         ]
       },{
         "name": "TopN IPs",
         "id": "2",
         "type": "TOPN",
         "graphtype": "bar",
         "position": "right",
         "order": "1",
         "filterexpression": "",
         "interval": "1 hour",
         "granularity": "minute",
         "dimension": "ip",
         "metric": "IN_BYTES",
         "aggregation": "SUM",
         "ip": [
           "10.87.25.241",
           "172.30.97.242",
           "10.64.144.3",
           "10.123.96.12",
           "10.86.205.241"
         ],
         "IN_BYTES": [
           500,
           100,
           123,
           225,
           335
         ]
       },{
         "name": "Total Traffic Pie 2",
         "id": "2",
         "type": "Pie",
         "graphtype": "pie",
         "position": "right",
         "order": "1",
         "filterexpression": "",
         "interval": "1 hour",
         "granularity": "minute",
         "dimension": "ip",
         "metric": "metric_value",
         "aggregation": "",
         "result": [ {        
           "metric_value": 102148867,
                   "ip": "10.83.216.66"      
         },        {        
           "metric_value": 101531227,
                   "ip": "10.83.197.242"      
         },        {        
           "metric_value": 101465250,
                   "ip": "10.80.120.66"      
         },        {        
           "metric_value": 101438748,
                   "ip": "172.23.7.153"      
         },        {        
           "metric_value": 100962000,
                   "ip": "172.23.7.154"      
         }    ]
       }, {
         "name": "Total Traffic Line",
         "id": "2",
         "type": "TOPN",
         "graphtype": "line",
         "position": "right",
         "order": "1",
         "filterexpression": "",
         "interval": "1 hour",
         "granularity": "minute",
         "dimension": "ip",
         "metric": "IN_BYTES",
         "aggregation": "SUM",
         "ip": [
           "10.87.25.241",
           "172.30.97.242",
           "10.64.144.3",
           "10.123.96.12",
           "10.86.205.241",
           "10.87.25.241",
           "172.30.97.242",
           "10.64.144.3",
           "10.123.96.12",
           "10.86.205.241"
         ],
         "IN_BYTES": [
           55080,
           54950,
           54660,
           54440,
           54360,
           30080,
           33950,
           20660,
           11440,
           12360
         ]
       },
       {
         "name": "Total Traffic Line",
         "id": "2",
         "type": "TOPN",
         "graphtype": "line",
         "position": "right",
         "order": "1",
         "filterexpression": "",
         "interval": "1 hour",
         "granularity": "minute",
         "dimension": "ip",
         "metric": "IN_BYTES",
         "aggregation": "SUM",
         "ip": [
           "10.87.25.241",
           "172.30.97.242",
           "10.64.144.3",
           "10.123.96.12",
           "10.86.205.241"
         ],
         "IN_BYTES": [
           550,
           249,
           446,
           344,
           543
         ]
       },{
         "name": "Device Availability",
         "id": "3",
         "type": "Graph",
         "graphtype": "gauge",
         "position": "right",
         "order": "1",
         "filterexpression": "'Device'=='5678'",
         "interval": "1 hour",
         "granularity": "",
         "dimension": "",
         "metric": "Availability",
         "aggregation": "Average",
         "Availability": [
           99.99
         ]
       }],
       "tableReports": [{
         "name": "Interface Error Report",
         "id": "1",
         "type": "TABLE",
         "position": "right",
         "filterexpression": "'device'=='6578'",
         "attributes": [{
           "name": "Id",
           "nodeproperty": "id",
           "defaultvalue": "asdas",
           "sort": "asc",
           "order": 1,
           "values": [
             1,
             2,
             3,
             4,
             5
           ]
         }, {
           "name": "model",
           "nodeproperty": "model",
           "defaultvalue": "7",
           "sort": "asc",
           "order": 2,
           "values": [
             "abc",
             "def",
             "xyz",
             "pqr",
             "ijk"
           ]
         }, {
           "name": "vendor",
           "nodeproperty": "vendor",
           "defaultvalue": "VENDOR6",
           "sort": "desc",
           "order": 3,
           "values": [
             "123",
             "456",
             "789",
             "910",
             "112"
           ]
         }]
       }]
     }]


 }]
}]
