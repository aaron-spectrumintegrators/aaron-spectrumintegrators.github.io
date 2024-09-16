jQuery("#simulation")
  .on("click", ".s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 .click", function(event, data) {
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
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Button_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Button_3" ]
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Button_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Button_2" ]
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
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Button_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Button_5" ]
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Button_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Button_4" ]
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
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#203F9F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_8 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_9 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
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
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#203F9F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_6 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_9 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
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
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_9 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#203F9F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_6 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
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
    } else if(jFirer.is("#s-Button_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#203F9F"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_11 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/93b2df39-3d43-4482-80e6-faead19026bc.png')"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_12 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/bde4df76-a788-421c-a0b2-010adeb635f0.png')"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_13 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/36c9c720-ebb6-4c8d-ac09-b1434b7d0ba9.png')"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_14 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_14 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/b0eb53c5-c30a-4790-b1d9-849cc89d474a.svg')"
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
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#203F9F"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_12 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/bde4df76-a788-421c-a0b2-010adeb635f0.png')"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_11 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/93b2df39-3d43-4482-80e6-faead19026bc.png')"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_13 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/36c9c720-ebb6-4c8d-ac09-b1434b7d0ba9.png')"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_14 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_14 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/b0eb53c5-c30a-4790-b1d9-849cc89d474a.svg')"
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
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#203F9F"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_13 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/bde4df76-a788-421c-a0b2-010adeb635f0.png')"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_11 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/93b2df39-3d43-4482-80e6-faead19026bc.png')"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_12 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/bde4df76-a788-421c-a0b2-010adeb635f0.png')"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_14 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_14 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/b0eb53c5-c30a-4790-b1d9-849cc89d474a.svg')"
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
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_14 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#203F9F"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_14 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/bde4df76-a788-421c-a0b2-010adeb635f0.png')"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_11 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/93b2df39-3d43-4482-80e6-faead19026bc.png')"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_12 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/bde4df76-a788-421c-a0b2-010adeb635f0.png')"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_13 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/36c9c720-ebb6-4c8d-ac09-b1434b7d0ba9.png')"
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
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimGreater",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Volume Prgm"
                  },"1" ]
                },{
                  "action": "jimLessOrEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Volume Prgm"
                  },"8" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Volume Prgm" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "Volume Prgm"
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
    } else if(jFirer.is("#s-Button_16")) {
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
                    "element": "Volume Prgm"
                  },"1" ]
                },{
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Volume Prgm"
                  },"8" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Volume Prgm" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "Volume Prgm"
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
    } else if(jFirer.is("#s-Button_19")) {
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
    } else if(jFirer.is("#s-Button_23")) {
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
                    "element": "Volume Clg"
                  },"1" ]
                },{
                  "action": "jimLessOrEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Volume Clg"
                  },"8" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Volume Clg" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "Volume Clg"
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
    } else if(jFirer.is("#s-Button_24")) {
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
                    "element": "Volume Clg"
                  },"1" ]
                },{
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Volume Clg"
                  },"8" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Volume Clg" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "Volume Clg"
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
    } else if(jFirer.is("#s-Button_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_28 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#203F9F"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_28 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/961f5738-a857-417f-be28-9a27a50e720f.png')"
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
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_28 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_28 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/961f5738-a857-417f-be28-9a27a50e720f.png')"
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
    } else if(jFirer.is("#s-Button_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_27 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#203F9F"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_27 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/961f5738-a857-417f-be28-9a27a50e720f.png')"
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
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_27 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_27 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/961f5738-a857-417f-be28-9a27a50e720f.png')"
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
    } else if(jFirer.is("#s-Button_30")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_30 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#203F9F"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_30 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/961f5738-a857-417f-be28-9a27a50e720f.png')"
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
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_30 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_30 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/961f5738-a857-417f-be28-9a27a50e720f.png')"
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
    } else if(jFirer.is("#s-Button_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_29 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#203F9F"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_29 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/961f5738-a857-417f-be28-9a27a50e720f.png')"
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
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_29 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_29 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/961f5738-a857-417f-be28-9a27a50e720f.png')"
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
    } else if(jFirer.is("#s-Button_31")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_31 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#203F9F"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_31 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/961f5738-a857-417f-be28-9a27a50e720f.png')"
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
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_31 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_31 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/961f5738-a857-417f-be28-9a27a50e720f.png')"
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
    } else if(jFirer.is("#s-Button_32")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_32 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#203F9F"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_32 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/961f5738-a857-417f-be28-9a27a50e720f.png')"
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
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_32 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_32 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/961f5738-a857-417f-be28-9a27a50e720f.png')"
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
    } else if(jFirer.is("#s-Button_33")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_33 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#203F9F"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_33 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/961f5738-a857-417f-be28-9a27a50e720f.png')"
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
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_33 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_33 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/961f5738-a857-417f-be28-9a27a50e720f.png')"
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
    } else if(jFirer.is("#s-Button_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_34 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#203F9F"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_34 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/961f5738-a857-417f-be28-9a27a50e720f.png')"
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
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_34 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_34 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/961f5738-a857-417f-be28-9a27a50e720f.png')"
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
    } else if(jFirer.is("#s-Button_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_35 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#203F9F"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_35 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/961f5738-a857-417f-be28-9a27a50e720f.png')"
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
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_35 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_35 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/961f5738-a857-417f-be28-9a27a50e720f.png')"
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
    } else if(jFirer.is("#s-Button_36")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_36 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#203F9F"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_36 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/961f5738-a857-417f-be28-9a27a50e720f.png')"
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
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_36 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_36 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/961f5738-a857-417f-be28-9a27a50e720f.png')"
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
    } else if(jFirer.is("#s-Button_37")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_37 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#203F9F"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_37 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/961f5738-a857-417f-be28-9a27a50e720f.png')"
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
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_37 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  },{
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_37 > .backgroundLayer > .imageLayer" ],
                    "attributes": {
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "auto",
                      "background-image": "url('./images/961f5738-a857-417f-be28-9a27a50e720f.png')"
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
    } else if(jFirer.is("#s-Button_38")) {
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
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#203F9F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_8 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_9 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
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
    } else if(jFirer.is("#s-Button_39")) {
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
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#203F9F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_8 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_9 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#93ADFF"
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
  })
  .on("click", ".s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_17")) {
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
                      "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_17 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Button_21")) {
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
                      "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_21 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Button_25")) {
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
                      "target": [ "#s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 #s-Button_25 > .backgroundLayer > .colorLayer" ],
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
  .on("pageload", ".s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Button_3" ]
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Button_5" ]
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
  .on("mouseenter dragenter", ".s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 .mouseenter", function(event, data) {
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
    } else if(jFirer.is("#s-Button_11") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Button_12") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Button_13") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Button_14") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Button_15") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Button_16") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Button_17") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Button_19") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Button_23") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Button_24") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Button_38") && jFirer.has(event.relatedTarget).length === 0) {
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
    } else if(jFirer.is("#s-Button_39") && jFirer.has(event.relatedTarget).length === 0) {
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
  .on("mouseleave dragleave", ".s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 .mouseleave", function(event, data) {
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
    } else if(jFirer.is("#s-Button_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_19")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_20")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_21")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_23")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_24")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_25")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_38")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_39")) {
      jEvent.undoCases(jFirer);
    }
  })
  .on("variablechange.jim", ".s-28c896d6-da53-4af0-8db0-b5ca3ffb90c3 .variablechange", function(event, data) {
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
                },
                {
                  "action": "jimInsert",
                  "parameter": {
                    "target": [ "#s-Rectangle_1" ],
                    "parent": "#s-Cell_16"
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
              "condition": (data.variableTarget === "Volume Prgm") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Prgm"
                },"8" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_13" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume Prgm"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_13" ]
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
              "condition": (data.variableTarget === "Volume Prgm") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Prgm"
                },"7" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_14" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume Prgm"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_14" ]
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
              "condition": (data.variableTarget === "Volume Prgm") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Prgm"
                },"6" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_15" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume Prgm"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_15" ]
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
              "condition": (data.variableTarget === "Volume Prgm") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Prgm"
                },"5" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_16" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume Prgm"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_16" ]
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
              "condition": (data.variableTarget === "Volume Prgm") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Prgm"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_17" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume Prgm"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_17" ]
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
              "condition": (data.variableTarget === "Volume Prgm") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Prgm"
                },"3" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_18" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume Prgm"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_18" ]
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
              "condition": (data.variableTarget === "Volume Prgm") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Prgm"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_20" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume Prgm"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_20" ]
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
              "condition": (data.variableTarget === "Volume Prgm") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Prgm"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_21" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume Prgm"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_21" ]
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
    } else if(jFirer.is("#s-Cell_41")) {
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
                    "target": [ "#s-Rectangle_22" ]
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
    } else if(jFirer.is("#s-Cell_42")) {
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
                    "target": [ "#s-Rectangle_23" ]
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
    } else if(jFirer.is("#s-Cell_43")) {
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
                    "target": [ "#s-Rectangle_24" ]
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
    } else if(jFirer.is("#s-Cell_44")) {
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
    } else if(jFirer.is("#s-Cell_45")) {
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
                    "target": [ "#s-Rectangle_26" ]
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
    } else if(jFirer.is("#s-Cell_46")) {
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
                    "target": [ "#s-Rectangle_27" ]
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
    } else if(jFirer.is("#s-Cell_47")) {
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
                    "target": [ "#s-Rectangle_28" ]
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
    } else if(jFirer.is("#s-Cell_48")) {
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
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_29" ]
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
                    "target": [ "#s-Rectangle_29" ]
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
    } else if(jFirer.is("#s-Cell_57")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume Clg") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Clg"
                },"8" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_30" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume Clg"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_30" ]
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
    } else if(jFirer.is("#s-Cell_58")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume Clg") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Clg"
                },"7" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_31" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume Clg"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_31" ]
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
    } else if(jFirer.is("#s-Cell_59")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume Clg") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Clg"
                },"6" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_32" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume Clg"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_32" ]
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
    } else if(jFirer.is("#s-Cell_60")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume Clg") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Clg"
                },"5" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_33" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume Clg"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_33" ]
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
    } else if(jFirer.is("#s-Cell_61")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume Clg") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Clg"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_34" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume Clg"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_34" ]
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
    } else if(jFirer.is("#s-Cell_62")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume Clg") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Clg"
                },"3" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_35" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume Clg"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_35" ]
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
    } else if(jFirer.is("#s-Cell_63")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume Clg") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Clg"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_36" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume Clg"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_36" ]
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
    } else if(jFirer.is("#s-Cell_64")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Volume Clg") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Volume Clg"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_37" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "Volume Clg"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_37" ]
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