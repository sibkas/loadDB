/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 23.0, "minX": 0.0, "maxY": 2061.0, "series": [{"data": [[0.0, 23.0], [0.1, 33.0], [0.2, 36.0], [0.3, 36.0], [0.4, 38.0], [0.5, 38.0], [0.6, 39.0], [0.7, 39.0], [0.8, 39.0], [0.9, 39.0], [1.0, 40.0], [1.1, 41.0], [1.2, 41.0], [1.3, 41.0], [1.4, 41.0], [1.5, 41.0], [1.6, 41.0], [1.7, 41.0], [1.8, 42.0], [1.9, 42.0], [2.0, 42.0], [2.1, 42.0], [2.2, 42.0], [2.3, 42.0], [2.4, 42.0], [2.5, 43.0], [2.6, 43.0], [2.7, 43.0], [2.8, 43.0], [2.9, 43.0], [3.0, 43.0], [3.1, 43.0], [3.2, 44.0], [3.3, 44.0], [3.4, 44.0], [3.5, 44.0], [3.6, 44.0], [3.7, 44.0], [3.8, 45.0], [3.9, 45.0], [4.0, 45.0], [4.1, 45.0], [4.2, 46.0], [4.3, 46.0], [4.4, 46.0], [4.5, 46.0], [4.6, 47.0], [4.7, 47.0], [4.8, 49.0], [4.9, 49.0], [5.0, 50.0], [5.1, 50.0], [5.2, 50.0], [5.3, 51.0], [5.4, 51.0], [5.5, 51.0], [5.6, 51.0], [5.7, 52.0], [5.8, 52.0], [5.9, 53.0], [6.0, 53.0], [6.1, 53.0], [6.2, 53.0], [6.3, 53.0], [6.4, 54.0], [6.5, 54.0], [6.6, 54.0], [6.7, 54.0], [6.8, 55.0], [6.9, 55.0], [7.0, 55.0], [7.1, 56.0], [7.2, 57.0], [7.3, 57.0], [7.4, 57.0], [7.5, 58.0], [7.6, 58.0], [7.7, 58.0], [7.8, 60.0], [7.9, 60.0], [8.0, 63.0], [8.1, 64.0], [8.2, 65.0], [8.3, 65.0], [8.4, 67.0], [8.5, 69.0], [8.6, 70.0], [8.7, 70.0], [8.8, 70.0], [8.9, 78.0], [9.0, 93.0], [9.1, 94.0], [9.2, 95.0], [9.3, 97.0], [9.4, 99.0], [9.5, 100.0], [9.6, 101.0], [9.7, 103.0], [9.8, 104.0], [9.9, 105.0], [10.0, 109.0], [10.1, 112.0], [10.2, 115.0], [10.3, 120.0], [10.4, 125.0], [10.5, 127.0], [10.6, 130.0], [10.7, 134.0], [10.8, 135.0], [10.9, 136.0], [11.0, 143.0], [11.1, 146.0], [11.2, 146.0], [11.3, 157.0], [11.4, 158.0], [11.5, 158.0], [11.6, 158.0], [11.7, 161.0], [11.8, 161.0], [11.9, 162.0], [12.0, 165.0], [12.1, 165.0], [12.2, 167.0], [12.3, 172.0], [12.4, 173.0], [12.5, 175.0], [12.6, 179.0], [12.7, 180.0], [12.8, 182.0], [12.9, 187.0], [13.0, 191.0], [13.1, 191.0], [13.2, 191.0], [13.3, 192.0], [13.4, 197.0], [13.5, 199.0], [13.6, 201.0], [13.7, 202.0], [13.8, 203.0], [13.9, 205.0], [14.0, 205.0], [14.1, 208.0], [14.2, 211.0], [14.3, 212.0], [14.4, 217.0], [14.5, 217.0], [14.6, 217.0], [14.7, 218.0], [14.8, 218.0], [14.9, 224.0], [15.0, 226.0], [15.1, 227.0], [15.2, 229.0], [15.3, 230.0], [15.4, 231.0], [15.5, 238.0], [15.6, 238.0], [15.7, 239.0], [15.8, 241.0], [15.9, 242.0], [16.0, 243.0], [16.1, 243.0], [16.2, 247.0], [16.3, 248.0], [16.4, 248.0], [16.5, 249.0], [16.6, 252.0], [16.7, 256.0], [16.8, 260.0], [16.9, 261.0], [17.0, 263.0], [17.1, 268.0], [17.2, 268.0], [17.3, 268.0], [17.4, 270.0], [17.5, 271.0], [17.6, 274.0], [17.7, 275.0], [17.8, 276.0], [17.9, 276.0], [18.0, 281.0], [18.1, 282.0], [18.2, 284.0], [18.3, 286.0], [18.4, 288.0], [18.5, 289.0], [18.6, 290.0], [18.7, 292.0], [18.8, 300.0], [18.9, 300.0], [19.0, 300.0], [19.1, 303.0], [19.2, 304.0], [19.3, 305.0], [19.4, 307.0], [19.5, 307.0], [19.6, 307.0], [19.7, 311.0], [19.8, 313.0], [19.9, 313.0], [20.0, 318.0], [20.1, 322.0], [20.2, 323.0], [20.3, 327.0], [20.4, 328.0], [20.5, 329.0], [20.6, 330.0], [20.7, 331.0], [20.8, 331.0], [20.9, 331.0], [21.0, 338.0], [21.1, 339.0], [21.2, 340.0], [21.3, 344.0], [21.4, 347.0], [21.5, 348.0], [21.6, 350.0], [21.7, 350.0], [21.8, 351.0], [21.9, 351.0], [22.0, 354.0], [22.1, 354.0], [22.2, 354.0], [22.3, 359.0], [22.4, 359.0], [22.5, 361.0], [22.6, 363.0], [22.7, 365.0], [22.8, 368.0], [22.9, 369.0], [23.0, 372.0], [23.1, 380.0], [23.2, 381.0], [23.3, 384.0], [23.4, 384.0], [23.5, 385.0], [23.6, 390.0], [23.7, 390.0], [23.8, 391.0], [23.9, 394.0], [24.0, 397.0], [24.1, 407.0], [24.2, 415.0], [24.3, 417.0], [24.4, 418.0], [24.5, 425.0], [24.6, 437.0], [24.7, 437.0], [24.8, 438.0], [24.9, 442.0], [25.0, 442.0], [25.1, 443.0], [25.2, 451.0], [25.3, 453.0], [25.4, 453.0], [25.5, 456.0], [25.6, 457.0], [25.7, 458.0], [25.8, 459.0], [25.9, 459.0], [26.0, 462.0], [26.1, 464.0], [26.2, 470.0], [26.3, 474.0], [26.4, 476.0], [26.5, 479.0], [26.6, 483.0], [26.7, 484.0], [26.8, 489.0], [26.9, 490.0], [27.0, 491.0], [27.1, 493.0], [27.2, 494.0], [27.3, 494.0], [27.4, 495.0], [27.5, 500.0], [27.6, 501.0], [27.7, 502.0], [27.8, 503.0], [27.9, 503.0], [28.0, 504.0], [28.1, 507.0], [28.2, 508.0], [28.3, 509.0], [28.4, 513.0], [28.5, 514.0], [28.6, 515.0], [28.7, 515.0], [28.8, 521.0], [28.9, 522.0], [29.0, 522.0], [29.1, 524.0], [29.2, 527.0], [29.3, 529.0], [29.4, 531.0], [29.5, 532.0], [29.6, 533.0], [29.7, 535.0], [29.8, 536.0], [29.9, 537.0], [30.0, 538.0], [30.1, 539.0], [30.2, 541.0], [30.3, 542.0], [30.4, 543.0], [30.5, 546.0], [30.6, 546.0], [30.7, 547.0], [30.8, 548.0], [30.9, 550.0], [31.0, 551.0], [31.1, 552.0], [31.2, 556.0], [31.3, 556.0], [31.4, 557.0], [31.5, 558.0], [31.6, 558.0], [31.7, 559.0], [31.8, 561.0], [31.9, 561.0], [32.0, 563.0], [32.1, 564.0], [32.2, 564.0], [32.3, 566.0], [32.4, 568.0], [32.5, 568.0], [32.6, 569.0], [32.7, 570.0], [32.8, 570.0], [32.9, 572.0], [33.0, 576.0], [33.1, 576.0], [33.2, 576.0], [33.3, 579.0], [33.4, 579.0], [33.5, 582.0], [33.6, 583.0], [33.7, 585.0], [33.8, 586.0], [33.9, 590.0], [34.0, 591.0], [34.1, 591.0], [34.2, 597.0], [34.3, 598.0], [34.4, 599.0], [34.5, 601.0], [34.6, 605.0], [34.7, 607.0], [34.8, 608.0], [34.9, 610.0], [35.0, 611.0], [35.1, 612.0], [35.2, 618.0], [35.3, 619.0], [35.4, 619.0], [35.5, 623.0], [35.6, 626.0], [35.7, 626.0], [35.8, 627.0], [35.9, 629.0], [36.0, 631.0], [36.1, 632.0], [36.2, 633.0], [36.3, 633.0], [36.4, 634.0], [36.5, 634.0], [36.6, 635.0], [36.7, 638.0], [36.8, 639.0], [36.9, 641.0], [37.0, 641.0], [37.1, 646.0], [37.2, 650.0], [37.3, 650.0], [37.4, 652.0], [37.5, 654.0], [37.6, 655.0], [37.7, 657.0], [37.8, 659.0], [37.9, 660.0], [38.0, 661.0], [38.1, 666.0], [38.2, 668.0], [38.3, 669.0], [38.4, 675.0], [38.5, 676.0], [38.6, 677.0], [38.7, 679.0], [38.8, 682.0], [38.9, 682.0], [39.0, 686.0], [39.1, 689.0], [39.2, 690.0], [39.3, 691.0], [39.4, 693.0], [39.5, 695.0], [39.6, 697.0], [39.7, 702.0], [39.8, 703.0], [39.9, 703.0], [40.0, 708.0], [40.1, 709.0], [40.2, 710.0], [40.3, 711.0], [40.4, 713.0], [40.5, 717.0], [40.6, 720.0], [40.7, 721.0], [40.8, 723.0], [40.9, 724.0], [41.0, 729.0], [41.1, 729.0], [41.2, 730.0], [41.3, 732.0], [41.4, 733.0], [41.5, 734.0], [41.6, 735.0], [41.7, 737.0], [41.8, 738.0], [41.9, 740.0], [42.0, 746.0], [42.1, 748.0], [42.2, 749.0], [42.3, 750.0], [42.4, 752.0], [42.5, 752.0], [42.6, 754.0], [42.7, 757.0], [42.8, 763.0], [42.9, 763.0], [43.0, 766.0], [43.1, 768.0], [43.2, 768.0], [43.3, 769.0], [43.4, 770.0], [43.5, 772.0], [43.6, 776.0], [43.7, 778.0], [43.8, 779.0], [43.9, 782.0], [44.0, 784.0], [44.1, 786.0], [44.2, 788.0], [44.3, 789.0], [44.4, 791.0], [44.5, 791.0], [44.6, 794.0], [44.7, 796.0], [44.8, 798.0], [44.9, 801.0], [45.0, 802.0], [45.1, 803.0], [45.2, 805.0], [45.3, 806.0], [45.4, 807.0], [45.5, 807.0], [45.6, 809.0], [45.7, 811.0], [45.8, 817.0], [45.9, 820.0], [46.0, 821.0], [46.1, 822.0], [46.2, 827.0], [46.3, 827.0], [46.4, 827.0], [46.5, 830.0], [46.6, 833.0], [46.7, 838.0], [46.8, 842.0], [46.9, 842.0], [47.0, 843.0], [47.1, 844.0], [47.2, 844.0], [47.3, 845.0], [47.4, 845.0], [47.5, 849.0], [47.6, 849.0], [47.7, 853.0], [47.8, 856.0], [47.9, 857.0], [48.0, 859.0], [48.1, 863.0], [48.2, 864.0], [48.3, 866.0], [48.4, 867.0], [48.5, 868.0], [48.6, 870.0], [48.7, 871.0], [48.8, 872.0], [48.9, 872.0], [49.0, 873.0], [49.1, 877.0], [49.2, 877.0], [49.3, 878.0], [49.4, 880.0], [49.5, 881.0], [49.6, 882.0], [49.7, 885.0], [49.8, 886.0], [49.9, 886.0], [50.0, 891.0], [50.1, 896.0], [50.2, 900.0], [50.3, 901.0], [50.4, 905.0], [50.5, 905.0], [50.6, 906.0], [50.7, 914.0], [50.8, 914.0], [50.9, 918.0], [51.0, 922.0], [51.1, 923.0], [51.2, 925.0], [51.3, 929.0], [51.4, 931.0], [51.5, 934.0], [51.6, 935.0], [51.7, 937.0], [51.8, 938.0], [51.9, 940.0], [52.0, 941.0], [52.1, 942.0], [52.2, 942.0], [52.3, 947.0], [52.4, 948.0], [52.5, 949.0], [52.6, 951.0], [52.7, 951.0], [52.8, 952.0], [52.9, 956.0], [53.0, 956.0], [53.1, 958.0], [53.2, 961.0], [53.3, 963.0], [53.4, 965.0], [53.5, 966.0], [53.6, 967.0], [53.7, 971.0], [53.8, 971.0], [53.9, 977.0], [54.0, 977.0], [54.1, 978.0], [54.2, 983.0], [54.3, 984.0], [54.4, 990.0], [54.5, 992.0], [54.6, 997.0], [54.7, 999.0], [54.8, 1000.0], [54.9, 1001.0], [55.0, 1003.0], [55.1, 1008.0], [55.2, 1013.0], [55.3, 1017.0], [55.4, 1018.0], [55.5, 1021.0], [55.6, 1021.0], [55.7, 1021.0], [55.8, 1024.0], [55.9, 1026.0], [56.0, 1026.0], [56.1, 1027.0], [56.2, 1031.0], [56.3, 1033.0], [56.4, 1033.0], [56.5, 1037.0], [56.6, 1043.0], [56.7, 1044.0], [56.8, 1044.0], [56.9, 1045.0], [57.0, 1046.0], [57.1, 1049.0], [57.2, 1050.0], [57.3, 1053.0], [57.4, 1054.0], [57.5, 1055.0], [57.6, 1057.0], [57.7, 1061.0], [57.8, 1066.0], [57.9, 1067.0], [58.0, 1067.0], [58.1, 1072.0], [58.2, 1074.0], [58.3, 1076.0], [58.4, 1079.0], [58.5, 1079.0], [58.6, 1082.0], [58.7, 1083.0], [58.8, 1083.0], [58.9, 1087.0], [59.0, 1090.0], [59.1, 1092.0], [59.2, 1093.0], [59.3, 1095.0], [59.4, 1102.0], [59.5, 1102.0], [59.6, 1102.0], [59.7, 1103.0], [59.8, 1105.0], [59.9, 1106.0], [60.0, 1108.0], [60.1, 1114.0], [60.2, 1115.0], [60.3, 1115.0], [60.4, 1117.0], [60.5, 1118.0], [60.6, 1120.0], [60.7, 1124.0], [60.8, 1124.0], [60.9, 1124.0], [61.0, 1126.0], [61.1, 1127.0], [61.2, 1128.0], [61.3, 1129.0], [61.4, 1131.0], [61.5, 1131.0], [61.6, 1132.0], [61.7, 1134.0], [61.8, 1137.0], [61.9, 1138.0], [62.0, 1140.0], [62.1, 1143.0], [62.2, 1144.0], [62.3, 1146.0], [62.4, 1146.0], [62.5, 1147.0], [62.6, 1155.0], [62.7, 1160.0], [62.8, 1161.0], [62.9, 1164.0], [63.0, 1168.0], [63.1, 1169.0], [63.2, 1170.0], [63.3, 1171.0], [63.4, 1173.0], [63.5, 1176.0], [63.6, 1179.0], [63.7, 1181.0], [63.8, 1182.0], [63.9, 1185.0], [64.0, 1186.0], [64.1, 1187.0], [64.2, 1191.0], [64.3, 1194.0], [64.4, 1196.0], [64.5, 1197.0], [64.6, 1201.0], [64.7, 1202.0], [64.8, 1205.0], [64.9, 1209.0], [65.0, 1211.0], [65.1, 1212.0], [65.2, 1213.0], [65.3, 1213.0], [65.4, 1214.0], [65.5, 1215.0], [65.6, 1217.0], [65.7, 1218.0], [65.8, 1221.0], [65.9, 1226.0], [66.0, 1228.0], [66.1, 1230.0], [66.2, 1233.0], [66.3, 1233.0], [66.4, 1236.0], [66.5, 1238.0], [66.6, 1238.0], [66.7, 1239.0], [66.8, 1241.0], [66.9, 1241.0], [67.0, 1244.0], [67.1, 1246.0], [67.2, 1256.0], [67.3, 1258.0], [67.4, 1258.0], [67.5, 1259.0], [67.6, 1261.0], [67.7, 1264.0], [67.8, 1267.0], [67.9, 1268.0], [68.0, 1268.0], [68.1, 1269.0], [68.2, 1270.0], [68.3, 1273.0], [68.4, 1280.0], [68.5, 1281.0], [68.6, 1281.0], [68.7, 1284.0], [68.8, 1286.0], [68.9, 1287.0], [69.0, 1288.0], [69.1, 1292.0], [69.2, 1294.0], [69.3, 1295.0], [69.4, 1298.0], [69.5, 1299.0], [69.6, 1300.0], [69.7, 1306.0], [69.8, 1308.0], [69.9, 1308.0], [70.0, 1309.0], [70.1, 1314.0], [70.2, 1315.0], [70.3, 1323.0], [70.4, 1331.0], [70.5, 1332.0], [70.6, 1332.0], [70.7, 1334.0], [70.8, 1335.0], [70.9, 1336.0], [71.0, 1337.0], [71.1, 1339.0], [71.2, 1342.0], [71.3, 1347.0], [71.4, 1348.0], [71.5, 1353.0], [71.6, 1354.0], [71.7, 1355.0], [71.8, 1355.0], [71.9, 1357.0], [72.0, 1360.0], [72.1, 1362.0], [72.2, 1363.0], [72.3, 1370.0], [72.4, 1370.0], [72.5, 1371.0], [72.6, 1374.0], [72.7, 1375.0], [72.8, 1376.0], [72.9, 1377.0], [73.0, 1378.0], [73.1, 1380.0], [73.2, 1384.0], [73.3, 1387.0], [73.4, 1387.0], [73.5, 1390.0], [73.6, 1391.0], [73.7, 1391.0], [73.8, 1393.0], [73.9, 1395.0], [74.0, 1396.0], [74.1, 1398.0], [74.2, 1401.0], [74.3, 1402.0], [74.4, 1402.0], [74.5, 1403.0], [74.6, 1410.0], [74.7, 1414.0], [74.8, 1417.0], [74.9, 1418.0], [75.0, 1419.0], [75.1, 1421.0], [75.2, 1424.0], [75.3, 1425.0], [75.4, 1427.0], [75.5, 1431.0], [75.6, 1432.0], [75.7, 1433.0], [75.8, 1433.0], [75.9, 1435.0], [76.0, 1435.0], [76.1, 1440.0], [76.2, 1443.0], [76.3, 1444.0], [76.4, 1447.0], [76.5, 1449.0], [76.6, 1450.0], [76.7, 1451.0], [76.8, 1458.0], [76.9, 1459.0], [77.0, 1460.0], [77.1, 1461.0], [77.2, 1465.0], [77.3, 1466.0], [77.4, 1466.0], [77.5, 1468.0], [77.6, 1469.0], [77.7, 1470.0], [77.8, 1473.0], [77.9, 1473.0], [78.0, 1474.0], [78.1, 1476.0], [78.2, 1479.0], [78.3, 1480.0], [78.4, 1482.0], [78.5, 1485.0], [78.6, 1487.0], [78.7, 1488.0], [78.8, 1489.0], [78.9, 1492.0], [79.0, 1496.0], [79.1, 1499.0], [79.2, 1502.0], [79.3, 1502.0], [79.4, 1507.0], [79.5, 1507.0], [79.6, 1509.0], [79.7, 1511.0], [79.8, 1515.0], [79.9, 1518.0], [80.0, 1518.0], [80.1, 1520.0], [80.2, 1523.0], [80.3, 1523.0], [80.4, 1524.0], [80.5, 1526.0], [80.6, 1527.0], [80.7, 1529.0], [80.8, 1531.0], [80.9, 1532.0], [81.0, 1536.0], [81.1, 1537.0], [81.2, 1540.0], [81.3, 1545.0], [81.4, 1545.0], [81.5, 1545.0], [81.6, 1546.0], [81.7, 1558.0], [81.8, 1559.0], [81.9, 1560.0], [82.0, 1562.0], [82.1, 1563.0], [82.2, 1563.0], [82.3, 1566.0], [82.4, 1566.0], [82.5, 1567.0], [82.6, 1572.0], [82.7, 1575.0], [82.8, 1578.0], [82.9, 1578.0], [83.0, 1579.0], [83.1, 1582.0], [83.2, 1584.0], [83.3, 1585.0], [83.4, 1585.0], [83.5, 1587.0], [83.6, 1587.0], [83.7, 1588.0], [83.8, 1589.0], [83.9, 1594.0], [84.0, 1594.0], [84.1, 1594.0], [84.2, 1596.0], [84.3, 1598.0], [84.4, 1600.0], [84.5, 1600.0], [84.6, 1601.0], [84.7, 1603.0], [84.8, 1604.0], [84.9, 1606.0], [85.0, 1609.0], [85.1, 1609.0], [85.2, 1612.0], [85.3, 1615.0], [85.4, 1616.0], [85.5, 1619.0], [85.6, 1624.0], [85.7, 1625.0], [85.8, 1626.0], [85.9, 1628.0], [86.0, 1629.0], [86.1, 1631.0], [86.2, 1638.0], [86.3, 1639.0], [86.4, 1639.0], [86.5, 1648.0], [86.6, 1653.0], [86.7, 1655.0], [86.8, 1659.0], [86.9, 1661.0], [87.0, 1663.0], [87.1, 1670.0], [87.2, 1671.0], [87.3, 1673.0], [87.4, 1674.0], [87.5, 1683.0], [87.6, 1684.0], [87.7, 1688.0], [87.8, 1689.0], [87.9, 1689.0], [88.0, 1691.0], [88.1, 1693.0], [88.2, 1694.0], [88.3, 1697.0], [88.4, 1700.0], [88.5, 1702.0], [88.6, 1702.0], [88.7, 1703.0], [88.8, 1708.0], [88.9, 1709.0], [89.0, 1709.0], [89.1, 1714.0], [89.2, 1714.0], [89.3, 1714.0], [89.4, 1718.0], [89.5, 1718.0], [89.6, 1721.0], [89.7, 1721.0], [89.8, 1724.0], [89.9, 1724.0], [90.0, 1726.0], [90.1, 1730.0], [90.2, 1732.0], [90.3, 1735.0], [90.4, 1738.0], [90.5, 1738.0], [90.6, 1742.0], [90.7, 1744.0], [90.8, 1747.0], [90.9, 1748.0], [91.0, 1750.0], [91.1, 1752.0], [91.2, 1752.0], [91.3, 1755.0], [91.4, 1757.0], [91.5, 1758.0], [91.6, 1763.0], [91.7, 1766.0], [91.8, 1767.0], [91.9, 1768.0], [92.0, 1771.0], [92.1, 1774.0], [92.2, 1780.0], [92.3, 1783.0], [92.4, 1784.0], [92.5, 1786.0], [92.6, 1789.0], [92.7, 1791.0], [92.8, 1793.0], [92.9, 1798.0], [93.0, 1802.0], [93.1, 1804.0], [93.2, 1808.0], [93.3, 1810.0], [93.4, 1810.0], [93.5, 1812.0], [93.6, 1816.0], [93.7, 1819.0], [93.8, 1819.0], [93.9, 1821.0], [94.0, 1822.0], [94.1, 1825.0], [94.2, 1827.0], [94.3, 1828.0], [94.4, 1828.0], [94.5, 1830.0], [94.6, 1833.0], [94.7, 1835.0], [94.8, 1835.0], [94.9, 1837.0], [95.0, 1839.0], [95.1, 1840.0], [95.2, 1847.0], [95.3, 1848.0], [95.4, 1848.0], [95.5, 1851.0], [95.6, 1851.0], [95.7, 1852.0], [95.8, 1852.0], [95.9, 1857.0], [96.0, 1858.0], [96.1, 1858.0], [96.2, 1868.0], [96.3, 1871.0], [96.4, 1872.0], [96.5, 1878.0], [96.6, 1879.0], [96.7, 1880.0], [96.8, 1881.0], [96.9, 1883.0], [97.0, 1884.0], [97.1, 1886.0], [97.2, 1886.0], [97.3, 1889.0], [97.4, 1890.0], [97.5, 1895.0], [97.6, 1900.0], [97.7, 1906.0], [97.8, 1921.0], [97.9, 1924.0], [98.0, 1925.0], [98.1, 1928.0], [98.2, 1928.0], [98.3, 1928.0], [98.4, 1933.0], [98.5, 1937.0], [98.6, 1939.0], [98.7, 1940.0], [98.8, 1943.0], [98.9, 1946.0], [99.0, 1948.0], [99.1, 1963.0], [99.2, 1963.0], [99.3, 1964.0], [99.4, 1990.0], [99.5, 1993.0], [99.6, 1994.0], [99.7, 2004.0], [99.8, 2025.0], [99.9, 2034.0]], "isOverall": false, "label": "v2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 124.0, "series": [{"data": [[0.0, 124.0], [600.0, 68.0], [700.0, 68.0], [200.0, 69.0], [800.0, 70.0], [900.0, 60.0], [1000.0, 61.0], [1100.0, 67.0], [300.0, 69.0], [1200.0, 66.0], [1300.0, 61.0], [1400.0, 65.0], [1500.0, 68.0], [100.0, 53.0], [400.0, 45.0], [1600.0, 53.0], [1700.0, 59.0], [1800.0, 61.0], [1900.0, 28.0], [500.0, 91.0], [2000.0, 4.0]], "isOverall": false, "label": "v2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 273.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1 500ms"], [2, "Requests having \nresponse time > 1 500ms"], [3, "Requests in error"]], "maxY": 676.0, "series": [{"data": [[0.0, 361.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 676.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1 500ms", "isController": false}, {"data": [[2.0, 273.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1 500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 18.90281562216164, "minX": 1.77682704E12, "maxY": 19.095693779904305, "series": [{"data": [[1.77682704E12, 18.90281562216164], [1.7768271E12, 19.095693779904305]], "isOverall": false, "label": "writers", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7768271E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 35.333333333333336, "minX": 1.0, "maxY": 1013.5772569444453, "series": [{"data": [[2.0, 35.333333333333336], [8.0, 223.22222222222223], [9.0, 215.3], [10.0, 191.75], [11.0, 211.6], [3.0, 593.8], [12.0, 212.36363636363635], [13.0, 181.64285714285717], [14.0, 186.46153846153845], [15.0, 249.9], [1.0, 596.5], [4.0, 403.25], [16.0, 340.57142857142856], [17.0, 287.7], [18.0, 327.75], [19.0, 434.8333333333333], [5.0, 258.42857142857144], [20.0, 1013.5772569444453], [6.0, 228.0], [7.0, 217.88888888888889]], "isOverall": false, "label": "v2", "isController": false}, {"data": [[18.933587786259512, 922.1290076335873]], "isOverall": false, "label": "v2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.77682704E12, "maxY": 770.7, "series": [{"data": [[1.77682704E12, 770.7], [1.7768271E12, 146.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77682704E12, 0.0], [1.7768271E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7768271E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 761.5340599455035, "minX": 1.77682704E12, "maxY": 1768.1339712918652, "series": [{"data": [[1.77682704E12, 761.5340599455035], [1.7768271E12, 1768.1339712918652]], "isOverall": false, "label": "v2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7768271E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 761.5168029064481, "minX": 1.77682704E12, "maxY": 1768.1196172248804, "series": [{"data": [[1.77682704E12, 761.5168029064481], [1.7768271E12, 1768.1196172248804]], "isOverall": false, "label": "v2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7768271E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.004784688995215309, "minX": 1.77682704E12, "maxY": 0.21525885558583127, "series": [{"data": [[1.77682704E12, 0.21525885558583127], [1.7768271E12, 0.004784688995215309]], "isOverall": false, "label": "v2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7768271E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 23.0, "minX": 1.77682704E12, "maxY": 2061.0, "series": [{"data": [[1.77682704E12, 1709.0], [1.7768271E12, 2061.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77682704E12, 1435.0], [1.7768271E12, 1933.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77682704E12, 1608.94], [1.7768271E12, 2033.1000000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77682704E12, 1526.8999999999999], [1.7768271E12, 1963.5]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77682704E12, 23.0], [1.7768271E12, 1160.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77682704E12, 746.0], [1.7768271E12, 1771.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7768271E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 55.0, "minX": 8.0, "maxY": 1924.5, "series": [{"data": [[34.0, 579.0], [37.0, 509.0], [38.0, 554.0], [44.0, 441.5], [57.0, 338.0], [78.0, 241.5], [8.0, 1834.0], [9.0, 1619.0], [155.0, 55.0], [10.0, 1924.5], [11.0, 1753.0], [12.0, 1630.0], [13.0, 1626.0], [14.0, 1395.5], [15.0, 1393.0], [16.0, 1340.5], [17.0, 1182.0], [18.0, 1083.0], [19.0, 1055.0], [20.0, 1080.5], [21.0, 938.0], [22.0, 892.5], [23.0, 849.0], [25.0, 777.0], [27.0, 677.0], [30.0, 720.5], [31.0, 633.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 155.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 55.0, "minX": 8.0, "maxY": 1924.5, "series": [{"data": [[34.0, 579.0], [37.0, 509.0], [38.0, 554.0], [44.0, 441.5], [57.0, 338.0], [78.0, 241.5], [8.0, 1834.0], [9.0, 1619.0], [155.0, 55.0], [10.0, 1924.5], [11.0, 1753.0], [12.0, 1630.0], [13.0, 1626.0], [14.0, 1395.5], [15.0, 1393.0], [16.0, 1340.5], [17.0, 1182.0], [18.0, 1083.0], [19.0, 1055.0], [20.0, 1080.5], [21.0, 938.0], [22.0, 892.5], [23.0, 849.0], [25.0, 777.0], [27.0, 677.0], [30.0, 720.5], [31.0, 633.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 155.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.15, "minX": 1.77682704E12, "maxY": 18.683333333333334, "series": [{"data": [[1.77682704E12, 18.683333333333334], [1.7768271E12, 3.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7768271E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.4833333333333334, "minX": 1.77682704E12, "maxY": 18.35, "series": [{"data": [[1.77682704E12, 18.35], [1.7768271E12, 3.4833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7768271E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.4833333333333334, "minX": 1.77682704E12, "maxY": 18.35, "series": [{"data": [[1.77682704E12, 18.35], [1.7768271E12, 3.4833333333333334]], "isOverall": false, "label": "v2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7768271E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.4833333333333334, "minX": 1.77682704E12, "maxY": 18.35, "series": [{"data": [[1.77682704E12, 18.35], [1.7768271E12, 3.4833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7768271E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

