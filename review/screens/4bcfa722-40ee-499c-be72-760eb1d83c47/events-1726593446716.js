jQuery("#simulation")
  .on("click", ".s-4bcfa722-40ee-499c-be72-760eb1d83c47 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimGreater",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Volume 1 Level"
                  },"1" ]
                },{
                  "action": "jimLessOrEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Volume 1 Level"
                  },"8" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Volume 1 Level" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "Volume 1 Level"
                      },"1" ]
                    }
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
    } else if(jFirer.is("#s-Button_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Volume 1 Level"
                  },"1" ]
                },{
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Volume 1 Level"
                  },"8" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Volume 1 Level" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "Volume 1 Level"
                      },"1" ]
                    }
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
    } else if(jFirer.is("#s-Button_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_6 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/ada914f8-dd3f-4b29-a189-efbb32e3ed3a.png')"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_6 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/a368b9e2-4fa6-45a4-9fee-a05af89c668c.png')"
                    }
                  } ],
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
    } else if(jFirer.is("#s-Button_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_8 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/ada914f8-dd3f-4b29-a189-efbb32e3ed3a.png')"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_8 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/a368b9e2-4fa6-45a4-9fee-a05af89c668c.png')"
                    }
                  } ],
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
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_9 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_9 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/ada914f8-dd3f-4b29-a189-efbb32e3ed3a.png')"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_9 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_9 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/a368b9e2-4fa6-45a4-9fee-a05af89c668c.png')"
                    }
                  } ],
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
    } else if(jFirer.is("#s-Button_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_10 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/ada914f8-dd3f-4b29-a189-efbb32e3ed3a.png')"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_10 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/a368b9e2-4fa6-45a4-9fee-a05af89c668c.png')"
                    }
                  } ],
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
    } else if(jFirer.is("#s-Button_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_11 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/ada914f8-dd3f-4b29-a189-efbb32e3ed3a.png')"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_11 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/a368b9e2-4fa6-45a4-9fee-a05af89c668c.png')"
                    }
                  } ],
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
    } else if(jFirer.is("#s-Button_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_12 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/ada914f8-dd3f-4b29-a189-efbb32e3ed3a.png')"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_12 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/a368b9e2-4fa6-45a4-9fee-a05af89c668c.png')"
                    }
                  } ],
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
    } else if(jFirer.is("#s-Button_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_13 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/ada914f8-dd3f-4b29-a189-efbb32e3ed3a.png')"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_13 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/a368b9e2-4fa6-45a4-9fee-a05af89c668c.png')"
                    }
                  } ],
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
    } else if(jFirer.is("#s-Button_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_14 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_14 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/ada914f8-dd3f-4b29-a189-efbb32e3ed3a.png')"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_14 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_14 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/a368b9e2-4fa6-45a4-9fee-a05af89c668c.png')"
                    }
                  } ],
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
    } else if(jFirer.is("#s-Button_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_15 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/ada914f8-dd3f-4b29-a189-efbb32e3ed3a.png')"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_15 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/a368b9e2-4fa6-45a4-9fee-a05af89c668c.png')"
                    }
                  } ],
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
    } else if(jFirer.is("#s-Button_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_16 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_16 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/ada914f8-dd3f-4b29-a189-efbb32e3ed3a.png')"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_16 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_16 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/a368b9e2-4fa6-45a4-9fee-a05af89c668c.png')"
                    }
                  } ],
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
    } else if(jFirer.is("#s-Button_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_17 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_17 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/ada914f8-dd3f-4b29-a189-efbb32e3ed3a.png')"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_17 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_17 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/a368b9e2-4fa6-45a4-9fee-a05af89c668c.png')"
                    }
                  } ],
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
    } else if(jFirer.is("#s-Button_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_18 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_19 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  } ],
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
    } else if(jFirer.is("#s-Button_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_19 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_18 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  } ],
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
    } else if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_18 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_19 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  } ],
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
    } else if(jFirer.is("#s-Image_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_19 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_18 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  } ],
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
    } else if(jFirer.is("#s-Button_20")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Volume 1 Level"
                  },"1" ]
                },{
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Volume 1 Level"
                  },"8" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Volume 1 Level" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "Volume 1 Level"
                      },"1" ]
                    }
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
    } else if(jFirer.is("#s-Button_21")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimGreater",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Volume 1 Level"
                  },"1" ]
                },{
                  "action": "jimLessOrEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Volume 1 Level"
                  },"8" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Volume 1 Level" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "Volume 1 Level"
                      },"1" ]
                    }
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
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b65fbd23-d397-4fe5-953a-fa8834aa505b"
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
    } else if(jFirer.is("#s-Image_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b65fbd23-d397-4fe5-953a-fa8834aa505b"
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
  })
  .on("click", ".s-4bcfa722-40ee-499c-be72-760eb1d83c47 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_2")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                      "attributes": {
                        "background-color": "#D33C3C"
                      }
                    },{
                      "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_2 > .backgroundLayer > .imageLayer" ],
                      "attributes": {
                        "background-repeat": "no-repeat",
                        "background-attachment": "scroll",
                        "background-size": "auto",
                        "background-image": "url('./images/83e5d026-7a4a-4f09-b81d-483131d3f6af.png')"
                      }
                    } ],
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
    } else if(jFirer.is("#s-Button_4")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_4 > .backgroundLayer > .colorLayer" ],
                      "attributes": {
                        "background-color": "#D33C3C"
                      }
                    },{
                      "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_4 > .backgroundLayer > .imageLayer" ],
                      "attributes": {
                        "background-repeat": "no-repeat",
                        "background-attachment": "scroll",
                        "background-size": "auto",
                        "background-image": "url('./images/628b4fb6-fcb5-48c8-945c-20b737243973.png')"
                      }
                    } ],
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
    } else if(jFirer.is("#s-Button_22")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "target": [ "#s-4bcfa722-40ee-499c-be72-760eb1d83c47 #s-Button_22 > .backgroundLayer > .colorLayer" ],
                      "attributes": {
                        "background-color": "#FF0000"
                      }
                    } ],
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
    }
  })
  .on("mouseenter dragenter", ".s-4bcfa722-40ee-499c-be72-760eb1d83c47 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
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
    } else if(jFirer.is("#s-Button_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
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
    } else if(jFirer.is("#s-Button_20") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
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
    } else if(jFirer.is("#s-Button_21") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
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
    } else if(jFirer.is("#s-Button_22") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
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
  })
  .on("mouseleave dragleave", ".s-4bcfa722-40ee-499c-be72-760eb1d83c47 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_20")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_21")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_22")) {
      jEvent.undoCases(jFirer);
    }
  })
  .on("variablechange.jim", ".s-4bcfa722-40ee-499c-be72-760eb1d83c47 .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Cell_9")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume 1 Level") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume 1 Level"
                },"8" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_12" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume 1 Level"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_12" ]
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
    } else if(jFirer.is("#s-Cell_10")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume 1 Level") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume 1 Level"
                },"7" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_11" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume 1 Level"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_11" ]
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
    } else if(jFirer.is("#s-Cell_11")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume 1 Level") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume 1 Level"
                },"6" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume 1 Level"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_10" ]
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
    } else if(jFirer.is("#s-Cell_12")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume 1 Level") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume 1 Level"
                },"5" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_9" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume 1 Level"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_9" ]
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
    } else if(jFirer.is("#s-Cell_13")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume 1 Level") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume 1 Level"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume 1 Level"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_8" ]
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
    } else if(jFirer.is("#s-Cell_14")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume 1 Level") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume 1 Level"
                },"3" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume 1 Level"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_7" ]
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
    } else if(jFirer.is("#s-Cell_15")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume 1 Level") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume 1 Level"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume 1 Level"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_6" ]
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
    } else if(jFirer.is("#s-Cell_16")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume 1 Level") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume 1 Level"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume 1 Level"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_1" ]
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
    } else if(jFirer.is("#s-Cell_25")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume 1 Level") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume 1 Level"
                },"8" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_26")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume 1 Level") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume 1 Level"
                },"7" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_27")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume 1 Level") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume 1 Level"
                },"6" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_28")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume 1 Level") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume 1 Level"
                },"5" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_29")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume 1 Level") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume 1 Level"
                },"4" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_30")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume 1 Level") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume 1 Level"
                },"3" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_31")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume 1 Level") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume 1 Level"
                },"2" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_32")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume 1 Level") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume 1 Level"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_39" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume 1 Level"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_39" ]
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