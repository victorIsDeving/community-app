@echo off
echo Instalando dependências necessárias...

npm install expo-location@~18.0.2 --force
npm install expo-status-bar@~2.0.0 --force
npm install react-native@0.74.5 --force
npm install react-native-gesture-handler@~2.20.2 --force
npm install react-native-maps@1.18.0 --force
npm install react-native-safe-area-context@4.12.0 --force
npm install react-native-screens@~4.1.0 --force
npm install react-native-reanimated@10.9.0 --force

echo Todas as dependências foram instaladas!
pause
