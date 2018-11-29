(function () {

    /*
        4_1
            죽음의 협곡 - Death Valley

        3_4
            회상의 섬 - Reminiscent Island
            오르비스 섬 - Orbis Island
            지혜의 섬 - Island of Wisdom
            잊혀진 자들의 도시 - Forgotten City
            에버그레이스의 둥지 - Everglade Nest
            두키 섬 - Duki Island

        3_3
            포모나 섬 - Pomona Island
            붐블링 아일랜드 - Boom Bling Island
            토토피아 - Totopia
            고요의 섬 - Silent Island
            메르시아 - Mercia
            잠자는 노래의 섬 - Sleeping Song Island
            자유의 섬 - Freedom Island
            검은이빨의 주둔지 - Black-Tooth Post
            거대버섯 섬 - Giant Mushroom Island

            [PVP] 해적마을 아틀라스 - Pirate Town Atlas

        3_2
            포르투나 - Fortuna
            에라스모의 섬 - Erasomoui Island
            두키 섬 - Duki Island
            외로운 섬 오페르 - Lonely Island Oper
            해바라기 섬 - Sunflower Island
            별빛 등대의 섬 - Starlight Lighthouse Island
            판다 푸푸 섬 - Panda Pupu Island
            포르페 - Porete
            거북 섬 - Turtle Island
            노토스 섬 - Notos Island
            토토실버 섬 - Toto Silver Island
            에스텔라 - Estella
            로팡 섬 - Lopang Island
            해상 낙원 페이토 - Ocean Paradise Payto

            [PVP] 우거진 갈대의 섬 - Lush Reed Island

         3_1
            신월의 섬 - New Moon Island
            꿈꾸는 갈매기 섬 - Dreamy Seagull Island
            알트아이젠 - Alteisen
            황금물결 섬 - Golden Wave Island
            알라케르 - Alaquer
            비밀기지 X-301 - Secret Base X-301
            두키 섬 - Duki Island
            하얀파도 섬 - White Waves Island
            기회의 섬 - Opportunity Island
            도망자들의 마을 - Fugitive Village
            칼트헤르츠 - Kaltes Herz

            [PVP] 슬라임 아일랜드 - Slime Island

         3_0
            아르곤 - Argon
            부서진 빙하의 섬 - Broken Glacier Island
            얼음 미로의 섬 - Ice Maze Island
            혹한의 안식처 - Cold Home

         2_4
            세월의 섬 - Island of the Years

         2_3
            작은 행운의 섬 - Small Lucky Island
            비키니 아일랜드 - Bikini Island
            리베하임 - Ribeheim
            왜곡된 차원의 섬 - Distorted Dimension Island

         2_2
            두키 섬 - Duki Island
            클럽 아비뉴 - Club Avinue
            볼라르 섬 - Bollard Island
            짙은 안개 능선 - Thick Mist Ridge

            [PVP] 그릇된 욕망의 섬 - Misguided Island

         2_1
            스피다 섬 - Speeder Island
            메테오라 - Meteora

            [PVP] 환각의 섬 - Hallucination Island
            [PVP] 메데이아 - Medea

         2_0
            얼음과 불의 섬 - Island of Fire and Ice

         1_3
            격류의 섬 - Torrent Island
            황혼의 섬 - Twilight Island
            히프노스의 눈 - Hypnose Eye
            환영나비 섬 - Welcome Butterfly Island
            휴양지 그라비스 - Gravis Resort
            나루니 섬 - Naruni Island

            [PVP] 무법자의 섬 - Outlaw Island

         1_2
            아트로포스 - Atropose
            블루홀 섬 - Blue Hole Island
            희망의 섬 - Island of Hope
            태초의 섬 - Primeval Island
            니헬타로프의 상념 - Nichel Tarov's Thought
            기약의 섬 - Island of Rejoice
            메투스 제도 - Metus Islands
            발푸르기스 - Valpurgis

            [PVP] 고블린 섬 - Goblin Island
            [PVP] 안개의 섬 - Isle of Mist

         1_1
            갈망의 섬 - Isle of Longing
            고립된 영원의 섬 - Isle of Eternity
            몬테 섬 - Monte Island
            카마인의 주둔지 - Carmine's Post
            그림자의 섬 - Isle of Shadows
            고요한 안식의 섬 - Tranquil Island
            미지의 섬 - Unknown Island

         1_0
            지고의 섬 - Lucky Island

         0_2
            몽환의 섬 - Isle of Dreams
            하모니 섬 - Harmony Island
     */

    LAM.areaMarkerData['Islands'] = [
        {
            "x": -50.11,
            "y": 243.17,
            "type": MarkerTypeEnum.Mokoko,
            "id": 0
        },
        {
            "x": -52.58,
            "y": 242.86,
            "type": MarkerTypeEnum.Mokoko,
            "id": 1
        },
        {
            "x": -53.33,
            "y": 243.11,
            "type": MarkerTypeEnum.Mokoko,
            "id": 2
        },
        {
            "x": -77.5,
            "y": 369.26,
            "type": MarkerTypeEnum.Mokoko,
            "id": 3
        },
        {
            "x": -75.86,
            "y": 372.99,
            "type": MarkerTypeEnum.Mokoko,
            "id": 4
        },
        {
            "x": -75.85,
            "y": 372.84,
            "type": MarkerTypeEnum.Mokoko,
            "id": 5
        },
        {
            "x": -76.14,
            "y": 372.96,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 6
        },
        {
            "x": -77.89,
            "y": 369.23,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 7
        },
        {
            "x": -80.09,
            "y": 374.09,
            "type": MarkerTypeEnum.FavorNPC,
            "id": 8
        },
        {
            "x": -86.06,
            "y": 337.46,
            "type": MarkerTypeEnum.Mokoko,
            "id": 9
        },
        {
            "x": -85.24,
            "y": 336.33,
            "type": MarkerTypeEnum.Mokoko,
            "id": 10
        },
        {
            "x": -84.65,
            "y": 338.5,
            "type": MarkerTypeEnum.Mokoko,
            "id": 11
        },
        {
            "x": -84.49,
            "y": 338.7,
            "type": MarkerTypeEnum.Mokoko,
            "id": 12
        },
        {
            "x": -43.34,
            "y": 363.33,
            "type": MarkerTypeEnum.Mokoko,
            "id": 13
        },
        {
            "x": -44.26,
            "y": 364.79,
            "type": MarkerTypeEnum.Mokoko,
            "id": 14
        },
        {
            "x": -43.91,
            "y": 365.88,
            "type": MarkerTypeEnum.Mokoko,
            "id": 15
        },
        {
            "x": -121.53,
            "y": 235.72,
            "type": MarkerTypeEnum.Mokoko,
            "id": 16
        },
        {
            "x": -121.67,
            "y": 235.55,
            "type": MarkerTypeEnum.Mokoko,
            "id": 17
        },
        {
            "x": -134.11,
            "y": 283.94,
            "type": MarkerTypeEnum.Mokoko,
            "id": 18
        },
        {
            "x": -132.49,
            "y": 285.72,
            "type": MarkerTypeEnum.Mokoko,
            "id": 19
        },
        {
            "x": -132.55,
            "y": 285.9,
            "type": MarkerTypeEnum.Mokoko,
            "id": 20
        },
        {
            "x": -153.2,
            "y": 269.18,
            "type": MarkerTypeEnum.Mokoko,
            "id": 21
        },
        {
            "x": -153.5,
            "y": 268.26,
            "type": MarkerTypeEnum.Mokoko,
            "id": 22
        },
        {
            "x": -153.59,
            "y": 268.09,
            "type": MarkerTypeEnum.Mokoko,
            "id": 23
        },
        {
            "x": -153.82,
            "y": 268.45,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 24
        },
        {
            "x": -193.65,
            "y": 229.61,
            "type": MarkerTypeEnum.Mokoko,
            "id": 25
        },
        {
            "x": -194.81,
            "y": 230.92,
            "type": MarkerTypeEnum.Mokoko,
            "id": 26
        },
        {
            "x": -194.82,
            "y": 231.78,
            "type": MarkerTypeEnum.Mokoko,
            "id": 27
        },
        {
            "x": -194.05,
            "y": 226.54,
            "type": MarkerTypeEnum.Mokoko,
            "id": 28
        },
        {
            "x": -194.41,
            "y": 226.05,
            "type": MarkerTypeEnum.Mokoko,
            "id": 29
        },
        {
            "x": -194.88,
            "y": 227.24,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 30
        },
        {
            "x": -195.72,
            "y": 230.12,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 31
        },
        {
            "x": -119.72,
            "y": 371.11,
            "type": MarkerTypeEnum.Mokoko,
            "id": 32
        },
        {
            "x": -167.81,
            "y": 346.84,
            "type": MarkerTypeEnum.Mokoko,
            "id": 33
        },
        {
            "x": -167.89,
            "y": 346.64,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 34
        },
        {
            "x": -194.96,
            "y": 331.81,
            "type": MarkerTypeEnum.Mokoko,
            "id": 35
        },
        {
            "x": -193.01,
            "y": 331.47,
            "type": MarkerTypeEnum.Mokoko,
            "id": 36
        },
        {
            "x": -195.41,
            "y": 330.19,
            "type": MarkerTypeEnum.Mokoko,
            "id": 37
        },
        {
            "x": -194.68,
            "y": 332.55,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 38
        },
        {
            "x": -106.36,
            "y": 391.8,
            "type": MarkerTypeEnum.Mokoko,
            "id": 39
        },
        {
            "x": -106.49,
            "y": 391.86,
            "type": MarkerTypeEnum.Mokoko,
            "id": 40
        },
        {
            "x": -105.6,
            "y": 394.35,
            "type": MarkerTypeEnum.Mokoko,
            "id": 41
        },
        {
            "x": -105.71,
            "y": 394.49,
            "type": MarkerTypeEnum.Mokoko,
            "id": 42
        },
        {
            "x": -105.75,
            "y": 394.34,
            "type": MarkerTypeEnum.Mokoko,
            "id": 43
        },
        {
            "x": -104.05,
            "y": 393.55,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 44,
            "hintText": "you have to play \"Song of Resonance\" in front of the Statue<br>\nProvides access to the 3 seeds at the right"
        },
        {
            "x": -104.85,
            "y": 390.76,
            "type": MarkerTypeEnum.Mokoko,
            "id": 45
        },
        {
            "x": -158.14,
            "y": 365.73,
            "type": MarkerTypeEnum.Mokoko,
            "id": 47
        },
        {
            "x": -159.28,
            "y": 365.42,
            "type": MarkerTypeEnum.Mokoko,
            "id": 48
        },
        {
            "x": -160.67,
            "y": 365.4,
            "type": MarkerTypeEnum.Mokoko,
            "id": 49
        },
        {
            "x": -161.27,
            "y": 367.04,
            "type": MarkerTypeEnum.Mokoko,
            "id": 50
        },
        {
            "x": -162.85,
            "y": 365.11,
            "type": MarkerTypeEnum.Mokoko,
            "id": 51
        },
        {
            "x": -188.93,
            "y": 319.32,
            "type": MarkerTypeEnum.Mokoko,
            "id": 52
        },
        {
            "x": -189.01,
            "y": 319.46,
            "type": MarkerTypeEnum.Mokoko,
            "id": 53
        },
        {
            "x": -190.62,
            "y": 317.75,
            "type": MarkerTypeEnum.Mokoko,
            "id": 54
        },
        {
            "x": -186.18,
            "y": 317.43,
            "type": MarkerTypeEnum.Mokoko,
            "id": 55
        },
        {
            "x": -185.53,
            "y": 316.62,
            "type": MarkerTypeEnum.Mokoko,
            "id": 56
        },
        {
            "x": -185.65,
            "y": 316.75,
            "type": MarkerTypeEnum.Mokoko,
            "id": 57
        },
        {
            "x": -190.25,
            "y": 317.65,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 58
        },
        {
            "x": -159.29,
            "y": 316.78,
            "type": MarkerTypeEnum.Mokoko,
            "id": 59
        },
        {
            "x": -194.43,
            "y": 404.1,
            "type": MarkerTypeEnum.Mokoko,
            "id": 60
        },
        {
            "x": -192,
            "y": 405.97,
            "type": MarkerTypeEnum.Mokoko,
            "id": 61
        },
        {
            "x": -191.87,
            "y": 406.08,
            "type": MarkerTypeEnum.Mokoko,
            "id": 62
        },
        {
            "x": -192.15,
            "y": 406.2,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 63
        },
        {
            "x": -112.41,
            "y": 311.07,
            "type": MarkerTypeEnum.Mokoko,
            "id": 64
        },
        {
            "x": -112.18,
            "y": 311.2,
            "type": MarkerTypeEnum.Mokoko,
            "id": 65
        },
        {
            "x": -112.36,
            "y": 312.46,
            "type": MarkerTypeEnum.Mokoko,
            "id": 66
        },
        {
            "x": -113.09,
            "y": 312.89,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 67
        },
        {
            "x": -179.12,
            "y": 369.34,
            "type": MarkerTypeEnum.Mokoko,
            "id": 68
        },
        {
            "x": -178.98,
            "y": 369.43,
            "type": MarkerTypeEnum.Mokoko,
            "id": 69
        },
        {
            "x": -179.68,
            "y": 370.66,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 70
        },
        {
            "x": -151.92,
            "y": 420.76,
            "type": MarkerTypeEnum.Mokoko,
            "id": 71
        },
        {
            "x": -154.67,
            "y": 419.71,
            "type": MarkerTypeEnum.Mokoko,
            "id": 72
        },
        {
            "x": -154.38,
            "y": 418.21,
            "type": MarkerTypeEnum.Mokoko,
            "id": 73
        },
        {
            "x": -213.24,
            "y": 229.66,
            "type": MarkerTypeEnum.Mokoko,
            "id": 74
        },
        {
            "x": -214.67,
            "y": 230.15,
            "type": MarkerTypeEnum.Mokoko,
            "id": 75
        },
        {
            "x": -215.29,
            "y": 230.46,
            "type": MarkerTypeEnum.Mokoko,
            "id": 76
        },
        {
            "x": -297.86,
            "y": 263.68,
            "type": MarkerTypeEnum.Mokoko,
            "id": 77
        },
        {
            "x": -295.94,
            "y": 263.41,
            "type": MarkerTypeEnum.Mokoko,
            "id": 78
        },
        {
            "x": -254.05,
            "y": 371.56,
            "type": MarkerTypeEnum.Mokoko,
            "id": 79
        },
        {
            "x": -253.95,
            "y": 372.82,
            "type": MarkerTypeEnum.Mokoko,
            "id": 80
        },
        {
            "x": -254.07,
            "y": 372.98,
            "type": MarkerTypeEnum.Mokoko,
            "id": 81
        },
        {
            "x": -297.31,
            "y": 372.65,
            "type": MarkerTypeEnum.Mokoko,
            "id": 82
        },
        {
            "x": -297.35,
            "y": 372.79,
            "type": MarkerTypeEnum.Mokoko,
            "id": 83
        },
        {
            "x": -296.83,
            "y": 371.56,
            "type": MarkerTypeEnum.Mokoko,
            "id": 84
        },
        {
            "x": -297.96,
            "y": 372.88,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 85
        },
        {
            "x": -295.97,
            "y": 371.25,
            "type": MarkerTypeEnum.FavorNPC,
            "id": 86
        },
        {
            "x": -290.76,
            "y": 336.76,
            "type": MarkerTypeEnum.Mokoko,
            "id": 87
        },
        {
            "x": -287.85,
            "y": 337.88,
            "type": MarkerTypeEnum.Mokoko,
            "id": 88
        },
        {
            "x": -287.97,
            "y": 337.81,
            "type": MarkerTypeEnum.Mokoko,
            "id": 89
        },
        {
            "x": -229.25,
            "y": 374.35,
            "type": MarkerTypeEnum.Mokoko,
            "id": 90
        },
        {
            "x": -230.33,
            "y": 372.39,
            "type": MarkerTypeEnum.Mokoko,
            "id": 91
        },
        {
            "x": -270.15,
            "y": 324.54,
            "type": MarkerTypeEnum.Mokoko,
            "id": 92
        },
        {
            "x": -270.61,
            "y": 324.08,
            "type": MarkerTypeEnum.Mokoko,
            "id": 93
        },
        {
            "x": -291.54,
            "y": 357.05,
            "type": MarkerTypeEnum.Mokoko,
            "id": 96
        },
        {
            "x": -291.69,
            "y": 357.03,
            "type": MarkerTypeEnum.Mokoko,
            "id": 97
        },
        {
            "x": -289.53,
            "y": 358.39,
            "type": MarkerTypeEnum.Mokoko,
            "id": 98
        },
        {
            "x": -288.55,
            "y": 357.46,
            "type": MarkerTypeEnum.Mokoko,
            "id": 99
        },
        {
            "x": -215.94,
            "y": 337.18,
            "type": MarkerTypeEnum.Mokoko,
            "id": 100
        },
        {
            "x": -216.04,
            "y": 337.04,
            "type": MarkerTypeEnum.Mokoko,
            "id": 101
        },
        {
            "x": -215.47,
            "y": 337.36,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 102
        },
        {
            "x": -213.68,
            "y": 379.61,
            "type": MarkerTypeEnum.Mokoko,
            "id": 103
        },
        {
            "x": -216.64,
            "y": 379,
            "type": MarkerTypeEnum.Mokoko,
            "id": 104
        },
        {
            "x": -215.31,
            "y": 379.57,
            "type": MarkerTypeEnum.Mokoko,
            "id": 105
        },
        {
            "x": -215.26,
            "y": 380.6,
            "type": MarkerTypeEnum.PlayInstrument,
            "id": 106
        },
        {
            "x": -304.29,
            "y": 365.98,
            "type": MarkerTypeEnum.Mokoko,
            "id": 107
        },
        {
            "x": -303.83,
            "y": 364.44,
            "type": MarkerTypeEnum.Mokoko,
            "id": 108
        },
        {
            "x": -303.96,
            "y": 364.36,
            "type": MarkerTypeEnum.Mokoko,
            "id": 109
        },
        {
            "x": -303.97,
            "y": 365.71,
            "type": MarkerTypeEnum.FavorNPC,
            "id": 110,
            "popupText": "Elder Toto (토토장로)"
        },
        {
            "x": -229.89,
            "y": 405.62,
            "type": MarkerTypeEnum.Mokoko,
            "id": 111
        },
        {
            "x": -229.55,
            "y": 404.03,
            "type": MarkerTypeEnum.Mokoko,
            "id": 112
        },
        {
            "x": -228.29,
            "y": 405.27,
            "type": MarkerTypeEnum.Mokoko,
            "id": 113
        },
        {
            "x": -227.34,
            "y": 407.37,
            "type": MarkerTypeEnum.Mokoko,
            "id": 114
        },
        {
            "x": -227.85,
            "y": 407.69,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 115
        },
        {
            "x": -227.34,
            "y": 406.01,
            "type": MarkerTypeEnum.FavorNPC,
            "id": 116,
            "popupText": "Pupu (푸푸)"
        },
        {
            "x": -222.99,
            "y": 324.67,
            "type": MarkerTypeEnum.Mokoko,
            "id": 117
        },
        {
            "x": -223.18,
            "y": 324.61,
            "type": MarkerTypeEnum.Mokoko,
            "id": 118
        },
        {
            "x": -283.17,
            "y": 390.99,
            "type": MarkerTypeEnum.Mokoko,
            "id": 119
        },
        {
            "x": -283.09,
            "y": 390.86,
            "type": MarkerTypeEnum.Mokoko,
            "id": 120
        },
        {
            "x": -282.56,
            "y": 393.81,
            "type": MarkerTypeEnum.Mokoko,
            "id": 121
        },
        {
            "x": -282.68,
            "y": 393.69,
            "type": MarkerTypeEnum.Mokoko,
            "id": 122
        },
        {
            "x": -284.6,
            "y": 393.49,
            "type": MarkerTypeEnum.Mokoko,
            "id": 123
        },
        {
            "x": -284.58,
            "y": 393.67,
            "type": MarkerTypeEnum.Mokoko,
            "id": 124
        },
        {
            "x": -228.69,
            "y": 345.22,
            "type": MarkerTypeEnum.Mokoko,
            "id": 125
        },
        {
            "x": -229.76,
            "y": 346.29,
            "type": MarkerTypeEnum.PlayInstrument,
            "id": 126
        },
        {
            "x": -264.1,
            "y": 346.78,
            "type": MarkerTypeEnum.Mokoko,
            "id": 127
        },
        {
            "x": -262.66,
            "y": 344.88,
            "type": MarkerTypeEnum.Mokoko,
            "id": 128
        },
        {
            "x": -261.69,
            "y": 344.16,
            "type": MarkerTypeEnum.Mokoko,
            "id": 129
        },
        {
            "x": -262.27,
            "y": 347.56,
            "type": MarkerTypeEnum.Mokoko,
            "id": 130
        },
        {
            "x": -264.5,
            "y": 344.28,
            "type": MarkerTypeEnum.Mokoko,
            "id": 131
        },
        {
            "x": -316.5,
            "y": 290.16,
            "type": MarkerTypeEnum.Mokoko,
            "id": 132
        },
        {
            "x": -318.25,
            "y": 290.49,
            "type": MarkerTypeEnum.Mokoko,
            "id": 133
        },
        {
            "x": -316.65,
            "y": 290.63,
            "type": MarkerTypeEnum.FavorNPC,
            "id": 134,
            "popupText": "Henry (헨리)"
        },
        {
            "x": -338.73,
            "y": 296.17,
            "type": MarkerTypeEnum.Mokoko,
            "id": 135
        },
        {
            "x": -335.44,
            "y": 297.42,
            "type": MarkerTypeEnum.Mokoko,
            "id": 136
        },
        {
            "x": -335.43,
            "y": 297.73,
            "type": MarkerTypeEnum.Mokoko,
            "id": 137
        },
        {
            "x": -335.68,
            "y": 297.32,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 138
        },
        {
            "x": -319.07,
            "y": 337.86,
            "type": MarkerTypeEnum.Mokoko,
            "id": 139
        },
        {
            "x": -316.04,
            "y": 337.7,
            "type": MarkerTypeEnum.Mokoko,
            "id": 140
        },
        {
            "x": -316.69,
            "y": 339.26,
            "type": MarkerTypeEnum.Mokoko,
            "id": 141
        },
        {
            "x": -315.95,
            "y": 337.84,
            "type": MarkerTypeEnum.Mokoko,
            "id": 142
        },
        {
            "x": -385.35,
            "y": 400.53,
            "type": MarkerTypeEnum.Mokoko,
            "id": 143
        },
        {
            "x": -387.9,
            "y": 398.59,
            "type": MarkerTypeEnum.Mokoko,
            "id": 144
        },
        {
            "x": -385.04,
            "y": 397.86,
            "type": MarkerTypeEnum.Mokoko,
            "id": 145
        },
        {
            "x": -384.74,
            "y": 399.22,
            "type": MarkerTypeEnum.Mokoko,
            "id": 146
        },
        {
            "x": -385.67,
            "y": 401.14,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 147
        },
        {
            "x": -387.07,
            "y": 398.52,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 148
        },
        {
            "x": -384.73,
            "y": 350.51,
            "type": MarkerTypeEnum.Mokoko,
            "id": 149
        },
        {
            "x": -385.38,
            "y": 351.43,
            "type": MarkerTypeEnum.Mokoko,
            "id": 150
        },
        {
            "x": -357.04,
            "y": 370.96,
            "type": MarkerTypeEnum.Mokoko,
            "id": 151
        },
        {
            "x": -357.14,
            "y": 371.11,
            "type": MarkerTypeEnum.Mokoko,
            "id": 152
        },
        {
            "x": -360.01,
            "y": 373.62,
            "type": MarkerTypeEnum.Mokoko,
            "id": 153
        },
        {
            "x": -360.16,
            "y": 373.81,
            "type": MarkerTypeEnum.Mokoko,
            "id": 154
        },
        {
            "x": -360.83,
            "y": 372.89,
            "type": MarkerTypeEnum.Mokoko,
            "id": 155
        },
        {
            "x": -360.98,
            "y": 371.46,
            "type": MarkerTypeEnum.Mokoko,
            "id": 156
        },
        {
            "x": -360.22,
            "y": 373.21,
            "type": MarkerTypeEnum.PlayInstrument,
            "id": 157
        },
        {
            "x": -315.22,
            "y": 325.79,
            "type": MarkerTypeEnum.Mokoko,
            "id": 158
        },
        {
            "x": -316.07,
            "y": 325.95,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 159
        },
        {
            "x": -358.08,
            "y": 408.45,
            "type": MarkerTypeEnum.Mokoko,
            "id": 160
        },
        {
            "x": -357.76,
            "y": 405.36,
            "type": MarkerTypeEnum.Mokoko,
            "id": 161
        },
        {
            "x": -359.08,
            "y": 404.12,
            "type": MarkerTypeEnum.Mokoko,
            "id": 162
        },
        {
            "x": -337.85,
            "y": 379.33,
            "type": MarkerTypeEnum.Mokoko,
            "id": 163
        },
        {
            "x": -338.83,
            "y": 380.61,
            "type": MarkerTypeEnum.Mokoko,
            "id": 164
        },
        {
            "x": -338.07,
            "y": 381.6,
            "type": MarkerTypeEnum.Mokoko,
            "id": 165
        },
        {
            "x": -338.27,
            "y": 381.5,
            "type": MarkerTypeEnum.Mokoko,
            "id": 166
        },
        {
            "x": -337.89,
            "y": 380.92,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 167
        },
        {
            "x": -352.57,
            "y": 359.4,
            "type": MarkerTypeEnum.Mokoko,
            "id": 168
        },
        {
            "x": -351.73,
            "y": 357.8,
            "type": MarkerTypeEnum.Mokoko,
            "id": 169
        },
        {
            "x": -351.87,
            "y": 357.83,
            "type": MarkerTypeEnum.Mokoko,
            "id": 170
        },
        {
            "x": -350.42,
            "y": 359.54,
            "type": MarkerTypeEnum.Mokoko,
            "id": 171
        },
        {
            "x": -345.19,
            "y": 405.02,
            "type": MarkerTypeEnum.Mokoko,
            "id": 172
        },
        {
            "x": -346.47,
            "y": 404.15,
            "type": MarkerTypeEnum.Mokoko,
            "id": 173
        },
        {
            "x": -346.51,
            "y": 404.27,
            "type": MarkerTypeEnum.Mokoko,
            "id": 174
        },
        {
            "x": -357.85,
            "y": 310.33,
            "type": MarkerTypeEnum.Mokoko,
            "id": 175
        },
        {
            "x": -357.33,
            "y": 310.83,
            "type": MarkerTypeEnum.Mokoko,
            "id": 176
        },
        {
            "x": -358.85,
            "y": 311.92,
            "type": MarkerTypeEnum.Mokoko,
            "id": 177
        },
        {
            "x": -358.97,
            "y": 311.93,
            "type": MarkerTypeEnum.Mokoko,
            "id": 178
        },
        {
            "x": -466.48,
            "y": 299.26,
            "type": MarkerTypeEnum.Mokoko,
            "id": 179
        },
        {
            "x": -466.62,
            "y": 296.53,
            "type": MarkerTypeEnum.Mokoko,
            "id": 180
        },
        {
            "x": -466.56,
            "y": 296.69,
            "type": MarkerTypeEnum.Mokoko,
            "id": 181
        },
        {
            "x": -454.4,
            "y": 385.49,
            "type": MarkerTypeEnum.Mokoko,
            "id": 182
        },
        {
            "x": -452.29,
            "y": 385.79,
            "type": MarkerTypeEnum.Mokoko,
            "id": 183
        },
        {
            "x": -454.54,
            "y": 387.64,
            "type": MarkerTypeEnum.Mokoko,
            "id": 184
        },
        {
            "x": -455.22,
            "y": 386.35,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 185
        },
        {
            "x": -434.28,
            "y": 379.62,
            "type": MarkerTypeEnum.Mokoko,
            "id": 186
        },
        {
            "x": -432.51,
            "y": 377.23,
            "type": MarkerTypeEnum.Mokoko,
            "id": 187
        },
        {
            "x": -432.39,
            "y": 377.35,
            "type": MarkerTypeEnum.Mokoko,
            "id": 188
        },
        {
            "x": -432,
            "y": 378.99,
            "type": MarkerTypeEnum.Mokoko,
            "id": 189
        },
        {
            "x": -432.12,
            "y": 379.16,
            "type": MarkerTypeEnum.Mokoko,
            "id": 190
        },
        {
            "x": -431.79,
            "y": 379.15,
            "type": MarkerTypeEnum.Mokoko,
            "id": 191
        },
        {
            "x": -431.91,
            "y": 379.31,
            "type": MarkerTypeEnum.Mokoko,
            "id": 192
        },
        {
            "x": -432.79,
            "y": 377.57,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 193
        },
        {
            "x": -431.68,
            "y": 378.74,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 194
        },
        {
            "x": -411.49,
            "y": 331.49,
            "type": MarkerTypeEnum.Mokoko,
            "id": 195
        },
        {
            "x": -412.01,
            "y": 331.41,
            "type": MarkerTypeEnum.Mokoko,
            "id": 196
        },
        {
            "x": -411.72,
            "y": 330.66,
            "type": MarkerTypeEnum.Mokoko,
            "id": 197
        },
        {
            "x": -411.85,
            "y": 330.15,
            "type": MarkerTypeEnum.Mokoko,
            "id": 198
        },
        {
            "x": -412.67,
            "y": 330.47,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 199
        },
        {
            "x": -412.59,
            "y": 331.29,
            "type": MarkerTypeEnum.SecretPassage,
            "id": 200
        },
        {
            "x": -460.18,
            "y": 326.35,
            "type": MarkerTypeEnum.Mokoko,
            "id": 201
        },
        {
            "x": -461.46,
            "y": 323.07,
            "type": MarkerTypeEnum.Mokoko,
            "id": 202
        },
        {
            "x": -317.44,
            "y": 290.25,
            "type": MarkerTypeEnum.IslandHeart,
            "id": 203,
            "hintText": "Become 'Trustworthy' with Henry (헨리)",
            "popupText": "Island Heart in Ribeheim"
        },
        {
            "x": -227.3207795806996,
            "y": 406.30467201464086,
            "type": MarkerTypeEnum.IslandHeart,
            "id": 204,
            "popupText": "Island Heart in Panda Pupu Island",
            "hintText": "Become 'Trustworthy' with Pupu (푸푸)"
        },
        {
            "x": -303.6328261706546,
            "y": 365.46094031551985,
            "type": MarkerTypeEnum.IslandHeart,
            "id": 205,
            "hintText": "Become 'Trustworthy' with Elder Toto (토토장로)",
            "popupText": "Island Heart in Toto Silver Island"
        },
        {
            "x": -385.95,
            "y": 399.07,
            "type": MarkerTypeEnum.IslandHeart,
            "id": 206,
            "hintText": "Become 'Trustworthy' with Black Tooth (검은이빨)",
            "popupText": "Island Heart in Black-Tooth Post"
        }
    ];

}());