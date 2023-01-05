(function(){
    var script = {
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "rootPlayer",
 "paddingBottom": 0,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.MapViewer",
  "this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
  "this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
  "this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
  "this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
  "this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431",
  "this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A"
 ],
 "backgroundPreloadEnabled": true,
 "scrollBarWidth": 10,
 "start": "this.playAudioList([this.audio_9F5E3D49_83FF_D679_41D4_AA0BFA136585]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "propagateClick": true,
 "verticalAlign": "top",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingRight": 0,
 "borderSize": 0,
 "width": "100%",
 "overflow": "visible",
 "paddingLeft": 0,
 "class": "Player",
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "defaultVRPointer": "laser",
 "definitions": [{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -117.21,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9CEC9293_830B_D2E9_41DB_D191C1C9DF59"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 66.43,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9CAAF23B_830B_D219_41C4_89FE33197583"
},
{
 "overlays": [
  "this.overlay_98C80365_81F4_FB45_41DA_01C1518C157F",
  "this.overlay_9B10E022_81F3_14FF_41C6_9651F6A9C75A",
  "this.panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_tcap0"
 ],
 "hfovMin": "120%",
 "label": "Duplex_Bathroom",
 "id": "panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -28.63,
   "yaw": 145.71,
   "distance": 1,
   "panorama": "this.panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 23.36,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9D7EA1D9_830B_2E19_41DC_5408E7CFEFFA"
},
{
 "overlays": [
  "this.overlay_9875558F_818F_7FC5_4135_15A7E14B9958",
  "this.overlay_9BFE1D07_818F_ECC5_41D2_1FA511C84B1C",
  "this.panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_tcap0"
 ],
 "hfovMin": "120%",
 "label": "Duplex_Bedroom 2",
 "id": "panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -101.87,
   "yaw": -113.57,
   "distance": 1,
   "panorama": "this.panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_camera"
},
{
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 119.58,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_A3A2D0CE_830B_2E7B_41A2_0B929F000A4D"
},
{
 "data": {
  "label": "Promotional_Background_Music_Background_Music_For_Video_d2Q3e56iJGs_140"
 },
 "class": "MediaAudio",
 "id": "audio_9909FAC9_8319_5279_41D1_19DB614AB0D4",
 "audio": {
  "oggUrl": "media/audio_9909FAC9_8319_5279_41D1_19DB614AB0D4.ogg",
  "mp3Url": "media/audio_9909FAC9_8319_5279_41D1_19DB614AB0D4.mp3",
  "class": "AudioResource"
 },
 "autoplay": true
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_camera"
},
{
 "overlays": [
  "this.overlay_8C726D02_8309_F7EB_41D6_B694B798AECC",
  "this.overlay_92127E73_8309_5229_41D1_47FE71C3DDCD",
  "this.overlay_9236625A_8307_521B_41C6_7FDC5817DC7A",
  "this.overlay_921F7653_8307_F269_41BF_82BBB679F4C9",
  "this.panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_tcap0"
 ],
 "hfovMin": "120%",
 "label": "Duplex_Master Bedroom_2",
 "id": "panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 3.77,
   "yaw": 127.62,
   "distance": 1,
   "panorama": "this.panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -24.98,
   "yaw": -8.42,
   "distance": 1,
   "panorama": "this.panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_t.jpg"
},
{
 "overlays": [
  "this.overlay_8DF5EA93_8308_F2E9_41A7_36E15D30D767",
  "this.overlay_8C46368B_830B_32F9_41C8_FDC638936CB1",
  "this.overlay_8C4AAEA8_830B_3227_41B5_A29300C78C01",
  "this.overlay_8C4549CC_830B_7E7F_41C7_91CCD29C8B02",
  "this.panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_tcap0"
 ],
 "hfovMin": "120%",
 "label": "Duplex_closet",
 "id": "panorama_880DB87D_8309_7E19_41B6_3FF13048D20A",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -87.17,
   "yaw": 84.79,
   "distance": 1,
   "panorama": "this.panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -135.53,
   "yaw": 4.03,
   "distance": 1,
   "panorama": "this.panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -131.52,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9D04015C_830B_2E1F_41CF_E2E1B121CA0C"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -52.38,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9D6EE1BB_830B_2E19_41DD_56C836E3BE93"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_camera"
},
{
 "overlays": [
  "this.overlay_8F359617_81B3_1CC5_41D7_5F4B54900330",
  "this.overlay_8F230688_81B3_7DCB_41BB_CA66EC28455D",
  "this.overlay_8ED0C33A_818D_14CF_41D0_A2BB2FF5621A",
  "this.overlay_8EE65DAC_818D_2FCB_41DF_AE6A77433E3D",
  "this.overlay_8FC51C64_818F_ED7B_41C3_E3AF89E3EF30",
  "this.overlay_93E1B44F_8195_1D45_41DA_C8D3F587941C",
  "this.panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_tcap0"
 ],
 "hfovMin": "120%",
 "label": "Duplex_Livingroom_4",
 "id": "panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -156.64,
   "yaw": 127.97,
   "distance": 1,
   "panorama": "this.panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -43.27,
   "yaw": 62.79,
   "distance": 1,
   "panorama": "this.panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 103.63,
   "yaw": -35.54,
   "distance": 1,
   "panorama": "this.panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_t.jpg"
},
{
 "overlays": [
  "this.overlay_93A28D04_8193_6CBB_41D5_882926D2B0F2",
  "this.overlay_93294C8C_8193_2DCB_41C2_7A6B40EB430A",
  "this.overlay_95B9D038_819D_14CB_41D4_6BF2FE24AE73",
  "this.overlay_94C153B8_819F_1BCB_41CA_F1813CBA3E2A",
  "this.overlay_92F5B784_819F_1BBB_41D5_9036569710F2",
  "this.overlay_92079073_819F_155C_41B7_C75A972E33EA",
  "this.overlay_950D751C_819D_7CCB_41D3_BC2CAC441593",
  "this.overlay_941F55D2_8193_3F5F_41A4_147BBF8C98B6",
  "this.panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_tcap0"
 ],
 "hfovMin": "120%",
 "label": "Duplex_Livingroom_1",
 "id": "panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 82.65,
   "yaw": -64.56,
   "distance": 1,
   "panorama": "this.panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285"
  },
  {
   "panorama": "this.panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 48.48,
   "yaw": -3.18,
   "distance": 1,
   "panorama": "this.panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -35.54,
   "yaw": 103.63,
   "distance": 1,
   "panorama": "this.panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 44.47,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_A399A100_830B_2FE7_41CE_3C4AB4E9153E"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 13.82,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9CA7D22E_830B_D23B_41D2_CB87EDB27C0E"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.23,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9C6E406F_830B_2E39_41D5_9BDDA18CD400"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 151.37,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9D0A5174_830B_2E2F_41C1_39DA8BB0D31C"
},
{
 "overlays": [
  "this.overlay_94A5AAF4_818D_155B_4181_F14F8243DEBC",
  "this.overlay_94C3EE34_818C_ECDB_41D1_76E9FFA583D1",
  "this.overlay_94679F59_818F_EB4D_41C9_5E60A2EC8319",
  "this.overlay_9685119F_818F_17C5_41CD_74F5459FD3DE",
  "this.panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_tcap0"
 ],
 "hfovMin": "120%",
 "label": "Duplex_Livingroom_2",
 "id": "panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 33.36,
   "yaw": -42.05,
   "distance": 1,
   "panorama": "this.panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -3.18,
   "yaw": 48.48,
   "distance": 1,
   "panorama": "this.panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 92.83,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_A396D0F3_830B_2E29_41D7_0799CAF0D594"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -31.65,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9CB0124C_830B_D27F_41B6_F2A40A7B5D74"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 79.01,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9C1BC04E_830B_2E7B_41CD_C6B8381AAB69"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 144.46,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9D01C168_830B_2E27_41DE_9B5148E5F4F1"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -97.35,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_A3E8510D_830B_2FF9_41C2_FF86F61E1B5C"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 137.95,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9CE71285_830B_D2E9_4190_9983228FFA8E"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -52.03,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9D1F418C_830B_2EFF_41D8_171FD30DFB21"
},
{
 "items": [
  {
   "media": "this.panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_camera"
  },
  {
   "media": "this.panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_camera"
  },
  {
   "media": "this.panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_camera"
  },
  {
   "media": "this.panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_camera"
  },
  {
   "media": "this.panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_camera"
  },
  {
   "media": "this.panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_camera"
  },
  {
   "media": "this.panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_camera"
  },
  {
   "media": "this.panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_camera"
  },
  {
   "media": "this.panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_camera"
  },
  {
   "media": "this.panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_camera"
  },
  {
   "media": "this.panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_camera"
  },
  {
   "media": "this.panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_camera"
  },
  {
   "media": "this.panorama_880DB87D_8309_7E19_41B6_3FF13048D20A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_camera"
  },
  {
   "media": "this.panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_camera"
  },
  {
   "media": "this.panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_camera"
  },
  {
   "media": "this.panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 155.02,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9C75708C_830B_2EFF_41D0_0EA4A04356E8"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -146.64,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9C79E0A8_830B_2E27_41B8_4772690A67DB"
},
{
 "overlays": [
  "this.overlay_99F32FBD_81F7_6BC5_41D2_1A50C0C808C8",
  "this.overlay_994B5354_81F7_1B44_41D9_2E8501C613C3",
  "this.overlay_99E355F3_81F7_3F5D_4174_C6046ACEED16",
  "this.overlay_96A2F1ED_81F5_7745_41CC_4E25FFACD2A2",
  "this.overlay_964FD95D_81F5_F745_41E0_305F9BF27D6C",
  "this.panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_tcap0"
 ],
 "hfovMin": "120%",
 "label": "Duplex_kitchen",
 "id": "panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 127.97,
   "yaw": -156.64,
   "distance": 1,
   "panorama": "this.panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 127.97,
   "yaw": 157.89,
   "distance": 1,
   "panorama": "this.panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 136.73,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9D4421E8_830B_2E27_41CE_7706C460DED0"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -76.37,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9D4B1202_830B_2DEB_41B2_781E4DC25073"
},
{
 "overlays": [
  "this.overlay_962D0545_81FD_3F45_41DD_9239B4BED025",
  "this.overlay_995FF114_81F3_34DB_41D2_D6E1B9B47567",
  "this.overlay_99A231BD_81F3_37C5_41E0_0ECCA02BD214",
  "this.overlay_993C936D_81F4_FB45_4180_5EC2E6013ED2",
  "this.overlay_98AEA504_81F5_1CBB_41A2_D5B00773C221",
  "this.overlay_96300BED_81F5_2B45_41D1_A5332AD95434",
  "this.overlay_993C9DBE_81F7_6FC7_41C8_3E0181BE4BAC",
  "this.overlay_9A01CD54_81F5_6F5B_41BA_9FBC5DF6F78E",
  "this.overlay_9913E6C9_81F5_1D4D_41A2_3A5CD389F7F1",
  "this.overlay_9B633540_81F5_3CBB_41DF_E34BCAED79CD",
  "this.panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_tcap0"
 ],
 "hfovMin": "120%",
 "label": "Duplex_Down Stair",
 "id": "panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 145.71,
   "yaw": -28.63,
   "distance": 1,
   "panorama": "this.panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -166.18,
   "yaw": -152.24,
   "distance": 1,
   "panorama": "this.panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -113.57,
   "yaw": -101.87,
   "distance": 1,
   "panorama": "this.panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 148.35,
   "yaw": -60.42,
   "distance": 1,
   "panorama": "this.panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -64.56,
   "yaw": 82.65,
   "distance": 1,
   "panorama": "this.panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 78.13,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9CF3A2A0_830B_D227_41D0_A585986E6652"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_camera"
},
{
 "overlays": [
  "this.overlay_94331F7D_8379_5219_41DF_91625C57EA33",
  "this.overlay_96D6D4C0_8379_7667_41DD_78A16D46171C",
  "this.panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_tcap0"
 ],
 "hfovMin": "120%",
 "label": "Duplex_Master Bedroom_3",
 "id": "panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -8.42,
   "yaw": -24.98,
   "distance": 1,
   "panorama": "this.panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_t.jpg"
},
{
 "overlays": [
  "this.overlay_9827E9BD_818F_77C5_41DF_EF8339B4B34D",
  "this.overlay_8D17D823_8308_DE29_41D3_3D3342E8DAAE",
  "this.overlay_8DE69144_8309_6E74_41AA_02C61B227644",
  "this.overlay_96FAFFC5_8338_F269_41E0_0634399DA8B7",
  "this.overlay_958455AE_8339_763B_41D2_0161717ED317",
  "this.overlay_943ECEF5_8339_D229_41D1_72FC308C5927",
  "this.overlay_96DC21C3_8379_2E69_4175_7BB04C968652",
  "this.panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_tcap0"
 ],
 "hfovMin": "120%",
 "label": "Duplex_Master Bedroom_1",
 "id": "panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -152.24,
   "yaw": -166.18,
   "distance": 1,
   "panorama": "this.panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 127.62,
   "yaw": 3.77,
   "distance": 1,
   "panorama": "this.panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 84.79,
   "yaw": -87.17,
   "distance": 1,
   "panorama": "this.panorama_880DB87D_8309_7E19_41B6_3FF13048D20A"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -67.45,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9C900278_830B_D227_41D2_DADDDDB99859"
},
{
 "overlays": [
  "this.overlay_96F18583_8339_56E9_41B3_A3E6E9DAF582",
  "this.overlay_947F8A92_8338_D2EB_41DB_836FF353B92E",
  "this.panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_tcap0"
 ],
 "hfovMin": "120%",
 "label": "Duplex_Master Bathroom",
 "id": "panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 4.03,
   "yaw": -135.53,
   "distance": 1,
   "panorama": "this.panorama_880DB87D_8309_7E19_41B6_3FF13048D20A"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_camera"
},
{
 "overlays": [
  "this.overlay_98F443A6_818D_1BC7_41C6_7AE0133763B6",
  "this.overlay_9BA17DAC_818D_2FCB_4198_A78A680A6000",
  "this.overlay_9AEEA5D7_818D_1F45_41CE_FA7A547E2DCD",
  "this.panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_tcap0"
 ],
 "hfovMin": "120%",
 "label": "Duplex_Bedroom 1",
 "id": "panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -60.42,
   "yaw": 148.35,
   "distance": 1,
   "panorama": "this.panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -60.42,
   "yaw": -151.99,
   "distance": 1,
   "panorama": "this.panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -133.52,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_A3B400DB_830B_2E19_41BD_485A241103A7"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_camera"
},
{
 "overlays": [
  "this.overlay_97C61C3C_818D_2CCB_41AD_4D04571220E3",
  "this.overlay_97D9580F_818D_34C4_41D6_9BC289F1E6B4",
  "this.overlay_971AC59C_81F3_1FCB_41D4_9D0868238653",
  "this.overlay_940D0A7D_81F4_F545_41CB_1438BD4DC0DD",
  "this.overlay_97308EA8_81F5_EDCB_41D1_9795D32664BB",
  "this.overlay_96BAD3D6_81F5_1B47_41E0_34C7E2BF6832",
  "this.panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_tcap0"
 ],
 "hfovMin": "120%",
 "label": "Duplex_Livingroom_3",
 "id": "panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 112.55,
   "yaw": -130.76,
   "distance": 1,
   "panorama": "this.panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -42.05,
   "yaw": 33.36,
   "distance": 1,
   "panorama": "this.panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 62.79,
   "yaw": -43.27,
   "distance": 1,
   "panorama": "this.panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -34.29,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9D50921B_830B_D219_41DF_D2BFCDB3E292"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.82,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9C4CE0B5_830B_2E29_41C6_D1CF42F0C4A9"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 119.58,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9C5140C1_830B_2E68_41D9_DE93D71C1CAF"
},
{
 "overlays": [
  "this.overlay_968606AD_81F5_1DC5_41C3_6EE7BA5E9F4D",
  "this.overlay_9643EA95_81F5_15C5_41D0_65A2CA883DE5",
  "this.overlay_96050EDF_81FC_ED45_41DE_D569E8058B76",
  "this.overlay_96642135_81FD_14C5_41D7_60E17CDADB04",
  "this.overlay_968B3DEC_81FD_6F4B_41C2_A25649E153EA",
  "this.overlay_99D45308_81FF_14CC_41CD_7EDD12609148",
  "this.panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_tcap0"
 ],
 "hfovMin": "120%",
 "label": "Duplex_Kitchen 2",
 "id": "panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 46.48,
   "yaw": -100.99,
   "distance": 1,
   "panorama": "this.panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37"
  },
  {
   "panorama": "this.panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -130.76,
   "yaw": 112.55,
   "distance": 1,
   "panorama": "this.panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 171.58,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9C8D4269_830B_D239_41DB_4F1F37D86CBC"
},
{
 "overlays": [
  "this.overlay_9623142D_81FF_1CC5_41DD_881F73FB1576",
  "this.overlay_99A23C75_81FF_6D44_41AE_34969AA92B36",
  "this.panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_tcap0"
 ],
 "hfovMin": "120%",
 "label": "Duplex_Store",
 "id": "panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -100.99,
   "yaw": 46.48,
   "distance": 1,
   "panorama": "this.panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.97,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9CF922AD_830B_D239_41CE_0CDC2708B866"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 27.76,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9D6681A3_830B_2E29_41D8_97F0DA22AECE"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 115.44,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9C87D25A_830B_D21B_41D7_D39FDD5490D3"
},
{
 "data": {
  "label": "Promotional_Background_Music_Background_Music_For_Video_d2Q3e56iJGs_140"
 },
 "class": "MediaAudio",
 "id": "audio_9F5E3D49_83FF_D679_41D4_AA0BFA136585",
 "audio": {
  "oggUrl": "media/audio_9F5E3D49_83FF_D679_41D4_AA0BFA136585.ogg",
  "mp3Url": "media/audio_9F5E3D49_83FF_D679_41D4_AA0BFA136585.mp3",
  "class": "AudioResource"
 },
 "autoplay": true
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -52.03,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9D149181_830B_2EE9_419A_B4908D3EFDD7"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -95.21,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9D6961CB_830B_2E79_41D4_EAF5FB911365"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 49.24,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_A38410E7_830B_2E29_41B5_52322D24CF95"
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "MainViewer",
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "left": 0,
 "width": "100%",
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarLeft": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "minHeight": 50,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "toolTipOpacity": 0.5,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "paddingTop": 0,
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "paddingRight": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipFontFamily": "Georgia",
 "class": "ViewerArea",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "top": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "paddingBottom": 0,
 "width": 115.05,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "class": "Container",
 "overflow": "scroll",
 "minHeight": 1,
 "top": "0%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 641,
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "--SETTINGS"
 },
 "shadow": false
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "MapViewer",
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "left": "0.06%",
 "width": "24.125%",
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarLeft": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "minHeight": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "minWidth": 1,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "height": "37.622%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "paddingTop": 0,
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "paddingRight": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipFontFamily": "Arial",
 "class": "ViewerArea",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "bottom": "7.14%",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 },
 "toolTipBorderSize": 1,
 "visible": false,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
 "paddingBottom": 10,
 "width": "12.364%",
 "scrollBarWidth": 10,
 "left": "2.11%",
 "propagateClick": false,
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "class": "HTMLText",
 "minHeight": 1,
 "top": "5.19%",
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "6.811%",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;font-family:'Montserrat Medium';\"><B>ENTRANCE</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Entrance"
 },
 "shadow": false,
 "visible": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
 "paddingBottom": 10,
 "width": "12.364%",
 "scrollBarWidth": 10,
 "left": "2.11%",
 "propagateClick": false,
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "class": "HTMLText",
 "minHeight": 1,
 "top": "5.19%",
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "6.811%",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Living Room</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Living Room"
 },
 "shadow": false,
 "visible": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
 "paddingBottom": 10,
 "width": "12.364%",
 "scrollBarWidth": 10,
 "left": "2.11%",
 "propagateClick": false,
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "class": "HTMLText",
 "minHeight": 1,
 "top": "5.19%",
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "6.811%",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Kitchen</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Kitchen"
 },
 "shadow": false,
 "visible": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
 "paddingBottom": 10,
 "width": "12.364%",
 "scrollBarWidth": 10,
 "left": "2.11%",
 "propagateClick": false,
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "class": "HTMLText",
 "minHeight": 1,
 "top": "5.19%",
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "6.811%",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Bedroom 1</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Bedroom 1"
 },
 "shadow": false,
 "visible": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431",
 "paddingBottom": 10,
 "width": "12.364%",
 "scrollBarWidth": 10,
 "left": "2.11%",
 "propagateClick": false,
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "class": "HTMLText",
 "minHeight": 1,
 "top": "5.19%",
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "6.811%",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Bedroom 2</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Bedroom 2"
 },
 "shadow": false,
 "visible": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A",
 "paddingBottom": 10,
 "width": "12.364%",
 "scrollBarWidth": 10,
 "left": "2.11%",
 "propagateClick": false,
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "class": "HTMLText",
 "minHeight": 1,
 "top": "5.19%",
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "6.811%",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Bathroom</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Bathroom"
 },
 "shadow": false,
 "visible": false
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false
},
{
 "maps": [
  {
   "hfov": 77.17,
   "yaw": 145.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0_HS_0_1_0_map.gif",
      "width": 116,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285, this.camera_9D0A5174_830B_2E2F_41C1_39DA8BB0D31C); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_98C80365_81F4_FB45_41DA_01C1518C157F",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 5.27,
   "yaw": 142.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.31,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_0_HS_1_0.png",
      "width": 120,
      "height": 120,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 5.27,
   "yaw": 142.81,
   "pitch": 2.31
  }
 ],
 "id": "overlay_9B10E022_81F3_14FF_41C6_9651F6A9C75A",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED_tcap0",
 "distance": 60
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0_HS_0_1_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0_HS_0_2_3_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285, this.camera_9CF3A2A0_830B_D227_41D0_A585986E6652); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_9875558F_818F_7FC5_4135_15A7E14B9958",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 4.31,
   "yaw": -112.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0_HS_1_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9AD90267_8194_F544_4198_9137EC822A87",
   "yaw": -112.9,
   "pitch": 11.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.31
  }
 ],
 "id": "overlay_9BFE1D07_818F_ECC5_41D2_1FA511C84B1C",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_tcap0",
 "distance": 60
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "visible": false
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0_HS_0_1_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0_HS_0_2_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F, this.camera_9C6E406F_830B_2E39_41D5_9BDDA18CD400); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_8C726D02_8309_F7EB_41D6_B694B798AECC",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0_HS_1_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0_HS_1_2_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0_HS_1_3_3_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0_HS_1_4_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0_HS_1_5_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150, this.camera_9C75708C_830B_2EFF_41D0_0EA4A04356E8); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_92127E73_8309_5229_41D1_47FE71C3DDCD",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 4.39,
   "yaw": -2.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0_HS_2_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9B199EAB_8339_3239_41C8_39DF09E8B9BB",
   "yaw": -2.6,
   "pitch": -3.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.39
  }
 ],
 "id": "overlay_9236625A_8307_521B_41C6_7FDC5817DC7A",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 9.48,
   "yaw": 123.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0_HS_3_0_6_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9B196EAB_8339_3239_41BB_B1037C0148F5",
   "yaw": 123.78,
   "pitch": -35.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 9.48
  }
 ],
 "id": "overlay_921F7653_8307_F269_41BF_82BBB679F4C9",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_tcap0",
 "distance": 60
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_1_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_1_HS_0_2_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_1_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_1_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F, this.camera_A396D0F3_830B_2E29_41D7_0799CAF0D594); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_8DF5EA93_8308_F2E9_41A7_36E15D30D767",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 70.53,
   "yaw": 4.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_1_HS_1_1_6_map.gif",
      "width": 93,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.99,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8, this.camera_A399A100_830B_2FE7_41CE_3C4AB4E9153E); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_8C46368B_830B_32F9_41C8_FDC638936CB1",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 7.38,
   "yaw": 7.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_1_HS_2_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_1_HS_2_0.png",
      "width": 171,
      "height": 171,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 7.38,
   "yaw": 7.36,
   "pitch": 11.65
  }
 ],
 "id": "overlay_8C4AAEA8_830B_3227_41B5_A29300C78C01",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "maps": [
  {
   "hfov": 7.22,
   "yaw": 90.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_1_HS_3_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94E6BEA5_8339_3229_41AE_2539051CA537",
   "yaw": 90.47,
   "pitch": 12.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.22
  }
 ],
 "id": "overlay_8C4549CC_830B_7E7F_41C7_91CCD29C8B02",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_tcap0",
 "distance": 60
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0_HS_0_2_3_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81, this.camera_9D4B1202_830B_2DEB_41B2_781E4DC25073); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_8F359617_81B3_1CC5_41D7_5F4B54900330",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 15.22,
   "yaw": -28.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0_HS_1_0_6_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9014E420_8193_1CFB_41CA_2CE3D1E472F0",
   "yaw": -28.68,
   "pitch": -30,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.22
  }
 ],
 "id": "overlay_8F230688_81B3_7DCB_41BB_CA66EC28455D",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 73.71,
   "yaw": 62.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0_HS_2_1_6_map.gif",
      "width": 116,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF, this.camera_9D4421E8_830B_2E27_41CE_7706C460DED0); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_8ED0C33A_818D_14CF_41D0_A2BB2FF5621A",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 2.63,
   "yaw": 64.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0_HS_3_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9014D420_8193_1CFB_41CC_DA12165FC2C2",
   "yaw": 64.39,
   "pitch": -5.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 2.63
  }
 ],
 "id": "overlay_8EE65DAC_818D_2FCB_41DF_AE6A77433E3D",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 17.16,
   "yaw": 127.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0_HS_4_1_6_map.gif",
      "width": 48,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED, this.camera_9D7EA1D9_830B_2E19_41DC_5408E7CFEFFA); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_8FC51C64_818F_ED7B_41C3_E3AF89E3EF30",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 3.52,
   "yaw": 126.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0_HS_6_0.png",
      "width": 80,
      "height": 80,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 3.52,
   "yaw": 126.81,
   "pitch": -0.13
  }
 ],
 "id": "overlay_93E1B44F_8195_1D45_41DA_C8D3F587941C",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_tcap0",
 "distance": 60
},
{
 "maps": [
  {
   "hfov": 80.32,
   "yaw": 65.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0_HS_0_1_0_map.gif",
      "width": 162,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.79,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_93A28D04_8193_6CBB_41D5_882926D2B0F2",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0_HS_1_1_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0_HS_1_2_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0_HS_1_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0_HS_1_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC, this.camera_9D01C168_830B_2E27_41DE_9B5148E5F4F1); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_93294C8C_8193_2DCB_41C2_7A6B40EB430A",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 16.88,
   "yaw": 129.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0_HS_2_0_6_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.81,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_952C4FD4_8195_6B5B_41DF_6FB30DD6E49F",
   "yaw": 129.69,
   "pitch": -39.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.88
  }
 ],
 "id": "overlay_95B9D038_819D_14CB_41D4_6BF2FE24AE73",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 63.48,
   "yaw": -3.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0_HS_3_1_0_map.gif",
      "width": 128,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.4,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20, this.camera_9D04015C_830B_2E1F_41CF_E2E1B121CA0C); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_94C153B8_819F_1BCB_41CA_F1813CBA3E2A",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 2.63,
   "yaw": -7.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.64,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_994D7DDF_818C_EF45_41D9_BD92EDF0A539",
   "yaw": -7.69,
   "pitch": -4.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 2.63
  }
 ],
 "id": "overlay_92F5B784_819F_1BBB_41D5_9036569710F2",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 2.63,
   "yaw": 59.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0_HS_5_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.42,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_95233FD5_8195_6B45_41D9_F898EFFF3E74",
   "yaw": 59.14,
   "pitch": -4.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 2.63
  }
 ],
 "id": "overlay_92079073_819F_155C_41B7_C75A972E33EA",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 53.94,
   "yaw": -64.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0_HS_6_1_0_map.gif",
      "width": 66,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285, this.camera_A3E8510D_830B_2FF9_41C2_FF86F61E1B5C); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_950D751C_819D_7CCB_41D3_BC2CAC441593",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 11.5,
   "yaw": -54.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0_HS_8_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.62,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_994EEDDF_818C_EF45_41DE_0A10344FE252",
   "yaw": -54.54,
   "pitch": -42.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 11.5
  }
 ],
 "id": "overlay_941F55D2_8193_3F5F_41A4_147BBF8C98B6",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_tcap0",
 "distance": 60
},
{
 "maps": [
  {
   "hfov": 82.93,
   "yaw": -42.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0_HS_0_1_0_map.gif",
      "width": 140,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF, this.camera_9C79E0A8_830B_2E27_41B8_4772690A67DB); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_94A5AAF4_818D_155B_4181_F14F8243DEBC",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 108.02,
   "yaw": 48.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0_HS_1_1_0_map.gif",
      "width": 168,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81, this.camera_9C4CE0B5_830B_2E29_41C6_D1CF42F0C4A9); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_94C3EE34_818C_ECDB_41D1_76E9FFA583D1",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 2.63,
   "yaw": -41.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9AD1D264_8194_F57B_41DF_CFFA1B827061",
   "yaw": -41.62,
   "pitch": -5.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 2.63
  }
 ],
 "id": "overlay_94679F59_818F_EB4D_41C9_5E60A2EC8319",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 2.62,
   "yaw": 11.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9AD18264_8194_F57B_41B4_3A10920F230F",
   "yaw": 11.71,
   "pitch": -6.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 2.62
  }
 ],
 "id": "overlay_9685119F_818F_17C5_41CD_74F5459FD3DE",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_tcap0",
 "distance": 60
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0_HS_0_1_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0_HS_0_2_3_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC, this.camera_9D149181_830B_2EE9_419A_B4908D3EFDD7); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_99F32FBD_81F7_6BC5_41D2_1A50C0C808C8",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0_HS_1_1_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0_HS_1_2_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0_HS_1_3_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC, this.camera_9D1F418C_830B_2EFF_41D8_171FD30DFB21); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_994B5354_81F7_1B44_41D9_2E8501C613C3",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 6.45,
   "yaw": -163.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0_HS_2_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0_HS_2_0.png",
      "width": 150,
      "height": 150,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 6.45,
   "yaw": -163.14,
   "pitch": 12.09
  }
 ],
 "id": "overlay_99E355F3_81F7_3F5D_4174_C6046ACEED16",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0_HS_3_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0_HS_3_2_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0_HS_3_3_3_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0_HS_3_4_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0_HS_3_5_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_96A2F1ED_81F5_7745_41CC_4E25FFACD2A2",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 11.53,
   "yaw": -4.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0_HS_4_0_6_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9AD4D265_8194_F545_41D2_1036A9B125F7",
   "yaw": -4.22,
   "pitch": -26.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 11.53
  }
 ],
 "id": "overlay_964FD95D_81F5_F745_41E0_305F9BF27D6C",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_tcap0",
 "distance": 60
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0_HS_0_2_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0_HS_0_3_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0_HS_0_4_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0_HS_0_5_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81, this.camera_9C87D25A_830B_D21B_41D7_D39FDD5490D3); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_962D0545_81FD_3F45_41DD_9239B4BED025",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 15.7,
   "yaw": 85.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0_HS_1_0_6_map.gif",
      "width": 51,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.63,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9ADA3266_8194_F547_4189_674F9EE67FB3",
   "yaw": 85.04,
   "pitch": -38.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 15.7
  }
 ],
 "id": "overlay_995FF114_81F3_34DB_41D2_D6E1B9B47567",
 "data": {
  "label": "Arrow 06c Left-Up"
 }
},
{
 "maps": [
  {
   "hfov": 32.29,
   "yaw": -28.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0_HS_2_1_6_map.gif",
      "width": 105,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8CA96441_81BD_1CBD_41C9_D5EFCF116EED, this.camera_9D50921B_830B_D219_41DF_D2BFCDB3E292); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_99A231BD_81F3_37C5_41E0_0ECCA02BD214",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 31.83,
   "yaw": -60.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0_HS_3_1_0_map.gif",
      "width": 88,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB, this.camera_9CB0124C_830B_D27F_41B6_F2A40A7B5D74); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_993C936D_81F4_FB45_4180_5EC2E6013ED2",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 58.61,
   "yaw": -101.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0_HS_4_1_6_map.gif",
      "width": 124,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32, this.camera_9CAAF23B_830B_D219_41C4_89FE33197583); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_98AEA504_81F5_1CBB_41A2_D5B00773C221",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 56.58,
   "yaw": -152.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0_HS_5_1_0_map.gif",
      "width": 72,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F, this.camera_9CA7D22E_830B_D23B_41D2_CB87EDB27C0E); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_96300BED_81F5_2B45_41D1_A5332AD95434",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 4.39,
   "yaw": -102.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0_HS_6_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9ADB8267_8194_F545_41D4_B1CDF29D4130",
   "yaw": -102.69,
   "pitch": -1.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.39
  }
 ],
 "id": "overlay_993C9DBE_81F7_6FC7_41C8_3E0181BE4BAC",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "maps": [
  {
   "hfov": 4.39,
   "yaw": -146.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0_HS_7_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9ADB4267_8194_F545_41C8_6FAE55A212D7",
   "yaw": -146.45,
   "pitch": 1.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.39
  }
 ],
 "id": "overlay_9A01CD54_81F5_6F5B_41BA_9FBC5DF6F78E",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "maps": [
  {
   "hfov": 4.39,
   "yaw": -58.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0_HS_8_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9ADB0267_8194_F545_4191_CB18E106AB52",
   "yaw": -58.71,
   "pitch": -1.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.39
  }
 ],
 "id": "overlay_9913E6C9_81F5_1D4D_41A2_3A5CD389F7F1",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "maps": [
  {
   "hfov": 4.39,
   "yaw": -30.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0_HS_9_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0_HS_9_0.png",
      "width": 100,
      "height": 100,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 4.39,
   "yaw": -30.81,
   "pitch": -1.18
  }
 ],
 "id": "overlay_9B633540_81F5_3CBB_41DF_E34BCAED79CD",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_tcap0",
 "distance": 60
},
{
 "maps": [
  {
   "hfov": 122.54,
   "yaw": -24.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 172,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.64,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0, this.camera_9C8D4269_830B_D239_41DB_4F1F37D86CBC); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_94331F7D_8379_5219_41DF_91625C57EA33",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 2.63,
   "yaw": -12.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9F2122EC_830F_523F_41CE_E649D692852A",
   "yaw": -12.61,
   "pitch": -2.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 2.63
  }
 ],
 "id": "overlay_96D6D4C0_8379_7667_41DD_78A16D46171C",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_tcap0",
 "distance": 60
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0_HS_0_2_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0_HS_0_3_3_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0_HS_0_4_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0_HS_0_5_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_880DB87D_8309_7E19_41B6_3FF13048D20A, this.camera_9D6961CB_830B_2E79_41D4_EAF5FB911365); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_9827E9BD_818F_77C5_41DF_EF8339B4B34D",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 8.31,
   "yaw": -89.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0_HS_1_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.03,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94E7CEA4_8339_322F_41DF_CD4303857080",
   "yaw": -89.19,
   "pitch": 19.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.31
  }
 ],
 "id": "overlay_8D17D823_8308_DE29_41D3_3D3342E8DAAE",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "maps": [
  {
   "hfov": 62.37,
   "yaw": 3.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0_HS_2_1_0_map.gif",
      "width": 65,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0, this.camera_9D6EE1BB_830B_2E19_41DD_56C836E3BE93); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_8DE69144_8309_6E74_41AA_02C61B227644",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 17.67,
   "yaw": 170.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0_HS_3_1_0_map.gif",
      "width": 34,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_96FAFFC5_8338_F269_41E0_0634399DA8B7",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 27.33,
   "yaw": -166.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0_HS_4_1_0_map.gif",
      "width": 52,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285, this.camera_9D6681A3_830B_2E29_41D8_97F0DA22AECE); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_958455AE_8339_763B_41D2_0161717ED317",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 6.43,
   "yaw": -174.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.99,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9941EB3C_8318_F21F_41A0_4BAE0A6CBFF2",
   "yaw": -174.22,
   "pitch": 9.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.43
  }
 ],
 "id": "overlay_943ECEF5_8339_D229_41D1_72FC308C5927",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "maps": [
  {
   "hfov": 8.84,
   "yaw": 5.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0_HS_6_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9F2792EA_830F_523B_41CE_4B1E05B5895D",
   "yaw": 5.83,
   "pitch": -31.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.84
  }
 ],
 "id": "overlay_96DC21C3_8379_2E69_4175_7BB04C968652",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_tcap0",
 "distance": 60
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0_HS_0_1_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0_HS_0_2_3_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_880DB87D_8309_7E19_41B6_3FF13048D20A, this.camera_9CF922AD_830B_D239_41CE_0CDC2708B866); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_96F18583_8339_56E9_41B3_A3E6E9DAF582",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 7.4,
   "yaw": -137.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0_HS_1_0_6_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 26.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_0_HS_1_0.png",
      "width": 188,
      "height": 211,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 7.4,
   "yaw": -137.42,
   "pitch": 26.82
  }
 ],
 "id": "overlay_947F8A92_8338_D2EB_41DB_836FF353B92E",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_8DC3EE52_81BF_ED5C_41C3_ADA23591DEE8_tcap0",
 "distance": 60
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0_HS_0_1_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0_HS_0_2_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285, this.camera_9C5140C1_830B_2E68_41D9_DE93D71C1CAF); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_98F443A6_818D_1BC7_41C6_7AE0133763B6",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 67.39,
   "yaw": -151.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0_HS_1_1_6_map.gif",
      "width": 78,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285, this.camera_A3A2D0CE_830B_2E7B_41A2_0B929F000A4D); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_9BA17DAC_818D_2FCB_4198_A78A680A6000",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 4.37,
   "yaw": 174.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0_HS_2_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9AD99267_8194_F544_41C8_EF68155BDFD9",
   "yaw": 174.76,
   "pitch": 6.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.37
  }
 ],
 "id": "overlay_9AEEA5D7_818D_1F45_41CE_FA7A547E2DCD",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_tcap0",
 "distance": 60
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0_HS_0_1_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0_HS_0_2_3_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678, this.camera_9C900278_830B_D227_41D2_DADDDDB99859); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_97C61C3C_818D_2CCB_41AD_4D04571220E3",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 4.39,
   "yaw": -130.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0_HS_1_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.04,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0_HS_1_0.png",
      "width": 100,
      "height": 100,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 4.39,
   "yaw": -130.64,
   "pitch": 1.04
  }
 ],
 "id": "overlay_97D9580F_818D_34C4_41D6_9BC289F1E6B4",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "maps": [
  {
   "hfov": 65.03,
   "yaw": -43.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0_HS_2_1_6_map.gif",
      "width": 200,
      "height": 136,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC, this.camera_9CEC9293_830B_D2E9_41DB_D191C1C9DF59); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_971AC59C_81F3_1FCB_41D4_9D0868238653",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 73.26,
   "yaw": 33.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0_HS_3_1_6_map.gif",
      "width": 122,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20, this.camera_9CE71285_830B_D2E9_4190_9983228FFA8E); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_940D0A7D_81F4_F545_41CB_1438BD4DC0DD",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 2.64,
   "yaw": -51.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0_HS_4_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9AD67264_8194_F57B_41B0_F5EC640BB5FC",
   "yaw": -51.12,
   "pitch": -0.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 2.64
  }
 ],
 "id": "overlay_97308EA8_81F5_EDCB_41D1_9795D32664BB",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 2.63,
   "yaw": 47.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0_HS_5_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9AD61265_8194_F545_41DA_A3B6056A4968",
   "yaw": 47.05,
   "pitch": -3.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 2.63
  }
 ],
 "id": "overlay_96BAD3D6_81F5_1B47_41E0_34C7E2BF6832",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_tcap0",
 "distance": 60
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0_HS_0_2_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0_HS_0_3_3_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0_HS_0_4_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0_HS_0_5_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_968606AD_81F5_1DC5_41C3_6EE7BA5E9F4D",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 74.83,
   "yaw": 112.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0_HS_1_1_6_map.gif",
      "width": 77,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.63,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF, this.camera_A38410E7_830B_2E29_41B5_52322D24CF95); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_9643EA95_81F5_15C5_41D0_65A2CA883DE5",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 10.52,
   "yaw": 10.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0_HS_2_0_6_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9AD40265_8194_F545_41B5_274BD57AC746",
   "yaw": 10.23,
   "pitch": -25.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 10.52
  }
 ],
 "id": "overlay_96050EDF_81FC_ED45_41DE_D569E8058B76",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "maps": [
  {
   "hfov": 6.41,
   "yaw": 107.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0_HS_3_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0_HS_3_0.png",
      "width": 150,
      "height": 150,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 6.41,
   "yaw": 107.68,
   "pitch": 13.6
  }
 ],
 "id": "overlay_96642135_81FD_14C5_41D7_60E17CDADB04",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "maps": [
  {
   "hfov": 70.38,
   "yaw": -100.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0_HS_4_1_6_map.gif",
      "width": 88,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37, this.camera_A3B400DB_830B_2E19_41BD_485A241103A7); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_968B3DEC_81FD_6F4B_41C2_A25649E153EA",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 13.82,
   "yaw": -93.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0_HS_5_0_6_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.63,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9AD55266_8194_F547_41CA_5BA5E12DF4ED",
   "yaw": -93.65,
   "pitch": -39.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.82
  }
 ],
 "id": "overlay_99D45308_81FF_14CC_41CD_7EDD12609148",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_tcap0",
 "distance": 60
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0_HS_0_2_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678, this.camera_9C1BC04E_830B_2E7B_41CD_C6B8381AAB69); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_9623142D_81FF_1CC5_41DD_881F73FB1576",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 17.15,
   "yaw": 17.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0_HS_1_0_6_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9ADAB266_8194_F547_41D3_46E980D8ECBC",
   "yaw": 17.17,
   "pitch": -41.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 17.15
  }
 ],
 "id": "overlay_99A23C75_81FF_6D44_41AE_34969AA92B36",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_tcap0",
 "distance": 60
},
{
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "paddingBottom": 0,
 "width": 110,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "Container",
 "overflow": "visible",
 "minHeight": 1,
 "top": "0%",
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 110,
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "paddingBottom": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC"
 ],
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "borderSize": 0,
 "width": "91.304%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "scrollBarOpacity": 0.5,
 "gap": 3,
 "scrollBarMargin": 2,
 "height": "85.959%",
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0
},
{
 "levels": [
  {
   "url": "media/panorama_8DC1E4BB_81BD_1DCD_41C0_BECF5CE65D32_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AD90267_8194_F544_4198_9137EC822A87",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0_HS_2_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 22,
 "rowCount": 6,
 "id": "AnimatedImageResource_9B199EAB_8339_3239_41C8_39DF09E8B9BB",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DF942FF_81BF_3545_41A2_0F2E65CF16B0_0_HS_3_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_9B196EAB_8339_3239_41BB_B1037C0148F5",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_880DB87D_8309_7E19_41B6_3FF13048D20A_1_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94E6BEA5_8339_3229_41AE_2539051CA537",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0_HS_1_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_9014E420_8193_1CFB_41CA_2CE3D1E472F0",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DC0EDD1_81BF_2F5D_41D4_8072C39BAACC_0_HS_3_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 22,
 "rowCount": 6,
 "id": "AnimatedImageResource_9014D420_8193_1CFB_41CC_DA12165FC2C2",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0_HS_2_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_952C4FD4_8195_6B5B_41DF_6FB30DD6E49F",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0_HS_4_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 22,
 "rowCount": 6,
 "id": "AnimatedImageResource_994D7DDF_818C_EF45_41D9_BD92EDF0A539",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0_HS_5_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 22,
 "rowCount": 6,
 "id": "AnimatedImageResource_95233FD5_8195_6B45_41D9_F898EFFF3E74",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DFB0AE9_81BF_154D_41D1_728D0DA8CD81_0_HS_8_0.png",
   "width": 460,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_994EEDDF_818C_EF45_41DE_0A10344FE252",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0_HS_2_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 22,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AD1D264_8194_F57B_41DF_CFFA1B827061",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DC08BF9_81BF_6B4D_41C2_70EC8AC3AA20_0_HS_3_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 22,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AD18264_8194_F57B_41B4_3A10920F230F",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DF82B1A_81BF_34CF_41D2_DA6B276A3CED_0_HS_4_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AD4D265_8194_F545_41D2_1036A9B125F7",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0_HS_1_0.png",
   "width": 640,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_9ADA3266_8194_F547_4189_674F9EE67FB3",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0_HS_6_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_9ADB8267_8194_F545_41D4_B1CDF29D4130",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0_HS_7_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_9ADB4267_8194_F545_41C8_6FAE55A212D7",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DC41AA9_81BC_F5CD_41DA_1C0E7DA2B285_0_HS_8_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_9ADB0267_8194_F545_4191_CB18E106AB52",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DC5E3AC_81BF_1BCB_41C2_5F450D705150_0_HS_1_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 22,
 "rowCount": 6,
 "id": "AnimatedImageResource_9F2122EC_830F_523F_41CE_E649D692852A",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94E7CEA4_8339_322F_41DF_CD4303857080",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0_HS_5_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_9941EB3C_8318_F21F_41A0_4BAE0A6CBFF2",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DC6E0B7_81BF_15C5_41D8_7CD1CD8A4D7F_0_HS_6_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_9F2792EA_830F_523B_41CE_4B1E05B5895D",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DC51453_81BD_3D5D_41D3_192742EADCAB_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AD99267_8194_F544_41C8_EF68155BDFD9",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0_HS_4_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 22,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AD67264_8194_F57B_41B0_F5EC640BB5FC",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DCF7C57_81BF_2D44_41CD_1791B523B5EF_0_HS_5_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 22,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AD61265_8194_F545_41DA_A3B6056A4968",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AD40265_8194_F545_41B5_274BD57AC746",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DFBDB0A_81BF_14CF_41C4_ECADC0210678_0_HS_5_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_9AD55266_8194_F547_41CA_5BA5E12DF4ED",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8DC0F462_81BF_7D7C_41DE_613B033E9E37_0_HS_1_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_9ADAB266_8194_F547_41D3_46E980D8ECBC",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "paddingBottom": 0,
 "width": 60,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "transparencyActive": true,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "data": {
  "name": "image button menu"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "click": "this.openLink('https://www.instagram.com/kefitaaddis/', '_blank')",
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false
}],
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "registerKey": function(key, value){  window[key] = value; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getKey": function(key){  return window[key]; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "existsKey": function(key){  return key in window; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; }
 },
 "contentOpaque": false,
 "data": {
  "name": "Player468"
 },
 "shadow": false,
 "vrPolyfillScale": 0.98,
 "height": "100%",
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
