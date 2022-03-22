
var config_data = 
    `
{
  "title":"Scouting PASS 2022",
  "page_title":"Rapid React",
  "elements":{
    "prematch": {
      "Starting Location": {
        "code":"as",
        "title": "Starting Location",
        "type":"counter"
      },
      "Cargo Preload": {
          "code":"cp",
          "title": "Cargo Preload",
          "type":"bool"
      }
    },
    "auton": {
      "Taxi on Tarmac": {
        "code":"at",
        "title": "Taxi on Tarmac?",
        "type":"bool"
      },
      "Auto Acquired Cargo": {
        "code":"ac",
        "title": "Cargo auto-acquired?",
        "type":"counter"
      },
      "Upper Cargo Scored": {
        "code":"au",
        "title": "Upper Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"al",
        "title": "Lower Cargo Scored",
        "type":"counter"
      }
    },
    "teleop": {
        "Cargo Acquired": {
            "code":"ca",
            "title":"Cargo Acquired",
            "type":"counter"
        },
      "Upper Cargo Scored": {
        "code":"tu",
        "title": "Upper Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"tl",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Cargo Missed": {
        "code":"cm",
        "title": "Cargo Missed",
        "type":"counter"
      },
      "Defensive Performance": {
        "code":"dp",
        "title":"Defense (1-3)",
        "type":"counter"
      },
      "Defensive Evasion": {
        "code":"de",
        "title":"Defense Evasion(1-3)",
        "type":"counter"
      }
    },
    "endgame": {
        "Climb Attempted": {
            "code":"c",
            "title":"Climb Attempted",
            "type":"bool"
        },
      "Climb Level": {
        "code":"cl",
        "title": "Climb Level",
        "type":"radio",
        "choices":{
          "1":"Low<br>",
          "2":"Mid<br>",
          "3":"High<br>",
          "4":"Traversal<br>",
          "a":"Attempted but failed<br>",
          "x":"Not attempted"
        },
        "defaultValue":"x"
      }
    },
    "postmatch": {
      "Card Foul": {
        "code":"cf",
        "title": "Card Foul",
        "type":"bool"
      },
      "Technical Card Foul": {
          "code":"tcf",
          "title": "Technical Card Foul",
          "type":"bool"
      },
      "Comments": {
        "code":"co",
        "title": "Comments",
        "type":"text",
        "size":15,
        "maxSize":100
    }
    }
  }
}`;
