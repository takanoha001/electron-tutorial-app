

import { app, BrowserWindow } from 'electron';

// display main window
function createWindow () {
  const options: Electron.BrowserWindowConstructorOptions = {
    width: 500,
    height: 200,
    webPreferences: {
      nodeIntegration: true,  // Node 機能の使用を許可
      contextIsolation: false
    
    }
  }
  const win = new BrowserWindow(options);
  win.loadFile('public/index.html');
}

// Electron の初期化が完了したらウィンドウを作成
app.whenReady().then(createWindow);