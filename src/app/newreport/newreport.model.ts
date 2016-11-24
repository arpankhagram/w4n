
export class NewReportModel {
  reportTypes: string[];
  graphTypes:string[];
  aggregationTypes: string[];
  granularities: string[];
  properties: string[] ///dimensions
  kpis: string[]; //metric
  threholdValues:string[];
  // properties:Map<any,any>=new Map();

  constructor() {
    this.reportTypes = [ "Graph", "Table","TopN"],
    this.graphTypes=["Line","Bar","Pie","Gauge"];
    this.aggregationTypes = ["doubleSum","MIN","MAX","Average","COUNT"],
    this.granularities = ["All","Hour","Day"],
    this.properties = ["ip","part","maxspeed","duplex","source","parttype","deviceid","devtype","unit","btcusid",
                       "location","btcusna","btsitid"],
    this.kpis = [ "Availability","Reachability","FreeMemoryPct","ifInErrors","ifInDiscards","FreeMemory",
                  "InboundUtilization","ifInOctets","ifInUcastPkts","ifOutUcastPkts","ifSpeed","ifOutDiscards",
                  "ifOutOctets","ifOutErrors","OutboundUtilzation","ifInNUcastPkts","MemoryUtilization"],
this.threholdValues =["10","20"]
// this.properties = [{"name":"ip","displayName":"ip"},
//                        {"name":"part","displayName":"part"}]
  }

  public generateDimesnsion()
  {
    // this.properties.set("ip" ,"ip");
    // this.properties.set("part" ,"part");
    // this.properties.set("maxspeed" ,"maxspeed");
    // this.properties.set("duplex" ,"duplex");
    // this.properties.set("ip" ,"ip");
    // this.dimensions.set("ip" ,"ip");
    // this.dimensions.set("ip" ,"ip");
    // this.dimensions.set("ip" ,"ip");
    // this.dimensions.set("ip" ,"ip");
    // this.dimensions.set("ip" ,"ip");

  }
}
