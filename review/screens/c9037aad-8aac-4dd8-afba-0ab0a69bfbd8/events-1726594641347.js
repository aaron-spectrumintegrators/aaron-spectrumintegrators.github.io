jQuery("#simulation")
  .on("click", ".s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 .click", function(event, data) {
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
    } else if(jFirer.is("#s-Button_10")) {
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
    } else if(jFirer.is("#s-Image_2")) {
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
    } else if(jFirer.is("#s-Button_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_7" ]
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
    } else if(jFirer.is("#s-Button_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ]
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
    } else if(jFirer.is("#s-Button_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_3" ]
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
    } else if(jFirer.is("#s-Image_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_3" ]
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
    } else if(jFirer.is("#s-Button_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_4" ]
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
    } else if(jFirer.is("#s-Image_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_4" ]
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
    } else if(jFirer.is("#s-Button_30")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_5" ]
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
    } else if(jFirer.is("#s-Image_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_5" ]
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
    } else if(jFirer.is("#s-Button_31")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_6" ]
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
    } else if(jFirer.is("#s-Image_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_6" ]
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
    } else if(jFirer.is("#s-Image_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ]
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
    } else if(jFirer.is("#s-Image_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ]
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
    } else if(jFirer.is("#s-Image_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ]
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
    } else if(jFirer.is("#s-Image_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ]
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
    } else if(jFirer.is("#s-Image_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ]
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
    } else if(jFirer.is("#s-Button_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_8 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "contain"
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
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_8 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "contain"
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
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_13 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "contain"
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
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_13 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "contain"
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
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_14 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_14 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "contain"
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
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_14 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_14 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "contain"
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
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_15 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "contain"
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
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_15 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "contain"
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
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_16 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_16 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "contain"
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
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_16 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_16 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "contain"
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
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_17 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 250
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_17 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Button_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_18 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_18 > .backgroundLayer > .imageLayer" ],
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
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_18 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_18 > .backgroundLayer > .imageLayer" ],
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
    } else if(jFirer.is("#s-Button_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_19 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_19 > .backgroundLayer > .imageLayer" ],
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
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_19 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_19 > .backgroundLayer > .imageLayer" ],
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
    } else if(jFirer.is("#s-Button_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_20 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_20 > .backgroundLayer > .imageLayer" ],
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
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_20 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_20 > .backgroundLayer > .imageLayer" ],
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
    } else if(jFirer.is("#s-Button_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_21 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_21 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "contain"
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
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_21 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_21 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "contain"
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
    } else if(jFirer.is("#s-Button_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_22 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_22 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "contain"
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
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_22 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_22 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "contain"
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
    } else if(jFirer.is("#s-Button_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_23 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_24 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(153,153,153,0.0)"
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
    } else if(jFirer.is("#s-Button_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_24 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_23 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(147,173,255,0.0)"
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
    } else if(jFirer.is("#s-Image_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_23 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_24 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Image_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_24 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_23 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Button_25")) {
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
                    "element": "Volume Lav"
                  },"1" ]
                },{
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Volume Lav"
                  },"8" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Volume Lav" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "Volume Lav"
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
    } else if(jFirer.is("#s-Button_26")) {
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
                    "element": "Volume Lav"
                  },"1" ]
                },{
                  "action": "jimLessOrEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Volume Lav"
                  },"8" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Volume Lav" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "Volume Lav"
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
    } else if(jFirer.is("#s-Image_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ]
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
                    "target": "screens/481e5616-a2cc-47f1-b187-38817e8072b9"
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
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ]
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
  .on("click", ".s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 .toggle", function(event, data) {
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
                      "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                      "attributes": {
                        "background-color": "#D33C3C"
                      }
                    },{
                      "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_2 > .backgroundLayer > .imageLayer" ],
                      "attributes": {
                        "background-repeat": "no-repeat",
                        "background-attachment": "scroll",
                        "background-size": "contain"
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
                      "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_4 > .backgroundLayer > .colorLayer" ],
                      "attributes": {
                        "background-color": "#D33C3C"
                      }
                    },{
                      "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_4 > .backgroundLayer > .imageLayer" ],
                      "attributes": {
                        "background-repeat": "no-repeat",
                        "background-attachment": "scroll",
                        "background-size": "contain"
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
    } else if(jFirer.is("#s-Button_27")) {
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
                      "target": [ "#s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 #s-Button_27 > .backgroundLayer > .colorLayer" ],
                      "attributes": {
                        "background-color": "#D33C3C"
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
  .on("pageload", ".s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Volume 1 Level" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Volume Lav" ],
                    "value": "1"
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
    } else if(jFirer.is("#s-Text_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_16" ]
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
    } else if(jFirer.is("#s-Text_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "shutdown countdown" ],
                    "value": "31"
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
  .on("mouseenter dragenter", ".s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 .mouseenter", function(event, data) {
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
    } else if(jFirer.is("#s-Button_25") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Button_26") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Button_27") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Button_3") && jFirer.has(event.relatedTarget).length === 0) {
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
  .on("mouseleave dragleave", ".s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 .mouseleave", function(event, data) {
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
    } else if(jFirer.is("#s-Button_25")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_26")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_27")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_3")) {
      jEvent.undoCases(jFirer);
    }
  })
  .on("taphold", ".s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 .taphold", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_16" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 1000
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_16" ]
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
    } else if(jFirer.is("#s-Button_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_16" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 1000
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_16" ]
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
    } else if(jFirer.is("#s-Button_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_16" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 1000
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_16" ]
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
  .on("variablechange.jim", ".s-c9037aad-8aac-4dd8-afba-0ab0a69bfbd8 .variablechange", function(event, data) {
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
                },
                {
                  "action": "jimInsert",
                  "parameter": {
                    "target": [ "#s-Rectangle_12" ],
                    "parent": "#s-Cell_9"
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
                },
                {
                  "action": "jimInsert",
                  "parameter": {
                    "target": [ "#s-Rectangle_11" ],
                    "parent": "#s-Cell_10"
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
                },
                {
                  "action": "jimInsert",
                  "parameter": {
                    "target": [ "#s-Rectangle_10" ],
                    "parent": "#s-Cell_11"
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
                },
                {
                  "action": "jimInsert",
                  "parameter": {
                    "target": [ "#s-Rectangle_9" ],
                    "parent": "#s-Cell_12"
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
                },
                {
                  "action": "jimInsert",
                  "parameter": {
                    "target": [ "#s-Rectangle_8" ],
                    "parent": "#s-Cell_13"
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
                },
                {
                  "action": "jimInsert",
                  "parameter": {
                    "target": [ "#s-Rectangle_7" ],
                    "parent": "#s-Cell_14"
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
                },
                {
                  "action": "jimInsert",
                  "parameter": {
                    "target": [ "#s-Rectangle_6" ],
                    "parent": "#s-Cell_15"
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
    } else if(jFirer.is("#s-Cell_25")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume Lav") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Lav"
                },"8" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_28" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimInsert",
                  "parameter": {
                    "target": [ "#s-Rectangle_28" ],
                    "parent": "#s-Cell_25"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume Lav"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_28" ]
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
    } else if(jFirer.is("#s-Cell_26")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume Lav") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Lav"
                },"7" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_27" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimInsert",
                  "parameter": {
                    "target": [ "#s-Rectangle_27" ],
                    "parent": "#s-Cell_26"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume Lav"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_27" ]
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
    } else if(jFirer.is("#s-Cell_27")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume Lav") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Lav"
                },"6" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_26" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimInsert",
                  "parameter": {
                    "target": [ "#s-Rectangle_26" ],
                    "parent": "#s-Cell_27"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume Lav"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_26" ]
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
    } else if(jFirer.is("#s-Cell_28")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume Lav") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Lav"
                },"5" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_25" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimInsert",
                  "parameter": {
                    "target": [ "#s-Rectangle_25" ],
                    "parent": "#s-Cell_28"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume Lav"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_25" ]
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
    } else if(jFirer.is("#s-Cell_29")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume Lav") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Lav"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_24" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimInsert",
                  "parameter": {
                    "target": [ "#s-Rectangle_24" ],
                    "parent": "#s-Cell_29"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume Lav"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_24" ]
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
    } else if(jFirer.is("#s-Cell_30")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume Lav") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Lav"
                },"3" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_23" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimInsert",
                  "parameter": {
                    "target": [ "#s-Rectangle_23" ],
                    "parent": "#s-Cell_30"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume Lav"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_23" ]
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
    } else if(jFirer.is("#s-Cell_31")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume Lav") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Lav"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_22" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimInsert",
                  "parameter": {
                    "target": [ "#s-Rectangle_22" ],
                    "parent": "#s-Cell_31"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume Lav"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_22" ]
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
    } else if(jFirer.is("#s-Cell_32")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume Lav") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Lav"
                },"1" ]
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
    } else if(jFirer.is("#s-Text_18")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "shutdown countdown"),
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 1000
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "shutdown countdown" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "shutdown countdown"
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
        },
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "shutdown countdown"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_18" ],
                    "value": {
                      "datatype": "variable",
                      "element": "shutdown countdown"
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
    }
  });