(function(window, undefined) {
  var dictionary = {
    "68f96f1c-3d0d-4b10-9757-c932f37232c6": "Podium Presentation Page",
    "28c896d6-da53-4af0-8db0-b5ca3ffb90c3": "Main 2",
    "4bcfa722-40ee-499c-be72-760eb1d83c47": "Conference Page",
    "d1905585-9ff7-4568-b9f5-4aa84c7d1930": "Busy",
    "a8be4a6b-b0e7-4a9e-acdc-61cecbc71539": "Wireless Presentation Page",
    "bd09c396-7e61-4365-b63c-6a8ccf08174b": "PC Presentation Page",
    "b65fbd23-d397-4fe5-953a-fa8834aa505b": "Shutdown Confirmation",
    "5db45ce1-bb8c-4002-8670-9761677b742e": "Welcome",
    "c9037aad-8aac-4dd8-afba-0ab0a69bfbd8": "Choose Mode",
    "481e5616-a2cc-47f1-b187-38817e8072b9": "Busy 2",
    "3a0f74da-ced8-4899-aae4-0c4a4e0039c0": "Floor Presentation Page",
    "4fcfdd99-7c19-4445-a233-caf766ea061a": "Presentation Source Select",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "test components",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);