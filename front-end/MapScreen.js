import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const MapScreen = () => {
  // O código HTML para o mapa
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" />
      <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script>
    </head>
    <body style="margin: 0; padding: 0;">
      <div id="mapid" style="width: 100%; height: 100%;"></div>
      <script>
        var map = L.map('mapid').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        var marker = L.marker([51.505, -0.09]).addTo(map);
        marker.bindPopup("<b>Hello world!</b>").openPopup();
      </script>
    </body>
    </html>
  `;

  return (
    <WebView
  originWhitelist={['*']}
  source={{ html: htmlContent }}
  style={{ width: '100%', height: '100%' }}
  onLoad={() => {
    // Código adicional para garantir que o mapa seja renderizado após o carregamento
    console.log('Map loaded');
  }}
/>
  );
};

export default MapScreen;
