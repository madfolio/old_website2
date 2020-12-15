---
layout: post
comments: false
title:  "Open Street Map"
date:   2020-12-15
author: Liam Flood
tags: [mapping]
---

## Getting data from OpenStreetMap

OpenStreetMap is a good source of open data but is can be in complex formats that are not easily transferable. 

### Method

Select the correct region from download.geofabrik.de. Files are downloaded in a *.pbf format. 

To unzip the pbf use:
osmconvert norway.osm.pbf -o=norway.osm


Now filter the files based on OSM features (https://wiki.openstreetmap.org/wiki/Map_features):
osmfilter norway.osm --keep="power=" > norway_power.osm

Convert to shapefile:
ogr2ogr -skipfailures -f "ESRI Shapefile" power norway_power.osm



