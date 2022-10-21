import React from "react";
import {
  Viewer,
  Cesium3DTileset,
} from "resium";
import { PointCloudShading, Ion, Resource, DefaultProxy } from "cesium";
import './style/main.css';

function App() {
  let viewer; // This will be raw Cesium's Viewer object.
  Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwOWNmMzA4ZS1iNTE5LTQ4ZGItYTQzNy00ZTU3NGI2Y2ZjOWYiLCJpZCI6MTA5MzcyLCJpYXQiOjE2NjQyNjc5MDJ9.17Cye6lsB35H-BTU7FR2v0mmQYN_u_ZmT06iP-V8YIk';

  let params = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOTRmMzQwODYzZGUxNDNhNGJhNThmNiIsImlzVXNlciI6dHJ1ZSwiaWF0IjoxNjY2MDU3MjI5LCJleHAiOjE2NjY2NjIwMjl9.1U2eGnchVV0wWnbdfnI075VQ_JR4BtgyKWrSYwFVEkM',
    id: '6346418eaf979c135c38c1d8'
  };
  let url='';
    
  //Xử lý param về dạng json
  if (window.location.search) {
    console.log('window.location.search', window.location.search)
    const paramsString = window.location.search.replace('?token', '{\"token')
      .replace('id', '\", \"id')
      .replace(/:/g, '\":\"') + '\"}';
    params = JSON.parse(paramsString);
    url = 'http://localhost:3000/api/uploadfile3d/tileset.json?id=' + params.id;
  }
  console.log('url', url)
  const pointCloudShading = new PointCloudShading({ attenuation: true });
  const handleReady = tileset => {
    if (viewer) {
      viewer.zoomTo(tileset);
    }
  };
  const resource = new Resource({
    url:url,
    //?id=6346418eaf979c135c38c1d8
    // queryParameters: params,
    // headers: {
    //   "Authorization": "Bearer " + token
    // },
  });
  return (
    <Viewer full
      ref={e =>
        viewer = e && e.cesiumElement
      }
      baseLayerPicker={false}
      homeButton={false}
      navigationHelpButton={false}
      scene3DOnly={true}
      timeline={false}
      geocoder={false}
      selectionIndicator={false}
      infoBox={false}
      animation={false}
    >
      <Cesium3DTileset
        url = {resource}
        onReady={handleReady}
        pointCloudShading={pointCloudShading}
      />
    </Viewer >
  );
}

export default App;
