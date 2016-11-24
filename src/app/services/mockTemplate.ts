export default {

    "userId": null,
    "userName": null,
    "reportName": null,
    "dashboardReports": [
      {
        "id": "1",
        "name": "Dashboard1",
        "graphReports": [

          {
            "graphResponse": {
              "configuration": {
                "position": "right",
                "id": "2",
                "order": "1",
                "name": "Total Traffic Line",
                "graphtype": "bar",
                "type": "TOPN",
                "attributes": [
                  {
                    "name": "ip",
                    "displayName": "IP",
                    "axis": "x"
                  },
                  {
                    "name": "metricvalue",
                    "displayName": "Metric Value",
                    "axis": "y"
                  }
                ]
              },
              "response": [
                {
                  "timestamp": "2016-11-14T13:56:44.511Z",
                  "result": [
                    {
                      "metricvalue": 81601468,
                      "ip": null
                    },
                    {
                      "metricvalue": 54972304,
                      "ip": "10.83.177.241"
                    },
                    {
                      "metricvalue": 54819155,
                      "ip": "172.23.7.120"
                    },
                    {
                      "metricvalue": 54656562,
                      "ip": "10.80.29.241"
                    },
                    {
                      "metricvalue": 54618159,
                      "ip": "172.23.7.115"
                    },
                    {
                      "metricvalue": 54615688,
                      "ip": "10.83.205.243"
                    },
                    {
                      "metricvalue": 54602434,
                      "ip": "10.83.216.66"
                    },
                    {
                      "metricvalue": 54554338,
                      "ip": "172.23.7.153"
                    },
                    {
                      "metricvalue": 54536227,
                      "ip": "10.80.120.66"
                    },
                    {
                      "metricvalue": 54526896,
                      "ip": "10.81.121.241"
                    }
                  ]
                }
              ]
            }
          },

          
          {
            "graphResponse": {
              "configuration": {
                "position": "left",
                "id": "3",
                "order": "1",
                "name": "Total Traffic Line",
                "graphtype": "multi-bar",
                "type": "TOPN",
                "attributes": [
                  {
                    "name": "ip",
                    "displayName": "IP",
                    "axis": "x"
                  },
                  {
                    "name": "metricvalue",
                    "displayName": "BYTES",
                    "axis": "y"
                  }
                ]
              },
              "response": [
                {
                  "timestamp": "2016-11-14T13:00:00.000Z",
                  "result": [
                    {
                      "metricvalue": 4974728,
                      "ip": null
                    },
                    {
                      "metricvalue": 3493232,
                      "ip": "10.83.205.243"
                    },
                    {
                      "metricvalue": 3446228,
                      "ip": "10.86.37.241"
                    },
                    {
                      "metricvalue": 3420593,
                      "ip": "172.23.7.154"
                    },
                    {
                      "metricvalue": 3392631,
                      "ip": "10.87.73.241"
                    },
                    {
                      "metricvalue": 3388538,
                      "ip": "172.23.7.115"
                    },
                    {
                      "metricvalue": 3373638,
                      "ip": "10.80.89.241"
                    },
                    {
                      "metricvalue": 3348231,
                      "ip": "10.83.197.242"
                    },
                    {
                      "metricvalue": 3337839,
                      "ip": "172.23.7.121"
                    },
                    {
                      "metricvalue": 3335493,
                      "ip": "10.83.205.241"
                    }
                  ]
                },
                {
                  "timestamp": "2016-11-14T14:00:00.000Z",
                  "result": [
                    {
                      "metricvalue": 75833505,
                      "ip": null
                    },
                    {
                      "metricvalue": 51040214,
                      "ip": "10.80.120.66"
                    },
                    {
                      "metricvalue": 50786043,
                      "ip": "172.23.7.121"
                    },
                    {
                      "metricvalue": 50781380,
                      "ip": "10.81.121.241"
                    },
                    {
                      "metricvalue": 50765162,
                      "ip": "10.83.205.242"
                    },
                    {
                      "metricvalue": 50683242,
                      "ip": "172.23.7.115"
                    },
                    {
                      "metricvalue": 50617229,
                      "ip": "172.23.7.154"
                    },
                    {
                      "metricvalue": 50569891,
                      "ip": "10.83.216.66"
                    },
                    {
                      "metricvalue": 50395021,
                      "ip": "10.83.177.241"
                    },
                    {
                      "metricvalue": 50304788,
                      "ip": "10.83.205.243"
                    }
                  ]
                },
                {
                  "timestamp": "2016-11-14T15:00:00.000Z",
                  "result": [
                    {
                      "metricvalue": 75738616,
                      "ip": null
                    },
                    {
                      "metricvalue": 50748871,
                      "ip": "10.87.73.241"
                    },
                    {
                      "metricvalue": 50738858,
                      "ip": "10.83.205.242"
                    },
                    {
                      "metricvalue": 50729526,
                      "ip": "10.83.216.66"
                    },
                    {
                      "metricvalue": 50686686,
                      "ip": "10.83.205.241"
                    },
                    {
                      "metricvalue": 50670860,
                      "ip": "10.80.89.241"
                    },
                    {
                      "metricvalue": 50635408,
                      "ip": "172.23.7.121"
                    },
                    {
                      "metricvalue": 50611379,
                      "ip": "10.80.120.66"
                    },
                    {
                      "metricvalue": 50518069,
                      "ip": "10.86.37.241"
                    },
                    {
                      "metricvalue": 50492950,
                      "ip": "172.23.7.154"
                    }
                  ]
                },
                {
                  "timestamp": "2016-11-14T16:00:00.000Z",
                  "result": [
                    {
                      "metricvalue": 75260000,
                      "ip": null
                    },
                    {
                      "metricvalue": 50666904,
                      "ip": "10.83.177.241"
                    },
                    {
                      "metricvalue": 50650821,
                      "ip": "10.83.205.241"
                    },
                    {
                      "metricvalue": 50549420,
                      "ip": "172.23.7.153"
                    },
                    {
                      "metricvalue": 50521604,
                      "ip": "10.83.205.243"
                    },
                    {
                      "metricvalue": 50402100,
                      "ip": "10.81.121.241"
                    },
                    {
                      "metricvalue": 50377001,
                      "ip": "172.23.7.120"
                    },
                    {
                      "metricvalue": 50335920,
                      "ip": "10.80.89.241"
                    },
                    {
                      "metricvalue": 50316080,
                      "ip": "10.80.29.241"
                    },
                    {
                      "metricvalue": 50308302,
                      "ip": "172.23.7.154"
                    }
                  ]
                },
                {
                  "timestamp": "2016-11-14T17:00:00.000Z",
                  "result": [
                    {
                      "metricvalue": 75624770,
                      "ip": null
                    },
                    {
                      "metricvalue": 50824023,
                      "ip": "10.81.121.241"
                    },
                    {
                      "metricvalue": 50755312,
                      "ip": "10.80.89.241"
                    },
                    {
                      "metricvalue": 50679001,
                      "ip": "10.83.177.241"
                    },
                    {
                      "metricvalue": 50509166,
                      "ip": "10.83.197.242"
                    },
                    {
                      "metricvalue": 50458729,
                      "ip": "10.80.29.241"
                    },
                    {
                      "metricvalue": 50450412,
                      "ip": "172.23.7.115"
                    },
                    {
                      "metricvalue": 50441865,
                      "ip": "10.83.205.243"
                    },
                    {
                      "metricvalue": 50436823,
                      "ip": "10.87.73.241"
                    },
                    {
                      "metricvalue": 50432643,
                      "ip": "10.83.216.66"
                    }
                  ]
                },
                {
                  "timestamp": "2016-11-14T18:00:00.000Z",
                  "result": [
                    {
                      "metricvalue": 75250110,
                      "ip": null
                    },
                    {
                      "metricvalue": 50747090,
                      "ip": "172.23.7.115"
                    },
                    {
                      "metricvalue": 50701571,
                      "ip": "10.83.177.241"
                    },
                    {
                      "metricvalue": 50652595,
                      "ip": "10.86.37.241"
                    },
                    {
                      "metricvalue": 50648596,
                      "ip": "10.83.197.242"
                    },
                    {
                      "metricvalue": 50634838,
                      "ip": "10.83.205.243"
                    },
                    {
                      "metricvalue": 50563861,
                      "ip": "172.23.7.121"
                    },
                    {
                      "metricvalue": 50390273,
                      "ip": "172.23.7.154"
                    },
                    {
                      "metricvalue": 50355750,
                      "ip": "10.80.29.241"
                    },
                    {
                      "metricvalue": 50325489,
                      "ip": "10.83.216.66"
                    }
                  ]
                },
                {
                  "timestamp": "2016-11-14T19:00:00.000Z",
                  "result": [
                    {
                      "metricvalue": 75707736,
                      "ip": null
                    },
                    {
                      "metricvalue": 50848012,
                      "ip": "172.23.7.154"
                    },
                    {
                      "metricvalue": 50693114,
                      "ip": "10.86.37.241"
                    },
                    {
                      "metricvalue": 50681374,
                      "ip": "172.23.7.121"
                    },
                    {
                      "metricvalue": 50540683,
                      "ip": "10.80.29.241"
                    },
                    {
                      "metricvalue": 50503563,
                      "ip": "10.83.205.241"
                    },
                    {
                      "metricvalue": 50490138,
                      "ip": "10.80.120.66"
                    },
                    {
                      "metricvalue": 50469361,
                      "ip": "10.81.121.241"
                    },
                    {
                      "metricvalue": 50432902,
                      "ip": "10.87.73.241"
                    },
                    {
                      "metricvalue": 50365933,
                      "ip": "172.23.7.153"
                    }
                  ]
                },
                {
                  "timestamp": "2016-11-14T20:00:00.000Z",
                  "result": [
                    {
                      "metricvalue": 76388458,
                      "ip": null
                    },
                    {
                      "metricvalue": 50837192,
                      "ip": "172.23.7.154"
                    },
                    {
                      "metricvalue": 50816691,
                      "ip": "10.80.120.66"
                    },
                    {
                      "metricvalue": 50721209,
                      "ip": "10.83.205.242"
                    },
                    {
                      "metricvalue": 50683635,
                      "ip": "10.86.37.241"
                    },
                    {
                      "metricvalue": 50565967,
                      "ip": "10.83.205.243"
                    },
                    {
                      "metricvalue": 50561195,
                      "ip": "172.23.7.153"
                    },
                    {
                      "metricvalue": 50551541,
                      "ip": "10.80.29.241"
                    },
                    {
                      "metricvalue": 50551218,
                      "ip": "10.83.177.241"
                    },
                    {
                      "metricvalue": 50534525,
                      "ip": "10.83.216.66"
                    }
                  ]
                },
                {
                  "timestamp": "2016-11-14T21:00:00.000Z",
                  "result": [
                    {
                      "metricvalue": 76163996,
                      "ip": null
                    },
                    {
                      "metricvalue": 51063310,
                      "ip": "10.80.29.241"
                    },
                    {
                      "metricvalue": 50669879,
                      "ip": "10.86.37.241"
                    },
                    {
                      "metricvalue": 50641265,
                      "ip": "172.23.7.154"
                    },
                    {
                      "metricvalue": 50599256,
                      "ip": "172.23.7.115"
                    },
                    {
                      "metricvalue": 50569589,
                      "ip": "172.23.7.121"
                    },
                    {
                      "metricvalue": 50538678,
                      "ip": "10.80.120.66"
                    },
                    {
                      "metricvalue": 50520855,
                      "ip": "10.83.216.66"
                    },
                    {
                      "metricvalue": 50483435,
                      "ip": "10.87.73.241"
                    },
                    {
                      "metricvalue": 50482950,
                      "ip": "10.83.205.241"
                    }
                  ]
                },
                {
                  "timestamp": "2016-11-14T22:00:00.000Z",
                  "result": [
                    {
                      "metricvalue": 75747584,
                      "ip": null
                    },
                    {
                      "metricvalue": 50877873,
                      "ip": "172.23.7.120"
                    },
                    {
                      "metricvalue": 50743176,
                      "ip": "10.87.73.241"
                    },
                    {
                      "metricvalue": 50621937,
                      "ip": "10.83.197.242"
                    },
                    {
                      "metricvalue": 50596607,
                      "ip": "10.83.205.242"
                    },
                    {
                      "metricvalue": 50574339,
                      "ip": "10.83.205.243"
                    },
                    {
                      "metricvalue": 50453554,
                      "ip": "172.23.7.153"
                    },
                    {
                      "metricvalue": 50423288,
                      "ip": "10.83.205.241"
                    },
                    {
                      "metricvalue": 50421419,
                      "ip": "172.23.7.154"
                    },
                    {
                      "metricvalue": 50361341,
                      "ip": "10.80.29.241"
                    }
                  ]
                },
                {
                  "timestamp": "2016-11-14T23:00:00.000Z",
                  "result": [
                    {
                      "metricvalue": 75468932,
                      "ip": null
                    },
                    {
                      "metricvalue": 51025251,
                      "ip": "10.80.29.241"
                    },
                    {
                      "metricvalue": 50817257,
                      "ip": "172.23.7.153"
                    },
                    {
                      "metricvalue": 50742418,
                      "ip": "10.83.177.241"
                    },
                    {
                      "metricvalue": 50650182,
                      "ip": "172.23.7.115"
                    },
                    {
                      "metricvalue": 50647849,
                      "ip": "10.80.89.241"
                    },
                    {
                      "metricvalue": 50601536,
                      "ip": "10.86.37.241"
                    },
                    {
                      "metricvalue": 50554228,
                      "ip": "10.80.120.66"
                    },
                    {
                      "metricvalue": 50525323,
                      "ip": "10.83.216.66"
                    },
                    {
                      "metricvalue": 50352959,
                      "ip": "10.83.205.241"
                    }
                  ]
                }
              ]
            }
          },
          {
            "graphResponse": {
              "configuration": {
                "position": "left",
                "id": "3",
                "order": "1",
                "name": "Total Traffic Line",
                "graphtype": "multi-line",
                "type": "TOPN",
                "attributes": [
                  {
                    "name": "ip",
                    "displayName": "IP",
                    "axis": "x"
                  },
                  {
                    "name": "metricvalue",
                    "displayName": "BYTES",
                    "axis": "y"
                  }
                ]
              },
              "response": [
                {
                  "timestamp": "2016-11-14T13:00:00.000Z",
                  "result": [
                    {
                      "metricvalue": 4974728,
                      "ip": null
                    },
                    {
                      "metricvalue": 3493232,
                      "ip": "10.83.205.243"
                    },
                    {
                      "metricvalue": 3446228,
                      "ip": "10.86.37.241"
                    },
                    {
                      "metricvalue": 3420593,
                      "ip": "172.23.7.154"
                    },
                    {
                      "metricvalue": 3392631,
                      "ip": "10.87.73.241"
                    },
                    {
                      "metricvalue": 3388538,
                      "ip": "172.23.7.115"
                    },
                    {
                      "metricvalue": 3373638,
                      "ip": "10.80.89.241"
                    },
                    {
                      "metricvalue": 3348231,
                      "ip": "10.83.197.242"
                    },
                    {
                      "metricvalue": 3337839,
                      "ip": "172.23.7.121"
                    },
                    {
                      "metricvalue": 3335493,
                      "ip": "10.83.205.241"
                    }
                  ]
                },
                {
                  "timestamp": "2016-11-14T14:00:00.000Z",
                  "result": [
                    {
                      "metricvalue": 75833505,
                      "ip": null
                    },
                    {
                      "metricvalue": 51040214,
                      "ip": "10.80.120.66"
                    },
                    {
                      "metricvalue": 50786043,
                      "ip": "172.23.7.121"
                    },
                    {
                      "metricvalue": 50781380,
                      "ip": "10.81.121.241"
                    },
                    {
                      "metricvalue": 50765162,
                      "ip": "10.83.205.242"
                    },
                    {
                      "metricvalue": 50683242,
                      "ip": "172.23.7.115"
                    },
                    {
                      "metricvalue": 50617229,
                      "ip": "172.23.7.154"
                    },
                    {
                      "metricvalue": 50569891,
                      "ip": "10.83.216.66"
                    },
                    {
                      "metricvalue": 50395021,
                      "ip": "10.83.177.241"
                    },
                    {
                      "metricvalue": 50304788,
                      "ip": "10.83.205.243"
                    }
                  ]
                },
                {
                  "timestamp": "2016-11-14T15:00:00.000Z",
                  "result": [
                    {
                      "metricvalue": 75738616,
                      "ip": null
                    },
                    {
                      "metricvalue": 50748871,
                      "ip": "10.87.73.241"
                    },
                    {
                      "metricvalue": 50738858,
                      "ip": "10.83.205.242"
                    },
                    {
                      "metricvalue": 50729526,
                      "ip": "10.83.216.66"
                    },
                    {
                      "metricvalue": 50686686,
                      "ip": "10.83.205.241"
                    },
                    {
                      "metricvalue": 50670860,
                      "ip": "10.80.89.241"
                    },
                    {
                      "metricvalue": 50635408,
                      "ip": "172.23.7.121"
                    },
                    {
                      "metricvalue": 50611379,
                      "ip": "10.80.120.66"
                    },
                    {
                      "metricvalue": 50518069,
                      "ip": "10.86.37.241"
                    },
                    {
                      "metricvalue": 50492950,
                      "ip": "172.23.7.154"
                    }
                  ]
                },
                {
                  "timestamp": "2016-11-14T16:00:00.000Z",
                  "result": [
                    {
                      "metricvalue": 75260000,
                      "ip": null
                    },
                    {
                      "metricvalue": 50666904,
                      "ip": "10.83.177.241"
                    },
                    {
                      "metricvalue": 50650821,
                      "ip": "10.83.205.241"
                    },
                    {
                      "metricvalue": 50549420,
                      "ip": "172.23.7.153"
                    },
                    {
                      "metricvalue": 50521604,
                      "ip": "10.83.205.243"
                    },
                    {
                      "metricvalue": 50402100,
                      "ip": "10.81.121.241"
                    },
                    {
                      "metricvalue": 50377001,
                      "ip": "172.23.7.120"
                    },
                    {
                      "metricvalue": 50335920,
                      "ip": "10.80.89.241"
                    },
                    {
                      "metricvalue": 50316080,
                      "ip": "10.80.29.241"
                    },
                    {
                      "metricvalue": 50308302,
                      "ip": "172.23.7.154"
                    }
                  ]
                },
                {
                  "timestamp": "2016-11-14T17:00:00.000Z",
                  "result": [
                    {
                      "metricvalue": 75624770,
                      "ip": null
                    },
                    {
                      "metricvalue": 50824023,
                      "ip": "10.81.121.241"
                    },
                    {
                      "metricvalue": 50755312,
                      "ip": "10.80.89.241"
                    },
                    {
                      "metricvalue": 50679001,
                      "ip": "10.83.177.241"
                    },
                    {
                      "metricvalue": 50509166,
                      "ip": "10.83.197.242"
                    },
                    {
                      "metricvalue": 50458729,
                      "ip": "10.80.29.241"
                    },
                    {
                      "metricvalue": 50450412,
                      "ip": "172.23.7.115"
                    },
                    {
                      "metricvalue": 50441865,
                      "ip": "10.83.205.243"
                    },
                    {
                      "metricvalue": 50436823,
                      "ip": "10.87.73.241"
                    },
                    {
                      "metricvalue": 50432643,
                      "ip": "10.83.216.66"
                    }
                  ]
                },
                {
                  "timestamp": "2016-11-14T18:00:00.000Z",
                  "result": [
                    {
                      "metricvalue": 75250110,
                      "ip": null
                    },
                    {
                      "metricvalue": 50747090,
                      "ip": "172.23.7.115"
                    },
                    {
                      "metricvalue": 50701571,
                      "ip": "10.83.177.241"
                    },
                    {
                      "metricvalue": 50652595,
                      "ip": "10.86.37.241"
                    },
                    {
                      "metricvalue": 50648596,
                      "ip": "10.83.197.242"
                    },
                    {
                      "metricvalue": 50634838,
                      "ip": "10.83.205.243"
                    },
                    {
                      "metricvalue": 50563861,
                      "ip": "172.23.7.121"
                    },
                    {
                      "metricvalue": 50390273,
                      "ip": "172.23.7.154"
                    },
                    {
                      "metricvalue": 50355750,
                      "ip": "10.80.29.241"
                    },
                    {
                      "metricvalue": 50325489,
                      "ip": "10.83.216.66"
                    }
                  ]
                },
                {
                  "timestamp": "2016-11-14T19:00:00.000Z",
                  "result": [
                    {
                      "metricvalue": 75707736,
                      "ip": null
                    },
                    {
                      "metricvalue": 50848012,
                      "ip": "172.23.7.154"
                    },
                    {
                      "metricvalue": 50693114,
                      "ip": "10.86.37.241"
                    },
                    {
                      "metricvalue": 50681374,
                      "ip": "172.23.7.121"
                    },
                    {
                      "metricvalue": 50540683,
                      "ip": "10.80.29.241"
                    },
                    {
                      "metricvalue": 50503563,
                      "ip": "10.83.205.241"
                    },
                    {
                      "metricvalue": 50490138,
                      "ip": "10.80.120.66"
                    },
                    {
                      "metricvalue": 50469361,
                      "ip": "10.81.121.241"
                    },
                    {
                      "metricvalue": 50432902,
                      "ip": "10.87.73.241"
                    },
                    {
                      "metricvalue": 50365933,
                      "ip": "172.23.7.153"
                    }
                  ]
                },
                {
                  "timestamp": "2016-11-14T20:00:00.000Z",
                  "result": [
                    {
                      "metricvalue": 76388458,
                      "ip": null
                    },
                    {
                      "metricvalue": 50837192,
                      "ip": "172.23.7.154"
                    },
                    {
                      "metricvalue": 50816691,
                      "ip": "10.80.120.66"
                    },
                    {
                      "metricvalue": 50721209,
                      "ip": "10.83.205.242"
                    },
                    {
                      "metricvalue": 50683635,
                      "ip": "10.86.37.241"
                    },
                    {
                      "metricvalue": 50565967,
                      "ip": "10.83.205.243"
                    },
                    {
                      "metricvalue": 50561195,
                      "ip": "172.23.7.153"
                    },
                    {
                      "metricvalue": 50551541,
                      "ip": "10.80.29.241"
                    },
                    {
                      "metricvalue": 50551218,
                      "ip": "10.83.177.241"
                    },
                    {
                      "metricvalue": 50534525,
                      "ip": "10.83.216.66"
                    }
                  ]
                },
                {
                  "timestamp": "2016-11-14T21:00:00.000Z",
                  "result": [
                    {
                      "metricvalue": 76163996,
                      "ip": null
                    },
                    {
                      "metricvalue": 51063310,
                      "ip": "10.80.29.241"
                    },
                    {
                      "metricvalue": 50669879,
                      "ip": "10.86.37.241"
                    },
                    {
                      "metricvalue": 50641265,
                      "ip": "172.23.7.154"
                    },
                    {
                      "metricvalue": 50599256,
                      "ip": "172.23.7.115"
                    },
                    {
                      "metricvalue": 50569589,
                      "ip": "172.23.7.121"
                    },
                    {
                      "metricvalue": 50538678,
                      "ip": "10.80.120.66"
                    },
                    {
                      "metricvalue": 50520855,
                      "ip": "10.83.216.66"
                    },
                    {
                      "metricvalue": 50483435,
                      "ip": "10.87.73.241"
                    },
                    {
                      "metricvalue": 50482950,
                      "ip": "10.83.205.241"
                    }
                  ]
                },
                {
                  "timestamp": "2016-11-14T22:00:00.000Z",
                  "result": [
                    {
                      "metricvalue": 75747584,
                      "ip": null
                    },
                    {
                      "metricvalue": 50877873,
                      "ip": "172.23.7.120"
                    },
                    {
                      "metricvalue": 50743176,
                      "ip": "10.87.73.241"
                    },
                    {
                      "metricvalue": 50621937,
                      "ip": "10.83.197.242"
                    },
                    {
                      "metricvalue": 50596607,
                      "ip": "10.83.205.242"
                    },
                    {
                      "metricvalue": 50574339,
                      "ip": "10.83.205.243"
                    },
                    {
                      "metricvalue": 50453554,
                      "ip": "172.23.7.153"
                    },
                    {
                      "metricvalue": 50423288,
                      "ip": "10.83.205.241"
                    },
                    {
                      "metricvalue": 50421419,
                      "ip": "172.23.7.154"
                    },
                    {
                      "metricvalue": 50361341,
                      "ip": "10.80.29.241"
                    }
                  ]
                },
                {
                  "timestamp": "2016-11-14T23:00:00.000Z",
                  "result": [
                    {
                      "metricvalue": 75468932,
                      "ip": null
                    },
                    {
                      "metricvalue": 51025251,
                      "ip": "10.80.29.241"
                    },
                    {
                      "metricvalue": 50817257,
                      "ip": "172.23.7.153"
                    },
                    {
                      "metricvalue": 50742418,
                      "ip": "10.83.177.241"
                    },
                    {
                      "metricvalue": 50650182,
                      "ip": "172.23.7.115"
                    },
                    {
                      "metricvalue": 50647849,
                      "ip": "10.80.89.241"
                    },
                    {
                      "metricvalue": 50601536,
                      "ip": "10.86.37.241"
                    },
                    {
                      "metricvalue": 50554228,
                      "ip": "10.80.120.66"
                    },
                    {
                      "metricvalue": 50525323,
                      "ip": "10.83.216.66"
                    },
                    {
                      "metricvalue": 50352959,
                      "ip": "10.83.205.241"
                    }
                  ]
                }
              ]
            }
          }
        ],
        "tableReports": null
      },
      {
        "id": "2",
        "name": "Dashboard2",
            "graphReports": [],
            "tableReports":[]


      },
      {
        "id": "3",
        "name": "Dashboard3",
        "graphReports": [],
        "tableReports":[]
      },
      {
        "id": "4",
        "name": "Dashboard4",
        "graphReports": [],
        "tableReports":[]
      }
    ]
  }
