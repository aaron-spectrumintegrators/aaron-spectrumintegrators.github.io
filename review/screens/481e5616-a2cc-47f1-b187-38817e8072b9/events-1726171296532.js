jQuery("#simulation")
  .on("pageload", ".s-481e5616-a2cc-47f1-b187-38817e8072b9 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "1000.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 5000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5db45ce1-bb8c-4002-8670-9761677b742e"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  });